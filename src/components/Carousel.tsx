"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FaChevronLeft,
    FaChevronRight,
    FaMapPin,
    FaClock,
} from "react-icons/fa";

const sucursales = [
    {
        id: 1,
        ciudad: "Bariloche",
        imagen: "/sucursales/weiss-bariloche.jpg",
        horarios: {
            semana: "Martes a Sábados de 12:30 a 14:45 y de 19:30 a 23h",
            finSemana: "Domingos 19:30 a 23h",
        },
    },
    {
        id: 2,
        ciudad: "Córdoba",
        imagen: "/sucursales/weiss-cerro-de-las-rosas.jpg",
        horarios: {
            semana: "Martes a Sábados de 12:30 a 14:45 y de 19:30 a 23h",
            finSemana: "Domingos 19:30 a 23h",
        },
    },
    {
        id: 3,
        ciudad: "La Plata",
        imagen: "/sucursales/weiss-la-plata.jpg",
        horarios: {
            semana: "Martes a Jueves de 19:00 a 23:30hs",
            finSemana: "Viernes a Domingos 19:00 a 12:00hs",
        },
    },
    {
        id: 4,
        ciudad: "Mar del Plata",
        imagen: "/sucursales/weiss-mar-del-plata-samsara.jpg",
        horarios: {
            semana: "Martes a Sábados de 12:30 a 14:45 y de 19:30 a 23h",
            finSemana: "Domingos 19:30 a 23h",
        },
    },
    {
        id: 5,
        ciudad: "Jujuy",
        imagen: "/sucursales/weiss-jujuy.jpg",
        horarios: {
            semana: "Martes a Sábados de 12:30 a 14:45 y de 19:30 a 23h",
            finSemana: "Domingos 19:30 a 23h",
        },
    },
    {
        id: 6,
        ciudad: "Rosario",
        imagen: "/sucursales/weiss-rosario.jpg",
        horarios: {
            semana: "Martes a Sábados de 12:30 a 14:45 y de 19:30 a 23h",
            finSemana: "Domingos 19:30 a 23h",
        },
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sucursales.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sucursales.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentSucursal = sucursales[currentIndex];

    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Nuestras Sucursales
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Encontranos en las mejores ubicaciones del país. Cada
                        sucursal con su propio ambiente y horarios especiales.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={currentSucursal.imagen || "/placeholder.svg"}
                            alt={`Sucursal ${currentSucursal.ciudad}`}
                            fill
                            className="object-cover transition-all duration-500"
                            priority
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute inset-0 flex flex-col justify-start md:justify-end p-6 md:px-10 lg:px-12">
                            <div className=" rounded-xl p-6 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <FaMapPin className="h-6 w-6 text-[#fec501]" />
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white text-shadow-black text-shadow-lg">
                                        {currentSucursal.ciudad}
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start space-x-2">
                                        <FaClock className="h-5 w-5 text-[#fec501] mt-0.5 flex-shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-white text-shadow-black text-shadow-lg font-medium">
                                                {
                                                    currentSucursal.horarios
                                                        .semana
                                                }
                                            </p>
                                            <p className="text-white text-shadow-black text-shadow-lg font-medium">
                                                {
                                                    currentSucursal.horarios
                                                        .finSemana
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-[#fec501] hover:bg-[#e4af00] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                                    Ver Ubicación
                                </button>
                            </div>
                        </div>

                        <button
                            className="hidden md:inline-block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 shadow-lg rounded-lg p-2 transition-all duration-300"
                            onClick={prevSlide}
                        >
                            <FaChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 shadow-lg rounded-lg p-2 transition-all duration-300"
                            onClick={nextSlide}
                        >
                            <FaChevronRight className="h-6 w-6" />
                        </button>
                        <div className="flex justify-center items-center gap-3 md:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
                            <button
                                className="bg-white/80 hover:bg-white border border-gray-200 shadow-lg rounded-lg p-2 transition-all duration-300"
                                onClick={prevSlide}
                            >
                                <FaChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                className="bg-white/80 hover:bg-white border border-gray-200 shadow-lg rounded-lg p-2 transition-all duration-300"
                                onClick={nextSlide}
                            >
                                <FaChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        {sucursales.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-[#fec501] scale-125"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                        {currentIndex + 1} / {sucursales.length}
                    </div>
                </div>
            </div>
        </section>
    );
}
