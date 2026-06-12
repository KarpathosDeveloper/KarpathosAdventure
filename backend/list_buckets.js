import { Storage } from '@google-cloud/storage';
import { readFileSync } from 'fs';

async function listBuckets() {
  console.log("Listing buckets using @google-cloud/storage...");
  try {
    const storage = new Storage({ keyFilename: './serviceAccountKey.json' });
    const [buckets] = await storage.getBuckets();
    console.log(`Found ${buckets.length} bucket(s):`);
    buckets.forEach(b => {
      console.log(` - ${b.name}`);
    });
  } catch (err) {
    console.error("Failed to list buckets:", err.message);
    console.error("Stack trace:", err.stack);
  }
}

listBuckets();
