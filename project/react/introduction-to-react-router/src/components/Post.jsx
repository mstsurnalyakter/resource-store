import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title,body,userId,id} = post;

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }
  return (
    <div className="border-2 border-purple-600 p-6 rounded-md shadow-xl flex flex-col">
      <div className="flex-grow">
        <h2 className="font-bold text-center">{userId}</h2>
        <h2 className="font-bold text-center uppercase">{title}</h2>
        <h2>{body}</h2>
      </div>
      <Link className="text-center text-purple-500 " to={`/post/${id}`}>
        Show Details
      </Link>
      <Link to={`/post/${id}`}>
      <button className="btn">Click Me</button>
      </Link>
      <button className="btn" onClick={handleShowDetail}>Click to see Details</button>
    </div>
  );
}

export default Post