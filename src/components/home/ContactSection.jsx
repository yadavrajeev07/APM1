import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase font-semibold tracking-[3px]">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#0F2F56]">
            Get In Touch
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Contact us today for safe, secure and affordable relocation
            services anywhere in India.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Left */}
          <div className="bg-[#0F2F56] rounded-3xl p-8 md:p-10 text-white">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              We are always ready to help you with your relocation needs.
            </p>

            <div className="space-y-8 mt-10">

              <div className="flex gap-4">

                <MapPin
                  className="text-yellow-400 mt-1"
                  size={24}
                />

                <div>
                  <h4 className="font-semibold">
                    Office Address
                  </h4>

                  <p className="text-gray-300 mt-1">
                    Plot Number 353 Basement, Niti Khand 1,Opposite Cambridge Schools Indirapuram, Ghaziabad, Uttar Pradesh 201014
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone
                  className="text-yellow-400 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-semibold">
                    Phone Number
                  </h4>

                  <a
                    href="tel:+918448448603"
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    +91 84484 48603
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="text-yellow-400 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-semibold">
                    Email Address
                  </h4>

                  <a
                    href="agarwalpackersindirapuram@gmail.com"
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    agarwalpackersindirapuram@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock
                  className="text-yellow-400 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-semibold">
                    Working Hours
                  </h4>

                  <p className="text-gray-300">
                    24 × 7 Customer Support
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h3 className="text-2xl font-bold text-[#0F2F56]">
              Request A Free Quote
            </h3>

            <form className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#0F2F56]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#0F2F56]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#0F2F56]"
              />

              <input
                type="text"
                placeholder="Moving From"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#0F2F56]"
              />

              <input
                type="text"
                placeholder="Moving To"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#0F2F56]"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your shifting requirement..."
                className="w-full border rounded-xl px-5 py-4 outline-none resize-none focus:border-[#0F2F56]"
              />

              <button
                className="w-full bg-[#0F2F56] hover:bg-[#17477e] text-white font-semibold py-4 rounded-xl transition"
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