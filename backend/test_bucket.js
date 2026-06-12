import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'));

async function testBucket(bucketName) {
  console.log(`Testing bucket: ${bucketName}...`);
  try {
    const app = initializeApp({
      credential: cert(serviceAccount),
      storageBucket: bucketName
    }, bucketName); // Use unique name for app initialization

    const bucket = getStorage(app).bucket();
    const [exists] = await bucket.exists();
    console.log(`Bucket ${bucketName} exists: ${exists}`);
    if (exists) {
      const [files] = await bucket.getFiles({ maxResults: 1 });
      console.log(`Successfully connected to ${bucketName}. Found ${files.length} files.`);
      return true;
    }
  } catch (err) {
    console.error(`Failed for ${bucketName}:`, err.message);
  }
  return false;
}

async function runTests() {
  const success1 = await testBucket('karpathosdiscover-67f1a.appspot.com');
  const success2 = await testBucket('karpathosdiscover-67f1a.firebasestorage.app');
  const success3 = await testBucket('karpathosdiscover-67f1a');
  console.log(`Results: appspot=${success1}, firebasestorage=${success2}, raw=${success3}`);
}

runTests();
