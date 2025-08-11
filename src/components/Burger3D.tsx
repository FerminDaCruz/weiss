"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Burger } from "@/types";

function BurgerModel({ modelPath }: { modelPath: string }) {
    // Cambiá la ruta según donde esté tu .glb dentro de /public
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} />;
}

export default function Burger3D({ burger }: { burger: Burger }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-5xl font-bold pt-20">
                {burger.name}
            </h2>
            <p className="text-white/50">{burger.description}</p>
            <div style={{ width: "100%", height: "1000px" }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <BurgerModel modelPath={burger.model} />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        rotateSpeed={0.7}
                        autoRotate={false}
                        // Esto permite control táctil y con mouse para rotar el modelo
                    />
                </Canvas>
            </div>
        </div>
    );
}
