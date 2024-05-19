import React from 'react'
import PropTypes from 'prop-types'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
import toast from "react-hot-toast";

const SocialLogin = ({ text }) => {
  const { googleLogin, githubLogin } = useAuth();

  const handleSocialLogin = async (socialProvider) => {
    try {
      await socialProvider();
      toast.success("SignIn with Google Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="card-body space-y-1 -mt-4">
        <h3 className="text-center font-bold">Continue with</h3>
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-lg"
        >
          <FcGoogle />
          Sign in with Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-lg text-white bg-[#c04ddd] hover:bg-[#c04ddd]"
        >
          <FaGithub className="text-[bg-[#77228C]]" />
          Sign in with GitHub
        </button>
      </div>
    </>
  );
};

SocialLogin.propTypes = {}

export default SocialLogin