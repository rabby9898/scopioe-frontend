import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import Slider from "../components/Slider/Slider";
import useWindowSize from "../Hooks/useWindowSize";
import SignupSm from "../components/SignupSm/SignupSm";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../Firebase/firebase.config";
// import bannerImg from "../assets/signupImg.png";
const SignUp = () => {
  const { width } = useWindowSize();
  const { signUpUser, googleSignIn, setUpdatedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // Define the breakpoint for small devices
  const isSmallDevice = width < 768;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    signUpUser(email, password)
      .then((res) => {
        console.log(res.user);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          // photoURL: imgUrl,
        })
          .then((res) => {
            console.log(res);
            console.log("updated");
            toast.success("You Have Registered Successfully");
            // setUpdatedUser(imgUrl);
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isSmallDevice ? (
        <div>
          <SignupSm />
        </div>
      ) : (
        <div className="w-full px-5 py-8 lg:px-32 lg:py-20 grid grid-cols-2 items-center gap-8 bg-white">
          <div className="w-full lg:w-[450px]  h-full lg:h-[700px] font-poppins">
            <img className="mb-8 w-[110px] h-[30px]" src={logoImg} alt="" />
            <h4 className="text-[#152A16] text-2xl font-semibold">
              Sign In To Your Account
            </h4>
            <p className="text-[#5C635A] text-base font-normal mb-5 mt-3 text-justify">
              elcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the
              <span className="text-[#4285F3] underline text-base font-normal">
                {" "}
                Privacy and Policy
              </span>
            </p>

            <form onSubmit={handleSubmit} className=" w-full space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="@Username"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" font-semibold text-base">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold text-base">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Re-Type Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="check"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-[#4285F3] checked:border-none hover:before:opacity-10"
                      id="check"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px ms-2 text-sm font-medium text-[#4285F3] cursor-pointer select-none"
                    htmlFor="check"
                  >
                    Accept Terms of Service
                  </label>
                </div>
              </div>
              <div className=" text-center mt-10">
                <button
                  type="submit"
                  className="btn bg-[#4285F3] text-white text-base w-[300px] font-normal hover:text-[#4285F3]"
                >
                  Sign up
                </button>
              </div>
              <div>
                <p className="px-6 text-sm text-center text-black ">
                  Already have an account?{" "}
                  <Link to="/login" className="hover:underline text-[#4285F3]">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className=" h-full lg:h-[700px]">
            <Slider />
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
