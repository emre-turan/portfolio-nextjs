import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Fade direction="up" triggerOnce="true">
            <p className="uppercase text-sm tracking-widest text-jelly-bean-950">
              LET&#39;S BUILD
            </p>

            <h1 className="py-4 text-jelly-bean-950">
              Hi, I&#39;m <span className="text-jelly-bean-600">Emre</span>
            </h1>

            <h1 className="py-2 text-jelly-bean-950">
              A Front-End Web Developer
            </h1>

            <p className="py-4 text-jelly-bean-900 sm:max-w-[70%] m-auto">
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>

            <AttentionSeeker effect="pulse" delay={1000}>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <a
                  href="https://www.linkedin.com/in/emre-turan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/etdesign"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact" scroll={false}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
