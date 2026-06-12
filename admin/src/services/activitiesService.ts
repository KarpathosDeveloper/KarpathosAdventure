import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  writeBatch 
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../lib/firebase";
import { ACTIVITIES as staticActivities, type Activity } from "../data/activities";

const LOCAL_STORAGE_KEY = "karpathos_activities_data";

const DATA_VERSION_KEY = "karpathos_activities_version";
const CURRENT_VERSION = "v3"; // Force-reload the new seed data from CSVs

// Helper to get local storage activities
function getLocalActivities(): Activity[] {
  const version = localStorage.getItem(DATA_VERSION_KEY);
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (version !== CURRENT_VERSION || !data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(staticActivities));
    localStorage.setItem(DATA_VERSION_KEY, CURRENT_VERSION);
    return staticActivities;
  }
  try {
    return JSON.parse(data);
  } catch {
    return staticActivities;
  }
}

// Helper to save to local storage
function saveLocalActivities(activities: Activity[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
}

export const activitiesService = {
  // Check if we are running on live Firebase
  isLiveDb(): boolean {
    return isFirebaseConfigured && db !== null;
  },

  // GET all activities
  async getActivities(): Promise<Activity[]> {
    if (this.isLiveDb()) {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        const list: Activity[] = [];
        querySnapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...docSnap.data() } as Activity);
        });
        
        // If Firestore is empty, seed it with static activities first
        if (list.length === 0) {
          console.log("Firestore collection 'activities' is empty. Seeding defaults...");
          await this.seedActivities(staticActivities);
          return staticActivities;
        }
        return list.sort((a, b) => b.popularity - a.popularity);
      } catch (error) {
        console.error("Failed to fetch from Firestore, falling back to local storage:", error);
        return getLocalActivities();
      }
    } else {
      return getLocalActivities();
    }
  },

  // CREATE a new activity
  async addActivity(activity: Omit<Activity, "id"> & { id?: string }): Promise<Activity> {
    const newId = activity.id || `exp_${Date.now()}`;
    const fullActivity = { ...activity, id: newId } as Activity;

    if (this.isLiveDb()) {
      try {
        // Use a setDoc with id to maintain consistent IDs
        await setDoc(doc(db, "activities", newId), fullActivity);
        return fullActivity;
      } catch (error) {
        console.error("Firestore add failed, using local storage:", error);
      }
    }

    // Local fallback
    const list = getLocalActivities();
    list.push(fullActivity);
    saveLocalActivities(list);
    return fullActivity;
  },

  // UPDATE an existing activity
  async updateActivity(id: string, updates: Partial<Activity>): Promise<void> {
    if (this.isLiveDb()) {
      try {
        await updateDoc(doc(db, "activities", id), updates);
        return;
      } catch (error) {
        console.error("Firestore update failed, using local storage:", error);
      }
    }

    // Local fallback
    const list = getLocalActivities();
    const idx = list.findIndex((a) => a.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates };
      saveLocalActivities(list);
    }
  },

  // DELETE an activity
  async deleteActivity(id: string): Promise<void> {
    if (this.isLiveDb()) {
      try {
        await deleteDoc(doc(db, "activities", id));
        return;
      } catch (error) {
        console.error("Firestore delete failed, using local storage:", error);
      }
    }

    // Local fallback
    const list = getLocalActivities();
    const filtered = list.filter((a) => a.id !== id);
    saveLocalActivities(filtered);
  },

  // SEED all activities
  async seedActivities(customList?: Activity[]): Promise<void> {
    const listToSeed = customList || staticActivities;
    if (this.isLiveDb()) {
      try {
        const batch = writeBatch(db);
        listToSeed.forEach((act: Activity) => {
          const docRef = doc(db, "activities", act.id);
          batch.set(docRef, act);
        });
        await batch.commit();
        console.log("Successfully seeded activities to Firestore");
      } catch (error) {
        console.error("Firestore batch seed failed:", error);
        throw error;
      }
    } else {
      saveLocalActivities(listToSeed);
    }
  },

  // RESET local storage to CSV values
  async resetToDefault(): Promise<Activity[]> {
    if (this.isLiveDb()) {
      await this.seedActivities(staticActivities);
      return staticActivities;
    } else {
      saveLocalActivities(staticActivities);
      return staticActivities;
    }
  }
};
