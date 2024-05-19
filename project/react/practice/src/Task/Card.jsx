import Avater from "./Avater"

const Card = () => {
  return (
    <div>
        <Avater
        id="100"
        person={
            {
                name:"Alex",
                age:20
            }
        }
        ></Avater>
    </div>
  )
}

export default Card