import { useLoaderData } from "react-router"

const Phone = () => {
  const phone = useLoaderData()
  console.log(phone);
  return (
    <div>
      <h2>{phone?.name}</h2>
      <img src={phone?.image} alt="" />
    </div>
  )
}

export default Phone