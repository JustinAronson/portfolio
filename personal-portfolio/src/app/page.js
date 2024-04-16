"use client"
import Image from "next/image";
import { TechnologyView } from "./components/technologies/TechnologyView";
import { IntroPortrait } from "./components/intro/IntroPortrait";
import { useContext } from "react";
import { DarkmodeContext } from "./context/DarkmodeContext";


export default function Home() {
  const {isDark} = useContext(DarkmodeContext)
  return (
    <main className={"flex flex-col items-center justify-between px-24 h-full overflow-hidden " + (isDark ? "bg-black" : "bg-white")}>
      <div className="z-10 w-full items-center font-mono text-sm ">
        <IntroPortrait/>
        <TechnologyView/> 
      </div>
    </main>
  );
}
