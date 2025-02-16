import { useState } from "react";
import MainDebate from "./MainDebate";
import { CirclePlus } from "lucide-react";

// eslint-disable-next-line react/prop-types
function DebateSection({ title }) {
  const [isCreate, setIsCreate] = useState(false);

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
        <MainDebate
          idea={
            "Một vài người tin rằng để thành đạt thì phải xa cha mẹ. Kiểu như được cái này thì phải mất cái kia. Còn tui, tui chọn cả hai. Vừa thành công vừa gần gũi cha mẹ. Thành công mà phải đánh đổi nhiều thứ thì không phải là thành công thực sự. Được ở cùng cha mẹ là diễm phúc và đặc ân, tiền không mua được."
          }
          date={"10/02/2025"}
        />
        <MainDebate
          idea={
            "Toàn những gia đình ko có điều kiện tài chính hoặc ko biết hoà hợp các thành viên trong gia đình mới phải sống riêng mà thôi. Sống riêng là xu hướng tất yếu vì đa số con người rất ích kỷ, ai cũng muốn hạnh phúc bản thân chứ ko vì người khác nên đó là bước đi lùi về mặt đạo đức chứ chả phải tiến bộ gì cả."
          }
          date={"10/02/2025"}
        />
      </div>
    </div>
  );
}

export default DebateSection;
