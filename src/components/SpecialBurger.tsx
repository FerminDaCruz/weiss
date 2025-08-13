import Image from "next/image";
import Link from "next/link";

export default function SpecialBurger() {
    return (
        <div className="bg-black px-3 py-10 w-full grid place-items-center">
            <div className="rounded-md bg-[#fec501] text-black grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:max-w-[1300px] md:max-h-[300px] overflow-hidden">
                <div className="p-5 flex justify-between">
                    <h2 className="text-3xl font-bold">¡Edicion Limitada!</h2>
                    <p>
                        Cada mes creamos una burger especial que nos vuela la
                        cabeza. Es la forma en la que probamos nuevas recetas y
                        hacemos lo que más nos apasiona: Cocinar burgers
                        increíbles.
                    </p>
                    <Link
                        href="#"
                        className="bg-black text-white py-3 px-5 rounded-full mt-5"
                    >
                        Ver menú
                    </Link>
                </div>
                <Image
                    src="/imagenes/limited-edition-burger.jpg"
                    alt="Hamburguesa edición especial"
                    height={1000}
                    width={1000}
                    className="object-cover bg-no-repeat h-full"
                />
            </div>
        </div>
    );
}
