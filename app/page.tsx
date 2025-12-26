import { Navbar } from "@/components/common/navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { TopFreelancersSection } from "@/components/home/TopFreelancersSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { DevStoreSection } from "@/components/home/DevStoreSection";
import { Footer } from "@/components/common/footer";
import BottomNavigation from "@/components/common/bottom-navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TopFreelancersSection />
        <CategoriesSection />
        <CoursesSection />
        <DevStoreSection />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
