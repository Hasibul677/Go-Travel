import { services } from "../../utils/content";
import { type Service as IService } from "../../utils/contentTypes";
import Service from "./Service";

const customizePackages: IService = services.at(0)!;
const CulinaryTours: IService = services.at(1)!;
const DestinationExpertise: IService = services.at(2)!;

export default function Services() {
    return (
        <section className="bg-primary-100 px-24 py-36">
            <ul className="border-gray-500/40 m-auto flex max-w-389 justify-between border-y-1 py-24">
                <Service service={customizePackages} />
                <li className="bg-gray-500/40 block w-0.25 self-stretch" aria-label="a gray divider element" />
                <Service service={CulinaryTours} />
                <li className="bg-gray-500/40 block w-0.25 self-stretch" aria-label="a gray divider element" />
                <Service service={DestinationExpertise} />
            </ul>
        </section>
    )
}
