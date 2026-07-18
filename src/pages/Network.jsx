import {
  MapPin,
  Route,
  Truck,
  Building2,
  Globe2,
  Users,
} from "lucide-react";


const networkAreas = [
  {
    icon: <MapPin size={34} />,
    title: "Noida",
    desc: "Complete shifting services across Sector 62, Sector 18, Expressway and nearby areas.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Greater Noida",
    desc: "Reliable home and office relocation services across all major sectors.",
  },
  {
    icon: <MapPin size={34} />,
    title: "Ghaziabad",
    desc: "Professional moving solutions in Indirapuram, Vaishali and Raj Nagar.",
  },
  {
    icon: <Route size={34} />,
    title: "Delhi NCR",
    desc: "Strong transportation network covering East, West, North and South Delhi.",
  },
  {
    icon: <Truck size={34} />,
    title: "Gurgaon",
    desc: "Safe relocation services for residential and corporate shifting.",
  },
  {
    icon: <Globe2 size={34} />,
    title: "Pan India Service",
    desc: "Door-to-door transportation services available across India.",
  },
];


const stats = [
  {
    icon: <Users size={30}/>,
    number:"5000+",
    title:"Happy Customers",
  },
  {
    icon:<Truck size={30}/>,
    number:"100+",
    title:"Transport Vehicles",
  },
  {
    icon:<Route size={30}/>,
    number:"500+",
    title:"Routes Covered",
  },
];


export default function Network() {

  return (

    <section
      id="network"
      className="
        py-16
        md:py-24
        bg-white
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
          max-w-3xl
          mx-auto
        ">

          <span className="
            text-yellow-500
            uppercase
            tracking-[4px]
            font-semibold
            text-sm
          ">
            Our Network
          </span>


          <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-[#0F2F56]
          ">

            Strong Network
            <span className="text-yellow-500">
              {" "}Across NCR
            </span>

          </h2>


          <p className="
            mt-5
            text-gray-600
            leading-8
          ">

            Agrawal Packers & Movers provides fast and
            reliable relocation services across Noida,
            Delhi, Ghaziabad, Gurgaon and Greater Noida.

          </p>


        </div>





        {/* Stats */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-6
          mt-12
        ">


          {
            stats.map((item)=>(
              
              <div
                key={item.title}
                className="
                  bg-[#0F2F56]
                  rounded-2xl
                  p-6
                  text-center
                  text-white
                "
              >

                <div className="
                  flex
                  justify-center
                  text-yellow-400
                ">

                  {item.icon}

                </div>


                <h3 className="
                  mt-3
                  text-3xl
                  font-bold
                ">

                  {item.number}

                </h3>


                <p className="
                  mt-2
                  text-gray-200
                ">

                  {item.title}

                </p>


              </div>

            ))
          }


        </div>







        {/* Network Cards */}


        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-14
        ">


          {
            networkAreas.map((item)=>(
              
              <div

                key={item.title}

                className="
                  group
                  bg-slate-50
                  rounded-2xl
                  p-8
                  shadow
                  hover:shadow-2xl
                  transition
                  duration-300
                  hover:-translate-y-2
                "
              >


                <div className="
                  w-16
                  h-16
                  rounded-xl
                  bg-[#0F2F56]
                  text-yellow-400
                  flex
                  items-center
                  justify-center
                  group-hover:bg-yellow-400
                  group-hover:text-[#0F2F56]
                  transition
                ">

                  {item.icon}

                </div>



                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-[#0F2F56]
                ">

                  {item.title}

                </h3>



                <p className="
                  mt-3
                  text-gray-600
                  leading-7
                ">

                  {item.desc}

                </p>



              </div>

            ))
          }


        </div>


      </div>

    </section>

  );

}