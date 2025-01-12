import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TeamMember = ({ avatar, name, role }) => {
  return (
    <div className="flex flex-col items-center shadow-md w-full group hover:scale-105 hover:shadow-2xl transition ease-linear duration-200">
      <div className="relative w-full">
        <div className="hidden group-hover:flex transition-all duration-300 ease-in-out absolute left-0 top-1/2 -translate-y-1/2 bg-white items-center justify-center flex-col p-4 gap-4 border border-gray-200">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition ease-linear duration-200"
          >
            <Facebook size={20} />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition ease-linear duration-200"
          >
            <Instagram size={20} />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition ease-linear duration-200"
          >
            <Linkedin size={20} />
          </Link>
        </div>
        <img src={avatar} alt={name} className="w-full h-96 object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center p-6 border border-gray-200 w-full">
        <h3 className="text-2xl font-bold text-green-700">{name}</h3>
        <p className="text-md text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
