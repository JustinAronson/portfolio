"use client";

import React, { useContext } from "react";
import ProjectList from "./project-list.js";
import { projects_array } from "../constants/projects.js";
import { DetailedView } from "./detailed-view.js";
import { DarkmodeContext } from "@/app/context/DarkmodeContext.js";

export function ProjectView() {
  const [selected_project, set_selected_project] = React.useState(projects_array[0]);
  const {isDark} = useContext(DarkmodeContext)

  return (
    <div className={"flex flex-row h-[calc(100vh-32px)] " + (isDark ? "bg-black" : "bg-white")}>
      <div className="w-1/3 leading-normal">
      <ProjectList
        projects= {projects_array}
        onProjectClick= {set_selected_project} />
      </div>
      <div className="w-2/3 leading-normal">
      <DetailedView
        project= {selected_project} />
      </div>
    </div>
  )
}
