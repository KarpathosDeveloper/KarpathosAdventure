import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { ACTIVITIES as staticActivities, type Activity } from "../data/activities";

const LOCAL_STORAGE_KEY = "karpathos_mobile_activities";

// Firebase credentials (loaded from Expo env variables)
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "",
};

// Check configuration
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== "your-api-key-here" &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== "your-project-id" &&
  firebaseConfig.appId &&
  firebaseConfig.appId !== "1:your-app-id:ios:your-app-hash"
);

let db: any = null;
if (isFirebaseConfigured) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (err) {
    console.warn("Firebase initialization failed on mobile:", err);
  }
}

async function getLocalActivities(): Promise<Activity[]> {
  try {
    const data = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(staticActivities));
      return staticActivities;
    }
    return JSON.parse(data);
  } catch {
    return staticActivities;
  }
}

async function saveLocalActivities(activities: Activity[]) {
  try {
    await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
  } catch (err) {
    console.warn("Failed to write to async storage:", err);
  }
}

export const activitiesService = {
  isLiveDb(): boolean {
    return isFirebaseConfigured && db !== null;
  },

  async getActivities(): Promise<Activity[]> {
    if (this.isLiveDb()) {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        const list: Activity[] = [];
        querySnapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...docSnap.data() } as Activity);
        });
        if (list.length > 0) {
          const sorted = list.sort((a, b) => b.popularity - a.popularity);
          await saveLocalActivities(sorted);
          return sorted;
        }
      } catch (error) {
        console.warn("Firestore fetch failed on mobile, using async storage:", error);
      }
    }
    return getLocalActivities();
  }
};
