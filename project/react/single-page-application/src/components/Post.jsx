import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,body,userId,id} = post;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2>{userId}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <Link
          to={`/post/${id}`}
          className="bg-purple-600 text-white rounded-full p-4"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}

export default Post;