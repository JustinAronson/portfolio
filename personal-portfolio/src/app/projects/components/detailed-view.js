import { DarkmodeContext } from '@/app/context/DarkmodeContext';
import Image from 'next/image'
import { useContext } from 'react';

export function DetailedView({project}) {
  const {isDark, textColor} = useContext(DarkmodeContext)

  return (
    <div className="w-full flex flex-col h-full justify-center items-center">
      <Image 
        src={project.imgURL}
        width={500}
        height={300}
        alt="Project Thumbnail"
        ></Image>
      <h2 className={"text-2xl font-bold mb-2 text-center p-8 " + textColor}>{project.title}</h2>
      <p className={"text-gray-600 text-center " + textColor}>{project.desc}</p>
    </div>
  );

}
