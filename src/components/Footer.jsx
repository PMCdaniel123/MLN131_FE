import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-12 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Đại đại đi
          </Link>
          <nav className="space-x-6 text-gray-500 text-md flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="py-4 pl-6 flex items-center justify-center font-semibold cursor-pointer"
              >
                <Link
                  to={`/${link.id}`}
                  className={` hover:text-green-600 transition-colors duration-200`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="mb-4 md:mb-0">
            © Copyright. Designed And Developed By Đại đại đi
          </p>
          <div className="flex items-center space-x-6">
            <p>
              <Link
                to="tel:+12227778888"
                className="flex items-center space-x-2 hover:text-green-600 transition"
              >
                <Phone className="text-green-600" size={20} />
                <span>+1 (222) 777 8888</span>
              </Link>
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
