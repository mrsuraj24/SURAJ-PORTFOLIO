import { NavLink } from "react-router-dom";

function WhatsApp() {
  return (
    <NavLink
      to="/contact"
      className="fixed bottom-7 right-20 bg-indigo-500/90 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-indigo-700 transition" title="Chat on WhatsApp"
    >
      💬
    </NavLink>
  );
}

export default WhatsApp;