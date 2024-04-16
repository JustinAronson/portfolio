
import { DarkmodeContext } from "@/app/context/DarkmodeContext";
import { useContext } from "react";

export default function ProjectList({ projects, onProjectClick }) {
  const {textColor} = useContext(DarkmodeContext)
  return (
    <div className="flex flex-col h-full items-center align-middle justify-center">
      {projects.map((project) => (
        <button
          key={project.id}
          className={"flex hover:underline align-middle p-8 " + textColor}
          onClick={() => onProjectClick(project)}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}
