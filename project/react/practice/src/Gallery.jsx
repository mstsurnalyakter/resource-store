import Profile from "./Profile";

export default function Gallery(){
    return(
        <section style={{
            background:'pink',
            color:'black',
            padding:'20px',
            margin:'20px'
        }}>
            <h3>Amazing Scientist</h3>
            <Profile></Profile>
        </section>
    )
}