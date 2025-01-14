import { useScroll, useSpring, motion } from "motion/react";
import ProfessorList from "../components/ProfessorList";
import CourseList from "../components/CourseList";
import BookList from "../components/BookList";

function Service() {
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
      <div>
        <ProfessorList />
        <CourseList />
        <BookList />
      </div>
    </div>
  );
}

export default Service;
