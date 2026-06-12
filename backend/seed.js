import { initializeApp, cert, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load service account key from environment variable or standard local file
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || './serviceAccountKey.json';

let db;
try {
  let credential;
  try {
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
    credential = cert(serviceAccount);
    console.log("Initializing Firebase Admin using service account key file...");
  } catch (fileErr) {
    console.log("Service account key file not found or could not be parsed. Attempting to use Application Default Credentials (ADC)...");
    credential = applicationDefault();
  }

  initializeApp({
    credential
  });
  db = getFirestore();
  console.log("Firebase Admin initialized successfully.");
} catch (err) {
  console.error("\n=======================================================================");
  console.error("Error initializing Firebase Admin.");
  console.error("Please ensure you either:");
  console.error("  1. Save your Firebase service account JSON key as 'serviceAccountKey.json' in 'backend/'");
  console.error("  2. Or login via Google Cloud SDK: run 'gcloud auth application-default login' to use Application Default Credentials.");
  console.error("=======================================================================\n");
  console.error("Error details:", err.message);
  process.exit(1);
}

const activitiesPath = join(process.cwd(), 'activities.json');
let activities = [];
try {
  activities = JSON.parse(readFileSync(activitiesPath, 'utf8'));
  console.log(`Loaded ${activities.length} activities from activities.json.`);
} catch (err) {
  console.error("Failed to load activities.json:", err.message);
  process.exit(1);
}

async function seed() {
  const colRef = db.collection('activities');
  
  console.log("\nStarting Firestore Seeding...");
  let count = 0;
  for (const act of activities) {
    try {
      await colRef.doc(act.id).set(act);
      console.log(`[SEED SUCCESS] : ${act.title} (ID: ${act.id})`);
      count++;
    } catch (err) {
      console.error(`[SEED FAILURE] : Failed to write ${act.title}:`, err.message);
    }
  }
  console.log(`\nCompleted! Successfully seeded ${count}/${activities.length} experiences.\n`);
}

seed();
