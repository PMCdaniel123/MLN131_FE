import { useParams, Link } from "react-router-dom";
import Blog1 from "../components/Blog1";
import Blog2 from "../components/Blog2";
import Blog3 from "../components/Blog3";
import Blog4 from "../components/Blog4";
import Blog5 from "../components/Blog5";
import Blog6 from "../components/Blog6";
import Blog7 from "../components/Blog7";
import { posts } from "../constants/constants";

function BlogDetail() {
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
    <div>
      {id === "1" ? <Blog1 /> : null}
      {id === "2" ? <Blog2 /> : null}
      {id === "3" ? <Blog3 /> : null}
      {id === "4" ? <Blog4 /> : null}
      {id === "5" ? <Blog5 /> : null}
      {id === "6" ? <Blog6 /> : null}
      {id === "7" ? <Blog7 /> : null}
    </div>
  );
}

export default BlogDetail;
