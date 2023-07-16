import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Bootstrap from "../public/assets/skills/bootstrap.svg";
import Mongo from "../public/assets/skills/mongo.png";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <Slide direction="up" triggerOnce="true">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full p-4">
          <p className="text-xl tracking-widest uppercase text-jelly-bean-600 dark:text-jelly-bean-300">
            Skills
          </p>
          <h2 className="py-4">Tech Stack</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Html}
                    width={64}
                    height={64}
                    alt="HTML logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Css}
                    width={64}
                    height={64}
                    alt="CSS logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Javascript}
                    width={64}
                    height={64}
                    alt="JavaScript logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={ReactImg}
                    width={64}
                    height={64}
                    alt="React logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={NextJS}
                    width={64}
                    height={64}
                    alt="Next.js logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Tailwind}
                    width={64}
                    height={64}
                    alt="Tailwind CSS logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Bootstrap}
                    width={64}
                    height={64}
                    alt="Bootstrap logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={Mongo}
                    width={64}
                    height={64}
                    alt="MongoDB logo - one of my skills"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Skills;
