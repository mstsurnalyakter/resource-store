import { useLoaderData } from "react-router"
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
  return (
    <div>
      <h2 className="mb-6 text-center font-bold text-2xl text-purple-600">
        Users: {posts.length}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts