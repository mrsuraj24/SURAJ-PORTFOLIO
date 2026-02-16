import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/917376731077"
      target="_blank"
      className="fixed bottom-7 right-20 bg-green-500/90 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-600/90 transition" title="Chat on WhatsApp"
    >
      <FaWhatsapp size={30}/>
    </a>
  );
}

export default WhatsApp;