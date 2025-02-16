import { Link } from "react-router-dom";

const post = {
  id: 1,
  title: "Sự chuyển biến cơ bản của gia đình Việt Nam trong bối cảnh hiện nay",
  description:
    "Gia đình luôn là nền tảng quan trọng của xã hội, phản ánh những biến đổi về kinh tế, văn hóa và xã hội của một quốc gia. Và, theo ý nghĩa đó, mỗi gia đình là một xã hội thu nhỏ: gia đình sản sinh ra các cá thể người, gắn kết các cá thể người thành xã hội và khi xã hội loài người được hình thành thì những hoạt động của nó thường xuyên tác động tới gia đình làm cho gia đình biến đổi về cả hình thức, cấu trúc cũng như vai trò của nó đối với xã hội.",
  date: "Ngày 10 tháng 2 năm 2025",
  category: { title: "Gia đình" },
  author: {
    name: "Đặng Nam Bình",
    role: "Sinh viên",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

function Blog1() {
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
            <b className="text-lg mt-4">
              Sự Chuyển Biến Cơ Bản Của Gia Đình Việt Nam Trong Bối Cảnh Hiện
              Nay
            </b>
            <p>
              Gia đình luôn là nền tảng quan trọng của xã hội, phản ánh những
              biến đổi về kinh tế, văn hóa và xã hội của một quốc gia. Và, theo
              ý nghĩa đó, mỗi gia đình là một xã hội thu nhỏ: gia đình sản sinh
              ra các cá thể người, gắn kết các cá thể người thành xã hội và khi
              xã hội loài người được hình thành thì những hoạt động của nó
              thường xuyên tác động tới gia đình làm cho gia đình biến đổi về cả
              hình thức, cấu trúc cũng như vai trò của nó đối với xã hội.
            </p>
            <p>
              Trong bối cảnh hiện nay, gia đình Việt Nam đang trải qua những sự
              chuyển biến đáng kể dưới tác động của công nghiệp hóa, hiện đại
              hóa và toàn cầu hóa.
            </p>
            <p>
              Sự chuyển biến của gia đình Việt Nam phản ánh sự vận động không
              ngừng của xã hội. Những thay đổi này mang đến cả cơ hội và thách
              thức, đòi hỏi mỗi gia đình phải linh hoạt thích nghi để duy trì sự
              ổn định và phát triển bền vững. Các thay đổi rõ rệt có thể kể đến
              như:
            </p>
            <b className="text-lg mt-4">1. Thay đổi cấu trúc gia đình:</b>
            <p>
              Trước đây, gia đình truyền thống Việt Nam chủ yếu là gia đình
              nhiều thế hệ cùng chung sống, thể hiện sự gắn kết chặt chẽ giữa
              ông bà, cha mẹ và con cháu. Tuy nhiên, ngày nay, mô hình gia đình
              hạt nhân (bao gồm cha mẹ và con cái) ngày càng trở nên phổ biến
              hơn, đặc biệt ở các khu đô thị và thành phố lớn. Có thể thấy quy
              mô gia đình ngày càng thu nhỏ, số lượng con cái giảm, phản ánh xu
              hướng kế hoạch hóa gia đình và thể hiện mong muốn nâng cao chất
              lượng cuộc sống. Sự thay đổi này xuất phát từ nhu cầu về sự độc
              lập, điều kiện kinh tế và ảnh hưởng bởi lối sống hiện đại của
              phương Tây
            </p>
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6233.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">
              2. Biến đổi về vai trò và trách nhiệm trong gia đình
            </b>
            <p>
              Vai trò của các thành viên trong gia đình cũng có sự điều chỉnh
              đáng kể. Nếu trước đây, người đàn ông thường giữ vị trí trụ cột
              kinh tế và người phụ nữ đảm nhiệm vai trò nội trợ chăm sóc gia
              đình, thì hiện nay phụ nữ ngày càng tham gia nhiều hơn vào các
              hoạt động kinh tế, chính trị và xã hội. Điều này thúc đẩy sự bình
              đẳng và dân chủ hơn về quan hệ của các thành viên trong gia đình.
              Vai trò của người phụ nữ được nâng cao hơn, quan hệ vợ chồng dựa
              trên sự tôn trọng và chia sẻ, giảm bớt sự phân biệt giới tính so
              với trước đây.
            </p>
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6234.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">
              3. Ảnh hưởng của công nghệ và truyền thông
            </b>
            <p>
              Sự phát triển của công nghệ thông tin và mạng xã hội đã tạo ra
              những tác động lớn đến đời sống gia đình. Các thành viên trong gia
              đình có nhiều phương tiện để kết nối với thế giới bên ngoài, nhưng
              đồng thời cũng làm giảm đi thời gian tương tác trực tiếp giữa các
              thành viên dẫn đến nguy cơ xa cách trong quan hệ gia đình. Trẻ em
              tiếp cận với công nghệ từ sớm, đòi hỏi sự quan tâm và định hướng
              nhiều hơn từ cha mẹ. Có thể nói sự phát triển của công nghệ thông
              tin và quá trình toàn cầu hóa mang lại cả cơ hội và thách thức cho
              các gia đình Việt Nam.
            </p>
            <img
              src="https://exe201.sirv.com/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh%20-20250213T151617Z-001/H%C3%B4n%20nh%C3%A2n%20gia%20%C4%91%C3%ACnh/IMG_6236.JPG"
              alt=""
              className="w-full my-4"
            />
            <b className="text-lg mt-4">
              4. Xu hướng kết hôn và sinh con thay đổi
            </b>
            <p>
              Tư duy về hôn nhân và sinh con cũng có sự chuyển biến rõ rệt. Ngày
              càng có nhiều người lựa chọn kết hôn muộn hoặc thậm chí không kết
              hôn. Tỷ lệ sinh giảm, đặc biệt ở các thành phố lớn, do áp lực công
              việc, kinh tế và mong muốn có cuộc sống cá nhân tự do hơn. Xu
              hướng này ảnh hưởng đến tỷ lệ dân số và cấu trúc xã hội trong
              tương lai.
            </p>
            <b className="text-lg mt-4">
              5. Tác động của di cư và hội nhập quốc tế
            </b>
            <p>
              Di cư lao động và du học nước ngoài cũng ảnh hưởng lớn đến gia
              đình Việt Nam. Gia đình không còn là đơn vị kinh tế khép kín như
              trước. Các thành viên tham gia vào các hoạt động kinh tế bên
              ngoài, tạo ra sự độc lập về tài chính. Nhiều gia đình có người
              thân đi làm ăn xa, dẫn đến sự xa cách giữa các thế hệ. Bên cạnh
              đó, sự giao thoa văn hóa với thế giới cũng làm thay đổi quan niệm
              về giáo dục, lối sống và cách nuôi dạy con cái. Gia đình hiện đại
              chú trọng hơn đến việc đầu tư cho con cái về kiến thức học thuật
              và kỹ năng sống nhiều hơn, nhằm đáp ứng yêu cầu của xã hội hiện
              đại.
            </p>
            <b className="text-lg mt-4">Kết luận:</b>
            <p>
              Những biến đổi trên đặt ra cả cơ hội và thách thức cho gia đình
              Việt Nam. Việc nhận thức và thích ứng với những thay đổi này là
              cần thiết để xây dựng gia đình hạnh phúc, bền vững trong bối cảnh
              hiện nay. Hiểu rõ những xu hướng này không chỉ giúp chúng ta có
              cái nhìn sâu sắc về xã hội, mà còn góp phần định hướng cho tương
              lai của chính họ trong môi trường gia đình và cộng đồng.
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

export default Blog1;
