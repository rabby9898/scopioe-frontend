import SliderTp from "./SliderTp";

const Therapist = () => {
  return (
    <div className="pb-1 bg-[#ededed]">
      <h1 className="text-[#152A16] text-lg font-semibold font-poppins m-5">
        Featured Therapist
      </h1>
      <div className="m-5 p-7 bg-white rounded-lg">
        <div className="">
          <SliderTp />
        </div>
      </div>
    </div>
  );
};

export default Therapist;
