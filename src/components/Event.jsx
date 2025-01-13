import { Calendar, Flame } from "lucide-react";

// eslint-disable-next-line react/prop-types
function Event({ image, title, date, hot, description }) {
  return (
    <div>
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-full w-full group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
        />
        {hot && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 text-sm rounded flex items-center gap-1">
            HOT <Flame size={20} />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 flex items-center gap-2 mb-2">
            <Calendar size={20} /> <span>{date}</span>
          </p>
          <p className="text-gray-400 text-sm italic">{description}</p>
        </div>
        <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
      </div>
    </div>
  );
}

export default Event;
