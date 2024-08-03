import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TestimonialCities from "../components/TestimonialCities/TestimonialCities";
import Therapist from "../components/Therapist/Therapist";

const Home = () => {
  return (
    <div className="font-poppins">
      <Sidebar className="block md:hidden" />
      <div className="sm:ml-64 bg-[#eef2f5]">
        <Navbar />
        <Banner />
        {/* <h1 className="text-[#152A16] text-lg font-semibold font-poppins m-5">
          Featured Therapist
        </h1> */}
        <Therapist />
        <TestimonialCities />
      </div>
    </div>
  );
};

export default Home;
