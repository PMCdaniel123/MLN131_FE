import { useInView } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Course({ index, image, title, author, date, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref}>
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
          className="bg-white rounded-lg shadow-lg overflow-hidden group relative cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300">
              {title}
            </h2>
            <p className="text-sm text-gray-500 my-2">
              Posted By <span className="text-blue-500">{author}</span> &bull;{" "}
              {date}
            </p>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-300 group-hover:animate-border"></span>
        </div>
      </span>
    </section>
  );
}

export default Course;
