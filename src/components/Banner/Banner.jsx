import bannerImg from "../../assets/homeImg.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="md:m-5 mt-5 p-7 flex justify-between flex-col md:flex-row items-center bg-white md:rounded-lg">
      <div>
        <h3 className="text-lg md:text-xl font-medium text-[#152A16]">
          {`I'm Looking for Massage Therapist Near...`}
        </h3>
        <p className="text-base text-[#2E3439] font-normal my-2 md:my-5">
          In using this site, I agree to be bound by the{" "}
          <span className="text-[#156BCA]">Terms of Service</span> <br /> and{" "}
          <span className="text-[#156BCA]">Privacy Policy</span>
        </p>
        <div className="hidden md:block">
          <label className=" input input-bordered flex items-center gap-2 w-[500px] bg-[#eef2f5]">
            <input
              type="text"
              className="grow"
              placeholder="ZIP code or city name"
            />
            <span className="badge badge-info bg-[#156BCA] rounded-lg  p-[18px] text-white px-10 md:-mr-[11px]">
              Go
            </span>
          </label>
        </div>
      </div>
      <div className="banner-bg">
        <img className="mx-auto md:ml-[23rem]" src={bannerImg} alt="" />
      </div>
      <div className=" block md:hidden">
        <label className=" input input-bordered flex items-center gap-2 w-full md:w-[500px] mt-8 bg-[#eef2f5]">
          <input
            type="text"
            className="grow"
            placeholder="ZIP code or city name"
          />
          <span className="badge badge-info bg-[#156BCA] rounded-lg  p-[18px] text-white px-10 md:-mr-[11px]">
            Go
          </span>
        </label>
      </div>
    </div>
  );
};

export default Banner;
