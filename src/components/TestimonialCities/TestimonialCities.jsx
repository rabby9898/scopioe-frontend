import Cities from "./Cities";
import Testimonial from "./Testimonial";

const TestimonialCities = () => {
  return (
    <div className="w-full grid grid-cols-2 items-center gap-8 bg-[#ededed]">
      {/* Testimonial section*/}
      <div>
        <h1 className="text-[#152A16] text-lg font-semibold font-poppins mx-5">
          Featured Testimonial
        </h1>
        <div className="mt-5 ml-5 p-5 h-[500px] bg-white rounded-xl">
          <Testimonial />
        </div>
      </div>
      {/* Cities section */}
      <div>
        <h1 className="text-[#152A16] text-lg font-semibold font-poppins mx-5">
          Popular Cities
        </h1>
        <div className="mt-5 mr-5 p-5 h-[500px] bg-white rounded-xl">
          <Cities />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCities;
