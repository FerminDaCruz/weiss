"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Burger3D from "./Burger3D";
import burgers from "@/data/burgers.json";

export function Model3DSlider() {
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
            className="w-full h-screen flex bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/imagenes/fondo-1.webp')",
            }}
        >
            <div className="absolute inset-0 bg-black/70 z-0" />
            {/* Panel de información */}

            {/* Visor 3D */}
            <div className="flex-1 relative">
                <Burger3D burger={currentModel} />

                {/* Botones de navegación flotantes */}
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={prevModel}
                    disabled={burgers.length <= 1}
                >
                    <FaChevronLeft className="h-4 w-4" />
                </button>

                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={nextModel}
                    disabled={burgers.length <= 1}
                >
                    <FaChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
