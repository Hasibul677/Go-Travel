import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils/content";
import LogoIcon from "../Icons/LogoIcon";
import DesktopDropdown from "./DesktopDropdown";
import CaretUp from "../Icons/CaretUp";
import BellIcon from "../Icons/BellIcon";
import SearchIcon from "../Icons/SearchIcon";

export default function Navigation() {
  return (
    <nav className="w-full mb-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-x-2 shrink-0">
          <LogoIcon className="w-10 h-10 lg:w-13 lg:h-13" />
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap">GoTravel</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-8 mx-4">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex cursor-pointer items-center gap-x-1 font-medium transition-all duration-200"
            >
              <Link 
                to={link.to} 
                className="text-gray-600 text-sm lg:text-base group-hover:text-black whitespace-nowrap"
              >
                {link.text}
              </Link>
              {link.dropdown && (
                <span className="flex w-5 h-5 items-center justify-center">
                  <CaretUp
                    className="w-3 h-3 fill-gray-600 rotate-180 transition-all duration-250 group-hover:fill-black group-hover:rotate-360"
                  />
                </span>
              )}
              {link.dropdownLinks && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          ))}
        </ul>

        {/* Right Side Icons and Button */}
        <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-5">
          <BellIcon className="w-5 h-5 lg:w-6 lg:h-6 fill-gray-600 cursor-pointer hover:fill-black" />
          <SearchIcon className="w-5 h-5 lg:w-6 lg:h-6 fill-gray-600 cursor-pointer hover:fill-black" />
          <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-lg px-4 py-2 lg:px-4 lg:py-2 text-sm lg:text-lg font-medium text-white transition-all duration-200 whitespace-nowrap">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}