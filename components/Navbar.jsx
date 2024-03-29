import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../public/assets/navLogo.svg";
import DarkNavLogo from "../public/assets/darkNavLogo.svg";
import { useTheme } from "next-themes";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 px-4 md:px-8 lg:px-16 bg-jelly-bean-50 dark:bg-jelly-bean-950"
          : "fixed w-full h-20 z-[100] px-4 md:px-8 lg:px-16 bg-jelly-bean-50 dark:bg-jelly-bean-950"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? DarkNavLogo : NavLogo}
              alt="Emre Turan - Developer Logo"
              width={125}
              height={125}
              className="cursor-pointer"
            />
          )}
        </Link>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/#home" scroll={false}>
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                Home
              </li>
            </Link>{" "}
            <Link href="/#about" scroll={false}>
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                About
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                Contact
              </li>
            </Link>
            <Link href="/resume">
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                Resume
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                Blog
              </li>
            </Link>
            <li className="ml-10  dark:text-gray-300">
              <ToggleButton />
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className="md:hidden flex">
            <ToggleButton size={25} />
            <button onClick={handleNav}>
              <AiOutlineMenu size={25} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-jelly-bean-50 p-10 ease-in duration-500 dark:bg-jelly-bean-950 flex flex-col justify-between"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                {mounted && (
                  <Image
                    src={resolvedTheme === "dark" ? DarkNavLogo : NavLogo}
                    alt="Emre Turan - Developer Logo"
                    width={125}
                    height={125}
                    className="cursor-pointer"
                  />
                )}
              </Link>
              <button
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 mt-4 cursor-pointer dark:shadow-none dark:bg-jelly-bean-50 dark:text-jelly-bean-900"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  Contact
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  Resume
                </li>
              </Link>
              <Link href="/blog">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50"
                >
                  Blog
                </li>
              </Link>
            </ul>
            <div className="py-10">
              <p className="uppercase tracking-widest text-jelly-bean-600 dark:text-jelly-bean-200">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/emre-turan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/emre-turan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
