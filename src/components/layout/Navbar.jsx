import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "WhyChooseUs", path: "/WhyChooseUs" },
  { name: "Network", path: "/Network" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Agrawal Packers & Movers"
            className="h-10 sm:h-12 lg:h-16 w-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 ${
                  isActive
                    ? "text-yellow-500"
                    : "text-gray-700 hover:text-[#0F2F56]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">

          {/* <a
            href="https://wa.me/918448448603"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-green-600 hover:bg-green-700 flex items-center justify-center text-white transition"
          >
            <FaWhatsapp size={20} />
          </a> */}

          <a
            href="tel:+918448448603"
            className="bg-[#0F2F56] hover:bg-[#163f72] text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-[#0F2F56]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white px-5 py-5">

          <nav className="flex flex-col gap-2">

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          <div className="mt-6 flex flex-col gap-3">

            <a
              href="tel:+918448448603"
              className="bg-[#0F2F56] hover:bg-[#163f72] text-white rounded-xl py-3 flex items-center justify-center gap-2 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* <a
              href="https://wa.me/918448448603"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a> */}

          </div>

        </div>
      </div>

    </header>
  );
}


