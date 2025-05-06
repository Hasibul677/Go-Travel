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
      <div className="flex items-center px-21.5">
        <Link to="/" className="flex items-center gap-x-2.5">
          <LogoIcon className="size-13" />
          <span className="text-3xl font-semibold">GoTravel</span>
        </Link>
        <ul className="flex items-stretch gap-x-10">
          {navigationLinks.map((link) =>
            <li 
            key={link.id} 
            className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200">
              <Link to={link.to}>{link.text}</Link>
              {link.dropdown && <span><CaretUp className="size-3.5" /></span>}
              {link.dropdownLinks && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          )}
        </ul>
      </div>
      <BellIcon className="" />
      <SearchIcon className="" />
      <button>Join Now</button>
    </nav>
  )
}
