import Image from "next/image";
import React from "react";
import appletreeImg from "../public/assets/projects/appletree.png";
import { RiRadioButtonFill } from "react-icons/ri";
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
          alt="Apple Tree - A user-friendly web app for the demonstrate state management skills with Redux"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="px-4 py-2">Apple Tree</h2>
          <h3 className="px-4">React JS / Next.js / Redux </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-4">
        <div className="col-span-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2">
            This application is a simple interactive game built with Next.js,
            React, Redux, and Tailwind CSS. Hosted on Vercel.
          </p>
          <p className="py-2">
            The application consists of four main components: a tree, apples, a
            basket, and a button. The user can shake the tree by clicking either
            on the tree itself or the button. When the tree is shaken, apples
            fall to the ground at random intervals and in random quantities.
            It&apos;s possible that no apples may fall on the first shake!
          </p>
          <a
            href="https://github.com/etdesign/apple-tree"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
              Code
            </button>
          </a>
          <a
            href="https://apple-tree.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <div className="px-4">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
            </div>
          </div>
        </div>
        <BackButton href="/#projects" />
      </div>
    </div>
  );
};

export default appletree;
