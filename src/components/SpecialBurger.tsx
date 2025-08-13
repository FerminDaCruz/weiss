import Image from "next/image";
export default function SpecialBurger() {
    return (
        <section className="relative bg-black overflow-hidden py-20 ">
            {/* Versión Desktop - Con diagonal */}
            <div className="hidden lg:block">
                <div className="container mx-auto px-4 py-0 w-full" id="1">
                    <div
                        className="relative min-h-[400px] w-full rounded-xl overflow-hidden max-w-4xl mx-auto"
                        id="2"
                    >
                        {/* Lado Izquierdo - Contenido */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#fec501] to-[#e4af00] flex items-center justify-start py-16 px-8 lg:px-12"
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
                                width: "60%",
                            }}
                        >
                            <div className="max-w-xs text-black space-y-6 z-10">
                                <h2 className="text-4xl  font-bold leading-tight">
                                    Edición Limitada
                                </h2>
                                <p className="text-lg text-black leading-relaxed">
                                    Cada mes creamos una burger especial que nos
                                    vuela la cabeza. Es la forma en la que
                                    probamos nuevas recetas y hacemos lo que más
                                    nos apasiona: Cocinar burgers increíbles.
                                </p>
                                <button className="bg-black text-[#fec501] hover:bg-orange-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    Ver Menú
                                </button>
                            </div>
                        </div>

                        {/* Lado Derecho - Imagen */}
                        <div
                            className="absolute inset-0"
                            style={{
                                left: "40%",
                                width: "60%",
                            }}
                        >
                            <Image
                                src="/imagenes/limited-edition-burger.jpg"
                                alt="Hamburguesa Edición Limitada"
                                fill
                                className="object-cover"
                                priority
                                style={{
                                    clipPath:
                                        "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
                                }}
                            />

                            {/* Badge de "Nuevo" */}
                            <div className="absolute top-8 right-8 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                                ¡NUEVO!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Versión Móvil - Layout vertical limpio */}
            <div className="lg:hidden">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-[#fec501] to-[#d6a400] rounded-xl overflow-hidden shadow-2xl">
                        {/* Sección de imagen */}
                        <div className="relative h-64 sm:h-80">
                            <Image
                                src="/imagenes/limited-edition-burger.jpg"
                                alt="Hamburguesa Edición Limitada"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay sutil para mejor legibilidad */}
                            <div className="absolute inset-0 bg-black/10" />

                            {/* Badge de "Nuevo" */}
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold text-xs shadow-lg animate-bounce">
                                ¡NUEVO!
                            </div>
                        </div>

                        {/* Sección de contenido */}
                        <div className="p-6 sm:p-8 text-center  space-y-6 relative">
                            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black">
                                Edición Limitada
                            </h2>
                            <p className="text-base sm:text-lg text-black/90 leading-relaxed max-w-sm mx-auto">
                                Cada mes creamos una burger especial que nos
                                vuela la cabeza. Es la forma en la que probamos
                                nuevas recetas y hacemos lo que más nos
                                apasiona: Cocinar burgers increíbles.
                            </p>
                            <button className="bg-black text-[#fec501] hover:bg-gray-50 font-semibold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                                Ver Menú
                            </button>

                            {/* Patrón decorativo móvil */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
