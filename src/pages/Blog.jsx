import { useScroll, useSpring, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Blog() {
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
    {
      id: 2,
      title: "How to use customer feedback for growth",
      href: "#",
      description:
        "Learn the best ways to gather and leverage customer feedback to grow your business effectively.",
      date: "Mar 20, 2020",
      datetime: "2020-03-20",
      category: { title: "Business", href: "#" },
      author: {
        name: "Sarah Connor",
        role: "Product Manager",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Top trends in digital marketing 2023",
      href: "#",
      description:
        "Discover the latest trends in digital marketing to keep your campaigns relevant and impactful.",
      date: "Apr 1, 2023",
      datetime: "2023-04-01",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "John Doe",
        role: "Marketing Expert",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      title: "Mastering the art of remote work",
      href: "#",
      description:
        "Tips and strategies for excelling in a remote work environment, including productivity hacks and communication tools.",
      date: "May 10, 2021",
      datetime: "2021-05-10",
      category: { title: "Workplace", href: "#" },
      author: {
        name: "Jane Smith",
        role: "HR Specialist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 5,
      title: "The ultimate guide to SEO in 2023",
      href: "#",
      description:
        "A comprehensive guide to search engine optimization techniques to boost your website's visibility and ranking.",
      date: "Jul 15, 2023",
      datetime: "2023-07-15",
      category: { title: "SEO", href: "#" },
      author: {
        name: "Mark Johnson",
        role: "SEO Consultant",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 6,
      title: "Building a resilient business strategy",
      href: "#",
      description:
        "Explore ways to create a robust business strategy that can adapt to challenges and thrive in uncertain times.",
      date: "Aug 22, 2022",
      datetime: "2022-08-22",
      category: { title: "Strategy", href: "#" },
      author: {
        name: "Alice Nguyen",
        role: "Business Analyst",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <div>
      {/* Scroll Indicator */}
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

      {/* Blog Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
            From the blog
          </h1>
          <p className="text-center mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <motion.article
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg border border-gray-200 hover:cursor-pointer"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
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
                      className="size-10 rounded-full bg-gray-50"
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
