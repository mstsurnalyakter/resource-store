const Signup = () => {
  return (
    <form onSubmit={e =>{
        e.preventDefault();
        alert('Submitting')
    }}>
        <input type="text" />
        <button>Send</button>
    </form>
  )
}

export default Signup