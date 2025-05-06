
import Navbar from "@/components/ui/Navbar";


export default function RootLayout({ children }) {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
    </div>
  );
}
