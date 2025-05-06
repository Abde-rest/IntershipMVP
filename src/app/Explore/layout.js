import Navbar from "@/components/ui/Navbar";

export default function ExploreLayout({ children }) {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
    </div>
  );
}
