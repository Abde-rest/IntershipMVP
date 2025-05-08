import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function ExploreLayout({ children }) {
  return (
    <div className="container m-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
