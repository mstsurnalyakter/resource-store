import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id} = useParams();
    console.log(id);
    const { title, body, userId} = post;

  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2>{userId}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <Link
          to={`/`}
          className="bg-purple-600 text-white rounded-full p-4"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default PostDetails