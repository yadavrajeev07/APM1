import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does home shifting cost?",
    answer:
      "The cost depends on the distance, quantity of सामान, floor level, and additional services. Contact us for a free quotation.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We provide premium quality boxes, bubble wrap, stretch film, tapes and all required packing materials.",
  },
  {
    question: "Is my सामान insured during transportation?",
    answer:
      "Yes, we provide transit insurance options to ensure complete safety of your belongings.",
  },
  {
    question: "Do you provide car and bike transportation?",
    answer:
      "Yes. We offer safe enclosed transportation for both cars and bikes across India.",
  },
  {
    question: "How can I book your service?",
    answer:
      "Simply call us, WhatsApp us or fill out the enquiry form. Our team will contact you immediately.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold uppercase tracking-[3px]">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#0F2F56]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our relocation services.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-[#0F2F56]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-5 pb-5 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}