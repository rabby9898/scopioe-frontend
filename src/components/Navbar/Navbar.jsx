import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import useWindowSize from "../../Hooks/useWindowSize";
import logo from "../../assets/logo.png";
import SidebarSm from "./SIdebarSm"; // Import the SidebarSm component

const Navbar = () => {
  const { width } = useWindowSize();
  const isSmallDevice = width < 768;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="px-5 flex items-center justify-between">
            <div>
              {isSmallDevice ? (
                <img className="w-[110px] h-[30px]" src={logo} alt="Logo" />
              ) : (
                <div className="flex items-center gap-4">
                  <FaUserCircle className="w-10 h-10 rounded-full" />
                  <div className="font-medium dark:text-white">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-[#152A16]">Shagor Ahmed</p>
                      <IoIosArrowDown />
                    </div>
                    <p className="text-sm text-[#5C635A] dark:text-gray-400 font-normal">
                      shagor@gmail.com
                    </p>
                  </div>
                </div>
              )}
            </div>

            {isSmallDevice ? (
              <div className="flex justify-between items-center gap-5">
                <div className="text-black p-3 rounded-full border border-[#E7E7E7]">
                  <IoMdNotificationsOutline className="text-xl" />
                </div>
                <HiMiniBars3BottomRight
                  className="text-black text-2xl"
                  onClick={toggleSidebar}
                />
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="text-black p-3 rounded-full border border-[#E7E7E7]">
                  <IoMdNotificationsOutline className="text-xl" />
                </div>

                <div className="divider divider-horizontal"></div>

                <div className="flex justify-start gap-5 items-center">
                  <button className="text-[#F15E4A] text-base">Log Out</button>
                  <div className="p-3 rounded-full bg-[#FFECEA]">
                    <LuLogOut className="text-[#F15E4A] text-xl " />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="">
        {isSidebarOpen && <SidebarSm toggleSidebar={toggleSidebar} />}
      </div>
    </>
  );
};

export default Navbar;
