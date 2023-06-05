import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Fade direction="left" triggerOnce="true">
            <p className="uppercase text-xl tracking-widest text-jelly-bean-600">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>

            <p className="py-2 text-jelly-bean-950">
              As a dedicated web developer, my focus lies in constructing
              mobile-responsive front-end UI applications. These applications
              are adept at interfacing with APIs and other backend technologies,
              ensuring seamless interaction and functionality. I am well-versed
              in creating such applications using an array of tools such as
              HTML, CSS, JavaScript, Next and React. These languages and
              libraries form the core of my skillset, enabling me to develop
              efficient and visually appealing user interfaces that deliver on
              user expectations.
            </p>
            <p className="py-2 text-jelly-bean-950">
              However, my passion for this field extends beyond these familiar
              technologies. I have a deep enthusiasm for learning and exploring
              new technologies that can enhance the development process. I
              understand that in the world of programming, there&apos;s more
              than one method to achieve a desired outcome. This open-minded
              perspective allows me to be a quick learner, ready to embrace and
              master new tech stacks as needed. Furthermore, I firmly believe
              that being a great developer is less about proficiency in a
              specific language and more about the ability to select and
              leverage the best tool for the job. This approach underscores my
              commitment to delivering the best possible solutions in all my
              development endeavors.
            </p>

            <Link href="/#projects" legacyBehavior>
              <p className="py-2 text-jelly-bean-900 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </Fade>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
