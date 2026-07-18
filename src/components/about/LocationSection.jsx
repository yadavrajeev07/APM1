import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <span className="text-yellow-500 uppercase tracking-[3px] font-semibold text-sm">
            Our Office
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0F2F56] mt-3">
            Visit Our Office
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to visit our office or contact us anytime. Our team is
            always ready to assist you with your relocation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Office Details */}

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">

            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-yellow-500 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-xl text-[#0F2F56]">
                  Office Address
                </h3>

                <p className="text-gray-600 mt-2">
                 Plot Number 353 Basement, Niti Khand 1,Opposite Cambridge Schools Indirapuram, Ghaziabad, Uttar Pradesh 201014
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Phone className="text-yellow-500" size={24} />
              <div>
                <h3 className="font-bold text-[#0F2F56]">
                  Phone
                </h3>

                <a
                  href="tel:+918448448603"
                  className="text-gray-600 hover:text-[#0F2F56]"
                >
                  +91 84484 48603
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Mail className="text-yellow-500" size={24} />
              <div>
                <h3 className="font-bold text-[#0F2F56]">
                  Email
                </h3>

                <a
                  href="mailto:info@agrawalpackers.com"
                  className="text-gray-600 hover:text-[#0F2F56]"
                >
                  agarwalpackersindirapuram@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-yellow-500" size={24} />
              <div>
                <h3 className="font-bold text-[#0F2F56]">
                  Working Hours
                </h3>

                <p className="text-gray-600">
                  Mon - Sun : 24 × 7 Available
                </p>
              </div>
            </div>

          </div>

          {/* Google Map */}

          <div className="rounded-3xl overflow-hidden shadow-xl h-[450px]">

            <iframe
              title="Google Map"
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