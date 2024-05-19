import Avater from "./Avater";

export default function Card(){
    return(
        <div>
            <Avater
            size={100}
            person={{
                name:'Alex',
                age:20
            }}
            ></Avater>
        </div>
    )
}