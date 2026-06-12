import { useState, useEffect } from "react";
import { activitiesService } from "../services/activitiesService";
import { bookingsService, type Booking, type BookingStatus } from "../services/bookingsService";
import { CATEGORIES, type Activity } from "../data/activities";
import { I } from "../components/Icon";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  // Bookings State
  const [activeTab, setActiveTab] = useState<"experiences" | "bookings">("experiences");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);
  const [forwardingBooking, setForwardingBooking] = useState<Booking | null>(null);
  const [supplierEmail, setSupplierEmail] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");

  // Form Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [formError, setFormError] = useState("");

  // Form Fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [priceFrom, setPriceFrom] = useState("€45");
  const [duration, setDuration] = useState("~3 hours");
  const [difficulty, setDifficulty] = useState("Easy");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [operator, setOperator] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [vipHeadline, setVipHeadline] = useState("");
  const [primaryImage, setPrimaryImage] = useState("");
  const [extraImage1, setExtraImage1] = useState("");
  const [extraImage2, setExtraImage2] = useState("");
  
  // JSON array fields as string inputs for simplicity
  const [highlightsInput, setHighlightsInput] = useState("");
  const [includedInput, setIncludedInput] = useState("");
  const [excludedInput, setExcludedInput] = useState("");
  const [whatToBringInput, setWhatToBringInput] = useState("");

  // Check login on mount
  useEffect(() => {
    let unsubscribe = () => {};
    if (auth) {
      unsubscribe = onAuthStateChanged(auth, async (user) => {
        const adminUid = import.meta.env.VITE_ADMIN_UID || "zwymAmTWr0VQaU6wkeWvUJO7CzU2";
        if (user) {
          if (user.uid === adminUid) {
            setIsLoggedIn(true);
            setLoginError("");
          } else {
            console.error("Access denied: UID does not match admin UID.");
            setLoginError("Access denied: You are not authorized to view the admin panel.");
            setIsLoggedIn(false);
            try {
              await signOut(auth);
            } catch (err) {
              console.error("Failed to sign out unauthorized user:", err);
            }
          }
        } else {
          setIsLoggedIn(false);
        }
      });
    } else {
      const logged = sessionStorage.getItem("karpathos_admin_logged");
      if (logged === "true") {
        setIsLoggedIn(true);
      }
    }
    loadActivities();
    loadBookings();
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    if (auth) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const adminUid = import.meta.env.VITE_ADMIN_UID || "zwymAmTWr0VQaU6wkeWvUJO7CzU2";
        if (userCredential.user.uid !== adminUid) {
          setLoginError("Access denied: You are not authorized to view the admin panel.");
          setIsLoggedIn(false);
          await signOut(auth);
        } else {
          setLoginError("");
        }
      } catch (err: any) {
        console.error("Firebase sign in error:", err);
        setLoginError(err.message || "Failed to sign in. Please verify credentials.");
      }
    } else {
      if (email === "admin" && password === "admin123") {
        sessionStorage.setItem("karpathos_admin_logged", "true");
        setIsLoggedIn(true);
        setLoginError("");
      } else {
        setLoginError("Invalid credentials. Try admin / admin123 in mock mode.");
      }
    }
  };

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.error("Failed to sign out:", err);
      }
    }
    sessionStorage.removeItem("karpathos_admin_logged");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const loadActivities = async () => {
    setLoading(true);
    try {
      const data = await activitiesService.getActivities();
      setActivities(data);
      setIsLive(activitiesService.isLiveDb());
    } catch (error) {
      console.error("Failed to load activities:", error);
    } finally {
      setLoading(false);
    }
  };

  const PARTNER_CONTACTS: Record<string, { email: string; phone: string }> = {
    "Gergatsoulis Honey": { email: "honey@gergatsoulis.gr", phone: "+30 694 366 6243" },
    "Scarpanto Family Winery": { email: "winery@scarpanto.gr", phone: "+30 694 111 2222" },
    "Karpathos Diving Center": { email: "dive@karpathosdiving.gr", phone: "+30 694 333 4444" },
    "ION Club Chicken Bay": { email: "chickenbay@ion-club.net", phone: "+30 694 555 6666" },
    "Confirm operator": { email: "concierge@karpathosadventure.com", phone: "+30 694 366 6243" },
    "Art and Walk": { email: "info@artandwalk.com", phone: "+30 694 777 8888" },
    "Angel Hands Wellness & Spa": { email: "spa@angelhands.gr", phone: "+30 694 999 0000" },
    "Kathy’s Island Retreat": { email: "info@kathysislandretreat.com", phone: "+30 694 123 4567" },
    "Iron Forge Gym": { email: "gym@ironforge.gr", phone: "+30 694 666 7777" },
    "Confirm climbing instructor/provider": { email: "concierge@karpathosadventure.com", phone: "+30 694 366 6243" },
    "Meltemi Biking": { email: "info@meltemibiking.gr", phone: "+30 694 888 9999" },
    "Meltemi Bike Shop": { email: "info@meltemibiking.gr", phone: "+30 694 888 9999" },
    "Karpathos Travel / local guide": { email: "info@karpathostravel.gr", phone: "+30 694 222 3333" },
    "Boat/bus partner": { email: "transfers@karpathosadventure.com", phone: "+30 694 366 6243" },
    "Karpathos Travel / boat partner": { email: "info@karpathostravel.gr", phone: "+30 694 222 3333" },
    "Nemo / boat partner": { email: "nemo@karpathosboats.gr", phone: "+30 694 444 5555" },
    "Boat partner": { email: "bookings@karpathosboats.gr", phone: "+30 694 444 5555" },
    "Concierge Team": { email: "concierge@karpathosadventure.com", phone: "+30 694 366 6243" },
  };

  const loadBookings = async () => {
    setBookingsLoading(true);
    try {
      const data = await bookingsService.getBookings();
      setBookings(data);
    } catch (error) {
      console.error("Failed to load bookings:", error);
    } finally {
      setBookingsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: BookingStatus) => {
    try {
      await bookingsService.updateBooking(id, { status: newStatus });
      loadBookings();
    } catch (err) {
      alert("Failed to update status: " + err);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (confirm("Are you sure you want to delete this booking request?")) {
      try {
        await bookingsService.deleteBooking(id);
        loadBookings();
        alert("Booking deleted successfully.");
      } catch (err) {
        alert("Failed to delete booking: " + err);
      }
    }
  };

  const openForwardModal = (bkg: Booking) => {
    setForwardingBooking(bkg);
    const mapped = PARTNER_CONTACTS[bkg.partnerName] || { email: "", phone: "" };
    setSupplierEmail(mapped.email);
    setSupplierPhone(mapped.phone || "+30 694 366 6243");
  };

  const handleForwardWhatsApp = async (bkg: Booking) => {
    const message = `Hello ${bkg.partnerName},\n\nYou have a new booking request from Karpathos Adventures!\n\nActivity: ${bkg.activityTitle}\nDate: ${bkg.bookingDate}\nGuests: ${bkg.guests}\n\nClient: ${bkg.clientName}\nEmail: ${bkg.clientEmail}\nPhone: ${bkg.clientPhone}\nNotes: ${bkg.notes || "None"}\n\nPlease confirm availability.\n\nBest regards,\nKarpathos Adventure Concierge`;
    const cleanPhone = supplierPhone.replace(/[^0-9+]/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    
    try {
      await bookingsService.updateBooking(bkg.id, { status: "forwarded" });
      loadBookings();
      setForwardingBooking(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleForwardEmail = async (bkg: Booking) => {
    const subject = `New Booking Request: ${bkg.activityTitle} - ${bkg.bookingDate}`;
    const body = `Hello ${bkg.partnerName},\n\nYou have a new booking request from Karpathos Adventures!\n\nActivity: ${bkg.activityTitle}\nDate: ${bkg.bookingDate}\nGuests: ${bkg.guests}\n\nClient Name: ${bkg.clientName}\nClient Email: ${bkg.clientEmail}\nClient Phone: ${bkg.clientPhone}\nSpecial Notes: ${bkg.notes || "None"}\n\nPlease confirm availability.\n\nBest regards,\nKarpathos Adventure Concierge`;
    const url = `mailto:${supplierEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;

    try {
      await bookingsService.updateBooking(bkg.id, { status: "forwarded" });
      loadBookings();
      setForwardingBooking(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Seed / Reset Database
  const handleReset = async () => {
    if (confirm("Are you sure you want to reset the database? Any custom activities will be lost and replaced with the 33 default experiences.")) {
      setLoading(true);
      try {
        const resetData = await activitiesService.resetToDefault();
        setActivities(resetData);
        alert("Database successfully reset to default CSV values!");
      } catch (err) {
        alert("Failed to reset database: " + err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Open Modal for Add
  const handleOpenAdd = () => {
    setEditingActivity(null);
    setTitle("");
    setCategory(CATEGORIES[0]);
    setArea("Pigadia");
    setLocation("");
    setPriceFrom("€45");
    setDuration("~3 hours");
    setDifficulty("Easy");
    setShortDesc("");
    setFullDesc("");
    setOperator("");
    setGoogleMapsUrl("");
    setVipHeadline("");
    setPrimaryImage("");
    setExtraImage1("");
    setExtraImage2("");
    setHighlightsInput("[\"Highly rated experience\", \"Led by local expert\", \"All safety equipment included\"]");
    setIncludedInput("[\"Guided session\", \"All safety gear\"]");
    setExcludedInput("[\"Personal expenses\", \"Hotel transfer\"]");
    setWhatToBringInput("Comfortable clothes, water, camera");
    setFormError("");
    setShowModal(true);
  };

  // Open Modal for Edit
  const handleOpenEdit = (act: Activity) => {
    setEditingActivity(act);
    setTitle(act.title || "");
    setCategory(act.category || CATEGORIES[0]);
    setArea(act.locationName || "");
    setLocation(act.meetingPoint || "");
    setPriceFrom(act.priceType === "quote" ? "Confirm" : `€${act.fromPrice}`);
    setDuration(act.duration || "");
    setDifficulty(act.difficulty || "Easy");
    setShortDesc(act.shortDescription || "");
    setFullDesc(act.fullDescription || "");
    setOperator(act.operator || "");
    setGoogleMapsUrl(act.googleMapsUrl || "");
    setVipHeadline(act.vipHeadline || "");
    setPrimaryImage(act.imageUrls?.[0] || "");
    setExtraImage1(act.imageUrls?.[1] || "");
    setExtraImage2(act.imageUrls?.[2] || "");
    setHighlightsInput(JSON.stringify(act.highlights || []));
    setIncludedInput(JSON.stringify(act.included || []));
    setExcludedInput(JSON.stringify(act.notIncluded || []));
    setWhatToBringInput((act.whatToBring || []).join(", "));
    setFormError("");
    setShowModal(true);
  };

  // Save Activity (Add or Edit)
  const handleSaveActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!title || !area || !location || !shortDesc || !fullDesc) {
      setFormError("Please fill in all required fields (Title, Area, Meeting Point, Descriptions).");
      return;
    }

    let parsedHighlights = [];
    let parsedIncluded = [];
    let parsedExcluded = [];
    try {
      parsedHighlights = highlightsInput ? JSON.parse(highlightsInput) : [];
      parsedIncluded = includedInput ? JSON.parse(includedInput) : [];
      parsedExcluded = excludedInput ? JSON.parse(excludedInput) : [];
    } catch {
      setFormError("JSON inputs (Highlights, Included, Excluded) must be valid JSON arrays (e.g. [\"A\", \"B\"]).");
      return;
    }

    const priceVal = priceFrom.toLowerCase() === 'confirm' ? 0 : parseInt(priceFrom.replace(/[^0-9]/g, "")) || 0;
    const priceType = priceFrom.toLowerCase() === 'confirm' ? "quote" : priceVal >= 150 ? "per_group" : "per_person";

    const imageUrls = [primaryImage || "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg"];
    if (extraImage1) imageUrls.push(extraImage1);
    if (extraImage2) imageUrls.push(extraImage2);

    const whatToBring = whatToBringInput.split(",").map(x => x.trim()).filter(Boolean);

    const activityData: Omit<Activity, "id"> = {
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      title,
      category,
      shortDescription: shortDesc,
      fullDescription: fullDesc,
      locationName: area,
      meetingPoint: location,
      fromPrice: priceVal,
      currency: "€",
      priceType,
      priceNote: editingActivity?.priceNote || "",
      duration,
      difficulty,
      groupType: priceType === "per_group" ? "private" : "group",
      maxGuests: priceType === "per_group" ? 8 : 12,
      seasonStart: "May",
      seasonEnd: "October",
      imageUrls,
      tags: [category],
      included: parsedIncluded,
      notIncluded: parsedExcluded,
      whatToBring,
      safetyNotes: editingActivity?.safetyNotes || ["Follow the guide instructions"],
      cancellationPolicy: "Free cancellation up to 24h before departure.",
      weatherDependent: category === "Sea & Boat Trips" || category === "Hiking Tours",
      pickupAvailable: false,
      foodIncluded: category === "Food & Wine Tastings",
      familyFriendly: true,
      bestForCouples: true,
      bestForGroups: true,
      closestTo: [area],
      popularity: editingActivity?.popularity || 80,
      badge: editingActivity?.badge || "New",
      operator,
      googleMapsUrl,
      vipHeadline,
      highlights: parsedHighlights,
      bookingNotes: editingActivity?.bookingNotes || "",
      faqs: editingActivity?.faqs || [],
      ctaPrimary: "Check Availability",
      ctaSecondary: "Save Activity",
      whatsappPrefillTemplate: `Hello, I'm interested in ${title}. My dates are [dates]...`
    };

    try {
      if (editingActivity) {
        await activitiesService.updateActivity(editingActivity.id, activityData);
      } else {
        await activitiesService.addActivity(activityData);
      }
      setShowModal(false);
      loadActivities();
      alert(`Activity successfully ${editingActivity ? 'updated' : 'added'}!`);
    } catch (err) {
      alert("Failed to save activity: " + err);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await activitiesService.deleteActivity(id);
        loadActivities();
        alert("Activity successfully deleted.");
      } catch (err) {
        alert("Failed to delete activity: " + err);
      }
    }
  };

  const filteredActivities = activities.filter((a) => {
    if (selectedCategory !== "all" && a.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchStr = (a.title + " " + a.shortDescription + " " + a.locationName).toLowerCase();
      if (!matchStr.includes(q)) return false;
    }
    return true;
  });

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-cream px-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-mist shadow-2xl p-8 backdrop-blur">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-teal/15 text-teal flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="font-display font-bold text-2xl text-navy">Admin Portal</h1>
            <p className="text-sm text-navy/60 mt-1">Please sign in to access dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full px-4 py-3 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-navy/60 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                required
              />
            </div>
            {loginError && <p className="text-xs text-warn font-semibold">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-navy hover:bg-navy-soft text-white font-semibold shadow-md transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <div className="text-teal text-xs font-bold uppercase tracking-widest mb-1">Backend Manager</div>
            <h1 className="font-display font-bold text-3xl text-navy">Karpathos Adventure Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-teal hover:bg-teal-dark text-white text-sm font-semibold shadow-md transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Add Activity
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-mist text-navy text-sm font-semibold hover:bg-cream transition"
            >
              Reset to Defaults
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-navy/10 text-navy text-sm font-semibold hover:bg-navy/15 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Connection Status Banner */}
        {isLive ? (
          <div className="bg-success/10 border border-success/30 text-success-darker rounded-2xl p-4 flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0 text-success">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-9.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <div className="font-semibold text-sm">Firestore Database Connection Live</div>
              <div className="text-xs text-navy/70 mt-0.5">All activities are synced in real-time with Google Cloud Firestore database instances.</div>
            </div>
          </div>
        ) : (
          <div className="bg-warn/10 border border-warn/30 text-warn-darker rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <div className="w-8 h-8 rounded-full bg-warn/20 flex items-center justify-center shrink-0 text-warn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Local Storage Mock Mode (No Firebase Credentials)</div>
              <div className="text-xs text-navy/70 mt-0.5">
                Firebase credentials are not set. The dashboard is running in local storage fallback mode (fully functional for add/edit/delete testing).
                To connect to actual Firestore, create a <code className="bg-white px-1.5 py-0.5 rounded border">.env</code> file in the project root containing:
              </div>
              <pre className="mt-2 text-[10px] bg-white p-2 rounded-xl border font-mono text-navy/80 overflow-x-auto">
{`VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id`}
              </pre>
            </div>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex bg-white p-1.5 rounded-2xl border border-mist mb-6 w-fit shadow-sm">
          <button
            onClick={() => setActiveTab("experiences")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 ${
              activeTab === "experiences"
                ? "bg-teal text-white shadow-md"
                : "text-navy/60 hover:text-navy"
            }`}
          >
            <I.Mountain size={14} />
            Experiences ({activities.length})
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 ${
              activeTab === "bookings"
                ? "bg-teal text-white shadow-md"
                : "text-navy/60 hover:text-navy"
            }`}
          >
            <I.Calendar size={14} />
            Bookings & Inquiries ({bookings.length})
          </button>
        </div>

        {/* Stats Grid */}
        {activeTab === "experiences" ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Total Activities</div>
              <div className="font-display font-bold text-3xl text-navy mt-1">{activities.length}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Categories</div>
              <div className="font-display font-bold text-3xl text-teal mt-1">{CATEGORIES.length}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Storage Mode</div>
              <div className={`font-display font-bold text-sm uppercase px-2.5 py-1 rounded-full mt-2.5 inline-block ${
                isLive ? 'bg-success/20 text-success' : 'bg-warn/20 text-warn'
              }`}>
                {isLive ? 'Cloud Firestore' : 'Local Storage'}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Status</div>
              <div className="font-display font-bold text-sm uppercase px-2.5 py-1 bg-teal/20 text-teal rounded-full mt-2.5 inline-block">
                Vetted Operator
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Total Inquiries</div>
              <div className="font-display font-bold text-3xl text-navy mt-1">{bookings.length}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Pending Inquiries</div>
              <div className="font-display font-bold text-3xl text-warn mt-1">
                {bookings.filter((b) => b.status === "pending").length}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Forwarded</div>
              <div className="font-display font-bold text-3xl text-teal mt-1">
                {bookings.filter((b) => b.status === "forwarded").length}
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-mist shadow-sm">
              <div className="text-xs text-navy/50 font-bold uppercase tracking-wider">Confirmed Bookings</div>
              <div className="font-display font-bold text-3xl text-success mt-1">
                {bookings.filter((b) => b.status === "confirmed").length}
              </div>
            </div>
          </div>
        )}

        {/* Table & Filtering */}
        <div className="bg-white rounded-3xl border border-mist overflow-hidden shadow-sm">
          {activeTab === "experiences" ? (
            <>
              <div className="p-4 sm:p-5 border-b border-mist flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-cream rounded-xl w-full">
                  <I.Search size={16} className="text-navy/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by experience title, location..."
                    className="bg-transparent outline-none text-sm text-navy placeholder:text-navy/40 w-full"
                  />
                </div>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3.5 py-2 rounded-xl bg-cream border border-mist text-navy font-semibold text-sm outline-none cursor-pointer w-full sm:w-auto"
                  >
                    <option value="all">All Categories</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                {loading ? (
                  <div className="p-10 text-center text-navy/50 font-medium">Loading activities...</div>
                ) : filteredActivities.length === 0 ? (
                  <div className="p-10 text-center text-navy/50 font-medium">No experiences found.</div>
                ) : (
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-cream border-b border-mist text-navy/60 font-semibold text-xs uppercase tracking-wider">
                        <th className="p-4 pl-6">Image</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Area</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Difficulty</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-mist text-navy/80">
                      {filteredActivities.map((a) => (
                        <tr key={a.id} className="hover:bg-cream/40 transition">
                          <td className="p-4 pl-6">
                            <img
                              src={a.imageUrls?.[0]}
                              alt={a.title}
                              className="w-10 h-10 object-cover rounded-lg bg-mist"
                            />
                          </td>
                          <td className="p-4 font-semibold text-navy max-w-xs truncate">
                            <a href={`#/activities/${a.slug}`} className="hover:text-teal hover:underline">
                              {a.title}
                            </a>
                          </td>
                          <td className="p-4 text-xs">
                            <span className="bg-aqua/60 text-teal-dark px-2 py-0.5 rounded-full font-semibold">{a.category}</span>
                          </td>
                          <td className="p-4 text-xs">{a.locationName}</td>
                          <td className="p-4 font-bold text-teal-dark">
                            {a.priceType === "quote" ? "On Request" : `${a.currency}${a.fromPrice}`}
                          </td>
                          <td className="p-4 text-xs">{a.difficulty}</td>
                          <td className="p-4 pr-6 text-right space-x-1.5 shrink-0">
                            <a
                              href={`#/activities/${a.slug}`}
                              className="p-1.5 rounded-lg text-navy/60 hover:bg-mist transition inline-block align-middle"
                              title="View detailed page"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </a>
                            <button
                              onClick={() => handleOpenEdit(a)}
                              className="p-1.5 rounded-lg text-teal hover:bg-aqua transition inline-block align-middle"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </button>
                            <button
                              onClick={() => handleDelete(a.id, a.title)}
                              className="p-1.5 rounded-lg text-warn hover:bg-warn/10 transition"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="p-4 sm:p-5 border-b border-mist flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-cream rounded-xl w-full">
                  <I.Search size={16} className="text-navy/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by client name, email, phone, experience, partner..."
                    className="bg-transparent outline-none text-sm text-navy placeholder:text-navy/40 w-full"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                {bookingsLoading ? (
                  <div className="p-10 text-center text-navy/50 font-medium">Loading bookings...</div>
                ) : bookings.length === 0 ? (
                  <div className="p-10 text-center text-navy/50 font-medium">No bookings found.</div>
                ) : (
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-cream border-b border-mist text-navy/60 font-semibold text-xs uppercase tracking-wider">
                        <th className="p-4 pl-6">Client Details</th>
                        <th className="p-4">Experience</th>
                        <th className="p-4">Date & Guests</th>
                        <th className="p-4">Partner</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Submitted</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-mist text-navy/80">
                      {bookings
                        .filter((b) => {
                          if (!searchQuery) return true;
                          const q = searchQuery.toLowerCase();
                          const matchStr = (
                            b.clientName + " " +
                            b.clientEmail + " " +
                            b.clientPhone + " " +
                            b.activityTitle + " " +
                            b.partnerName
                          ).toLowerCase();
                          return matchStr.includes(q);
                        })
                        .map((b) => (
                          <tr key={b.id} className="hover:bg-cream/40 transition">
                            <td className="p-4 pl-6">
                              <div className="font-semibold text-navy">{b.clientName}</div>
                              <div className="text-xs text-navy/60">{b.clientEmail}</div>
                              <div className="text-xs text-navy/50 font-mono mt-0.5">{b.clientPhone}</div>
                            </td>
                            <td className="p-4 font-semibold text-navy max-w-xs truncate">
                              {b.activityTitle}
                            </td>
                            <td className="p-4 text-xs">
                              <div className="font-semibold text-teal-dark">{b.bookingDate}</div>
                              <div className="text-navy/60 mt-0.5">{b.guests} guests</div>
                            </td>
                            <td className="p-4 text-xs font-semibold text-navy/70">{b.partnerName}</td>
                            <td className="p-4 text-xs">
                              <select
                                value={b.status}
                                onChange={(e) => handleStatusChange(b.id, e.target.value as BookingStatus)}
                                className={`px-2.5 py-1.5 rounded-full font-bold text-xs border outline-none cursor-pointer ${
                                  b.status === "pending"
                                    ? "bg-warn/15 text-warn border-warn/30"
                                    : b.status === "confirmed"
                                    ? "bg-success/15 text-success border-success/30"
                                    : b.status === "forwarded"
                                    ? "bg-teal/15 text-teal border-teal/30"
                                    : "bg-navy/10 text-navy/60 border-navy/20"
                                }`}
                              >
                                <option value="pending">⏳ Pending</option>
                                <option value="forwarded">✉️ Forwarded</option>
                                <option value="confirmed">✅ Confirmed</option>
                                <option value="cancelled">❌ Cancelled</option>
                              </select>
                            </td>
                            <td className="p-4 text-xs text-navy/50">
                              {new Date(b.createdAt).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </td>
                            <td className="p-4 pr-6 text-right space-x-1.5 shrink-0 align-middle">
                              <button
                                onClick={() => openForwardModal(b)}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-teal/10 hover:bg-teal/20 text-teal text-xs font-semibold transition align-middle"
                                title="Forward to Partner / Supplier"
                              >
                                <I.Mail size={13} />
                                Forward
                              </button>
                              <button
                                onClick={() => handleDeleteBooking(b.id)}
                                className="p-1.5 rounded-lg text-warn hover:bg-warn/10 transition inline-block align-middle"
                                title="Delete"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>

      </div>

      {/* Edit/Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-4xl h-5/6 overflow-y-auto shadow-2xl p-6 md:p-8 flex flex-col scale-in">
            <div className="flex items-center justify-between border-b border-mist pb-4 mb-4 shrink-0">
              <h3 className="font-display font-bold text-2xl text-navy">
                {editingActivity ? `Edit Activity: ${title}` : "Create New Activity"}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-mist transition">
                <I.X size={20} />
              </button>
            </div>

            {formError && <div className="p-3 bg-warn/10 text-warn border border-warn/20 rounded-xl mb-4 text-xs font-semibold">{formError}</div>}

            <form onSubmit={handleSaveActivity} className="flex-1 space-y-5">
              {/* Row 1: Title & Category */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Saria Island Boat Tour"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream outline-none cursor-pointer text-sm text-navy"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Location & Meeting point */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Area / LocationName (e.g. Pigadia) *</label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Pigadia"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Meeting Point (Address/Map location) *</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Boarding Gate B, Pigadia Harbor"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              {/* Row 3: Price & Duration & Difficulty */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Price From (e.g. €45, Confirm) *</label>
                  <input
                    type="text"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    placeholder="€45 or Confirm"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Duration *</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="~3 hours"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Difficulty *</label>
                  <input
                    type="text"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    placeholder="Easy, Moderate, Advanced"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              {/* Row 4: Descriptions */}
              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Short Description *</label>
                <input
                  type="text"
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="Summarize the experience in one sentence."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Full Description *</label>
                <textarea
                  value={fullDesc}
                  onChange={(e) => setFullDesc(e.target.value)}
                  rows={4}
                  placeholder="Provide a detailed rewrite of what guests should expect..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy resize-none"
                />
              </div>

              {/* Row 5: Details & Extra Fields */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Operator / Partner Name</label>
                  <input
                    type="text"
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                    placeholder="Art and Walk"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Google Maps URL</label>
                  <input
                    type="text"
                    value={googleMapsUrl}
                    onChange={(e) => setGoogleMapsUrl(e.target.value)}
                    placeholder="https://google.com/maps/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">VIP Headline / Catchphrase</label>
                  <input
                    type="text"
                    value={vipHeadline}
                    onChange={(e) => setVipHeadline(e.target.value)}
                    placeholder="A slow, hand-made mosaic workshop"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              {/* Row 6: Image URLs */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-0.5">Image Gallery URLs</label>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={primaryImage}
                    onChange={(e) => setPrimaryImage(e.target.value)}
                    placeholder="Primary image URL"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                  <input
                    type="text"
                    value={extraImage1}
                    onChange={(e) => setExtraImage1(e.target.value)}
                    placeholder="Gallery image 2 URL"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                  <input
                    type="text"
                    value={extraImage2}
                    onChange={(e) => setExtraImage2(e.target.value)}
                    placeholder="Gallery image 3 URL"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                  />
                </div>
              </div>

              {/* Row 7: JSON Arrays & Lists */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Highlights (JSON Array) *</label>
                  <textarea
                    value={highlightsInput}
                    onChange={(e) => setHighlightsInput(e.target.value)}
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-xs font-mono text-navy resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">What to Bring (Comma-separated) *</label>
                  <textarea
                    value={whatToBringInput}
                    onChange={(e) => setWhatToBringInput(e.target.value)}
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-xs font-mono text-navy resize-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">What's Included (JSON Array) *</label>
                  <textarea
                    value={includedInput}
                    onChange={(e) => setIncludedInput(e.target.value)}
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-xs font-mono text-navy resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Not Included / Excluded (JSON Array) *</label>
                  <textarea
                    value={excludedInput}
                    onChange={(e) => setExcludedInput(e.target.value)}
                    rows={2}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-xs font-mono text-navy resize-none"
                  />
                </div>
              </div>

              {/* Form buttons */}
              <div className="flex gap-3 justify-end pt-4 border-t border-mist shrink-0">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-full border border-mist font-semibold text-sm hover:bg-cream text-navy transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-teal hover:bg-teal-dark font-semibold text-sm text-white shadow-md transition"
                >
                  {editingActivity ? "Save Changes" : "Create Activity"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Forward Modal */}
      {forwardingBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setForwardingBooking(null)} />
          <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl p-6 md:p-8 flex flex-col scale-in">
            <div className="flex items-center justify-between border-b border-mist pb-4 mb-4 shrink-0">
              <h3 className="font-display font-bold text-2xl text-navy">Forward Booking</h3>
              <button onClick={() => setForwardingBooking(null)} className="p-2 rounded-lg hover:bg-mist transition">
                <I.X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-navy/50 mb-0.5">Supplier / Partner</span>
                <span className="text-navy font-semibold text-base">{forwardingBooking.partnerName}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-navy/50 mb-0.5">Activity</span>
                <span className="text-navy font-semibold text-sm">{forwardingBooking.activityTitle}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-navy/50 mb-0.5">Date</span>
                  <span className="text-navy font-semibold text-sm">{forwardingBooking.bookingDate}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-navy/50 mb-0.5">Guests</span>
                  <span className="text-navy font-semibold text-sm">{forwardingBooking.guests}</span>
                </div>
              </div>
              
              <hr className="border-mist" />
              
              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Supplier Email</label>
                <input
                  type="email"
                  value={supplierEmail}
                  onChange={(e) => setSupplierEmail(e.target.value)}
                  placeholder="partner@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy/60 uppercase tracking-wider mb-1">Supplier Phone (WhatsApp format)</label>
                <input
                  type="tel"
                  value={supplierPhone}
                  onChange={(e) => setSupplierPhone(e.target.value)}
                  placeholder="+30 694 000 0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-mist bg-cream focus:bg-white focus:border-teal outline-none text-sm text-navy"
                />
              </div>

              <div className="bg-cream p-4 rounded-2xl border border-mist text-xs text-navy/75 space-y-1">
                <div className="font-bold text-[10px] text-navy/50 uppercase tracking-wider mb-1">Inquiry Details</div>
                <div><strong>Client Name:</strong> {forwardingBooking.clientName}</div>
                <div><strong>Phone:</strong> {forwardingBooking.clientPhone}</div>
                <div><strong>Email:</strong> {forwardingBooking.clientEmail}</div>
                {forwardingBooking.notes && <div className="max-h-24 overflow-y-auto mt-1"><strong>Notes:</strong> {forwardingBooking.notes}</div>}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-mist">
                <button
                  onClick={() => handleForwardWhatsApp(forwardingBooking)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-success hover:bg-success/90 text-white font-semibold text-sm shadow transition"
                >
                  <I.Whatsapp size={16} /> Send WhatsApp
                </button>
                <button
                  onClick={() => handleForwardEmail(forwardingBooking)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-navy hover:bg-navy-soft text-white font-semibold text-sm shadow transition"
                >
                  <I.Mail size={16} /> Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminPage;
