const AlterButton = ({message,children})=>{
    return <button onClick={() => alert(message)}>{children}</button>;
}

const Toolbar = () => {
  return (
    <div>
        <AlterButton message="Playing">Play Movie</AlterButton>
        <AlterButton message="Uploading">Upload Image</AlterButton>
    </div>
  )
}

export default Toolbar;
