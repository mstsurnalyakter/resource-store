// import SimpleForm from "./components/SimpleForm";
// import  './App.css'
import GrandPa from './components/GrandPa';
// import CustomHookForm from './components/CustomHookForm';
// import RefForm from './components/RefForm';
// import ReuseableForm from './components/ReuseableForm';
// import StateFulForm from './components/StateFulForm';

const App = () => {

  // const handleSignUpSubmit = data =>{
  //   console.log('sign up data',data);
  // }
  // const handleUpdateProfile = data =>{
  //   console.log("user profile update data", data);
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-10">Form Master</h1>


      <GrandPa></GrandPa>

      {/* <SimpleForm/> */}
      {/* <StateFulForm/> */}
      {/* <RefForm/> */}
      {/* <CustomHookForm/> */}
      {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit} >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit ={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Alway keep your profile update</p>
        </div>
      </ReuseableForm> */}
    </div>
  );
}

export default App
