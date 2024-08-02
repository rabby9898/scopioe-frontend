import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Therapist from "../components/Therapist/Therapist";

const Home = () => {
  return (
    <div className="font-poppins">
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <Banner />
        <Therapist />
      </div>
    </div>
  );
};

export default Home;
