import { useParams, Link } from "react-router-dom";
import Blog1 from "../components/Blog1";
import Blog2 from "../components/Blog2";
import Blog3 from "../components/Blog3";
import Blog4 from "../components/Blog4";
import Blog5 from "../components/Blog5";

function BlogDetail() {
  const posts = [
    {
      id: 1,
      title:
        "Sự chuyển biến cơ bản của gia đình Việt Nam trong bối cảnh hiện nay",
      description:
        "Detailed guide on how to boost your conversion rate with proven strategies and expert advice.",
      content:
        "Conversion rate optimization (CRO) is an essential aspect of digital marketing. In this article, we will explore strategies that include A/B testing, user feedback analysis, and proper call-to-actions to help increase conversions...",
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
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
    {
      id: 2,
      title: "How to use customer feedback for growth",
      description:
        "Learn the best ways to gather and leverage customer feedback to grow your business effectively.",
      content:
        "Customer feedback is a goldmine for business growth. In this guide, we discuss how to collect meaningful feedback and use it to refine products, enhance services, and strengthen customer relationships.",
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
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
    {
      id: 3,
      title: "Top strategies for social media marketing",
      description:
        "Discover the best practices for creating impactful social media campaigns that drive engagement and conversions.",
      content:
        "Social media marketing is a powerful tool for connecting with your audience. This article explores key strategies, including content creation, influencer collaborations, and paid advertising to achieve your marketing goals.",
      date: "Apr 10, 2021",
      datetime: "2021-04-10",
      category: { title: "Social Media", href: "#" },
      author: {
        name: "Emily Carter",
        role: "Social Media Strategist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
    {
      id: 4,
      title: "Understanding data analytics in business",
      description:
        "An introductory guide to leveraging data analytics to make informed decisions and improve business operations.",
      content:
        "Data analytics has become a cornerstone of modern business strategy. This guide introduces tools and techniques for data collection, analysis, and visualization to help you uncover valuable insights.",
      date: "Jun 5, 2022",
      datetime: "2022-06-05",
      category: { title: "Analytics", href: "#" },
      author: {
        name: "David Johnson",
        role: "Data Scientist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
    {
      id: 5,
      title: "Effective leadership in the modern workplace",
      description:
        "Explore the traits and skills necessary for successful leadership in today's dynamic work environments.",
      content:
        "Leadership is about inspiring and guiding teams towards a shared vision. This article outlines essential leadership qualities, such as emotional intelligence, adaptability, and clear communication, to excel in your role.",
      date: "Sep 15, 2023",
      datetime: "2023-09-15",
      category: { title: "Leadership", href: "#" },
      author: {
        name: "Sophia Lee",
        role: "Leadership Coach",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
    {
      id: 6,
      title: "Effective leadership in the modern workplace",
      description:
        "Explore the traits and skills necessary for successful leadership in today's dynamic work environments.",
      content:
        "Leadership is about inspiring and guiding teams towards a shared vision. This article outlines essential leadership qualities, such as emotional intelligence, adaptability, and clear communication, to excel in your role.",
      date: "Sep 15, 2023",
      datetime: "2023-09-15",
      category: { title: "Leadership", href: "#" },
      author: {
        name: "Sophia Lee",
        role: "Leadership Coach",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      imageUrl: "https://picsum.photos/seed/picsum/536/354",
    },
  ];

  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Post not found.{" "}
          <Link to="/" className="text-blue-600">
            Go back to Blog
          </Link>
        </h1>
      </div>
    );
  }

  return (
    // <div className="bg-white py-16 sm:py-24">
    //   <div className="max-w-4xl mx-auto px-6 lg:px-8">
    //     <article>
    //       <img
    //         src={post.imageUrl}
    //         alt={post.title}
    //         className="w-full h-72 object-cover rounded-lg mb-8"
    //       />

    //       <header className="mb-8">
    //         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    //           {post.title}
    //         </h1>
    //         <p className="mt-4 text-lg text-gray-600">{post.description}</p>
    //         <div className="mt-4 flex items-center space-x-4">
    //           <img
    //             alt={post.author.name}
    //             src={post.author.imageUrl}
    //             className="h-12 w-12 rounded-full"
    //           />
    //           <div>
    //             <p className="text-sm font-medium text-gray-900">
    //               <a href={post.author.href}>{post.author.name}</a>
    //             </p>
    //             <p className="text-sm text-gray-500">{post.author.role}</p>
    //           </div>
    //           <time
    //             dateTime={post.datetime}
    //             className="ml-auto text-sm text-gray-500"
    //           >
    //             {post.date}
    //           </time>
    //         </div>
    //       </header>

    //       <div className="prose prose-lg text-gray-700 leading-relaxed">
    //         <p>{post.content}</p>
    //         <p>
    //           Additional insights: Start implementing these strategies today and
    //           watch your business grow!
    //         </p>
    //         <ul>
    //           <li>Understand your audience.</li>
    //           <li>Set measurable goals.</li>
    //           <li>Optimize based on data.</li>
    //         </ul>
    //         <blockquote>
    //           &quot;Success is not final, failure is not fatal: it is the
    //           courage to continue that counts.&quot;
    //         </blockquote>
    //       </div>

    //       <footer className="mt-12 border-t border-gray-200 pt-6">
    //         <Link
    //           to="/blog"
    //           className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
    //         >
    //           ← Quay trở lại Blog
    //         </Link>
    //       </footer>
    //     </article>
    //   </div>
    // </div>
    <div>
      {id === "1" ? <Blog1 /> : null}
      {id === "2" ? <Blog2 /> : null}
      {id === "3" ? <Blog3 /> : null}
      {id === "4" ? <Blog4 /> : null}
      {id === "5" ? <Blog5 /> : null}
    </div>
  );
}

export default BlogDetail;
