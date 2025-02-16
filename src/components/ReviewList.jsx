import { useEffect, useState } from "react";
import { reviewsList } from "../constants/constants";
import { MessageSquare } from "lucide-react";

const ReviewList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviewsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 py-6">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Các đánh giá gần đây
      </h1>
      <div className="relative w-full overflow-hidden pb-6">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviewsList.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white rounded-lg border flex flex-col p-6">
                <div className="flex flex-row gap-4 items-center justify-start mb-6 relative">
                  <img
                    src={`logo_tron.png`}
                    alt={review.name}
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                    <div className="flex justify-start">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 md:block hidden">
                    <MessageSquare size={40} className="text-green-500" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
          {reviewsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
