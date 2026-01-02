import {FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const socialLinks = [
  // { href: "https://chat.whatsapp.com/CG1hCNq9TJy8YGxctyqFab", icon: <FaWhatsapp className="size-6" /> },
  // { href: "https://youtube.com", icon: <FaYoutube className="size-5"/> },
  { href: "prasannachinusrinivasan@gmail.com", icon: <SiGmail className="size-6"/> },
  { href: "https://Instagram.com", icon: <FaInstagram className="size-6"/> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-6 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-medium md:text-left">
          © C.A.H.C.E.T 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 pr-10 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
