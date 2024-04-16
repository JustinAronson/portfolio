"use client"

import { DarkmodeContext } from "@/app/context/DarkmodeContext"
import { useContext } from "react"
import Image from "next/image"

export function DarkmodeButton() {
    const {isDark, setIsDark} = useContext(DarkmodeContext)

    const setMode = function() {
        setIsDark(!isDark)
    }

    return (
        <div className={"z-50 sticky bottom-12 mx-12 w-12 outline-offset-8 outline rounded-lg " + (isDark ? "outline-white" : "outline-black")} onClick={setMode}>
            <Image
                src={isDark ? "/darkmode/sun-48.png" : "/darkmode/dark.svg"}
                width={48}
                height={48}>
            </Image>
        </div>
    )
}
