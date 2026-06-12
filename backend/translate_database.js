import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// Initialize Firebase Admin
const serviceAccountPath = './serviceAccountKey.json';
let db;

try {
  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  initializeApp({
    credential: cert(serviceAccount)
  });
  db = getFirestore();
  console.log("Firebase Admin initialized successfully for Database Translation.");
} catch (err) {
  console.error("Error initializing Firebase Admin:", err.message);
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateText(text, lang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return text;
  
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const json = await res.json();
    const translatedText = json[0].map(item => item[0]).join('');
    return translatedText;
  } catch (err) {
    console.error(`[TRANSLATE ERROR] Failed to translate to ${lang}:`, err.message);
    return text; // Fallback to original
  }
}

async function translateArray(arr, lang) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return arr;
  const translatedArr = [];
  for (const item of arr) {
    const trans = await translateText(item, lang);
    translatedArr.push(trans);
    await sleep(100); // Small delay to avoid aggressive rate limiting
  }
  return translatedArr;
}

const LANGUAGES = ['el', 'es', 'fr', 'de'];

async function translateActivity(activity) {
  const activityId = activity.id;
  const translations = activity.translations || {};
  let updated = false;

  for (const lang of LANGUAGES) {
    if (translations[lang] && translations[lang].title) {
      console.log(`[SKIP] Language ${lang} already translated for: ${activity.title}`);
      continue;
    }

    console.log(`[TRANSLATING] ${activity.title} into ${lang}...`);
    try {
      const title = await translateText(activity.title, lang);
      const shortDescription = await translateText(activity.shortDescription, lang);
      const fullDescription = await translateText(activity.fullDescription, lang);
      const locationName = await translateText(activity.locationName, lang);
      const meetingPoint = await translateText(activity.meetingPoint, lang);
      const vipHeadline = activity.vipHeadline ? await translateText(activity.vipHeadline, lang) : '';
      
      const highlights = await translateArray(activity.highlights || [], lang);
      const included = await translateArray(activity.included || [], lang);
      const notIncluded = await translateArray(activity.notIncluded || [], lang);
      const whatToBring = await translateArray(activity.whatToBring || [], lang);
      const duration = await translateText(activity.duration, lang);
      const difficulty = await translateText(activity.difficulty, lang);

      translations[lang] = {
        title,
        shortDescription,
        fullDescription,
        locationName,
        meetingPoint,
        vipHeadline,
        highlights,
        included,
        notIncluded,
        whatToBring,
        duration,
        difficulty
      };
      updated = true;
      await sleep(200); // Sleep between fields/languages
    } catch (err) {
      console.error(`[FAILED] Language ${lang} for ${activity.title}:`, err.message);
    }
  }

  return { translations, updated };
}

async function runTranslationSeeding() {
  console.log("\nStarting Database Translation Seeding...");
  const colRef = db.collection('activities');
  const snapshot = await colRef.get();

  if (snapshot.empty) {
    console.log("No activities found in Firestore.");
    return;
  }

  console.log(`Found ${snapshot.size} activities. Translating...`);

  let count = 0;
  for (const doc of snapshot.docs) {
    const activity = doc.data();
    const activityId = activity.id || doc.id;
    
    console.log(`\n----------------------------------------`);
    console.log(`Activity ${++count}/${snapshot.size}: ${activity.title} (${activityId})`);
    
    const { translations, updated } = await translateActivity(activity);
    
    if (updated) {
      try {
        await colRef.doc(doc.id).update({ translations });
        console.log(`[SAVED] Updated translations in Firestore for: ${activity.title}`);
      } catch (dbErr) {
        console.error(`[DATABASE ERROR] Failed to save translations for ${activity.title}:`, dbErr.message);
      }
    } else {
      console.log(`No translation updates needed for: ${activity.title}`);
    }
  }

  console.log("\nDatabase Translation Seeding Completed!\n");
}

runTranslationSeeding();
