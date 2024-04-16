"use client"

import Image from "next/image";
import { DarkmodeContext } from "@/app/context/DarkmodeContext";
import { useContext } from "react";

export function IntroPortrait() {
    const {isDark} = useContext(DarkmodeContext)

    return (
        <div className="flex flex-col w-full justify-center align-middle items-center h-[calc(100vh-48px)]">
            <div className="flex flex-row items-center">
                <div className="w-2/3">
                    <p className={"text-3xl text-right pb-8 " + (isDark ? "text-white" : "text-black")}> Justin Aronson </p>
                    <p className={"text-right " + (isDark ? "text-white" : "text-black")}> I am a software engineer with a focus on healthcare systems. I have led teams developing cutting edge AI genomics solutions and contributed to worldwide health IT standards. 
                    I am currently searching for fall internships in the Chicago area. </p>
                </div>
                <div className="w-1/3 px-24">
                    <div className="relative h-[calc(4*81.75px)] w-[calc(4*46.89px)] rounded-full outline-blue-600 outline-8 overflow-hidden ">
                        <Image
                            src="/headshot.png"
                            fill>
                        </Image>

                    </div>
                </div>
            </div>

            <div className={"absolute bottom-6 animate-bounce h-0 w-0 border-x-8 border-x-transparent border-t-8 " + (isDark ? "border-t-violet-100" : "border-t-violet-700")}>
                
            </div>
        </div>
    )
}
