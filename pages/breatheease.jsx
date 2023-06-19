import Image from "next/image";
import React from "react";
import breatheeaseImg from "../public/assets/projects/breatheease.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import BackButton from "../components/BackButton";

const breatheease = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill="true"
          src={breatheeaseImg}
          alt="Breathe Ease App - A user-friendly web app for guided breathing exercises"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="px-4 py-2">Breathe Ease App</h2>
          <h3 className="px-4">React JS / Tailwind / Next.js </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-4">
        <div className="col-span-4 border rounded-lg dark:border-gray-700 p-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2">
            I built this application in React JS and is hosted on Vercel.
            Breathe-Ease is a simple and user-friendly web app designed to guide
            you through breathing exercises that help reduce stress, improve
            focus, and promote relaxation.
          </p>
          <p className="py-2">
            To use Breathe-Ease, simply select a breathing method, follow the
            on-screen instructions, and start the exercise by clicking the
            &quot;Start&quot; button. The app will guide you through the inhale,
            hold, and exhale phases of the chosen technique, helping you
            maintain a consistent rhythm and focus on your breath.
          </p>
          <a
            href="https://github.com/etdesign/breathe-ease"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-700 dark:shadow-none">
              Code
            </button>
          </a>
          <a
            href="https://breathe-ease.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-700 dark:shadow-none">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:border  dark:bg-jelly-bean-950 dark: border-gray-700 dark:text-jelly-bean-50 dark:shadow-none hover:-translate-y-1 transform transition-all duration-300">
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

export default breatheease;
