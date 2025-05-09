import GradientWrapper from "@/components/GradientWrapper";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import FooterCTA from "@/components/ui/FooterCTA";
import Hero from "@/components/ui/Hero";
import LogoGrid from "@/components/ui/LogoGrid";
import Testimonials from "@/components/ui/Testimonials";
import ToolKit from "@/components/ui/ToolKit";
import CategoriesGrid from "./Componet/Categores/CategoriesGrid";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  // Filter Data apllication in Dahborde_company ["pending","accepted","rejected"]
  // Crate dahborde_user page
  // Crate dahborde_admin page

  return (
    <div className="min-h-screen container px-5 m-auto overflow-hidden">
      {/* Hero Section */}
      <Navbar />
      <Hero />
      {/* Categories */}
      <CategoriesGrid />

      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
      <LogoGrid />
      <Footer />
    </div>
  );
}
