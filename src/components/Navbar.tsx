import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import NavProfile from "./NavProfile";
import SearchBar from "./SearchBar";
import videoCallIcon from "./VideoCameraIcon.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-14 px-4 bg-white">
      <div className="flex items-center w-fit">
        <button className="mr-3 p-2">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Logo />
      </div>

      {/* search bar */}
      <div>
        <SearchBar />
      </div>

      {/*  */}
      <div className="flex items-center">
        <div className="flex items-center ml-auto">
          {/* video call icon */}
          <div className="relative group w-fit px-2 ml-1 hover:cursor-pointer">
            <span className="w-8">
              <img
                src={videoCallIcon}
                alt="video call"
                className="w-8 h-auto"
              />
            </span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-5 text-sm whitespace-nowrap rounded-sm py-1.5 px-2 bg-gray-500 text-white invisible group-hover:visible">
              Create
            </span>
          </div>

          {/* apps icons */}
          <div className="relative group w-fit px-2 ml-1 hover:cursor-pointer">
            <div>
              <i className="bi bi-grid-3x3-gap text-lg" />
            </div>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-5 text-sm whitespace-nowrap rounded-sm py-1.5 px-2 bg-gray-500 text-white invisible group-hover:visible">
              Apps
            </span>
          </div>

          {/* apps icons */}
          <div className="relative group w-fit px-2 ml-1 hover:cursor-pointer">
            <div>
              <i className="bi bi-bell text-lg" />
            </div>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-5 text-sm whitespace-nowrap rounded-sm py-1.5 px-2 bg-gray-500 text-white invisible group-hover:visible">
              Notifications
            </span>
          </div>
        </div>

        {/* profile icon */}
        <div className="block ml-5 mr-5 w-fit">
          <NavProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
