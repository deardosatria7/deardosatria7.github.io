import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/foto_deardo.png";
import linkedinLogo from "../public/logo-linkedin.png";
import emailLogo from "../public/logo-email.png";
import telegramLogo from "../public/logo-telegram.png";
import porfilePicMd from "../public/deardo-edited.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <section>
        <div className="first-page mt-16 px-8">
          <div className="text-description">
            <div>
              👋 Hello! I'm{" "}
              <span className="font-semibold">Deardo Satria.</span>
            </div>
            <div className="text-4xl font-bold mt-4">
              I'm a Front-End Web Developer
            </div>
            <div className="text-neutral-600 text-lg mt-3">
              A fellow Junior Front-End Developer based in Indonesia.
            </div>
            <div className="mt-6 space-x-4">
              <button
                href=""
                className="button-projects bg-slate-800 text-white text-sm px-4 py-3 rounded-full duration-300 hover:scale-110 hover:bg-slate-600"
              >
                My projects
            </button>
              <a href="" className="text-sm">
                Contact me
              </a>
            </div>
            <div className="image-container mt-10 flex justify-center items-center px-8">
              <div className="flex items-center justify-center aspect-square overflow-hidden rounded-full bg-neutral-300">
                <Image
                  src={profilePic}
                  className="z-10 w-full -mr-7 -mt-6"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="second-page mt-16 px-8">
          <div className="text-description">
            <div className="text-3xl font-bold">Projects</div>
            <div className="mt-4">
              As a junior web developer, I mainly focused on front-end side.
              Here are some of my concept projects.
            </div>
          </div>
          <div className="projects mt-4 h-96 bg-neutral-200 rounded-md"></div>
        </div>
        <div className="third-page mt-10 px-8">
          <div className="text-description">
            <div className="text-3xl font-bold">Certification</div>
            <div className="mt-4">Here are some of my certifications.</div>
          </div>
          <div className="certifications mt-4 h-96 bg-neutral-200 rounded-md"></div>
        </div>
        <div className="fourth-page h-[60vh] px-8 flex justify-center items-center text-center">
          <div className="text-description">
            <div className="text-xl font-bold">
              Thank you for visiting my page!
            </div>
            <div>Contact me:</div>
            <div className="mt-5 flex justify-around w-60 mx-auto">
              <a href="">
                <Image src={linkedinLogo}></Image>
              </a>
              <a href="">
                <Image src={emailLogo}></Image>
              </a>
              <a href="">
                <Image src={telegramLogo}></Image>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="bg-black h-12 grid justify-center items-center">
          <div className="text-neutral-200 text-sm">
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
