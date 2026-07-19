import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading - Chhota */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-500 uppercase font-semibold tracking-[2px] text-xs">
            Contact Us
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2F56]">
            Get In Touch
          </h2>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Contact us today for safe, secure and affordable relocation services anywhere in India.
          </p>
        </div>

        {/* Grid - Chhota Gap */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* Left Box - Contact Info (Chhota) */}
          <div className="bg-[#0F2F56] rounded-2xl p-6 md:p-8 text-white">

            <h3 className="text-xl font-bold">
              Contact Information
            </h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              We are always ready to help you with your relocation needs.
            </p>

            <div className="space-y-5 mt-6">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-sm">Office Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mt-0.5">
                    Plot 353 Basement, Niti Khand 1,
                    <br />
                    Opposite Cambridge Schools,
                    <br />
                    Indirapuram, Ghaziabad, UP 201014
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-sm">Phone Number</h4>
                  <a
                    href="tel:+918448448603"
                    className="text-gray-300 hover:text-yellow-400 text-sm"
                  >
                    +91 84484 48603
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-sm">Email Address</h4>
                  <a
                    href="mailto:agarwalpackersindirapuram@gmail.com"
                    className="text-gray-300 hover:text-yellow-400 text-sm break-all"
                  >
                    agarwalpackersindirapuram@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-sm">Working Hours</h4>
                  <p className="text-gray-300 text-sm">
                    24 × 7 Customer Support
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Box - Form (Chhota) */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">

            <h3 className="text-xl font-bold text-[#0F2F56]">
              Request A Free Quote
            </h3>

            <form className="space-y-4 mt-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0F2F56] transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0F2F56] transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0F2F56] transition"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Moving From"
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0F2F56] transition"
                />
                <input
                  type="text"
                  placeholder="Moving To"
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0F2F56] transition"
                />
              </div>

              <textarea
                rows="3"
                placeholder="Tell us about your shifting requirement..."
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-[#0F2F56] transition"
              />

              <button
                className="w-full bg-[#0F2F56] hover:bg-[#17477e] text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                Get Free Quote
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}