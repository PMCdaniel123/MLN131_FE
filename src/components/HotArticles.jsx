import { useNavigate } from "react-router-dom";

function HotArticles() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Các bài viết nổi bật
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex">
          <div
            className="relative bg-white shadow-md rounded-lg overflow-hidden h-full w-full group cursor-pointer"
            onClick={() => navigate("/blog/1")}
          >
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6234.JPG"
              alt="Main Article"
              className="w-full h-60 md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 text-sm rounded">
              Hot
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                Sự chuyển biến cơ bản của gia đình Việt Nam trong bối cảnh hiện
                nay
              </h2>
              <p className="text-gray-500">Ngày 10 tháng 2 năm 2025</p>
            </div>
            <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex-1">
            <div
              className="relative bg-white shadow-md rounded-lg overflow-hidden h-full group cursor-pointer"
              onClick={() => navigate("/blog/3")}
            >
              <img
                src="https://exe201.sirv.com/Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n-20250213T151616Z-001/%20Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n/IMG_6243.JPG"
                alt="Top Right Article"
                className="w-full h-60 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-sm rounded">
                Mới
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  Sự chuyển đổi trong xã hội hiện nay đã dẫn đến sự phát triển
                  của mô hình gia đình hạt nhân.
                </h3>
                <p className="text-gray-500">Ngày 27 tháng 1 năm 2025</p>
              </div>
              <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-full group cursor-pointer">
              <img
                src="https://exe201.sirv.com/Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n-20250213T151616Z-001/%20Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n/IMG_6239.JPG"
                alt="Bottom Right Article"
                className="w-full h-60 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300 ease-linear"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-sm rounded">
                Nhiều lượt truy cập
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  Gia đình hạt nhân cùng với sự phát triển kinh tế có làm biến
                  đổi các chức năng của gia đình Việt Nam?
                </h3>
                <p className="text-gray-500">Ngày 13 tháng 1 năm 2025</p>
              </div>
              <span className="absolute inset-0 border-b-4 border-transparent group-hover:border-green-500 transition-all duration-1000 group-hover:animate-border"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotArticles;
