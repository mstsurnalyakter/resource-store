const ReuseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
  children
}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        };
        handleSubmit(data)
    }

  return (
    <div className="space-y-3 mb-7">
      {/* <h2>{formTitle}</h2> */}
      {children}
      <form onSubmit={handleLocalSubmit} className="space-y-3">
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input className="btn" type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;
