import { Heart, MessageCircle, SendHorizontal } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function MainDebate({ idea, date }) {
  const [like, setLike] = useState(false);
  const [isComment, setIsComment] = useState(false);

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col mb-4">
      <div className="flex flex-row items-center justify-start gap-4 mb-4">
        <img
          src="logo_tron.png"
          alt=""
          className="md:w-16 md:h-16 w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">Ẩn danh</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
      <div className="md:ml-20">{idea}</div>
      <div className="flex flex-row items-center justify-start gap-4 mt-4 md:ml-20">
        <span
          onClick={() => setLike(!like)}
          className={`cursor-pointer ${
            like ? "text-red-500" : "hover:text-red-500"
          }`}
        >
          <Heart />
        </span>{" "}
        <span
          onClick={() => setIsComment(!isComment)}
          className="cursor-pointer hover:text-gray-500"
        >
          <MessageCircle />
        </span>
      </div>
      {isComment && (
        <div className="flex flex-row items-center justify-start gap-4 mt-4 ml-20">
          <input
            type="text"
            placeholder="Viết bình luận"
            className="w-full rounded-md border px-4 py-2"
          />
          <span
            onClick={() => setIsComment(!isComment)}
            className="cursor-pointer hover:text-gray-500"
          >
            <SendHorizontal />
          </span>
        </div>
      )}
    </div>
  );
}

export default MainDebate;
