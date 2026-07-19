import { CheckCircle, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import posterImage from "../../assets/images/poster2.jpg";

const features = [
  "100% Safe & Secure Packing",
  "Professional Trained Staff",
  "Affordable Pricing",
  "On-Time Delivery",
  "Insurance Support",
  "24×7 Customer Assistance",
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={posterImage}
              alt="Agrawal Packers Movers"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Experience Card */}
            <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-[#0F2F56] rounded-2xl px-6 py-5 shadow-xl">

              <h2 className="text-3xl md:text-5xl font-bold text-yellow-400">
                15+
              </h2>

              <p className="text-white text-sm mt-1">
                Years Experience
              </p>

            </div>

            {/* Happy Customers */}
            <div className="absolute top-4 right-4 md:top-8 md:-right-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">

              <Users className="text-[#0F2F56]" />

              <div>

                <h3 className="font-bold text-[#0F2F56]">
                  5000+
                </h3>

                <p className="text-xs text-gray-500">
                  Happy Customers
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="text-yellow-500 uppercase tracking-[4px] font-semibold text-sm">
              About Company
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2F56] leading-tight">

              Trusted Packers &
              <br />
              Movers Across India

            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-[15px] sm:text-base">

              Agrawal Packers & Movers offers reliable Home Shifting,
              Office Relocation, Car Transport, Bike Transport,
              Warehousing and Packing Services with complete safety,
              affordable pricing and timely delivery across India.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    size={20}
                    className="text-green-600 flex-shrink-0"
                  />

                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Award Card */}

            <div className="mt-10 bg-[#F8FAFC] rounded-2xl border p-5 flex items-center gap-4">

              <div className="bg-yellow-400 rounded-xl p-3">

                <Award
                  className="text-[#0F2F56]"
                  size={28}
                />

              </div>

              <div>

                <h4 className="font-bold text-[#0F2F56]">
                  Trusted Moving Partner
                </h4>

                <p className="text-gray-600 text-sm">
                  Professional packing, secure transport and
                  on-time delivery across India.
                </p>

              </div>

            </div>

            {/* Button */}

            <a
              href="/about"
              className="inline-flex mt-8 bg-[#0F2F56] hover:bg-[#173d69] text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Read More
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}