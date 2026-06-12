import { RouterProvider, useRouter } from "./lib/router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { CookieBanner } from "./components/CookieBanner";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ActivityDetailPage } from "./pages/ActivityDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PartnersPage } from "./pages/PartnersPage";
import { PolicyPage } from "./pages/PolicyPage";
import { AdminPage } from "./pages/AdminPage";
import { BookingPage } from "./pages/BookingPage";
import { AreaPage } from "./pages/AreaPage";
import { CollectionPage } from "./pages/CollectionPage";
import { GuidePage } from "./pages/GuidePage";
import { CATEGORIES, type Category } from "./data/activities";
import { Link } from "./lib/router";

function categorySlug(c: string) {
  return c
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Router() {
  const { path } = useRouter();

  // /
  if (path === "/" || path === "") return <HomePage />;

  // /explore
  if (path === "/explore") return <ExplorePage />;

  // /category/:slug
  if (path.startsWith("/category/")) {
    const slug = path.replace("/category/", "");
    const cat = CATEGORIES.find((c) => categorySlug(c) === slug) as Category | undefined;
    if (cat) return <CategoryPage category={cat} />;
    return <NotFound />;
  }

  // /activities/:slug
  if (path.startsWith("/activities/")) {
    const slug = path.replace("/activities/", "");
    return <ActivityDetailPage slug={slug} />;
  }

  // /experiences/:slug
  if (path.startsWith("/experiences/")) {
    const slug = path.replace("/experiences/", "");
    return <ActivityDetailPage slug={slug} />;
  }

  // /areas/:slug
  if (path.startsWith("/areas/")) {
    const slug = path.replace("/areas/", "");
    return <AreaPage slug={slug} />;
  }

  // /collections/:slug
  if (path.startsWith("/collections/")) {
    const slug = path.replace("/collections/", "");
    return <CollectionPage slug={slug} />;
  }

  // /guides/:slug
  if (path.startsWith("/guides/")) {
    const slug = path.replace("/guides/", "");
    return <GuidePage slug={slug} />;
  }

  if (path === "/about") return <AboutPage />;
  if (path === "/contact" || path === "/concierge") return <ContactPage />;
  if (path === "/partners") return <PartnersPage />;
  if (path === "/admin") return <AdminPage />;
  if (path.startsWith("/book")) return <BookingPage />;

  if (path === "/policies/terms") return <PolicyPage kind="terms" />;
  if (path === "/policies/privacy") return <PolicyPage kind="privacy" />;
  if (path === "/policies/cancellation") return <PolicyPage kind="cancellation" />;
  if (path === "/policies/safety") return <PolicyPage kind="safety" />;

  return <NotFound />;
}

function NotFound() {
  return (
    <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
      <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">404</div>
      <h1 className="font-display font-bold text-4xl text-navy">Page not found</h1>
      <p className="text-navy/70 mt-3">That page doesn't exist or has been moved.</p>
      <div className="mt-6 flex gap-3 justify-center">
        <Link to="/" className="px-5 py-3 rounded-full bg-navy text-white font-semibold">Back home</Link>
        <Link to="/explore" className="px-5 py-3 rounded-full bg-teal text-white font-semibold">Browse activities</Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
        <WhatsAppFab />
        <CookieBanner />
      </div>
    </RouterProvider>
  );
}

export default App;
