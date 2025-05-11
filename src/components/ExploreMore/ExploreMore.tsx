import { useState } from "react";
import { locations } from "../../utils/content";
import CaretUp from "../Icons/CaretUp";
import Location from "./Location";
import { LOCATION_CARDS_SHOWN } from "../../utils/constent";


export default function ExploreMore() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const totalLocations = locations.length;
    const randerLocations = locations.slice(currentIndex, currentIndex + LOCATION_CARDS_SHOWN);

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    const handleLefttClick = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    return (
        <section className="px-24 py-36">
            <div className="m-auto max-w-389">
                <div className="flex items-end justify-between gap-y-33">
                    <div>
                        <h2 className="tracking-6 mb-4 text-[2.75rem] font-semibold">Explore More</h2>
                        <p className="tracking-6 text-gray-700 text-[1.75rem] font-light">Let's go on an adventure</p>
                    </div>
                    <div className="mb-2 flex gap-x-6">
                        <button
                            className="bg-gray-300 not-disabled:hover:bg-gray-400 flex size-12 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={handleLefttClick}
                            disabled={currentIndex === 0}
                        >
                            <CaretUp className="w-6 -rotate-90 fill-white" />
                        </button>
                        <button className="bg-primary-700 not-disabled:hover:bg-primary-700 flex size-12 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={handleRightClick}
                            disabled={currentIndex >= totalLocations - LOCATION_CARDS_SHOWN}
                        >
                            <CaretUp className="w-6 rotate-90 fill-white" />
                        </button>
                    </div>
                </div>
                <ul className="mt-24 grid grid-cols-3 gap-x-18 gap-y-16">
                    {randerLocations.map((location) => (
                        <Location key={location.id} location={location} />
                    ))}
                </ul>
            </div>
        </section>
    )
}