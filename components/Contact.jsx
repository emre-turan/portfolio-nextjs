import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { Slide } from "react-awesome-reveal";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Contact = () => {
  return (
    <Slide direction="up" triggerOnce="true">
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-4 pt-16 w-full ">
          <p className="text-xl tracking-widest uppercase text-jelly-bean-600 dark:text-jelly-bean-300">
            Contact
          </p>
          <h2 className="py-4 text-jelly-bean-950 dark:text-jelly-bean-50">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-lg p-4 dark:shadow-jelly-bean-900 dark:shadow-none dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700">
              <div className="lg:p-4 h-full ">
                <div className="rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <Image
                    src={ContactImg}
                    alt="Contact image"
                    width={500}
                    height={500}
                  />
                </div>

                <div>
                  <h2 className="py-4">Emre Turan</h2>
                  <p className="py-4 ">Front-End Developer</p>
                  <p className="py-4 ">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/in/emre-turan/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Linkedin"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/etdesign"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Github"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <FaGithub />
                      </div>
                    </a>

                    <Link href="/#contact" scroll={false} aria-label="Contact">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href="/resume" aria-label="Resume">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-lg p-4 dark:shadow-jelly-bean-900 dark:shadow-none dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700">
              <div className="lg:p-4 h-full">
                <form
                  action="https://getform.io/f/8db7eb7a-7da9-4044-90c6-27d5bdd44a1e"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="uppercase text-sm py-2 ">
                        Name
                      </label>
                      <input
                        id="name"
                        className="border-2 rounded-lg p-3 flex border-gray-300 bg-white"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="uppercase text-sm py-2 "
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        className="border-2 rounded-lg p-3 flex border-gray-300 bg-white"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="email" className="uppercase text-sm py-2 ">
                      Email
                    </label>
                    <input
                      id="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-white"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label
                      htmlFor="subject"
                      className="uppercase text-sm py-2  "
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-white"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label
                      htmlFor="message"
                      className="uppercase text-sm py-2  "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="border-2 rounded-lg p-3 border-gray-300 bg-white"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-jelly-bean-50 mt-4 shadow-xl shadow-gray-400 rounded-lg uppercase bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <button onClick={scrollToTop} href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-jelly-bean-900">
                <HiOutlineChevronDoubleUp
                  className="text-jelly-bean-950"
                  size={30}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Contact;
