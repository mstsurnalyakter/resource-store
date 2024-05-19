import { useLoaderData, useNavigate, useParams } from 'react-router'

const PostDetails = () => {
    const post = useLoaderData();
    const {id} = useParams();
     const {title,body,userId} = post;
     const navigate = useNavigate();
     const handleGoBack = ()=>{
      navigate(-1)
     }
     console.log(id);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-2 w-1/2 border-purple-600 p-6 rounded-md shadow-xl">
        <h2 className="font-bold text-center">{userId}</h2>
        <h2 className="font-bold text-center uppercase">{title}</h2>
        <h2>{body}</h2>
        <button className='btn' onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
}

export default PostDetails

/**
 * useLoaderDate
 * useRouteError
 * useParams
 * useNavigate
 */