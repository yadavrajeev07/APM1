import {
  PhoneCall,
  PackageCheck,
  Truck,
  House,
} from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={36} />,
    number: "01",
    title: "Book Your Move",
    desc: "Call us or request a free quote online.",
  },
  {
    icon: <PackageCheck size={36} />,
    number: "02",
    title: "Packing",
    desc: "Professional packing using premium materials.",
  },
  {
    icon: <Truck size={36} />,
    number: "03",
    title: "Transportation",
    desc: "Safe and secure transportation with tracking.",
  },
  {
    icon: <House size={36} />,
    number: "04",
    title: "Safe Delivery",
    desc: "Timely delivery with careful unloading.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F2F56]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <span className="text-yellow-400 uppercase tracking-[3px] font-semibold text-sm">
            Working Process
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            How We Work
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Our simple and professional moving process ensures
            a safe and hassle-free relocation experience.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-xl"
            >

              <span className="absolute top-5 right-5 text-5xl font-bold text-gray-100">
                {step.number}
              </span>

              <div className="w-20 h-20 rounded-full bg-yellow-400 text-[#0F2F56] flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0F2F56] mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}