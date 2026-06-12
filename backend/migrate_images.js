import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { readFileSync } from 'fs';
import crypto from 'crypto';

// Initialize Firebase Admin
const serviceAccountPath = './serviceAccountKey.json';
let db;
let bucket;

try {
  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'karpathosdiscover-67f1a.firebasestorage.app'
  });
  db = getFirestore();
  bucket = getStorage().bucket();
  console.log("Firebase Admin initialized successfully for Image Migration.");
} catch (err) {
  console.error("Error initializing Firebase Admin:", err.message);
  process.exit(1);
}

// Function to download image and upload to Storage
async function migrateImageUrl(url, activityId, index) {
  // If it's already a firebase storage URL, return it as is
  if (url.includes('firebasestorage.googleapis.com') || url.includes('storage.googleapis.com')) {
    console.log(`[ALREADY MIGRATED] Image ${index} for ${activityId}`);
    return url;
  }

  try {
    console.log(`[DOWNLOADING] Image ${index} for ${activityId}: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract file extension or default to jpg
    let ext = 'jpg';
    try {
      const urlPath = new URL(url).pathname;
      const parsedExt = urlPath.split('.').pop();
      if (parsedExt && ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(parsedExt.toLowerCase())) {
        ext = parsedExt.toLowerCase();
      }
    } catch (_) {
      // Keep jpg as default fallback
    }

    const filename = `activities/${activityId}_image_${index}.${ext}`;
    const file = bucket.file(filename);

    const downloadToken = crypto.randomUUID();
    const contentType = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';

    console.log(`[UPLOADING] ${filename} to Storage`);
    await file.save(buffer, {
      metadata: {
        contentType,
        metadata: {
          firebaseStorageDownloadTokens: downloadToken
        }
      }
    });

    const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(filename)}?alt=media&token=${downloadToken}`;
    console.log(`[MIGRATION SUCCESS] ${activityId} image ${index} -> ${downloadUrl}`);
    return downloadUrl;
  } catch (err) {
    console.error(`[MIGRATION FAILED] Image ${index} for ${activityId}:`, err.message);
    return url; // Keep original URL as fallback
  }
}

async function runMigration() {
  console.log("\nStarting Image Migration to Firebase Storage...");
  const colRef = db.collection('activities');
  const snapshot = await colRef.get();

  if (snapshot.empty) {
    console.log("No activities found in Firestore.");
    return;
  }

  console.log(`Found ${snapshot.size} activities. Checking images...`);

  for (const doc of snapshot.docs) {
    const activity = doc.data();
    const activityId = activity.id || doc.id;
    const imageUrls = activity.imageUrls || [];

    if (imageUrls.length === 0) {
      console.log(`Activity ${activity.title} (ID: ${activityId}) has no images.`);
      continue;
    }

    console.log(`\nProcessing: ${activity.title} (${activityId})`);
    const newImageUrls = [];
    let updated = false;

    for (let i = 0; i < imageUrls.length; i++) {
      const oldUrl = imageUrls[i];
      const newUrl = await migrateImageUrl(oldUrl, activityId, i);
      if (newUrl !== oldUrl) {
        updated = true;
      }
      newImageUrls.push(newUrl);
    }

    if (updated) {
      try {
        await colRef.doc(doc.id).update({ imageUrls: newImageUrls });
        console.log(`[DATABASE UPDATE] Updated imageUrls for: ${activity.title}`);
      } catch (dbErr) {
        console.error(`[DATABASE ERROR] Failed to update ${activity.title}:`, dbErr.message);
      }
    } else {
      console.log(`No updates needed for: ${activity.title}`);
    }
  }

  console.log("\nImage Migration Completed!\n");
}

runMigration();
