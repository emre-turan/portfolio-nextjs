import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-800 dark:shadow-jelly-bean-900 dark:shadow-none dark:bg-jelly-bean-50 ">
      <Image
        className="object-fill rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={`${title} project using ${tech}`}
        objectFit="cover"
        width={600}
        height={400}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-jelly-bean-50 tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-jelly-bean-50 text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-jelly-bean-50 text-jelly-bean-950 font-bold text-lg cursor-pointer p-4 ">
            View {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
