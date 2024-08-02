import bannerImg from "../../assets/homeImg.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="m-5 p-7 flex justify-between items-center bg-white rounded-lg">
      <div>
        <h3 className="text-xl font-medium text-[#152A16]">
          I'm Looking for Massage Therapist Near...
        </h3>
        <p className="text-base text-[#2E3439] font-normal my-5">
          In using this site, I agree to be bound by the{" "}
          <span className="text-[#156BCA]">Terms of Service</span> <br /> and{" "}
          <span className="text-[#156BCA]">Privacy Policy</span>
        </p>
        <label className="input input-bordered flex items-center gap-2 w-[500px]">
          <input
            type="text"
            className="grow"
            placeholder="ZIP code or city name"
          />
          <span className="badge badge-info bg-[#156BCA] rounded-lg  p-[18px] text-white px-10 -mr-[11px]">
            Go
          </span>
        </label>
      </div>
      <div className="banner-bg">
        <img className="ml-[23rem]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
