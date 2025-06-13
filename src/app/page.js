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
  return (
    <div className="min-h-screen container px-5 m-auto overflow-hidden">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="categories">
        <CategoriesGrid />
      </section>

      <GradientWrapper>
        <section id="features">
          <Features />
          <CTA />
        </section>
      </GradientWrapper>

      <ToolKit />

      <GradientWrapper>
        {/* <section id="testimonials"> */}
        <Testimonials />
        {/* </section> */}
      </GradientWrapper>

      <FooterCTA />
      {/* <LogoGrid /> */}
      <Footer />
    </div>
  );
}
