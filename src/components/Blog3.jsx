import { Link } from "react-router-dom";

const post = {
  id: 3,
  title:
    "Sự chuyển đổi trong xã hội hiện nay đã dẫn đến sự phát triển của mô hình gia đình hạt nhân.",
  description:
    "Trong xã hội nông nghiệp, gia đình mở rộng với nhiều thế hệ chung sống là phổ biến, nhằm đáp ứng nhu cầu lao động và hỗ trợ lẫn nhau trong sản xuất nông nghiệp. Tuy nhiên, khi xã hội chuyển sang công nghiệp hóa, yêu cầu về tính linh hoạt và di chuyển tăng cao, dẫn đến việc các gia đình hạt nhân (chỉ gồm cha mẹ và con cái) trở nên phổ biến hơn. Mô hình này gọn nhẹ, linh hoạt và có khả năng thích ứng nhanh với các biến đổi xã hội.",
  date: "Ngày 27 tháng 1 năm 2025",
  category: { title: "Gia đình" },
  author: {
    name: "Nguyễn Hải Nam",
    role: "Sinh viên",

    imageUrl: "/people/nam.jpg",
  },
};

function Blog3() {
  return (
    <div className="mt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-500">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <img
                alt={post.author.name}
                src={post.author.imageUrl}
                className="h-12 w-12 object-cover rounded-full"
              />
              <div>
                <p className="text-base font-medium text-black">
                  <a href={post.author.href}>{post.author.name}</a>
                </p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">{post.date}</p>
            </div>
          </header>

          <div className="flex flex-col gap-4">
            <p className="mt-4">
              Sự chuyển đổi từ xã hội nông nghiệp truyền thống sang xã hội công
              nghiệp hiện đại đã dẫn đến sự phát triển của mô hình gia đình hạt
              nhân, thay thế dần cho gia đình truyền thống nhiều thế hệ. Đây
              được coi là một xu thế khách quan, phản ánh sự thích ứng của cấu
              trúc gia đình với những biến đổi kinh tế - xã hội.
            </p>
            <b className="text-lg mt-4">Nguyên nhân của sự chuyển đổi</b>
            <p>
              Trong xã hội nông nghiệp, gia đình mở rộng với nhiều thế hệ chung
              sống là phổ biến, nhằm đáp ứng nhu cầu lao động và hỗ trợ lẫn nhau
              trong sản xuất nông nghiệp. Tuy nhiên, khi xã hội chuyển sang công
              nghiệp hóa, yêu cầu về tính linh hoạt và di chuyển tăng cao, dẫn
              đến việc các gia đình hạt nhân (chỉ gồm cha mẹ và con cái) trở nên
              phổ biến hơn. Mô hình này gọn nhẹ, linh hoạt và có khả năng thích
              ứng nhanh với các biến đổi xã hội.
            </p>
            <b className="text-lg mt-4">Tác động tích cực</b>
            <p>
              Gia đình hạt nhân tạo điều kiện cho mỗi thành viên có không gian
              tự do tương đối lớn để phát triển cá nhân. Vai trò cá nhân được đề
              cao, giúp thúc đẩy sự sáng tạo và độc lập. Ngoài ra, mô hình này
              cũng phù hợp với xu hướng di cư đến các khu công nghiệp và đô thị,
              nơi yêu cầu về lao động và cơ hội kinh tế cao hơn.
            </p>
            <img
              src="https://exe201.sirv.com/Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n-20250213T151616Z-001/%20Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n/IMG_6243.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">Thách thức và tác động tiêu cực</b>
            <p>
              Tuy nhiên, sự thu nhỏ quy mô gia đình cũng mang đến những thách
              thức. Việc thiếu sự hỗ trợ từ các thế hệ trước có thể dẫn đến khó
              khăn trong việc chăm sóc con cái và người cao tuổi. Ngoài ra, sự
              gắn kết gia đình có thể bị suy giảm, và các giá trị văn hóa truyền
              thống có nguy cơ bị mai một.
            </p>
            <img
              src="https://exe201.sirv.com/Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n-20250213T151616Z-001/%20Gia%20%C4%91%C3%ACnh%20h%E1%BA%A1t%20nh%C3%A2n/IMG_6240.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">
              Giải pháp giảm thiểu tác động tiêu cực
            </b>
            <p>
              Để giảm thiểu những tác động tiêu cực, cần có các chính sách hỗ
              trợ từ nhà nước và xã hội. Việc xây dựng các dịch vụ công cộng như
              nhà trẻ, trung tâm chăm sóc người cao tuổi, và các chương trình
              giáo dục về giá trị gia đình có thể giúp hỗ trợ các gia đình hạt
              nhân. Ngoài ra, việc khuyến khích sự kết nối giữa các thế hệ trong
              gia đình, dù không sống chung, cũng rất quan trọng để duy trì và
              phát huy các giá trị truyền thống.
            </p>
            <b className="text-lg mt-4">Kết luận:</b>
            <p>
              Tóm lại, sự phát triển của gia đình hạt nhân là một xu thế khách
              quan trong quá trình công nghiệp hóa. Thay vì cố gắng cản trở,
              chúng ta nên tập trung vào việc giảm thiểu các tác động tiêu cực
              thông qua các chính sách và biện pháp hỗ trợ phù hợp.
            </p>
          </div>

          <footer className="mt-12 border-t border-gray-200 pt-6">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-green-500 hover:underline"
            >
              ← Quay lại
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}

export default Blog3;
