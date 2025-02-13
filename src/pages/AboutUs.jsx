import ContactSection from "../components/ContactSection";
import Team from "../components/Team";
import { useScroll, useSpring, motion } from "motion/react";

function AboutUs() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="mt-28">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#24a957",
        }}
        className="z-50"
      />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
            Về chúng tôi
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/portfolio/thought-catalog-gv-T-OjLe4c-unsplash.jpeg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full md:w-3/4"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Chúng tôi là ai?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chào mừng bạn đến với{" "}
                <p className="font-semibold text-green-700 inline">
                  {" "}
                  Roots & Wings
                </p>
                , nơi hôn nhân và gia đình luôn được đặt lên hàng đầu. Chúng tôi
                cam kết mang đến những giải pháp, kiến thức và sự hỗ trợ tốt
                nhất giúp các cặp đôi, gia đình xây dựng một mối quan hệ hạnh
                phúc và bền vững.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sứ mệnh của chúng tôi là đồng hành cùng các gia đình trên hành
                trình yêu thương, thấu hiểu và phát triển. Với đội ngũ chuyên
                gia giàu kinh nghiệm, chúng tôi cung cấp những lời khuyên thực
                tế, các chương trình hỗ trợ và nội dung giá trị giúp bạn vượt
                qua mọi thử thách trong hôn nhân và gia đình.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hãy cùng chúng tôi tạo dựng những giá trị bền vững, xây dựng một
                tổ ấm hạnh phúc và lan tỏa tình yêu thương! ❤️
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
              💖 Sứ Mệnh, Tầm Nhìn và Giá Trị Cốt Lõi
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  ✨ Sứ Mệnh
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Mang đến những kiến thức, công cụ và sự hỗ trợ tốt nhất để
                  giúp các cặp đôi và gia đình xây dựng mối quan hệ vững chắc,
                  hạnh phúc và tràn đầy yêu thương.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  🔭 Tầm Nhìn
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành nền tảng hàng đầu về hôn nhân và gia đình, nơi mọi
                  người có thể tìm thấy lời khuyên đáng tin cậy, sự hỗ trợ
                  chuyên sâu và cộng đồng yêu thương cùng chia sẻ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-4">
                  💎 Giá Trị Cốt Lõi
                </h4>
                <ul className="list-disc list-inside">
                  <li className="text-gray-600 leading-relaxed">
                    <b>Tình Yêu & Sự Thấu Hiểu</b> – Mọi mối quan hệ đều bắt
                    nguồn từ sự yêu thương và chia sẻ.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    <b>Sự Tin Cậy</b> – Cung cấp nội dung và dịch vụ uy tín,
                    thực tế.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    <b>Đồng Hành & Hỗ Trợ</b> – Chúng tôi luôn bên bạn trên hành
                    trình xây dựng hạnh phúc gia đình.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <ContactSection />
    </div>
  );
}

export default AboutUs;
