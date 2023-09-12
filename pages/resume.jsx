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

const HeadInfo = () => {
  {
    /* Head */
  }
  return (
    <Head>
      <title>Emre | Resume</title>
      <meta
        name="description"
        content="I’m a front-end web developer specializing in building exceptional digital experiences."
      />
      <link rel="icon" href="/fav.png" />
    </Head>
  );
};
const Intro = () => {
  {
    /* Intro */
  }
  return (
    <>
      <h2 className="text-center text-jelly-bean-950 dark:text-jelly-bean-50 ">
        Resume
      </h2>

      <div className="bg-jelly-bean-50 text-jelly-bean-950 my-4 p-4 w-full flex justify-between items-center border shadow-md shadow-gray-400 rounded-2xl dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
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
    </>
  );
};

const AboutMe = () => {
  {
    /* About Me */
  }
  return (
    <div className="my-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
      <h5 className="text-center underline text-[18px] py-2 ">About Me</h5>
      <div className="tracking-wider">
        <p className="pb-2">
          Hey there! I&apos;m Emre, a web developer by day and a musician by
          night, hailing from the lively city of Izmir, Turkey.
        </p>
        <p className="pb-2">
          My journey into the world of technology started after graduating from
          university, but my love for creation has always been there. You see,
          before diving into code, I spent 8 thrilling years as a professional
          musician, DJ, and producer in the realm of electronic music. Just like
          crafting a perfect beat, I found joy in building mobile-responsive
          front-end UI applications that sing with seamless interaction.
        </p>
        <p className="pb-2">
          I remember the moment it all clicked for me. I was working on a
          complex piece of music, and I realized that the process of layering
          sounds was not unlike layering code to create a visually stunning
          website. My tools? HTML, CSS, JavaScript, Next, and React. My goal? To
          create user interfaces that are as harmonious as a well-composed tune.
        </p>
        <p className="pb-2">
          But my passion doesn&apos;t stop at the familiar. Much like exploring
          new musical genres, I&apos;m always eager to learn and play with new
          technologies. In both music and programming, there&apos;s never just
          one way to create a masterpiece. This open-minded approach makes me a
          quick learner, ready to embrace and master whatever comes my way.
        </p>
        <p className="pb-2">
          I firmly believe that being a great developer, like being a great
          musician, isn&apos;t about knowing one specific language inside and
          out. It&apos;s about the ability to choose the right tool for the job,
          and the magic that happens when everything falls into place.
        </p>
        <p className="pb-2">
          So here I am, blending my love for music, movies, TV series, and
          wellness with my passion for web development. Ready to create, ready
          to innovate, and always ready for the next big challenge.
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  {
    /* Experience */
  }
  return (
    <div className="my-4 border shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
      <h5 className="text-center underline text-[18px] py-4">
        Professional Experience
      </h5>
      {/* Experience */}
      <div className="divide-y divide-gray-700">
        <div className="py-6">
          <div className="flex justify-between font-semibold tracking-wide text-lg">
            <span>Front End Developer</span>
            <span>(2023 - Current)</span>
          </div>
          <p className="py-1 italic">Elmalı Tech - Internship - Remote </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Engaging in various front-end development projects, working
              closely with a talented team to create user-friendly interfaces.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="flex justify-between font-semibold tracking-wide text-lg">
            <span>Full Stack Developer</span>
            <span>(2023 - Current)</span>
          </div>
          <p className="py-1 italic">The Project - Freelance - Remote </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Collaborating closely with the agency and its clients. I identify
              web-based needs and develop tailored solutions. My
              responsibilities encompass end-to-end project development, from
              initial concept to final implementation, ensuring the delivery of
              high-quality, customer-centric digital experiences.
            </li>
            <li>
              In addition to these responsibilities, I&apos;ve had the
              opportunity to work on a variety of projects, including an AI-SaaS
              platform and an E-commerce project. These experiences have allowed
              me to expand my skills in AI integration and E-commerce solutions,
              further enhancing the quality and versatility of the digital
              experiences I deliver.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="flex justify-between font-semibold tracking-wide text-lg">
            <span>Data Curator</span>
            <span>(2022 - 2023)</span>
          </div>
          <p className="py-1 italic"> Veeva - Freelance - Remote </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              During this period, I made a strategic decision to transition my
              career towards web development. I dedicated my time to upskilling,
              learning new technologies, and honing my coding skills. This time
              was invaluable in allowing me to refocus my career path and
              prepare for new opportunities in web development.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="flex justify-between font-semibold tracking-wide text-lg">
            <span>iOS Technical Support Specialist</span>
            <span>(2022 - 2023)</span>
          </div>
          <p className="py-1 italic">Apple - Full Time - Remote </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              I acted as a bridge between engineers and users, simplifying
              complex technical concepts into user-friendly solutions. This role
              enhanced my communication skills and fostered a deep appreciation
              for the importance of understanding user needs and expectations, a
              crucial aspect of creating effective digital experiences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const resume = () => {
  return (
    <>
      <HeadInfo />
      <div className="max-w-[940px] mx-auto p-5 pt-[120px]">
        <Intro />
        <AboutMe />
        <Experience />
        <BackButton href="/" />
      </div>
    </>
  );
};

export default resume;
