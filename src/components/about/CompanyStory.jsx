import { Award, Truck, Users, MapPin } from "lucide-react";

const items = [
  {
    icon: <Award size={32} />,
    title: "15+ Years Experience",
    desc: "Providing trusted packing and moving services with complete customer satisfaction.",
  },
  {
    icon: <Truck size={32} />,
    title: "10,000+ Successful Moves",
    desc: "Home shifting, office relocation and vehicle transportation completed successfully.",
  },
  {
    icon: <Users size={32} />,
    title: "Professional Team",
    desc: "Experienced staff trained to handle every move safely and efficiently.",
  },
  {
    icon: <MapPin size={32} />,
    title: "Pan India Service",
    desc: "Reliable relocation services across major cities in India.",
  },
];

export default function CompanyStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <span className="text-yellow-500 font-semibold uppercase tracking-[3px] text-sm">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0F2F56] mt-3">
            Moving Families With Trust
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Agrawal Packers & Movers has been helping families,
            businesses and industries relocate safely for many years.
            Our commitment is simple — safe packing, secure transportation
            and timely delivery at affordable prices.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-[#0F2F56] hover:text-white transition duration-300 shadow-lg group"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 text-[#0F2F56] flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-200 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}