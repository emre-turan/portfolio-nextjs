import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <Slide direction="up" triggerOnce="true">
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-jelly-bean-600 dark:text-jelly-bean-300">
              About
            </p>
            <h2 className="py-4 text-jelly-bean-950 dark:text-jelly-bean-50">
              Who I Am
            </h2>

            <p className="py-2 text-jelly-bean-950 dark:text-jelly-bean-50 ">
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
            <p className="py-2 text-jelly-bean-950 dark:text-jelly-bean-50">
              My passion for web development, much like my love for music, TV
              series, movies, and wellness, goes beyond the familiar. I am
              always eager to learn and explore new technologies that can
              enhance the development process. I understand that in the world of
              programming, just as in music, there&apos;s more than one method
              to create a masterpiece. This open-minded perspective makes me a
              quick learner, ready to embrace and master new tech stacks as
              needed. I firmly believe that being a great developer, much like
              being a great musician, is less about proficiency in a specific
              language and more about the ability to select and leverage the
              best tool for the job.
            </p>
          </div>

          <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-lg flex items-center justify-center dark:shadow-none mt-4 overflow-hidden">
            <Image
              src={AboutImg}
              className="transition duration-300 ease-in-out hover:scale-110"
              alt="Emre played DJ set on nightclub"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default About;
