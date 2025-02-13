import { useInView } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Course({ index, image, title, author, date, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref} className="h-full flex">
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: isInView
            ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out"
            : "",
          transform: isInView ? "none" : "translateY(-200px) rotate(-10deg)",
          animation: isInView ? "fall 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "",
        }}
      >
        <div
          key={index}
          className="bg-white h-full rounded-lg shadow-lg overflow-hidden group relative cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={image} alt={title} className="w-full h-56 object-cover" />
          <div className="p-5 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300">
              {title}
            </h2>
            <p className="text-sm text-gray-800 my-2">{date}</p>
            <div className="text-lg my-2 flex items-center">
              <p className="text-blue-500">{author}</p>
            </div>
            <p className="text-gray-500 text-sm italic">{description}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-green-300 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-lg"></div>
        </div>
      </span>
    </section>
  );
}

export default Course;
