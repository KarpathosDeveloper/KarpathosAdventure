import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { join } from 'path';

// Parse .env manually
const envPath = join(process.cwd(), '.env');
let envContent = '';
try {
  envContent = readFileSync(envPath, 'utf8');
} catch (err) {
  console.error("Failed to read .env file:", err.message);
  process.exit(1);
}

const env = {};
envContent.split('\n').forEach(line => {
  const cleanLine = line.trim();
  if (!cleanLine || cleanLine.startsWith('#')) return;
  const match = cleanLine.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1].trim()] = match[2].trim();
  }
});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

console.log("Initializing Firebase with keys from frontend/.env...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const activitiesPath = join(process.cwd(), '../backend/activities.json');
let activities = [];
try {
  activities = JSON.parse(readFileSync(activitiesPath, 'utf8'));
  console.log(`Loaded ${activities.length} activities from backend/activities.json.`);
} catch (err) {
  console.error("Failed to read activities.json:", err.message);
  process.exit(1);
}

async function seed() {
  console.log("Uploading activities to Firestore...");
  
  // Firestore client batch limit is 500 documents. We have 33 so a single batch is perfect.
  const batch = writeBatch(db);
  activities.forEach(act => {
    const docRef = doc(db, "activities", act.id);
    batch.set(docRef, act);
  });
  
  await batch.commit();
  console.log("SUCCESS: Firestore database successfully seeded with all default activities.");
}

seed().catch(err => {
  console.error("\n==========================================================");
  console.error("SEEDING FAILED!");
  console.error("==========================================================");
  console.error("Error details:", err.message);
  console.error("\nCommon causes:");
  console.error("1. Firestore is not enabled. Go to Firebase Console > Firestore Database and click 'Create Database'.");
  console.error("2. Firestore Security Rules are blocking writes. Temporarily set your rules in the console to allow public writes for testing:");
  console.error("   allow read, write: if true;");
  console.error("==========================================================\n");
  process.exit(1);
});
