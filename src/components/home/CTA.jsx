import { PhoneCall, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-[#0F2F56] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-80 h-80 bg-yellow-400 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -bottom-32 -right-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-14">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full">
                Free Quotation
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready To Move?
                <br />
                Get Your Free Quote Today
              </h2>

              <p className="mt-5 text-gray-200 leading-8">
                Contact Agrawal Packers & Movers for safe, secure and affordable
                relocation services anywhere in India.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">

              <a
                href="tel:+918448448603"
                className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-4 rounded-xl transition"
              >
                <PhoneCall size={20} />
                Call +91 84484 48603
              </a>

              <a
                href="https://wa.me/918448448603"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition"
              >
                <FaWhatsapp size={20} />
                WhatsApp Now
              </a>

              <a
                href="/contact"
                className="flex items-center justify-center gap-3 border border-white text-white hover:bg-white hover:text-[#0F2F56] font-semibold py-4 rounded-xl transition"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}