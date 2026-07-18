import {
  ShieldCheck,
  Clock3,
  Truck,
  Users,
  BadgeCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={34} />,
    title: "Safe Packing",
    desc: "Premium quality packing materials for complete protection.",
  },
  {
    icon: <Truck size={34} />,
    title: "Fast Delivery",
    desc: "On-time pickup and delivery across India.",
  },
  {
    icon: <Users size={34} />,
    title: "Expert Team",
    desc: "Experienced and professionally trained staff.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "24×7 Support",
    desc: "Dedicated customer support whenever you need us.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges.",
  },
  {
    icon: <Headset size={34} />,
    title: "Customer Satisfaction",
    desc: "Thousands of happy customers across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase tracking-[4px] font-semibold text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#0F2F56]">
            We Make Moving
            <span className="text-yellow-500"> Easy & Safe</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide reliable relocation services with professional
            packing, secure transportation and timely delivery.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-xl bg-[#0F2F56] text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#0F2F56] transition">

                {item.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0F2F56]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}