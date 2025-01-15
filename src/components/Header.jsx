import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../constants/constants";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname.split("/")[1] || ""
  );

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    handleSetActive(location.pathname.split("/")[1] || "");
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-12 py-2 flex justify-between items-center">
          <img
            src="/logo_ngang.png"
            alt="logo"
            className="w-40 h-20 object-cover cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <button className="lg:hidden block">Menu</button>
          <ul className="hidden lg:flex space-x-12 text-gray-300 text-lg">
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
