export default function Avater({size,person:{name,age}}){
const cardStyle = {
    border:'2px solid red',
    padding:'20px',
    margin:'20px',
    backgroundColor:'black'
}
    return(
        <div style={cardStyle}>
            <h3>Name:{name}</h3>
            <p>Age: {age}</p>
            <p>Size: {size}</p>
        </div>
    )
}