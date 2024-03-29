import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";
import { Fade } from "react-awesome-reveal";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import ScrollTop from "./ScrollTop";

const Contact = () => {
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleRecaptchaChange = (value) => {
    if (value) {
      setRecaptchaCompleted(true);
      setRecaptchaError(false);
    } else {
      setRecaptchaCompleted(false);
    }
  };

  const handleSubmit = (event) => {
    if (!recaptchaCompleted) {
      event.preventDefault();
      setRecaptchaError(true);
    }
  };

  return (
    <Fade direction="up" triggerOnce="true">
      <div id="contact" className="w-full lg:h-screen ">
        <div className="max-w-[1240px] m-auto px-4 pt-16 w-full ">
          <p className="text-lg tracking-widest uppercase text-jelly-bean-600 dark:text-jelly-bean-300">
            Contact
          </p>
          <h2 className="py-4 text-jelly-bean-950 dark:text-jelly-bean-50">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-5 gap-8 ">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
              <div className="lg:p-4 h-full ">
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-lg flex items-center justify-center dark:shadow-none  overflow-hidden">
                  <Image
                    src={ContactImg}
                    alt="Contact image"
                    width={500}
                    height={500}
                    placeholder="blur"
                    className=" transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                <div>
                  <h2 className="py-4">Emre Turan</h2>
                  <p className="py-4 ">Front-End Developer</p>
                  <p className="py-4 ">
                    I am available for freelance or full-time positions.
                  </p>
                  <p className="py-4">Contact me and let&apos;s talk.</p>
                </div>
                <div>
                  <div className="flex items-center justify-around py-4 lg:mt-16">
                    <a
                      href="https://www.linkedin.com/in/emre-turan/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Linkedin"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/emre-turan"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Github"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <FaGithub />
                      </div>
                    </a>

                    <Link href="/#contact" scroll={false} aria-label="Contact">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href="/resume" aria-label="Resume">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-jelly-bean-50 dark:text-jelly-bean-950 dark:shadow-none ">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3  w-full h-auto shadow-xl shadow-gray-400 rounded-2xl p-4 dark:shadow-2xl dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700 hover:border-slate-300 dark:hover:border-gray-700/70">
              <div className="lg:p-4 h-full">
                <form
                  action="https://getform.io/f/8db7eb7a-7da9-4044-90c6-27d5bdd44a1e"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="uppercase text-sm py-2 ">
                        Name
                      </label>
                      <input
                        id="name"
                        className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-jelly-bean-950"
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
                        className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-jelly-bean-950"
                        type="text"
                        name="phone"
                        pattern="\+?[0-9]*"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="email" className="uppercase text-sm py-2 ">
                      Email
                    </label>
                    <input
                      id="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-jelly-bean-950"
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
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-jelly-bean-950"
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
                      className="border-2 rounded-lg p-3 border-gray-300 bg-white text-jelly-bean-950"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                    <input
                      type="hidden"
                      name="_gotcha"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="py-2">
                    <ReCAPTCHA
                      sitekey="6LdbL-8mAAAAAD2zB5LTEjqVRhI3Lag7Urdg2x2m"
                      onChange={handleRecaptchaChange}
                    />
                    {recaptchaError && (
                      <p
                        className="py-2 font-semibold"
                        style={{ color: "red" }}
                      >
                        Please complete the reCAPTCHA.
                      </p>
                    )}
                  </div>

                  <button className="w-full p-4 text-jelly-bean-50 mt-4 shadow-xl shadow-gray-400 rounded-lg uppercase bg-gradient-to-r from-jelly-bean-500 to-jelly-bean-600 hover:from-jelly-bean-600 hover:to-jelly-bean-500 dark:shadow-none">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* scroll to top */}
        <ScrollTop />
      </div>
    </Fade>
  );
};

export default Contact;
