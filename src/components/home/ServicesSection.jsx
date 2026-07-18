import {
  Home,
  Building2,
  Car,
  Bike,
  Package,
  Truck,
  Boxes,
} from "lucide-react";

const services = [
  {
    icon: <Home size={30} strokeWidth={2} />,
    title: "Home Shifting",
  },
  {
    icon: <Building2 size={30} strokeWidth={2} />,
    title: "Office Relocation",
  },
  {
    icon: <Car size={30} strokeWidth={2} />,
    title: "Car Transport",
  },
  {
    icon: <Bike size={30} strokeWidth={2} />,
    title: "Bike Transport",
  },
  {
    icon: <Package size={30} strokeWidth={2} />,
    title: "Warehousing",
  },
  {
    icon: <Truck size={30} strokeWidth={2} />,
    title: "Heavy Machinery",
  },
  {
    icon: <Boxes size={30} strokeWidth={2} />,
    title: "Packing & Unpacking",
  },
];

export default function ServiceStrip() {
  return (
    <section className="relative -mt-14 z-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7">

            {services.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center text-center p-7 hover:bg-[#0F2F56] transition-all duration-300 cursor-pointer"
              >

                {/* Icon */}
                <div className="text-[#0F2F56] group-hover:text-yellow-400 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[15px] font-semibold text-gray-800 group-hover:text-white leading-6 transition-all">
                  {item.title}
                </h3>

                {/* Small Divider */}
                {index !== services.length - 1 && (
                  <span className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-black/20 group-hover:bg-white/20"></span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}