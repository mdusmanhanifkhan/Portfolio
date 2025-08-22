import HeroSection from "./components/hero-section/HeroSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[-146px] left-[-162px] w-[377px] h-[377px] bg-green-200 rounded-full blur-2xl"></div>
      <div className="absolute top-[-296px] left-[893px] w-[492px] h-[492px] bg-green-200 rounded-full blur-2xl"></div>
      <HeroSection/>
    </div>
  );
}
