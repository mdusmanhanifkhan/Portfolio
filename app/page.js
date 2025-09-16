import HeroSection from "./components/hero-section/HeroSection";
import Container from "./components/other/layout/Container";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute top-[-146px] left-[-162px] w-[377px] h-[377px] bg-green-200 rounded-full blur-2xl"></div>
      <div className="absolute top-[-296px] left-[893px] w-[492px] h-[492px] bg-green-200 rounded-full blur-2xl"></div>
      <div className="border-[50px] blur-2xl bg-[#D9D9D905] rounded-full w-120 h-120 absolute top-50 left-1/2 -translate-x-1/2 z-0"></div>
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
}
