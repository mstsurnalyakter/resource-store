export default function Singers({ singer }) {
    const {name,age} = singer;
  return (
    <div>
      <h3>Singer: {name}</h3>
      <p>age: {age}</p>
    </div>
  );
}