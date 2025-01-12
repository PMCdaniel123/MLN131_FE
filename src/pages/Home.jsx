import { useScroll, useSpring, motion } from "motion/react";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import CourseList from "../components/CourseList";
import HotArticles from "../components/HotArticles";
import QuestionList from "../components/QuestionList";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="mt-32">
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
      <div>
        <video
          src="/videos/814dc43e870597176cad645798825c03.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[500px] object-cover"
        ></video>
      </div>
      <HotArticles />
      <QuestionList />
      <CourseList />
      <CommunitySection />
      <ContactSection />
    </div>
  );
}

export default Home;
