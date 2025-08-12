import Image from "next/image";

export default function Deliverys() {
    const RappiSrc = "/logos/Rappi-Logo.jpg";
    const PedidosYaSrc = "/logos/PedidosYa-Logo.jpg";

    const createInterleavedPattern = () => {
        const pattern = [];
        // Repetimos el patrón 8 veces para tener suficientes imágenes
        for (let i = 0; i < 12; i++) {
            pattern.push(RappiSrc);
            pattern.push(PedidosYaSrc);
        }
        return pattern;
    };

    const interleavedDeliveries = createInterleavedPattern();

    const duplicatedDeliveries = [
        ...interleavedDeliveries,
        ...interleavedDeliveries,
    ];

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
                <div className="flex animate-scroll">
                    {duplicatedDeliveries.map((deliverySrc, index) => (
                        <div
                            key={`${deliverySrc}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center "
                        >
                            <div className="bg-white transition-all duration-300 w-20 h-20 flex items-center justify-center">
                                <Image
                                    src={deliverySrc}
                                    alt="delivery"
                                    width={240}
                                    height={120}
                                    className="object-cover w-full h-full"
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
