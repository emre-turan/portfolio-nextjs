import Image from "next/image";
import React from "react";
import appletreeImg from "../public/assets/projects/appletree.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import BackButton from "../components/BackButton";

const appletree = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill="true"
          src={appletreeImg}
          alt="Apple Tree - An interactive game showcasing state management with Redux"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Apple Tree</h2>
          <h3>React / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2">
            &quot;Apple Tree&quot; is an engaging interactive game that I
            developed using cutting-edge technologies such as Next.js, React,
            Redux, and Tailwind CSS. The application is seamlessly hosted on
            Vercel.
          </p>
          <p className="py-2">
            The primary objective behind the development of this application was
            to showcase my proficiency in state management and my adept use of
            advanced tools like Redux. This game serves as a practical
            demonstration of how I effectively utilize these modern technologies
            to create interactive and dynamic user experiences.
          </p>
          <a
            href="https://github.com/etdesign/apple-tree"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 rounded-lg text-jelly-bean-50 bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-800 hover:from-jelly-bean-600 hover:to-jelly-bean-900 dark:text-jelly-bean-950 dark:from-jelly-bean-50 dark:to-jelly-bean-100">
              Code
            </button>
          </a>
          <a
            href="https://apple-tree.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 rounded-lg text-jelly-bean-50 bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-800 hover:from-jelly-bean-600 hover:to-jelly-bean-900 dark:text-jelly-bean-950 dark:from-jelly-bean-50 dark:to-jelly-bean-100">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:bg-jelly-bean-50 dark:shadow-jelly-bean-900 hover:-translate-y-1 transform transition-all duration-300">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-jelly-bean-950">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-jelly-bean-950 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <BackButton />
        </Link>
      </div>
    </div>
  );
};

export default appletree;
