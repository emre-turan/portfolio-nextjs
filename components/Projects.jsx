import React from "react";
import allplacepicksImg from "../public/assets/projects/allplacepicks.png";
import ecommerceImg from "../public/assets/projects/ecommerce.png";
import breatheeaseImg from "../public/assets/projects/breatheease.png";
import admindashboardImg from "../public/assets/projects/admindashboard.png";
import appletreeImg from "../public/assets/projects/appletree.png";
import aisaasImg from "../public/assets/projects/aisaas.png";
import ProjectItem from "./ProjectItem";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:py-6 lg:py-4 xl:py-2">
        <Fade direction="up" triggerOnce="true">
          <p className="text-lg tracking-widest uppercase text-jelly-bean-600 dark:text-jelly-bean-300">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
        </Fade>
        <Fade direction="up" triggerOnce="true">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Sleek E-Commerce"
              backgroundImg={ecommerceImg}
              projectUrl="/ecommerce"
              tech="React | Next.js | Typescript | Stripe "
            />

            <ProjectItem
              title="E-Commerce Dashboard"
              backgroundImg={admindashboardImg}
              projectUrl="/admindashboard"
              tech="React | Next.js | Typescript | MySQL"
            />
            <ProjectItem
              title="AI SaaS"
              backgroundImg={aisaasImg}
              projectUrl="/ai-saas"
              tech="React | Next.js | Typescript | MySQL"
            />
            <ProjectItem
              title="All Place Picks"
              backgroundImg={allplacepicksImg}
              projectUrl="/allplacepicks"
              tech="React | Next.js  | Typescript | MongoDB"
            />

            <ProjectItem
              title="Breathe Ease"
              backgroundImg={breatheeaseImg}
              projectUrl="/breatheease"
              tech="React | Next.js | Typescript"
            />

            <ProjectItem
              title="Apple Tree"
              backgroundImg={appletreeImg}
              projectUrl="/appletree"
              tech="React | Next.js | Redux"
            />
          </div>
        </Fade>
        <div className="flex justify-center p-2 m-2">
          <a
            href="https://github.com/etdesign"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" px-8 py-4 mt-4 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
              See More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
