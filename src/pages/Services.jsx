import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Car,
  Bike,
  Package,
  Factory,
} from "lucide-react";


const services = [
  {
    title: "Home Shifting",
    description:
      "Safe and secure household relocation with expert packing and careful handling.",
    icon: Home,
  },
  {
    title: "Office Relocation",
    description:
      "Professional office shifting solutions with minimum downtime.",
    icon: Building2,
  },
  {
    title: "Car Transport",
    description:
      "Reliable vehicle transportation with complete safety.",
    icon: Car,
  },
  {
    title: "Bike Transport",
    description:
      "Door-to-door bike shifting service across India.",
    icon: Bike,
  },
  {
    title: "Packing & Unpacking",
    description:
      "Premium packing materials to protect your valuable goods.",
    icon: Package,
  },
  {
    title: "Heavy Machinery",
    description:
      "Specialized transportation for industrial equipment.",
    icon: Factory,
  },
];


export default function Services() {

return (

<section
id="services"
className="
py-20
bg-white
"
>

<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">


<div className="
text-center
mb-14
">

<h2 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-[#0F2F56]
">

Our 
<span className="text-yellow-500">
 Services
</span>

</h2>


<p className="
mt-4
text-gray-600
">

Complete relocation solutions for homes,
offices and vehicles.

</p>

</div>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{
services.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={index}

whileHover={{
y:-8
}}

className="
bg-white
rounded-2xl
p-8
shadow-lg
border
border-gray-100
hover:border-yellow-500
transition
"

>


<div className="
w-14
h-14
bg-[#0F2F56]
rounded-xl
flex
items-center
justify-center
mb-6
">


<Icon
size={28}
className="text-yellow-400"
/>


</div>


<h3 className="
text-xl
font-bold
text-[#0F2F56]
mb-3
">

{item.title}

</h3>


<p className="
text-gray-600
leading-relaxed
">

{item.description}

</p>


</motion.div>

)

})
}


</div>


</div>

</section>

);

}