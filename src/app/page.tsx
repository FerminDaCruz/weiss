import Deliverys from "@/components/Deliverys";
import { Slider } from "@/components/Hero/Slider";
import SpecialBurger from "@/components/SpecialBurger";

export default function HomePage() {
    return (
        <>
            <Slider />
            <Deliverys />
            <div className="h-screen w-full bg-black p-10"></div>
        </>
    );
}
