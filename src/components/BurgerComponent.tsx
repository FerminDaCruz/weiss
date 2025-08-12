"use client";

import { Burger } from "@/types";
import Burger3D from "./Burger3D";

export default function BurgerComponent({ burger }: { burger: Burger }) {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative flex flex-col container">
                <p className="text-[120px] font-passion-one font-extrabold transform scale-y-200 break-all leading-20 [hyphens:auto] px-3">
                    {burger.name}
                </p>
                <Burger3D burger={burger} />
            </div>
        </div>
    );
}
