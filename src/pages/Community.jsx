import { useScroll, useSpring, motion } from "motion/react";
import EventList from "../components/EventList";
import DebateSection from "../components/DebateSection";

function Community() {
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
        <EventList />
        <div className="mt-20">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
            Các chủ đề tranh luận
          </h1>
          <DebateSection title="Gia đình hạt nhân" />
          <DebateSection title="Gia đình truyền thống" />
        </div>
      </div>
    </div>
  );
}

export default Community;
