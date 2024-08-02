const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li className="">
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group"
            >
              <img src="https://i.ibb.co/fNLw56H/home.png" alt="" />
              <span className="ms-3 text-[#5C635A] text-base">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group"
            >
              <img src="https://i.ibb.co/jyQKKJD/new.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                New Listing
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group"
            >
              <img src="https://i.ibb.co/pWGfgXP/Search.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                Search
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group"
            >
              <img src="https://i.ibb.co/7K37Cv3/Paper.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                About
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group mb-5"
            >
              <img src="https://i.ibb.co/48DMrm8/Vector.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                Favorites
              </span>
            </a>
          </li>
          <hr className="my-10 py-[1px] h-0.5 border-t-0 bg-[#E7E7E7] dark:bg-white/10" />
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group mt-5"
            >
              <img src="https://i.ibb.co/3zKYZmv/info.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                Help Center
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#D4E9FF] dark:hover:bg-gray-700 group"
            >
              <img src="https://i.ibb.co/b53KmBg/Setting.png" alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap text-[#5C635A] text-base">
                Setting
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
