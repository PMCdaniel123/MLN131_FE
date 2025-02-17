import { useState } from "react";
import MainDebate from "./MainDebate";
import { CirclePlus } from "lucide-react";
import { nuclearData } from "../constants/constants";

// eslint-disable-next-line react/prop-types
function DebateSection({ title }) {
  const [isCreate, setIsCreate] = useState(false);
  const [idea, setIdea] = useState("");

  const handleUpload = () => {
    nuclearData.push({ idea: idea, date: "17/02/2025" });
    setIsCreate(false);
  };

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold mb-8 text-green-700">
        {title}
      </h1>
      <div className="container mx-auto bg-gray-50 p-10">
        <div
          className="flex flex-row items-center justify-end gap-2 text-green-700 font-semibold mb-4 cursor-pointer hover:text-green-500"
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
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            ></textarea>
            <button
              className="bg-green-700 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-green-500"
              onClick={handleUpload}
            >
              Đăng
            </button>
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4">Các bài viết tương tự</h2>
        {nuclearData.map((data, index) => (
          <MainDebate idea={data.idea} date={data.date} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DebateSection;
