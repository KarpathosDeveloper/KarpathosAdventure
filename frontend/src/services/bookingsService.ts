import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../lib/firebase";

export type BookingStatus = "pending" | "confirmed" | "forwarded" | "cancelled";

export type Booking = {
  id: string;
  activityId: string;
  activityTitle: string;
  partnerName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  bookingDate: string;
  guests: number;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
};

const LOCAL_STORAGE_KEY = "karpathos_bookings_data";

function getLocalBookings(): Booking[] {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveLocalBookings(bookings: Booking[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
}

export const bookingsService = {
  isLiveDb(): boolean {
    return isFirebaseConfigured && db !== null;
  },

  // GET all bookings
  async getBookings(): Promise<Booking[]> {
    if (this.isLiveDb()) {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const list: Booking[] = [];
        querySnapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...docSnap.data() } as Booking);
        });
        return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } catch (error) {
        console.error("Failed to fetch bookings from Firestore, using local storage:", error);
        return getLocalBookings();
      }
    } else {
      return getLocalBookings();
    }
  },

  // CREATE a booking
  async addBooking(booking: Omit<Booking, "id" | "status" | "createdAt">): Promise<Booking> {
    const newId = `bkg_${Date.now()}`;
    const fullBooking: Booking = { 
      ...booking, 
      id: newId,
      status: "pending",
      createdAt: new Date().toISOString()
    };

    if (this.isLiveDb()) {
      try {
        await setDoc(doc(db, "bookings", newId), fullBooking);
        return fullBooking;
      } catch (error) {
        console.error("Firestore add booking failed, using local storage:", error);
      }
    }

    const list = getLocalBookings();
    list.push(fullBooking);
    saveLocalBookings(list);
    return fullBooking;
  },

  // UPDATE booking status or details
  async updateBooking(id: string, updates: Partial<Booking>): Promise<void> {
    if (this.isLiveDb()) {
      try {
        await updateDoc(doc(db, "bookings", id), updates);
        return;
      } catch (error) {
        console.error("Firestore update booking failed, using local storage:", error);
      }
    }

    const list = getLocalBookings();
    const idx = list.findIndex((b) => b.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates };
      saveLocalBookings(list);
    }
  },

  // DELETE a booking
  async deleteBooking(id: string): Promise<void> {
    if (this.isLiveDb()) {
      try {
        await deleteDoc(doc(db, "bookings", id));
        return;
      } catch (error) {
        console.error("Firestore delete booking failed, using local storage:", error);
      }
    }

    const list = getLocalBookings();
    const filtered = list.filter((b) => b.id !== id);
    saveLocalBookings(filtered);
  }
};
