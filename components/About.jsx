import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-4">
        <div className="col-span-2">
          <Fade cascade direction="up" triggerOnce="true">
            <p className="uppercase text-lg tracking-widest text-jelly-bean-600 dark:text-jelly-bean-300">
              About
            </p>
            <h2 className="py-4 text-jelly-bean-950 dark:text-jelly-bean-50">
              Who I Am
            </h2>
            <p className="py-2 text-jelly-bean-950 dark:text-jelly-bean-50 ">
              Hey there! I&apos;m Emre, a web developer by day and a musician by
              night, hailing from the lively city of Izmir, Turkey.
            </p>
            <p className="py-2 text-jelly-bean-950 dark:text-jelly-bean-50 ">
              My journey into the world of technology started after graduating
              from university, but my love for creation has always been there.
              You see, before diving into code, I spent 8 thrilling years as a
              professional musician, DJ, and producer in the realm of electronic
              music. Just like crafting a perfect beat, I found joy in building
              mobile-responsive front-end UI applications that sing with
              seamless interaction.
            </p>
            <p className="py-2 text-jelly-bean-950 dark:text-jelly-bean-50">
              I remember the moment it all clicked for me. I was working on a
              complex piece of music, and I realized that the process of
              layering sounds was not unlike layering code to create a visually
              stunning website. My tools? HTML, CSS, JavaScript, Next, and
              React. My goal? To create user interfaces that are as harmonious
              as a well-composed tune.
            </p>
          </Fade>
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
  );
};

export default About;
