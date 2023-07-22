import Image from "next/image";
import React from "react";
import admindashboardImg from "../public/assets/projects/admindashboard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import BackButton from "../components/BackButton";

const admindashboard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover object-top"
          fill="true"
          src={admindashboardImg}
          alt="E-Commerce - A comprehensive e-commerce solution with a fully functional admin dashboard, CMS, and API."
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[ 50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="px-4 py-2">E-Commerce Admin Dashboard CMS</h2>
          <h3 className="px-4">React / Typescript / Next.js </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-4">
        <div className="col-span-4 border rounded-lg dark:border-gray-700 p-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2">
            This project is a comprehensive e-commerce solution with a fully
            functional admin dashboard, CMS, and API. The application is
            seamlessly hosted on Vercel.
          </p>
          <p className="py-2">
            E-Commerce Admin Dashboard empowers users with comprehensive control
            over their online store. They can easily manage categories,
            products, and filters like &quot;Color&quot; and &quot;Size&quot;.
            Users can also handle &quot;Billboards&quot;, large text displays on
            the store page, and control which products are featured on the
            homepage. Additionally, the dashboard provides valuable insights
            into orders, sales, and revenue, enabling users to make informed
            business decisions.
          </p>
          <p className="py-2">
            This project has been a significant learning journey, providing me
            with a wealth of software knowledge and experience. It&apos;s been a
            pleasure to see the project grow and evolve, and I&apos;m excited to
            see where it goes next.
          </p>
          <a
            href="https://github.com/etdesign/ecommerce-admin-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
              Code
            </button>
          </a>
          <a
            href="https://ecommerce-admin-dashboard-liard.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-jelly-bean-50 shadow-xl shadow-gray-400 rounded-lg bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:border  dark:bg-jelly-bean-950 dark: border-gray-700 dark:text-jelly-bean-50 dark:shadow-none">
          <div className="px-4">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>

              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shadcn UI
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Clerk Auth
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Planet Scale
              </p>

              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma ORM
              </p>
            </div>
          </div>
        </div>
        <BackButton />
      </div>
    </div>
  );
};

export default admindashboard;
