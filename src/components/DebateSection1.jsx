import { useState } from "react";
import MainDebate from "./MainDebate";
import { CirclePlus } from "lucide-react";

// eslint-disable-next-line react/prop-types
function DebateSection1({ title }) {
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
            "Con người thương luôn nghĩ cái gì có lợi cho mình thì cho cái đó là đúng, miệng kêu phải tự lo nhưng khi chia đất thì về ko thiếu mặt nào, rồi đi làm từ thiện để thể hiện mình là người nhân hậu, nhưng ba mẹ ốm đi viện thì cuối tuần vô thăm. Uhm thì xã hội hiện đại, nhưng vô cảm quá. Con cái ko có khả năng chăm lo cho cha mẹ thì ko nói chi, nhưng giờ toàn những người có khả năng nhưng đều nghĩ là chăm sóc cha mẹ thì họ ko có trách nhiệm. Sinh ra ở trên đời đi làm thì có trách nhiệm với đồng nghiệp, cty, ra xã hội thì có trách nhiệm với xã hội, nhưng ối giời ôi họ lại cho ko có trách nhiệm với người sinh ra họ. Cha mẹ phần lớn đều yêu thương con, phần lớn đều hy sinh và ko muốn con cực đâu nên cha mẹ chả bắt con cái hy sinh gia đình nhỏ của mình đâu, có sức nhiêu thì lo nhiêu."
          }
          date={"08/02/2025"}
        />
        <MainDebate
          idea={
            "ba mẹ thương con thì không ba mẹ nào đòi hỏi con cái phải có hiếu với mình, phải ở cạnh mình, ba mẹ thương con chỉ mong con cái thành đạt, tuy đứa con ở xa lâu lâu mới về, nhưng ba mẹ rất tự hào, khoe con tui thế này con tui thế kia giỏi lắm. Ba mẹ chỉ mong con có thể tự lo được cho bản thân, chăm sóc cháu nên người, là niềm vui của ba mẹ rồi. Lúc trước vợ chồng tôi đòi về quê sống với mẹ vì mẹ k chịu lên thành phố ở, nói sống ở quê quen rồi lên thành phố ở chung cư ngột ngạt lắm, nhưng mẹ phản đối vì về quê sẽ k có việc làm, mẹ vất vả lắm mới nuôi con cái ăn học đàng hoàng, mong con cái thoát khỏi cái làng quê nghèo này, rồi mẹ kể hồi xưa nghèo ra sao, nghèo rồi người ta khinh như thế nào, mẹ quyết tâm để con cái k như mẹ, tụi con ăn học thành đạt, mẹ mừng lắm, niềm tự hào của mẹ, về quê lại k có tiền lúc đó lại vất vả như mẹ hồi xưa. lúc đó mẹ lại sầu thêm. Còn bị chê bất hiếu, bỏ ba mẹ dưới quê 1 mình chỉ có mấy người bà con, hàng xóm chê thôi. Tụi tui cũng buồn lắm vì k được ở gần mẹ, mẹ đã hy sinh cả đời, lúc nào cũng nghĩ cho con cái.Giờ có điện thoại thông minh, mỗi ngày dành cả tiếng để gọi cho con cháu , và con cháu mỗi ngày cũng phải dành thời gian gọi điện thoại, khi bệnh thì con cháu rước mình lên thành phố chăm. Đời chỉ khổ khi ta nghèo, có ở gần ba mẹ mà k có tiền thì ba mẹ cũng k có vui nỗi."
          }
          date={"08/02/2025"}
        />
        <MainDebate
          idea={
            "Tôi ủng hộ gia đình hạt nhân, đồng thời siêu ủng hộ những bạn trẻ tự lập sớm. Cá nhân tôi thấy, chính những bạn trẻ tự giác lập thân từ sớm, không lệ thuộc bố mẹ từ sớm đã tạo ý thức tự mình lo cho mình của các ông bố bà mẹ. Mười tám đôi mươi tách khỏi bố mẹ, lo làm lo học nghiêm chỉnh, bố mẹ sẽ vô cùng tôn trọng thời gian, quan điểm, cách sống của con, và biết chủ động hơn sắp xếp tương lai cho bản thân."
          }
          date={"08/02/2025"}
        />
        <MainDebate
          idea={
            "Phương Tây họ có điều kiện kinh tế, văn hóa, xã hội và truyền thống khác hẳn chúng ta. Trẻ con phương Tây khi sinh ra được nhà nước lo từ A đến Z. Đi học không tốn tiền học phí còn được bao cơm. Hàng tháng nhà nước còn cho tiền trợ cấp đến 18 hoặc 21 tuổi tùy điều kiện. Trên 18 học đại học có nước còn miễn học phí, có nước thì cho vay lãi suất thấp. Bạo hành con trẻ là bị điều tra ngay. Cho nên cha mẹ là người đồng hành trong cuộc của con trẻ nhưng không phải bận tâm quá nhiều về tài chính để nuôi con. Trong khi đó ở Ta thì khác hoàn toàn. Không kể đến các gia đình bạo ngược chiếm phần rất nhỏ trong xã hội, các bậc cha mẹ chúng ta hy sinh cả đời vì con. Lo từng miếng ăn giấc ngủ, lo cho học từ mầm non cho đến khi lập gia đình sinh con, lại lo cho con có cái nhà xong rồi lại chăm cháu. Cho nên tôi thấy công lao của cha mẹ ở Ta như cao như trời biển. Tôi sống và làm việc trong ngành y tế ở nước ngoài bao năm nay, một quốc gia phát triển. Hệ thống chăm sóc người cao tuổi của họ quá tốt nên con cái có thể yên tâm phần nào. Ngoài ra tôi còn nhận thấy một điều nữa. Đó là con cái càng học cao càng thành công thì họ càng quan tâm chăm sóc cẩn thận cha mẹ của họ, dù không sống chung. Đó là điều nên học chứ không phải học cái bề nổi không. Có nhiều cách để báo hiếu và tìm cách dung hòa giữa cuộc sống gia đình to và gia đình nhỏ. Quan trọng là bạn có muốn hay không. Làm được thì tâm mới an lành và làm gương cho con cháu đời sau."
          }
          date={"08/02/2025"}
        />
      </div>
    </div>
  );
}

export default DebateSection1;
