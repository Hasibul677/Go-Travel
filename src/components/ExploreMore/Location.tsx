import { type Location } from "../../utils/contentTypes";
import Star from "../Icons/Star";
import { Location as LocationIcon } from "../Icons/Location";

interface LocationProps {
    location: Location
}
const Location = ({ location }: LocationProps) => {
    return (
        <li className="group cursor-pointer">
            <div className="relative mb-8 overflow-hidden rounded-3xl">
                <img src={location.img} alt={location.alt} className="transform transition-all duration-300 ease-in-out group-hover:scale-103" />
                <div className="absolute top-5 right-6 flex items-center gap-x-2 rounded-[0.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl">
                    <Star className="size-6 fill-yellow" />
                    <p className="text-gray-600 tracking-6 text-[1.0625rem] font-semibold">{location.rating}</p>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <p className="mb-3.5 text-[1.75rem] font-semibold">{location.title}</p>
                    <div className="flex items-center">
                        <LocationIcon className="size-6 mr-1.5" />
                        <p className="text-gray-700 text-lg">{location.location}</p>
                    </div>
                </div>
                <p>{location.pricePerPerson}/<span>Pax</span></p>
            </div>
        </li>
    );
};

export default Location;