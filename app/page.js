import HeroBanner from "@/components/Hero-Banner/HeroBanner";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import LatestSlide from "@/components/LatestSlide/LatestSlide";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SocialMedia />
      <NewsLetter />
      <LatestSlide />
    </>
  );
}
