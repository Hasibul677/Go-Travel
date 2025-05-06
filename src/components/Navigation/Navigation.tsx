import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils/content";
import LogoIcon from "../Icons/LogoIcon";
import DesktopDropdown from "./DesktopDropdown";
import CaretUp from "../Icons/CaretUp";
import BellIcon from "../Icons/BellIcon";
import SearchIcon from "../Icons/SearchIcon";


export default function Navigation() {
  return (
    <nav className="m-auto mb-12 max-w-432">
      <div className="flex justify-between px-21.5">
        <Link to="/" className="flex items-center gap-x-2.5">
          <LogoIcon className="size-13" />
          <span className="text-3xl font-semibold">GoTravel</span>
        </Link>
        <ul className="flex items-stretch gap-x-10">
          {navigationLinks.map((link) =>
            <li
              key={link.id}
              className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200">
              <Link to={link.to} className="text-gray-600 group-hover:text-black">{link.text}</Link>
              {link.dropdown && <span className="flex size-6 items-center justify-center">
                <CaretUp
                  className="size-3.5 fill-gray-600 rotate-180 transition-all duration-250 group-hover:fill-black group-hover:rotate-360"
                />
              </span>}
              {link.dropdownLinks && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          )}
        </ul>
        <div className="flex items-center gap-x-5">
          <BellIcon className="fill-gray-600 cursor-pointer hover:fill-black" />
          <SearchIcon className="fill-gray-600 cursor-pointer hover:fill-black" />
          <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-7 py-3.5 text-lg font-medium text-white transition-all duration-200 text-nowrap">
            Join Now
          </button>
        </div>
      </div>

    </nav>
  )
}
