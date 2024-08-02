import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
const Navbar = () => {
  return (
    <nav className=" top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="px-5 flex items-center justify-between">
          <div>
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
          </div>
          <div className="flex justify-between items-center">
            <div className=" text-black p-3 rounded-full border border-[#E7E7E7]">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
