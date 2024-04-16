"use client"
import { InView } from "react-intersection-observer";
import { technologyURLs } from "./constants";
import Image from "next/image";
import { useContext } from "react";
import { DarkmodeContext } from "@/app/context/DarkmodeContext";

export function TechnologyView() {
    const imageSquareStyling = "m-8 flex h-40 w-40 bg-gray-800 rounded-lg items-center justify-center transition-all duration-200 shadow-lg shadow-violet-700 "
    const {isDark} = useContext(DarkmodeContext)

    return (
        <div className={"h-full w-full overflow-hidden" + (isDark ? "bg-black" : "bg-white")}>
            <p className={"text-2xl mx-12 " + (isDark ? "text-white" : "text-black")}> Versed in Modern Technologies </p>
                 <div className="flex flex-wrap w-full justify-center">
                    {technologyURLs.map((path, index) => {
                        return (
            <InView threshold={1}>
                {({ inView, ref }) => (
                            <div key={path} ref={ref} className={imageSquareStyling + (inView ? "translate-x-0 opacity-100 blur-0" : "-translate-x-12 opacity-0 blur-sm")}>
                            <Image
                                src={path}
                                width={96}
                                height={96}>
                            </Image>
                            </div>
                )}
            </InView>
                        )       
                    })}
                    </div>
        </div>

    )
}
