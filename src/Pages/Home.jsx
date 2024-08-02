import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <h1>This is home content</h1>
      </div>
    </>
  );
};

export default Home;
