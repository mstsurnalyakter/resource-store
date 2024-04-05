

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('object');
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SimpleForm