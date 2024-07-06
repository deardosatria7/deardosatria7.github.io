import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import {useEffect} from "react";
import ThemeChanger from "../components/ThemeChanger";
import profilePic from "../public/foto_deardo.png";
import gitclick from "../public/project-gitclick.png";
import tappa from "../public/project-tappa.png";
import certificate from "../public/certificate-deardo.jpg";
import {FaLinkedin} from "react-icons/fa6";
import {FaTelegram} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaInstagram} from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <Head>
        <title>Portfolio | Deardo Satria</title>
      </Head>
      <section>
        {/* First page */}
        <div className="first-page px-8 sm:px-12 flex flex-col justify-center items-center md:flex-row max-w-[900px] h-[100svh] mx-auto ">
          {/* ThemeChanger button */}
          <div className="fixed flex items-center justify-center bottom-6 right-4 rounded-full dark:bg-blue-700 bg-neutral-800 shadow-md z-10">
            <ThemeChanger />
          </div>
          <div className="text-description">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              👋 <span className="dark:text-neutral-300">Hello! I'm </span>
              <span className="font-semibold">Deardo Satria.</span>
            </div>
            <div
              className="animation"
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="text-4xl font-bold mt-4">
                I'm a Front-End Web Developer
              </div>
              <div className="text-neutral-600 dark:text-neutral-200 mt-3">
                An undergraduate junior front-end developer based in Indonesia.
              </div>
            </div>
            <div
              className="mt-6 space-x-4"
              data-aos="fade-up"
              data-aos-delay="2600"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <a
                href="#projects"
                className="button-projects bg-slate-800 dark:bg-blue-700 dark:hover:bg-white text-white hover:font-bold text-sm px-4 py-2 rounded-full duration-300 hover:scale-110 hover:text-slate-800 hover:bg-white"
              >
                My projects
              </a>
              <a
                href="#contacts"
                className="text-sm hover:bg-neutral-200 dark:hover:bg-white dark:hover:text-black hover:font-bold px-4 py-2 rounded-full duration-300"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="image-container mt-10 md:mt-0 flex justify-center items-center px-8 max-w-sm mx-auto">
            <div
              className="flex items-center justify-center aspect-square overflow-hidden rounded-full bg-neutral-300 "
              data-aos="fade-up"
              data-aos-delay="3000"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src={profilePic}
                className="z-10 w-full -mr-7 -mt-6"
                loading="eager"
              ></Image>
            </div>
          </div>
        </div>

        {/* Second page */}
        <div
          className="second-page mt-16 px-8 sm:px-12 flex flex-col md:items-center md:text-center"
          id="projects"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="text-description">
            <div className="text-3xl font-bold">Projects</div>
            <div className="mt-4 md:mt-2 max-w-md">
              As a junior web developer, I mainly focused on front-end side.
              These are some of my concept projects.
            </div>
          </div>
          <div className="projects-container flex flex-wrap justify-center gap-7 mt-6 md:mt-8">
            <div>
              <Link href={"/projects/tappa"}>
                <Image
                  src={tappa}
                  className="w-80 grayscale rounded-lg hover:scale-[1.15] hover:grayscale-0 duration-300 shadow-xl border-[1px] border-white"
                ></Image>
              </Link>
            </div>
            <div>
              <Link href={"/projects/gitclick"}>
                <Image
                  src={gitclick}
                  className="w-80 grayscale rounded-lg hover:scale-[1.15] hover:grayscale-0 duration-300 shadow-xl border-[1px] border-white"
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        {/* Third page */}
        <div
          className="third-page mt-20 px-8 sm:px-12 flex flex-col md:items-center md:text-center"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="text-description">
            <div className="text-3xl font-bold">Certification</div>
            <div className="mt-2 max-w-md">
              These are some of my certification(s).
            </div>
          </div>
          <div className="certificate-container mt-4 md:mt-8">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={certificate}
                className="w-80 rounded-lg hover:scale-[1.15] duration-300 shadow-lg"
              ></Image>
              <span className="mt-4 italic text-sm text-center text-neutral-600 dark:text-neutral-400">
                Junior Web Developer certification by BNSP Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* Fourth page */}
        <div
          className="fourth-page h-[80vh] px-5 sm:px-12 flex justify-center items-center text-center"
          id="contacts"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="text-description">
            <div className="text-lg md:text-xl font-semibold">
              Convert your mockups to websites!
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
            <div className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
              Thank you for visiting my page!
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
