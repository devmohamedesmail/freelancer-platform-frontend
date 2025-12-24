import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TopFreelancersSection } from "@/components/TopFreelancersSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ForClientsSection } from "@/components/ForClientsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { DevStoreSection } from "@/components/DevStoreSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TopFreelancersSection />
        <CategoriesSection />
        <ForClientsSection />
        <CoursesSection />
        <DevStoreSection />
      </main>
      <Footer />
    </div>
  );
}
