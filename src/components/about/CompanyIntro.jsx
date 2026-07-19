import { CheckCircle } from "lucide-react";
import work from "../../assets/images/work.jpeg";

const features = [
  "Professional Packing Team",
  "100% Safe Transportation",
  "Affordable Pricing",
  "Door to Door Delivery",
  "Live Shipment Tracking",
  "24×7 Customer Support",
];

export default function CompanyIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative">

            <img
              src={work}
              alt="Agrawal Packers and Movers"
              className="w-full h-[320px] sm:h-[450px] lg:h-[600px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-5 left-5 bg-[#0F2F56] text-white px-6 py-5 rounded-2xl shadow-xl">

              <h3 className="text-4xl font-bold text-yellow-400">
                15+
              </h3>

              <p className="text-sm mt-1">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="uppercase tracking-[3px] text-yellow-500 font-semibold text-sm">
              About Company
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2F56] mt-4 leading-tight">
              Trusted Packers &
              <br />
              Movers Across India
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Agrawal Packers & Movers provides professional home shifting,
              office relocation, vehicle transportation, warehousing,
              packing and unpacking services with complete safety and
              affordable pricing across India.
            </p>

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

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <button className="mt-10 bg-[#0F2F56] hover:bg-[#173e6d] text-white px-8 py-4 rounded-xl transition">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}