import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="hidden lg:block bg-[#0B2342] text-white text-[13px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-11 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-6 xl:gap-8">

          <div className="flex items-center gap-2">
            <MapPin
              size={15}
              className="text-yellow-400 flex-shrink-0"
            />
            <span className="text-gray-200">
              Indirapuram, Ghaziabad (U.P.)
            </span>
          </div>

          <a
            href="tel:+918448448603"
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
          >
            <Phone
              size={15}
              className="text-yellow-400 flex-shrink-0"
            />
            +91 84484 48603
          </a>

          <a
            href="mailto:agarwalpackersindirapuram@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
          >
            <Mail
              size={15}
              className="text-yellow-400 flex-shrink-0"
            />
            <span>agarwalpackersindirapuram@gmail.com</span>
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="https://www.facebook.com/share/1XvTtifhk7/"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaFacebookF size={14} />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <FaInstagram size={15} />
          </a>

          <a
            href="https://wa.me/918448448603"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300"
          >
            <FaWhatsapp size={16} />
          </a>

        </div>

      </div>
    </div>
  );
}