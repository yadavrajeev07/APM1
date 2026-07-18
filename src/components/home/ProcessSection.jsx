import {
  PhoneCall,
  ClipboardCheck,
  Truck,
  House,
} from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={38} />,
    title: "Book Your Move",
    desc: "Call us or request a free quote online.",
  },
  {
    icon: <ClipboardCheck size={38} />,
    title: "Packing",
    desc: "Professional packing using premium quality materials.",
  },
  {
    icon: <Truck size={38} />,
    title: "Transportation",
    desc: "Safe transportation with GPS-enabled vehicles.",
  },
  {
    icon: <House size={38} />,
    title: "Safe Delivery",
    desc: "Timely unloading and careful placement at destination.",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-[#0F2F56]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            How We Work
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-8">
            Our simple relocation process ensures a smooth,
            secure and stress-free moving experience.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative bg-white rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-xl"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-400 text-[#0F2F56] font-bold flex items-center justify-center">

                {index + 1}

              </div>

              <div className="mt-6 w-20 h-20 mx-auto rounded-full bg-[#0F2F56] text-yellow-400 flex items-center justify-center">

                {step.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0F2F56]">

                {step.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {step.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}