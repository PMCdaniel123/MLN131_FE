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

  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    // More posts...
  ];
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
