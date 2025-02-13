import { useScroll, useSpring, motion } from "motion/react";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import CourseList from "../components/CourseList";
import HotArticles from "../components/HotArticles";
import ReviewList from "../components/ReviewList";
import QuestionList from "../components/QuestionList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addChat } from "../stores/chatSlice";
import ChatDetail from "../components/ChatDetail";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addChat());
  }, [dispatch]);

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
      <div className="mt-28 bg-gray-800 rounded-xl">
        <ChatDetail />
      </div>
      <HotArticles />
      <QuestionList />
      <CourseList />
      <CommunitySection />
      <ReviewList />
      <ContactSection />
    </div>
  );
}

export default Home;
