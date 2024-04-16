"use client"
import { createContext, useState } from "react";
import React from "react";

const DarkmodeContext = createContext()

export function DarkmodeProvider({children}) {
    const [isDark, setIsDark] = useState(true)
    var textColor = isDark ? "text-white" : "text-black"

    return(
        <DarkmodeContext.Provider value={{isDark, setIsDark, textColor}}> {children} </DarkmodeContext.Provider>

    )
}

export {DarkmodeContext}
