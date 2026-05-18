import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import MenuList from "@/components/MenuList";
import ReviewSlider from "@/components/ReviewSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F6F0] text-[#3B2B20] font-sans relative overflow-hidden">
      <Header />
      <HeroSection />
      <Marquee />
      <MenuList />
      <ReviewSlider />
      <Footer />
    </main>
  );
}
