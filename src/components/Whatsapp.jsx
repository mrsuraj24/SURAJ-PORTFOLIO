import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/917376731077"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-7 right-20 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40 animate-pulse-glow"
      title="Chat on WhatsApp"
      style={{
        background: 'linear-gradient(135deg, #25d366, #128c7e)',
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
      }}
    >
      <FaWhatsapp size={24} className="text-white" />
    </a>
  );
}

export default WhatsApp;