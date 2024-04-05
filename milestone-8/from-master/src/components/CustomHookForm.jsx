import useInputState from "../hooks/useInputState";

const CustomHookForm = () => {

  // const [name,handleNameChange] = useInputState('Alex');
  const emailState = useInputState("alex@gmail.com")

  const handleSubmit = e =>{
    // console.log('form data',name);
    console.log('form data',emailState.value);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CustomHookForm