import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import CompanyStory from "../components/about/CompanyStory";
import LocationSection from "../components/about/LocationSection";
import MissionVision from "../components/about/MissionVision";

export default function About() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <CompanyStory />
      <MissionVision />
      <LocationSection />
      </>
  );
}