"use client";

import { Burger } from "@/types";
import Burger3D from "./Burger3D";

export default function BurgerComponent({ burger }: { burger: Burger }) {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative flex flex-col container">
                <p
                    className="text-[120px] md:text-[180px] lg:text-[220px] xl:pt-10 xl:text-[260px] font-passion-one font-extrabold transform scale-y-200 break-all leading-20 [hyphens:auto] px-3 uppercase fade-in pt-3 sm:pt-0"
                    key={burger.name}
                >
                    {burger.name}
                </p>
                <Burger3D burger={burger} />
            </div>
        </div>
    );
}
