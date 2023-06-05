import React from "react";
import allplacepicksImg from "../public/assets/projects/allplacepicks.png";
import oldportfolioImg from "../public/assets/projects/oldportfolio.png";
import breatheeaseImg from "../public/assets/projects/breatheease.png";
import calculatorImg from "../public/assets/projects/calculator.png";
import ProjectItem from "./ProjectItem";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <Slide direction="up" triggerOnce="true">
          <p className="text-xl tracking-widest uppercase text-jelly-bean-600">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
        </Slide>
        <Slide direction="up" triggerOnce="true">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="All Place Picks"
              backgroundImg={allplacepicksImg}
              projectUrl="/allplacepicks"
              tech="React JS"
            />

            <ProjectItem
              title="Breathe Ease"
              backgroundImg={breatheeaseImg}
              projectUrl="/breatheease"
              tech="React JS"
            />

            <ProjectItem
              title="Old Portfolio"
              backgroundImg={oldportfolioImg}
              projectUrl="/oldportfolio"
              tech="Express JS"
            />

            <ProjectItem
              title="Calculator"
              backgroundImg={calculatorImg}
              projectUrl="/calculator"
              tech="Vanilla JS"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
