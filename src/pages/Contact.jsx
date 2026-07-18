import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";


const contactInfo = [
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    desc: "+91 84484 48603",
  },
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    desc: "agarwalpackers\nindirapuram@gmail.com",
  },
  {
    icon: <MapPin size={28} />,
    title: "Location",
    desc: "Plot Number 353 Basement, Niti Khand 1,Opposite Cambridge Schools Indirapuram, Ghaziabad, Uttar Pradesh 201014",
  },
  {
    icon: <Clock3 size={28} />,
    title: "Working Hours",
    desc: "24×7 Customer Support",
  },
];


export default function Contact() {

  return (

    <section
      id="contact"
      className="
        py-16
        md:py-24
        bg-slate-50
      "
    >
      <div className="
        max-w-7xl
        mx-auto
        px-5
      ">

        {/* Heading */}

        <div className="
          text-center
          max-w-xl
          mx-auto
        ">
          <span className="
            text-yellow-500
            uppercase
            tracking-[4px]
            font-semibold
            text-sm
          ">
            Contact Us
          </span>


          <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-[#0F2F56]
          ">

            Get In Touch
            <span className="text-yellow-500">
              {" "}With Us
            </span>

          </h2>


          <p className="
            mt-5
            text-gray-600
            leading-8
          ">

            Planning your next move?
            Contact Agrawal Packers & Movers
            for safe, reliable and affordable relocation services.

          </p>
        </div>

        <div className="
          grid
          lg:grid-cols-2
          gap-10
          mt-16
        ">
          {/* Left Side */}

          <div>

            <h3 className="
              text-1xl
              font-bold
              text-[#0F2F56]
              mb-6
            ">

              Contact Information

            </h3>
            <div
                className="
                    grid
                    grid-cols-1
                    xl:grid-cols-2
                    gap-6
                "
                >

              {
                contactInfo.map((item)=>(
                  
                  <div
                    key={item.title}
                    className="
                      bg-white
                      rounded-2xl
                      p-6
                      shadow
                      hover:shadow-xl
                      transition
                      duration-300
                    "
                  >
                    <div className="
                      w-14
                      h-14
                      rounded-xl
                      bg-[#0F2F56]
                      text-yellow-400
                      flex
                      items-center
                      justify-center
                    ">

                      {item.icon}

                    </div>
                    <h4 className="
                      mt-5
                      text-lg
                      font-bold
                      text-[#0F2F56]
                    ">

                      {item.title}

                    </h4>


                    <p className="
                      mt-2
                      text-gray-600
                    ">

                      {item.desc}

                    </p>


                  </div>

                ))
              }
            </div>
          </div>

          {/* Form */}

          <div className="
            bg-white
            rounded-3xl
            p-6
            md:p-10
            shadow-lg
          ">
            <h3 className="
              text-2xl
              font-bold
              text-[#0F2F56]
            ">

              Request A Free Quote

            </h3>
            <p className="
              mt-2
              text-gray-600
            ">

              Fill the form and our team will contact you shortly.

            </p>
            <form className="
              mt-8
              space-y-5
            ">
              <input

                type="text"

                placeholder="Your Name"

                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-yellow-500
                "
              />
              <input

                type="tel"

                placeholder="Phone Number"

                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-yellow-500
                "
              />
              <select

                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  text-gray-600
                  outline-none
                  focus:border-yellow-500
                "
              >
                <option>
                  Select Service
                </option>

                <option>
                  Home Shifting
                </option>

                <option>
                  Office Relocation
                </option>

                <option>
                  Car Transport
                </option>

                <option>
                  Bike Transport
                </option>
              </select>
              <textarea

                rows="5"

                placeholder="Your Message"

                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-yellow-500
                "
              />
              <button
                type="submit"
                className="
                  w-full
                  bg-[#0F2F56]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-yellow-500
                  hover:text-black
                  transition
                "
              >
                Send Enquiry
                <Send size={20}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}