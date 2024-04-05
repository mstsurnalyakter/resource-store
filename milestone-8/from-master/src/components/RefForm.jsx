import { useEffect, useRef } from "react";


const RefForm = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(()=>{
    nameRef.current.focus();
    // emailRef.current.focus();
    // passwordRef.current.focus();
  },[])

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'john@gmail.com'} type="email" name="email" />
        <br />
        <input ref={passwordRef} type="password" name="password" id="" />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RefForm