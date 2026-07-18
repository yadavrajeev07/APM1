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
    <footer className="bg-[#071A32] text-white">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="Agrawal Packers Movers"
              className="h-16 bg-white rounded-lg p-2"
            />

            <p className="mt-6 text-gray-300 leading-8">
              Agrawal Packers & Movers provides professional,
              safe and affordable relocation services across India
              with experienced staff and timely delivery.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/share/1XvTtifhk7/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918448448603"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

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
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
                >
                  <ChevronRight size={18} />
                  {name}
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Our Services
            </h3>

            <div className="space-y-4">

              {services.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <ChevronRight size={18} />
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">

                <MapPin className="text-yellow-400 mt-1 w-12 h-5" />

                <span className="text-gray-300">
                   Plot Number 353 Basement,
                   Niti Khand 1,
                   Opposite Cambridge Schools Indirapuram,
                   Ghaziabad, 
                   Uttar Pradesh 201014
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-yellow-400 mt-1" />

                <a
                  href="tel:+918448448603"
                  className="text-gray-300 hover:text-yellow-400"
                >
                  +91 84484 48603
                </a>

              </div>

              <div className="flex gap-3">

                <Mail className="text-yellow-400 mt-1" />

                <a
                  href="mailto:agarwalpackersindirapuram@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 mt-1 w-12 h-5"
                >
                   agarwalpackersindirapuram@gmail.com
                </a>

              </div>

              <div className="flex gap-3">

                <Clock className="text-yellow-400 mt-1" />

                <span className="text-gray-300">
                  24 × 7 Customer Support
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Agrawal Packers & Movers. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Designed & Developed by <span className="text-yellow-400 font-semibold"> <a href="https://www.fusionmatrix.in">Fusion Matrix</a></span>
          </p>

        </div>

      </div>

    </footer>
  );
}