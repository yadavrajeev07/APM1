import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Harsh Tyagi",
    city: "Ghaziabad",
    review:
      "Excellent packing and timely delivery. The entire shifting process was smooth and hassle-free. Highly recommended.",
  },
  {
    name: "Rajeev Yadav",
    city: "Noida",
    review:
      "Professional staff, affordable pricing and safe transportation. Very satisfied with the service.",
  },
  {
    name: "Rishabh Singhal",
    city: "Noida",
    review:
      "My car and household items reached safely without any damage. Great experience with Agrawal Packers & Movers.",
  },
  
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#0F2F56]">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Thousands of customers trust Agrawal Packers & Movers
            for safe, secure and affordable relocation services.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-14">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <Quote
                className="text-yellow-400"
                size={40}
              />

              <div className="flex gap-1 mt-5 text-yellow-400">

                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />

              </div>

              <p className="mt-5 text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-5">

                <h4 className="font-bold text-[#0F2F56]">
                  {item.name}
                </h4>

                <span className="text-gray-500 text-sm">
                  {item.city}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}