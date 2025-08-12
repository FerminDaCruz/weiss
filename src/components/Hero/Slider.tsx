"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Burger3D from "./Burger3D";
import burgers from "@/data/burgers.json";
import BurgerComponent from "./BurgerComponent";

export function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentModel = burgers[currentIndex];

    const nextModel = () => {
        setCurrentIndex((prev) => (prev + 1) % burgers.length);
    };

    const prevModel = () => {
        setCurrentIndex((prev) => (prev - 1 + burgers.length) % burgers.length);
    };

    return (
        <div
            className="w-full h-screen flex bg-cover bg-center bg-no-repeat pt-[200px] overflow-hidden"
            style={{
                backgroundImage: "url('/imagenes/fondo-dramatico.png')",
            }}
        >
            {/* Panel de información */}

            {/* Visor 3D */}
            <div className="flex-1 relative">
                <BurgerComponent burger={currentModel} />

                {/* Botones de navegación flotantes */}
                <button
                    className="absolute hidden xl:inline-flex left-4 top-1/2 transform -translate-y-1/2  items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed z-30"
                    onClick={prevModel}
                    disabled={burgers.length <= 1}
                >
                    <FaChevronLeft className="h-4 w-4" />
                </button>

                <button
                    className="absolute hidden xl:inline-flex right-4 top-1/2 transform -translate-y-1/2  items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed z-30"
                    onClick={nextModel}
                    disabled={burgers.length <= 1}
                >
                    <FaChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 xl:hidden flex justify-center items-center gap-3 z-30">
                    <button
                        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={prevModel}
                        disabled={burgers.length <= 1}
                    >
                        <FaChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={nextModel}
                        disabled={burgers.length <= 1}
                    >
                        <FaChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
