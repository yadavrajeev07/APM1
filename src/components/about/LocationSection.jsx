import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header - Chhota */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-yellow-500 uppercase tracking-[2px] font-semibold text-xs">
            Our Office
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2F56] mt-2">
            Visit Our Office
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm">
            Feel free to visit our office or contact us anytime.
          </p>
        </div>

        {/* Grid - Chhota Gap */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* Office Details - Chhota Box */}
          <div className="bg-gray-50 rounded-2xl p-5 md:p-6 shadow-md h-full flex flex-col justify-center">

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-yellow-500 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h3 className="font-semibold text-sm text-[#0F2F56]">
                  Office Address
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-0.5">
                  Plot 353 Basement, Niti Khand 1,
                  <br />
                  Opposite Cambridge Schools,
                  <br />
                  Indirapuram, Ghaziabad, UP 201014
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-yellow-500 flex-shrink-0" size={16} />
              <div>
                <h3 className="font-semibold text-sm text-[#0F2F56]">
                  Phone
                </h3>
                <a
                  href="tel:+918448448603"
                  className="text-gray-600 hover:text-[#0F2F56] text-sm"
                >
                  +91 84484 48603
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-yellow-500 flex-shrink-0" size={16} />
              <div>
                <h3 className="font-semibold text-sm text-[#0F2F56]">
                  Email
                </h3>
                <a
                  href="mailto:info@agrawalpackers.com"
                  className="text-gray-600 hover:text-[#0F2F56] text-sm break-all"
                >
                  agarwalpackersindirapuram@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-500 flex-shrink-0" size={16} />
              <div>
                <h3 className="font-semibold text-sm text-[#0F2F56]">
                  Working Hours
                </h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sun : 24 × 7
                </p>
              </div>
            </div>

          </div>

          {/* Google Map - Chhota */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[260px] md:h-[300px]">
            <iframe
              title="Google Map - Agrawal Packers & Movers"
              src="https://www.google.com/maps?q=Cambridge+School+Indirapuram+Ghaziabad&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}