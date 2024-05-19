import { useLoaderData } from "react-router"
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
  return (
    <div>
      <h2>Posts : {posts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            posts.map(post =><Post post={post} key={post.id} />)
        }
      </div>
    </div>
  );
}

export default Posts