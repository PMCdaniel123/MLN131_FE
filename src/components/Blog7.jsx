import { Link } from "react-router-dom";

const post = {
  id: 7,
  title: "Cơ sở xây dựng gia đình trong thời kì quá độ lên chủ nghĩa xã hội",
  description:
    "Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội là sự phát triển của lực lượng sản xuất và tương ứng trình độ của lực lượng sản xuất là quan hệ sản xuất mới, xã hội chủ nghĩa. Cốt lõi của quan hệ sản xuất mới ấy là chế độ sở hữu xã hội chủ nghĩa đối với tư liệu sản xuất từng bước hình thành và củng cố thay thế chế độ sở hữu tư nhân về tư liệu sản xuất.",
  date: "Ngày 17 tháng 2 năm 2025",
  category: { title: "Gia đình" },
  author: {
    name: "Phạm Mạnh Cường",
    role: "Sinh viên",
    imageUrl: "/people/cuong.jpg",
  },
};

function Blog7() {
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
            <b className="text-lg mt-4">1. Cơ sở kinh tế - xã hội</b>
            <p>
              Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ
              lên chủ nghĩa xã hội là sự phát triển của lực lượng sản xuất và
              tương ứng trình độ của lực lượng sản xuất là quan hệ sản xuất mới,
              xã hội chủ nghĩa. Cốt lõi của quan hệ sản xuất mới ấy là chế độ sở
              hữu xã hội chủ nghĩa đối với tư liệu sản xuất từng bước hình thành
              và củng cố thay thế chế độ sở hữu tư nhân về tư liệu sản xuất.
              Nguồn gốc của sự áp bức bóc lột và bất bình đẳng trong xã hội và
              gia đình dần dần bị xóa bỏ, tạo cơ sở kinh tế cho việc xây dựng
              quan hệ bình đẳng trong gia đình và giải phóng phụ nữ trong trong
              xã hội.V.I. Lênnin đã viết: “Bước thứ hai và là bước chủ yếu là
              thủ tiêu chế độ tư hữu về ruộng đất, công xưởng và nhà máy. Chính
              như thế và chỉ có như thế mới mở được con đường giải phóng hoàn
              toàn và thật sự cho phụ nữ, mới thủ tiêu được “chế độ nô lệ gia
              đình” nhờ có việc thay thế nền kinh tế gia đình cá thể bằng nền
              kinh tế xã hội hóa quy mô lớn”.
            </p>
            <p>
              Xóa bỏ chế độ tư hữu về tư liệu sản xuất là xóa bỏ nguồn gốc gây
              nên tình trạng thống trị của người đàn ông trong gia đình, sự bất
              bình đẳng giữa nam và nữ, giữa vợ và chồng, sự nô dịch đối với phụ
              nữ. Bởi vì sự thống trị của người đàn ông trong gia đình là kết
              quả sự thống trị của họ về kinh tế, sự thống trị đó tự nó sẽ tiêu
              tan khi sự thống trị về kinh tế của đàn ông không còn. Xóa bỏ chế
              độ tư hữu về tư liệu sản xuất đồng thời cũng là cơ sở để biến lao
              động tư nhân trong gia đình thành lao động xã hội trực tiếp, người
              phụ nữ dù tham gia lao động xã hội hay tham gia lao động gia đình
              thì lao động của họ đóng góp cho sự vận động và phát triển, tiến
              bộ của xã hội. Như Ph.Ăngghen đã nhấn mạnh: “Tư liệu sản xuất
              chuyển thành tài sản chung, thì gia đình cá thể sẽ không còn là
              đơn vị kinh tế của xã hội nữa. Nền kinh tế tư nhân biến thành một
              ngành lao động xã hội. Việc nuôi dạy con cái trở thành công việc
              của xã hội”. Do vậy, phụ nữ có địa vị bình đẳng với đàn ông trong
              xã hội. Xóa bỏ chế độ tư hữu về tư liệu sản xuất cũng là cơ sở làm
              cho hôn nhân được thực hiện dựa trên cơ sở tình yêu chứ không phải
              vì lý do kinh tế, địa vị xã hội hay một sự tính toán nào khác.
            </p>
            <b className="text-lg mt-4">2. Cơ sở chính trị - xã hội</b>
            <p>
              Cơ sở chính trị để xây dựng gia đình trong thời kỳ quá độ lên chủ
              nghĩa xã hội là việc thiết lập chính quyền nhà nước của giai cấp
              công nhân và nhân dân lao động, nhà nước xã hội chủ nghĩa. Trong
              đó, lần đầu tiên trong lịch sử, nhân dân lao động được thực hiện
              quyền lực của mình không có sự phân biệt giữa nam và nữ. Nhà nước
              cũng chính là công cụ xóa bỏ những luật lệ cũ kỹ, lạc hậu, đè nặng
              lên vai người phụ nữ đồng thời thực hiện việc giải phóng phụ nữ và
              bảo vệ hạnh phúc gia đình. Như V.I.Lênin đã khẳng định: “Chính
              quyền xô viết là chính quyền đầu tiên và duy nhất trên thế giới đã
              hoàn toàn thủ tiêu tất cả pháp luật cũ kỹ, tư sản, đê tiện, những
              pháp luật đó đặt người phụ nữ vào tình trạng không bình đẳng với
              nam giới, đã dành đặc quyền cho nam giới. Chính quyền xô viết, một
              chính quyền của nhân dân lao động, chính quyền đầu tiên và duy
              nhất trên thế giớ đã hủy bỏ tất cả những đặc quyền gắn liền với
              chế độ tư hữu, những đặc quyền của người đàn ông trong gia đình…”.
            </p>
            <p>
              Nhà nước xã hội chủ nghĩa với tính cách là cơ sở của việc xây dựng
              gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội, thể hiện rõ
              nét nhất ở vai trò của hệ thống pháp luật, trong đó có Luật Hôn
              nhân và Gia đình cùng với hệ thống chính sách xã hội đảm bảo lợi
              ích của công dân, các thành viên trong gia đình, đảm bảo sự bình
              đẳng giới, chính sách dân số, việc làm, y tế, bảo hiểm xã hội…. Hệ
              thống pháp luật và chính sách xã hội đó vừa định hướng vừa thúc
              đẩy quá trình hình thành gia đình mới trong thời kỳ quá độ đi lên
              chủ nghĩa xã hội. Chừng nào và ở đâu, hệ thống chính sách, pháp
              luật chưa hoàn thiện thì việc xây dựng gia đình và đảm bảo hạnh
              phúc gia đình còn hạn chế.
            </p>
            <b className="text-lg mt-4">3. Cơ sở văn hóa</b>
            <p>
              Trong thời kỳ quá độ lên chủ nghĩa xã hội, cùng với những biến đổi
              căn bản trong đời sống chính trị, kinh tế, thì đời sống văn hóa,
              tinh thần cũng không ngừng biến đổi. Những giá trị văn hóa được
              xây dựng trên nền tảng hệ tư tưởng chính trị của giai cấp công
              nhân từng bước hình thành và dần dần giữ vai trò chi phối nền tảng
              văn hóa, tinh thần của xã hội, đồng thời những yếu tố văn hóa,
              phong tục tập quán, lối sống lạc hậu do xã hội cũ để lại từng bước
              bị loại bỏ.
            </p>
            <p>
              Sự phát triển hệ thống giáo dục, đào tạo, khoa học và công nghệ
              góp phần nâng cao trình độ dân trí, kiến thức khoa học và công
              nghệ của xã hội, đồng thời cũng cung cấp cho các thành viên trong
              gia đình kiến thức, nhận thức mới, làm nền tảng cho sự hình thành
              những giá trị, chuẩn mực mới, điều chỉnh các mối quan hệ gia đình
              trong quá trình xây dựng chủ nghĩa xã hội.
            </p>
            <p>
              Thiếu đi cơ sở văn hóa, hoặc cơ sở văn hóa không đi liền với cơ sở
              kinh tế, chính trị, thì việc xây dựng gia đình sẽ lệch lạc, không
              đạt hiệu quả cao.
            </p>
            <b className="text-lg mt-4">4. Chế độ hôn nhân tiến bộ</b>
            <p className="mt-4 italic">Hôn nhân tự nguyện</p>
            <p>
              Hôn nhân tiến bộ là hôn nhân xuất phát từ tình yêu giữa nam và nữ.
              Tình yêu là khát vọng của con người trong mọi thời đại. Chừng nào,
              hôn nhân không được xây dựng trên cơ sở tình yêu thì chừng đó,
              trong hôn nhân, tình yêu, hạnh phúc gia đình sẽ bị hạn chế.
            </p>
            <p>
              Hôn nhân xuất phát từ tình yêu tất yếu dẫn đến hôn nhân tự nguyện.
              Đây là bước phát triển tất yếu của tình yêu nam nữ, như Ph.Ăngghen
              nhấn mạnh: “… nếunghĩa vụ của vợ và chồng là phải thương yêu nhau
              thì nghĩa vụ của những kẻ yêu nhau há chẳng phải là kết hôn với
              nhau và không được kết hôn với người khác”. Hôn nhân tự nguyện là
              đảm bảo cho nam nữ có quyền tự do trong việc lựa chọn người kết
              hôn, không chấp nhận sự áp đặt của cha mẹ. Tất nhiên, hôn nhân tự
              nguyện không bác bỏ việc cha mẹ quan tâm, hướng dẫn giúp đỡ con
              cái có nhận thức đúng, có trách nhiệm trong việc kết hôn.
            </p>
            <p>
              Hôn nhân tiến bộ còn bao hàm cả quyền tự do ly hôn khi tình yêu
              giữa nam và nữ không còn nữa. Ph.Ăngghen viết: “Nếu chỉ riêng hôn
              nhân dựa trên cơ sở tình yêu mới hợp đạo đức thì cũng chỉ riêng
              hôn nhân trong đó tình yêu được duy trì, mới là hợp đạo đức mà
              thôi… và nếu tình yêu đã hoàn toàn phai nhạt hoặc bị một tình yêu
              say đắm mới át đi, thì ly hôn sẽ là điều hay cho cả đôi bên cũng
              như cho xã hội”. Tuy nhiên, hôn nhân tiến bộ không khuyến khích
              việc ly hôn, vì ly hôn để lại hậu quả nặng nề, nhất là đối với phụ
              nữ và con cái, cần ngăn chặn những trường hợp nông nổi khi ly hôn,
              ngăn chặn hiện tượng lợi dụng duyền ly hôn và những lý do ích kỷ
              hoặc vì mục đích vụ lợi.
            </p>
            <p className="mt-4 italic">
              Hôn nhân một vợ một chồng, vợ chồng bình đẳng
            </p>
            <p>
              Bản chất của tình yêu là không thể chia sẻ được, nên hôn nhân một
              vợ một chồng là kết quả tất yếu của hôn nhân xuất phát từ tình
              yêu. Thực hiện hôn nhân một vợ một chồng là điều kiện đảm bảo hạnh
              phúc gia đình, đồng thời cũng phù hợp với quy luật tự nhiên, phù
              hợp với tâm lý, tình cảm, đạo đức con người.
            </p>
            <p>
              Hôn nhân một vợ một chồng đã xuất hiện từ sớm trong lịch sử xã hội
              loài người, khi có sự thắng lợi của chế độ tư hữu đối với chế độ
              công hữu nguyên thủy. Tuy nhiên, trong các xã hội trước, hôn nhân
              một vợ một chồng thực chất chỉ đối với người phụ nữ. “Chế độ một
              vợ một chồng sinh ra từ sự tập trung nhiều của cải vào tay một
              người - vào tay người đàn ông, và từ nguyện vọng chuyển của cải ấy
              lại cho con cái của người đàn ông ấy, chứ không phải của người nào
              khác. Vì thế, cần phải có chế độ một vợ một chồng về phía người
              vợ, chứ không phải về phía người chồng”. Trong thời kỳ quá độ lên
              chủ nghĩa xã hội, thực hiện chế độ hôn nhân một vợ một chồng là
              thực hiện sự giải phóng đối với phụ nữ, thực hiện sự bình đẳng,
              tôn trọng lẫn nhau giữa vợ và chồng. Trong đó vợ và chồng đều có
              quyền lợi và nghĩa vụ ngang nhau về mọi vấn đề của cuộc sống gia
              đình. Vợ và chồng được tự do lựa chọn những vấn đề riêng, chính
              đáng như nghề nghiệp, công tác xã hội, học tập và một số nhu cầu
              khác v.v.. Đồng thời cũng có sự thống nhất trong việc giải quyết
              những vấn đề chung của gia đình như ăn, ở, nuôi dạy con cái. nhằm
              xây dựng gia đình hạnh phúc.
            </p>
            <p>
              Quan hệ vợ chồng bình đẳng là cơ sở cho sự bình đẳng trong quan hệ
              giữa cha mẹ với con cái và quan hệ giữa anh chị em với nhau. Nếu
              như cha mẹ có nghĩa vụ yêu thương con cái, ngược lại, con cái cũng
              có nghĩa vụ biết ơn, kính trọng, nghe lời dạy bảo của cha mẹ. Tuy
              nhiên, quan hệ giữa cha mẹ và con cái, giữa anh chị em sẽ có những
              mâu thuẫn không thể tránh khỏi do sự chênh lệch tuổi tác, nhu cầu,
              sở thích riêng của mỗi người. Do vậy, giải quyết mâu thuẫn trong
              gia đình là vấn đề cần được quan tâm của mọi người.
            </p>
            <p className="mt-4 italic">Hôn nhân được đảm bảo về pháp lý</p>
            <p>
              Quan hệ hôn nhân, gia đình thực chất không phải là vấn đề riêng tư
              của mỗi gia đình mà là quan hệ xã hội. Tình yêu giữa nam và nữ là
              vấn đề riêng của mỗi người, xã hội không can thiệp, nhưng khi hai
              người đã thỏa thuận để đi đến kết hôn, tức là đã đưa quan hệ riêng
              bước vào quan hệ xã hội, thì phải có sự thừa nhận của xã hội, điều
              đó được biểu hiện bằng thủ tục pháp lý trong hôn nhân. Thực hiện
              thủ tục pháp lý trong hôn nhân, là thể hiện sự tôn trọng trong
              tình tình yêu, trách nhiệm giữa nam và nữ,trách nhiệm của cá nhân
              với gia đình và xã hội và ngược lại. Đây cũng là biện pháp ngăn
              chặn những cá nhân lợi dụng quyền tự do kết hôn, tự do ly hôn để
              thảo mãn những nhu cầu không chính đáng, để bảo vệ hạnh phúc của
              cá nhân và gia đình. Thực hiện thủ tục pháp lý trong hôn nhân
              không ngăn cản quyền tự do kết hôn và tự do ly hôn chính đáng, mà
              ngược lại, là cơ sở để thực hiện những quyền đó một cách đầy đủ
              nhất.
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

export default Blog7;
