import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const services = [
  "Home Shifting",
  "Office Relocation",
  "Car Transport",
  "Bike Transport",
  "Warehousing",
  "Packing & Unpacking",
];

export default function Footer() {
  return (
    <footer className="bg-[#071A32] text-white w-full overflow-hidden">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="Agrawal Packers Movers"
              className="h-14 sm:h-16 bg-white rounded-lg p-2"
            />
            <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base leading-7 sm:leading-8">
              Agrawal Packers & Movers provides professional,
              safe and affordable relocation services across India
              with experienced staff and timely delivery.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="https://www.facebook.com/share/1XvTtifhk7/"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/918448448603"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Network", "/Network"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition text-sm sm:text-base"
                >
                  <ChevronRight size={16} />
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Our Services
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {services.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                >
                  <ChevronRight size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact - 🔥 FIXED */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 sm:space-y-6">
              
              {/* Address - Fixed */}
              <div className="flex gap-3">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base break-words">
                  Plot Number 353 Basement, Niti Khand 1,
                  Opposite Cambridge Schools Indirapuram,
                  Ghaziabad, Uttar Pradesh 201014
                </span>
              </div>

              {/* Phone - Fixed */}
              <div className="flex gap-3">
                <Phone className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a
                  href="tel:+918448448603"
                  className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base"
                >
                  +91 84484 48603
                </a>
              </div>

              {/* Email - 🔥 MAIN FIX */}
              <div className="flex gap-3">
                <Mail className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:agarwalpackersindirapuram@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base break-all"
                >
                  agarwalpackersindirapuram@gmail.com
                </a>
              </div>

              {/* Clock */}
              <div className="flex gap-3">
                <Clock className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">
                  24 × 7 Customer Support
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
            © {new Date().getFullYear()} Agrawal Packers & Movers. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            Designed & Developed by <span className="text-yellow-400 font-semibold">
              <a href="https://www.fusionmatrix.in">Fusion Matrix</a>
            </span>
          </p>
        </div>
      </div>

    </footer>
  );
}