import Burger3D from "./Burger3D";
import burgers from "@/data/burgers.json";

export default function Hero() {
    return (
        <>
            <h1>Hero con hamburguesa 3D</h1>
            <div>
                {burgers.map((burger) => (
                    <Burger3D key={burger.id} burger={burger} />
                ))}
            </div>
        </>
    );
}
