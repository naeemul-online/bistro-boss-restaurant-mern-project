import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center">
      <div className="divider"></div>
      <button onClick={handleGoogleLogin} className=" btn mb-4">
        <FaGoogle></FaGoogle>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
