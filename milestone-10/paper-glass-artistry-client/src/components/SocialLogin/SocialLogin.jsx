import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useContextData from "../../hooks/useContextData";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = ({ text }) => {
  const { googleLogin, githubLogin } = useContextData();

  // navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result?.user) {
        toast.success(`Successfully ${text} !`);
        setTimeout(() => {
          navigate(from);
        }, 2000);
      }
    });
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
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-lg text-white bg-[#c04ddd] hover:bg-[#c04ddd]"
        >
          <FaGithub className="text-[bg-[#77228C]]" />
          GitHub
        </button>
      </div>
    </>
  );
};

SocialLogin.propTypes = {
  text: PropTypes.string,
};

export default SocialLogin;
