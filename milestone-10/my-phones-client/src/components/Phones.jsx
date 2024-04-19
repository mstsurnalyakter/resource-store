import { useLoaderData } from "react-router"
import { Link } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
        <h2>All Phones here: {phones.length}</h2>
        {
          phones.map(phone =><li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
        }
    </div>
  )
}

export default Phones