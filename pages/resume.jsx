import React from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
} from "react-icons/fa";

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

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Emre Turan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/emre-turan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/etdesign"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://medium.com/@itsemreturan"
              target="_blank"
              rel="noreferrer"
            >
              <FaMediumM size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://stackoverflow.com/users/16639320/emre-turan"
              target="_blank"
              rel="noreferrer"
            >
              <FaStackOverflow size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Creativity <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Simplicity
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Creativity </p>
            <p className="py-2">Web Development</p>
            <p>Simplicity</p>
          </div>
        </div>
        <p>
          As a junior web developer, I am highly motivated and always eager to
          learn new skills. I possess a cheerful and attentive disposition, and
          my discipline and creativity enable me to tackle even the most complex
          challenges. I can work effectively both individually and as part of a
          team, ensuring that every project is completed to the highest
          standards. My diverse tech stack encompasses various technologies for
          specific areas of web development. I am capable of delivering
          innovative and impactful solutions tailored to each project&apos;s
          unique requirements. I am confident that my passion for web
          development and commitment to excellence will contribute to the
          success of any project I am involved in, whether working independently
          or as part of a team.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <div className="flex flex-wrap justify-center py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>
            <span>Front-End Web Developer</span>
            <span className="px-2">|</span>
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
            <span>MongoDB</span>
            <span className="px-2">|</span>
            <span>Nodejs</span>
            <span className="px-2">|</span>
            <span>Tailwind</span>
            <span className="px-2">|</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">The Project</span>
          </p>
          <p className="py-1 italic">
            Full Stack Web Developer (2023 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              As a Full-Stack Developer at The Project, an innovative
              advertising agency, I create and manage dynamic web-based
              solutions, effectively transforming creative ideas into live
              digital experiences.
            </li>
            <li>
              I collaboratively work with various agency teams to develop custom
              applications, focusing on both frontend user interfaces and robust
              backend systems tailored to meet the unique requirements of our
              diverse clientele.
            </li>
            <li>
              Beyond client-based projects, I contribute significantly to the
              development of The Project&apos;s in-house initiatives, leveraging
              my technical prowess to drive innovation and efficiency, thereby
              strengthening our agency&apos;s digital infrastructure and
              capabilities.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}

        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Apple</span>
          </p>
          <p className="py-1 italic">
            iOS Technical Support Advisor (2019 – 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided top-notch customer service and technical support as an
              AppleCare Home Advisor.
            </li>
            <li>
              Successfully resolved a range of complex technical issues with
              Apple products and services.
            </li>
            <li>
              Gained extensive knowledge and expertise in troubleshooting
              techniques specific to the Apple ecosystem.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Veeva</span>
          </p>
          <p className="py-1 italic">Data Curator (2022 – 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided top-notch customer service and technical support as an
              AppleCare Home Advisor.
            </li>
            <li>
              Successfully resolved a range of complex technical issues with
              Apple products and services.
            </li>
            <li>
              Gained extensive knowledge and expertise in troubleshooting
              techniques specific to the Apple ecosystem.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
