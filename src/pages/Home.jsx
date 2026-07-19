import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ServiceStrip from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "./Services";
import Process from "../components/home/ProcessSection";
import CounterSection from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/FAQSection";
import CallToAction from "../components/home/CTA";
import ContactSection from "../components/home/ContactSection";
import LocationSection from "../components/about/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <AboutSection/>
      <WhyChooseUs/>
      <Services/>
      <Process/>
      <CounterSection/>
      <Testimonials/>
      <FaqSection/>
      <CallToAction/>
      <ContactSection/>
      <LocationSection/>
    </>
  );
}