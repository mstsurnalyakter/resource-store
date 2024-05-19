import { useLoaderData, useNavigate } from "react-router"

const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,phone} = user;
    const navigate = useNavigate();
    const handleGoBack = ()=>{
      navigate(-1)
    }
  return (
    <div className="border-2 border-red-500 w-1/2 mx-auto my-32 p-10 rounded-md">
        <h2>Details about Users</h2>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <button className="btn" onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default UserDetails