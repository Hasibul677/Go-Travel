import { type HeroBenefit } from "../../utils/contentTypes"

interface HeroBenefitProps {
    benefit: HeroBenefit;
}
export default function HeroBenefit({ benefit }: HeroBenefitProps) {
    return (
        <li key={benefit.id} className="flex items-center gap-x-12">
            <div className="bg-primary-100 flex justify-center items-center size-25 rounded-full">
                <benefit.Icon className="fill-primary-700" />
            </div>
            <div>
                <p className="text-gray-600 tracking-6 text-[1.75rem]/10.5 font-medium whitespace-nowrap">{benefit.heading}</p>
                <p className="text-gray-600 tracking-6 text-base/7.5 font-rubik">{benefit.description}</p>
            </div>
        </li>
    )
}
