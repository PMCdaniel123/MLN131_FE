import { useScroll, useSpring, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { posts } from "../constants/constants";

function Blog() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" },
  };

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

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
            Các bài viết
          </h1>

          <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <motion.article
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg border border-gray-200 hover:cursor-pointer h-full"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <p className="text-gray-500">{post.date}</p>
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category.title}
                    </p>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt={post.author.name}
                      src={post.author.imageUrl}
                      className="w-10 h-10 object-cover rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
