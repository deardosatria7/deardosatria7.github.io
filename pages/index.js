import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "../components/ThemeChanger";
import profilePic from "../public/foto_deardo.png";
import linkedinLogo from "../public/logo-linkedin.png";
import emailLogo from "../public/logo-email.png";
import telegramLogo from "../public/logo-telegram.png";
import {FaLinkedin} from "react-icons/fa6";
import {FaTelegram} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaInstagram} from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Deardo Satria</title>
      </Head>
      <section>
        {/* First page */}
        <div className="first-page mt-16 px-8 sm:px-12 flex flex-col md:items-center md:flex-row max-w-[900px] md:h-[70svh] mx-auto ">
          {/* ThemeChanger button */}
          <div className="fixed grid items-center justify-center bottom-6 right-4 p-3 rounded-full dark:bg-neutral-200 bg-neutral-800 shadow-md cursor-pointer">
            <ThemeChanger />
          </div>
          <div className="text-description">
            <div>
              👋 <span className="dark:text-neutral-300">Hello! I'm </span>
              <span className="font-semibold">Deardo Satria.</span>
            </div>
            <div className="text-4xl font-bold mt-4">
              I'm a Front-End Web Developer
            </div>
            <div className="text-neutral-600 dark:text-neutral-200 mt-3">
              A fresh graduate Junior Front-End Developer based in Indonesia.
            </div>
            <div className="mt-6 space-x-4">
              <button
                href="#"
                className="button-projects bg-slate-800 dark:bg-blue-700 dark:hover:bg-white text-white hover:font-bold text-sm px-4 py-2 rounded-full duration-300 hover:scale-110 hover:text-slate-800 hover:bg-white"
              >
                My projects
              </button>
              <a
                href="#"
                className="text-sm hover:bg-neutral-200 dark:hover:bg-white dark:hover:text-black hover:font-bold px-4 py-2 rounded-full duration-300"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="image-container mt-10 md:mt-0 flex justify-center items-center px-8 max-w-sm mx-auto">
            <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full bg-neutral-300">
              <Image
                src={profilePic}
                className="z-10 w-full -mr-7 -mt-6"
                loading="eager"
              ></Image>
            </div>
          </div>
        </div>

        {/* Second page */}
        <div className="second-page mt-16 px-8 sm:px-12 flex flex-col md:items-center md:text-center">
          <div className="text-description">
            <div className="text-3xl font-bold">Projects</div>
            <div className="mt-4 md:mt-2 max-w-md">
              As a junior web developer, I mainly focused on front-end side.
              Here are some of my concept projects.
            </div>
          </div>
          <div className="projects mt-4 md:mt-8 h-[30vh] bg-neutral-400 rounded-md"></div>
        </div>

        {/* Third page */}
        <div className="third-page mt-20 px-8 sm:px-12 flex flex-col md:items-center md:text-center">
          <div className="text-description">
            <div className="text-3xl font-bold">Certification</div>
            <div className="mt-2 max-w-md">
              Here are some of my certifications.
            </div>
          </div>
          <div className="certifications mt-4 md:mt-8 h-[30vh] bg-neutral-200 rounded-md"></div>
        </div>

        {/* Fourth page */}
        <div className="fourth-page h-[60vh] px-8 sm:px-12 flex justify-center items-center text-center">
          <div className="text-description">
            <div className="text-xl font-bold">
              Thank you for visiting my page!
            </div>
            <div>Contact me:</div>
            <div className="mt-8 flex justify-around w-60 mx-auto text-3xl text-neutral-500">
              <a
                href="mailto:deardosatria1@gmail.com"
                className="hover:text-red-400"
              >
                <MdEmail />
              </a>
              <a
                href="https://www.linkedin.com/in/deardo-satria-5a8b69278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a href="https://t.me/deardosr" className="hover:text-blue-400">
                <FaTelegram />
              </a>
              <a
                href="https://instagram.com/deardosatria_"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-black h-14 grid justify-center items-center">
          <div className="text-neutral-400 text-sm">
            2024 | Made by Deardo Satria
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          font-family: Inter, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
}
