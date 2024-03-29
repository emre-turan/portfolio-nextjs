import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center ">
        <div>
          <Fade triggerOnce="true">
            <p className="uppercase text-sm tracking-widest text-jelly-bean-950 dark:text-jelly-bean-50">
              LET&#39;S BUILD
            </p>
            <h1 className="py-4 tracking-wide text-jelly-bean-950 dark:text-jelly-bean-50">
              Hi, I&#39;m <span className="text-jelly-bean-600">Emre</span>
            </h1>
            <h1 className="py-2 tracking-wide text-jelly-bean-950 dark:text-jelly-bean-50">
              Front-End Developer
            </h1>
            <p className="py-4 tracking-wide text-jelly-bean-950 dark:text-jelly-bean-50 sm:max-w-[70%] m-auto">
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <AttentionSeeker effect="pulse" delay={1000} triggerOnce="true">
              <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
                <a
                  href="https://www.linkedin.com/in/emre-turan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/emre-turan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact" scroll={false} aria-label="Contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume" aria-label="Resume">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </AttentionSeeker>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Main;
