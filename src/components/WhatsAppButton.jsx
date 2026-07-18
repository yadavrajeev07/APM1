import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/918448448603?text=Hello%20Agrawal%20Packers%20%26%20Movers,%20I%20need%20a%20quotation."
      
      target="_blank"

      rel="noopener noreferrer"

      className="
        fixed
        right-5
        bottom-6
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        text-white
        flex
        items-center
        justify-center
        shadow-xl
        animate-bounce
        hover:scale-110
        transition
      "
    >

      <FaWhatsapp size={38}/>

    </a>

  );

}