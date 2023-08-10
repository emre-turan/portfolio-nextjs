import React from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaExternalLinkAlt,
} from "react-icons/fa";
import BackButton from "../components/BackButton";

const resume = () => {
  return (
    <>
      <Head>
        <title>Emre | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-5 pt-[120px]">
        <h2 className="text-center text-jelly-bean-950 dark:text-jelly-bean-50 ">
          Resume
        </h2>
        <div className="bg-jelly-bean-50 text-jelly-bean-950 my-4 p-4 w-full flex justify-between items-center border shadow-xl shadow-gray-400 rounded-2xl dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <h2 className="text-center">Emre Turan</h2>
          <div className="flex ">
            <a
              href="https://flowcv.com/resume/e55f0m216c"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 ease-in duration-300"
            >
              <FaExternalLinkAlt size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/emre-turan/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/emre-turan"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 ease-in duration-300"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://stackoverflow.com/users/16639320/emre-turan"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 ease-in duration-300"
            >
              <FaStackOverflow size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://medium.com/@itsemreturan"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 ease-in duration-300"
            >
              <FaMediumM size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="my-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <h5 className="text-center underline text-[18px] py-2 ">Bio</h5>
          <p>
            Based in the vibrant city of Izmir, Turkey, I am a university
            graduate turned dedicated web developer. My journey in the tech
            world is as exciting and dynamic as my 8-year stint as a
            professional musician, DJ, and producer in the realm of electronic
            music. Just as I create harmonious tunes, I construct
            mobile-responsive front-end UI applications that ensure seamless
            interaction and functionality. My tools of the trade include HTML,
            CSS, JavaScript, Next, and React, which I use to develop efficient
            and visually appealing user interfaces.
          </p>
          <p>
            My passion for web development, much like my love for music, TV
            series, movies, and wellness, goes beyond the familiar. I am always
            eager to learn and explore new technologies that can enhance the
            development process. I understand that in the world of programming,
            just as in music, there&apos;s more than one method to create a
            masterpiece. This open-minded perspective makes me a quick learner,
            ready to embrace and master new tech stacks as needed. I firmly
            believe that being a great developer, much like being a great
            musician, is less about proficiency in a specific language and more
            about the ability to select and leverage the best tool for the job.
          </p>
        </div>

        {/* Skills */}
        <div className="text-center my-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <h5 className="text-center underline text-[18px] py-2 ">
            Tech Stack
          </h5>
          <div className="flex flex-wrap justify-center py-2">
            <span>HTML</span>
            <span className="px-2">|</span>
            <span>CSS</span>
            <span className="px-2">|</span>
            <span>Javascript</span>
            <span className="px-2">|</span>
            <span>Typescript</span>
            <span className="px-2">|</span>
            <span>React</span>
            <span className="px-2">|</span>
            <span>Nextjs</span>
            <span className="px-2">|</span>
            <span>MySQL</span>
            <span className="px-2">|</span>
            <span>MongoDB</span>
            <span className="px-2">|</span>
            <span>Nodejs</span>
            <span className="px-2">|</span>
            <span>Tailwind</span>
            <span className="px-2">|</span>
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="my-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
          {/* Experience */}
          <div className="divide-y divide-gray-700">
            <div className="py-6">
              <p>
                <span className="font-bold">
                  Full Stack Web Developer (2023 - Current)
                </span>
              </p>
              <p className="py-1 italic">The Project - Freelance - Remote </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                <li>
                  Collaborating closely with the agency and its clients. I
                  identify web-based needs and develop tailored solutions. My
                  responsibilities encompass end-to-end project development,
                  from initial concept to final implementation, ensuring the
                  delivery of high-quality, customer-centric digital
                  experiences.
                </li>
                <li>
                  In addition to these responsibilities, I&apos;ve had the
                  opportunity to work on a variety of projects, including an
                  AI-SaaS platform and an E-commerce project. These experiences
                  have allowed me to expand my skills in AI integration and
                  E-commerce solutions, further enhancing the quality and
                  versatility of the digital experiences I deliver.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <p>
                <span className="font-bold">Data Curator (2022 – 2023)</span>
              </p>
              <p className="py-1 italic"> Veeva - Freelance - Remote </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                <li>
                  During this period, I made a strategic decision to transition
                  my career towards web development. I dedicated my time to
                  upskilling, learning new technologies, and honing my coding
                  skills. This time was invaluable in allowing me to refocus my
                  career path and prepare for new opportunities in web
                  development.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <p>
                <span className="font-bold">
                  iOS Technical Support Specialist (2019 – 2022)
                </span>
              </p>
              <p className="py-1 italic">Apple - Full Time - Remote </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                <li>
                  I acted as a bridge between engineers and users, simplifying
                  complex technical concepts into user-friendly solutions. This
                  role enhanced my communication skills and fostered a deep
                  appreciation for the importance of understanding user needs
                  and expectations, a crucial aspect of creating effective
                  digital experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BackButton href="/" />
      </div>
    </>
  );
};

export default resume;
