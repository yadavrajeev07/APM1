import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-yellow-500 font-semibold text-sm">
            Our Vision
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2F56] mt-3">
            Our Mission & Vision
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We aim to provide safe, reliable and affordable relocation
            services while building long-term trust with every customer.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-[#0F2F56] text-yellow-400 flex items-center justify-center mb-6">
              <Target size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F2F56] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To deliver secure packing, timely transportation and
              professional moving services at affordable prices while
              ensuring complete customer satisfaction.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-[#0F2F56] flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#0F2F56] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become India's most trusted Packers & Movers company by
              offering world-class relocation solutions with honesty,
              safety and innovation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}