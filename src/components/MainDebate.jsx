import { CirclePlus, Heart, MessageCircle, SendHorizontal } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function MainDebate({ idea }) {
  const [like, setLike] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  return (
    <div>
      <div
        className="inline-flex flex-row items-center float-right gap-2 text-green-700 font-semibold mb-4 cursor-pointer hover:text-green-500"
        onClick={() => setIsCreate(!isCreate)}
      >
        <CirclePlus />
        <span>Tạo bài viết mới</span>
      </div>
      {isCreate && (
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col mb-4">
          <textarea
            rows={4}
            placeholder="Nội dung bài viết"
            className="w-full border px-4 py-2 rounded-md"
          ></textarea>
          <button
            className="bg-green-700 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-green-500"
            onClick={() => setIsCreate(!isCreate)}
          >
            Đăng
          </button>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Các bài viết tương tự</h2>
      <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col">
        <div className="flex flex-row items-center justify-start gap-4 mb-4">
          <img
            src="/people/studio-shot-beautiful-happy-retired-caucasian-female-with-pixie-hairdo-crossing-arms-her-chest-having-confident-look-smiling-broadly.jpg"
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Lê Xuân Nhi</p>
            <p className="text-sm text-gray-400">16/01/2024</p>
          </div>
        </div>
        <div className="ml-20">{idea}</div>
        <div className="flex flex-row items-center justify-start gap-4 mt-4 ml-20">
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
    </div>
  );
}

export default MainDebate;
