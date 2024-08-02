import logoImg from "../assets/logo.png";
import Slider from "../components/Slider/Slider";
// import bannerImg from "../assets/signupImg.png";
const SignUp = () => {
  return (
    <div className="px-5 py-8 lg:px-16 lg:py-20 grid grid-cols-2 items-center gap-8 bg-white">
      <div>
        <img src={logoImg} alt="" />
        <h4>Sign In To Your Account</h4>
        <p className="text-[#5C635A] text-base font-normal">
          elcome Back! By click the sign up button, you're agree to Zenitood
          Terms and Service and acknlowledge the
          <span className="text-[#4285F3] underline text-base font-normal">
            {" "}
            Privacy and Policy
          </span>
        </p>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default SignUp;
