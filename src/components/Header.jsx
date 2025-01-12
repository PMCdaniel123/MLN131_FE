import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/constants";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname.split("/")[1] || ""
  );

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="bg-gray-100 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-12 py-2 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Đại đại đi
          </Link>
          <button className="lg:hidden block">Menu</button>
          <ul className="hidden lg:flex space-x-12 text-gray-500 text-lg">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative group py-4 pl-6 flex items-center justify-center font-semibold cursor-pointer"
              >
                <Link
                  to={`/${link.id}`}
                  className={`${
                    activeLink === link.id ? "text-green-600 font-bold" : ""
                  } hover:text-green-600 transition-colors duration-200`}
                  onClick={() => handleSetActive(link.id)}
                >
                  {link.title}
                </Link>
                <span
                  className={`absolute left-0 transform -translate-x-1 mt-1 h-4 w-4 rounded-full bg-green-600 transition-all duration-300 group-hover:opacity-100 ${
                    activeLink === link.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:scale-100 scale-0"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
