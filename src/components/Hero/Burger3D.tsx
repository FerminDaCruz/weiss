"use client";
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Burger } from "@/types";

function BurgerModel({ modelPath }: { modelPath: string }) {
    // Cambiá la ruta según donde esté tu .glb dentro de /public
    const { scene } = useGLTF(modelPath);
    return (
        <Center>
            <primitive object={scene} />
        </Center>
    );
}

export default function Burger3D({ burger }: { burger: Burger }) {
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        if (controlsRef.current) {
            // Centra la rotación en el punto (0, 0, 0)
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    }, []);
    return (
        <div className="w-full h-[500px] md:h-[750px] absolute inset-0 z-30 pb-10 sm:pb-30 md:pb-50 xl:pb-0">
            <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <BurgerModel modelPath={burger.model} />
                <OrbitControls
                    ref={controlsRef}
                    enablePan={false}
                    enableZoom={false}
                    rotateSpeed={0.7}
                    autoRotate={true}
                    // Esto permite control táctil y con mouse para rotar el modelo
                />
            </Canvas>
        </div>
    );
}
