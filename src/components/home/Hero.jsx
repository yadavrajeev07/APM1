import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "../../assets/images/hero-truck.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] md:min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={heroImage}
        alt="Agrawal Packers and Movers"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06172E]/95 via-[#0A2140]/85 to-black/45" />

      {/* Content */}
      <div className="relative mt-[-50px] max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 flex items-center min-h-[700px] md:min-h-screen">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >

          {/* Badge */}
          <span className="inline-flex items-center bg-yellow-400 text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-5">
            Safe • Trusted • Affordable
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            India's Trusted
            <br />
            Packers &
            <span className="text-yellow-400"> Movers</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base md:text-lg text-gray-200 leading-8 max-w-2xl">
            Professional Home Shifting, Office Relocation, Car & Bike
            Transport, Warehousing and Packing Services with complete
            safety and affordable pricing across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-5 mt-8">

            <a
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 md:px-7 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+918448448603"
              className="border border-white hover:bg-white hover:text-black px-5 md:px-7 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/918448448603"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 px-5 md:px-7 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}