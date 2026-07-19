import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroImage from "../../assets/images/about.jpeg";

export default function AboutHero() {
  return (
    <section className="relative h-[280px] sm:h-[350px] md:h-[420px] overflow-hidden">

      {/* Background */}
      <img
        src={heroImage}
        alt="About Agrawal Packers & Movers"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071A32]/75"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 flex flex-col items-center justify-center text-center text-white">

        <span className="uppercase tracking-[4px] text-yellow-400 font-semibold text-sm">
          About Us
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
          Trusted Packers &
          <br />
          Movers Company
        </h1>

        <div className="flex items-center gap-2 mt-6 text-sm sm:text-base">

          <Link
            to="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <ChevronRight size={18} />

          <span className="text-yellow-400">
            About Us
          </span>

        </div>

      </div>

    </section>
  );
}