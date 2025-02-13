import { Link } from "react-router-dom";

const post = {
  id: 4,
  title:
    "Gia đình truyền thống Việt Nam từ lâu đã được xây dựng trên nền tảng của những giá trị văn hóa sâu sắc.",
  description:
    "Gia đình truyền thống Việt Nam từ lâu đã được xây dựng trên nền tảng của những giá trị văn hóa sâu sắc, phản ánh tinh thần đoàn kết, yêu thương và trách nhiệm giữa các thế hệ. Một trong những đặc trưng nổi bật của gia đình Việt Nam là mô hình 'tam đại đồng đường', tức ba thế hệ cùng chung sống dưới một mái nhà. Mô hình này thể hiện sự gắn kết chặt chẽ giữa ông bà, cha mẹ và con cháu, tạo nên một môi trường gia đình ấm cúng và đầy tình thương.",
  date: "Ngày 20 tháng 1 năm 2025",
  category: { title: "Gia đình" },
  author: {
    name: "Nguyễn Hải Nam",
    role: "Sinh viên",

    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

function Blog4() {
  return (
    <div className="mt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-green-500">{post.title}</h1>
            <div className="mt-6 flex items-center gap-4">
              <img
                alt={post.author.name}
                src={post.author.imageUrl}
                className="h-12 w-12 rounded-full"
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
              Gia đình truyền thống Việt Nam từ lâu đã được xây dựng trên nền
              tảng của những giá trị văn hóa sâu sắc, phản ánh tinh thần đoàn
              kết, yêu thương và trách nhiệm giữa các thế hệ. Một trong những
              đặc trưng nổi bật của gia đình Việt Nam là mô hình &quot;tam đại
              đồng đường&quot;, tức ba thế hệ cùng chung sống dưới một mái nhà.
              Mô hình này thể hiện sự gắn kết chặt chẽ giữa ông bà, cha mẹ và
              con cháu, tạo nên một môi trường gia đình ấm cúng và đầy tình
              thương.
            </p>
            <b className="text-lg mt-4">Sự gắn kết giữa các thế hệ</b>
            <p>
              Trong gia đình truyền thống, các thế hệ luôn gắn bó mật thiết với
              nhau. Ông bà không chỉ là người truyền đạt kinh nghiệm sống, mà
              còn đóng vai trò quan trọng trong việc giáo dục, chăm sóc con
              cháu. Họ dạy dỗ những bài học về đạo đức, lối sống và truyền thống
              gia đình, giúp thế hệ trẻ hiểu và trân trọng những giá trị văn hóa
              của dân tộc. Sự hiện diện của ông bà trong gia đình cũng tạo nên
              một môi trường ổn định, nơi con cháu cảm nhận được sự yêu thương
              và hỗ trợ tinh thần.
            </p>
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6237.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">
              Tinh thần lao động và hỗ trợ lẫn nhau
            </b>
            <p>
              Gia đình truyền thống Việt Nam thường hoạt động như một đơn vị
              kinh tế tự cung tự cấp, đặc biệt trong nền kinh tế nông nghiệp.
              Các thành viên trong gia đình cùng nhau lao động, sản xuất và chia
              sẻ thành quả. Sự hợp tác này không chỉ đảm bảo cuộc sống vật chất
              mà còn củng cố tinh thần đoàn kết, trách nhiệm và sự phụ thuộc lẫn
              nhau giữa các thành viên. Mỗi người đều ý thức được vai trò của
              mình trong việc duy trì và phát triển gia đình.
            </p>
            <b className="text-lg mt-4">Yêu thương và trách nhiệm</b>
            <p>
              Tình yêu thương và trách nhiệm là những giá trị cốt lõi trong gia
              đình Việt Nam. Cha mẹ dành tình yêu thương vô bờ bến cho con cái,
              sẵn sàng hy sinh để đảm bảo tương lai tốt đẹp cho con. Ngược lại,
              con cái được giáo dục về lòng hiếu thảo, kính trọng và biết ơn đối
              với cha mẹ, ông bà. Sự tương tác này tạo nên một vòng tròn yêu
              thương và trách nhiệm, duy trì sự ổn định và bền vững của gia đình
              qua nhiều thế hệ.
            </p>
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6231.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">Kết luận:</b>
            <p>
              Những giá trị truyền thống của gia đình Việt Nam đã và đang đóng
              vai trò quan trọng trong việc hình thành và phát triển nhân cách
              của mỗi cá nhân, cũng như góp phần xây dựng một xã hội bền vững.
              Trong bối cảnh hiện đại hóa và toàn cầu hóa, việc giữ gìn và phát
              huy những giá trị này là cần thiết để bảo tồn bản sắc văn hóa dân
              tộc và tạo nền tảng cho sự phát triển của đất nước.
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

export default Blog4;
