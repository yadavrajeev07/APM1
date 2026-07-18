import {
  Briefcase,
  Users,
  Truck,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={42} />,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: <Users size={42} />,
    number: "5000+",
    title: "Happy Customers",
  },
  {
    icon: <Truck size={40} />,
    number: "25000+",
    title: "Successful Shifting",
  },
  {
    icon: <Star size={42} />,
    number: "4.9★",
    title: "Customer Rating",
  },
];

export default function CounterSection() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-1.5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">

          {stats.map((item) => (

            <div
              key={item.title}
              className="group bg-[#0F2F56] rounded-3xl p-8 text-center hover:bg-yellow-400 transition-all duration-300 shadow-xl"
            >

              <div className="flex justify-center text-yellow-400 group-hover:text-[#0F2F56] transition">

                {item.icon}

              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white group-hover:text-[#0F2F56]">

                {item.number}

              </h2>

              <p className="mt-3 text-gray-300 group-hover:text-[#0F2F56] font-medium">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}