import Head from "next/head";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import {useEffect} from "react";
import Image from "next/image";
import bg_image from "../../../public/gitclick/bg-image.jpg";
import graph_icons from "../../../public/gitclick/graph-icons.png";
import img_asset from "../../../public/gitclick/img-asset.png";
import img_asset2 from "../../../public/gitclick/img-asset-2.png";
import lock_icons from "../../../public/gitclick/lock-icons.png";
import people_icons from "../../../public/gitclick/people-icons.png";

export default function Gitclick() {
  useEffect(() => {
    Aos.init();
  });

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }

  return (
    <div>
      <Head>
        <title>Gitclick | Ronas IT</title>
      </Head>
      <nav className="bg-black fixed text-white w-screen px-10 md:px-24 py-6 z-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold cursor-pointer">GitClick</div>
          <div className="hidden md:flex gap-8 text-neutral-400">
            <a href="#" className="hover:text-white duration-[350ms]">
              GitClick Client
            </a>
            <a href="#pricing" className="hover:text-white duration-[350ms]">
              Pricing
            </a>
            <a href="#about" className="hover:text-white duration-[350ms]">
              About
            </a>
          </div>
          <div className="hidden md:block border border-white px-8 py-2 rounded-3xl hover:scale-[1.2] hover:bg-white hover:text-black duration-[350ms] cursor-pointer text-sm font-semibold">
            Try Free
          </div>
          <div className="md:hidden block">
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobileMenu"
          className="hidden md:hidden absolute pr-16 mt-4 right-0 "
        >
          <ul className="flex flex-col text-center space-y-3 px-10 py-3 w-auto bg-gray-900 rounded-md">
            <li>
              <a href="#" className="hover:text-gray-400">
                GitClick Client
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Try for free
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-black fixed flex justify-center items-center h-screen -z-10">
        <Image src={bg_image} className="h-full object-cover"></Image>
      </div>
      <div>
        <section>
          <div
            className="flex flex-col md:flex-row items-center text-white pt-20 py-4"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div className="px-16 md:px-24 mt-16">
              <div className="text-4xl md:text-5xl font-bold max-w-xs md:max-w-md">
                Streamline your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-extrabold">
                  Dev Workflow
                </span>
              </div>
              <div className="text-neutral-400 mt-10">
                This Client will really change your development workflow.
                Support integration with the tools you love.
              </div>
              <div className="flex gap-4 md:gap-6 mt-10">
                <button className="bg-white text-black text-sm font-semibold hover:scale-[1.2] duration-[350ms] px-6 py-2 md:px-8 md:py-2 rounded-3xl">
                  Download
                </button>
                <button className="border border-white px-6 py-2 md:px-8 md:py-2 rounded-3xl hover:scale-[1.2] hover:bg-white hover:text-black duration-[350ms] cursor-pointer text-xs lg:text-sm font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex md:justify-end md:items-end md:pr-0 mt-10 md:mt-0">
              <Image
                src={img_asset}
                className="px-10 md:px-0 md:min-w-[30vh] lg:max-w-none"
              ></Image>
            </div>
          </div>
        </section>
        <section>
          <div
            className="flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-10 space-y-6 md:space-y-0 text-white mt-24 px-16 md:px-24"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div
              className="border border-neutral-700 hover:border-0 hover:bg-neutral-100 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 h-80 rounded-2xl p-7 px-10"
              id="card"
            >
              <Image
                src={people_icons}
                alt=""
                className="w-20 lg:w-24 opacity-85"
              ></Image>
              <div className="mt-4 font-semibold text-xl">Collaboration</div>
              <div className="mt-3 text-sm" id="info-text">
                Help is a priority, even if it's not directly related to the
                goals you're trying to achieve.
              </div>
            </div>
            <div
              className="border border-neutral-700 hover:border-0 hover:bg-neutral-100 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 h-80 rounded-2xl p-7"
              id="card"
            >
              <Image
                src={lock_icons}
                alt=""
                className="w-20 lg:w-24 opacity-85"
              />
              <div className="mt-4 font-semibold text-xl">Security</div>
              <div className="mt-3 text-sm" id="info-text">
                Manage your work with built-in agile features. We update them
                regularly.
              </div>
            </div>
            <div
              className="border border-neutral-700 hover:border-0 hover:bg-neutral-100 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 h-80 rounded-2xl p-7"
              id="card"
            >
              <Image
                src={graph_icons}
                alt=""
                className="w-20 lg:w-24 opacity-85"
              ></Image>
              <div className="mt-4 font-semibold text-xl">Analytics</div>
              <div className="mt-3 text-sm" id="info-text">
                View reports and analysis of your team's work. It helps to do
                the work more efficiently.
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className="px-12 md:px-24 mt-28 text-white mb-16"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-extrabold">
              We are a company that has created a DevOps platform for software
              innovations.
            </div>
            <div className="flex justify-center mt-16">
              <Image src={img_asset2} alt="" id="pricing" />
            </div>
            <div className="font-semibold text-4xl mt-10">Our Pricing</div>
            <div className="mt-8 font-semibold text-lg text-neutral-400 max-w-sm">
              We offer favorable conditions for your comfortable and productive
              work.
            </div>
            <div
              className="mt-12 flex flex-col md:px-28 lg:px-0 lg:flex-row justify-center space-y-10 lg:space-x-10 lg:space-y-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="group border border-neutral-700 hover:border-0 hover:bg-gradient-to-r hover:from-teal-300 hover:to-cyan-300 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 rounded-2xl p-7">
                <div className="space-y-5">
                  <span className="text-3xl font-semibold">Free</span>
                  <br />
                  <span className="text-neutral-400 group-hover:text-black duration-[400ms]">
                    For individual devs
                  </span>
                  <br />
                  <hr />
                  <div>
                    <p className="leading-loose text-neutral-400 group-hover:text-black duration-[400ms]">
                      <span>&#10004;</span> 5 GB Storage <br />
                      <span>&#10004;</span> 10 GB Transfer / month <br />
                      <span>&#10004;</span> 4 Users per namespace
                      <br />
                      <span>&#10004;</span> Local and private repos
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold">$0</span> /month
                  </div>
                  <div className="text-center">
                    <button className="bg-white group-hover:bg-black group-hover:text-white text-black font-semibold px-16 py-2 rounded-full duration-[400ms]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="group border border-neutral-700 hover:border-0 hover:bg-gradient-to-r hover:from-teal-300 hover:to-cyan-300 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 rounded-2xl p-7">
                <div className="space-y-5">
                  <span className="text-3xl font-semibold">Premium</span>
                  <br />
                  <span className="text-neutral-400 group-hover:text-black duration-[400ms]">
                    For a small team
                  </span>
                  <br />
                  <hr />
                  <div>
                    <p className="leading-loose text-neutral-400 group-hover:text-black duration-[400ms]">
                      <span>&#10004;</span> 60 GB Storage <br />
                      <span>&#10004;</span> Advanced CI/CD <br />
                      <span>&#10004;</span> Enterprise agile planning <br />
                      <span>&#10004;</span> Protected branches
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold">$16</span> /month
                  </div>
                  <div className="text-center">
                    <button className="bg-white group-hover:bg-black group-hover:text-white text-black font-semibold px-16 py-2 rounded-full duration-[400ms]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="group border border-neutral-700 hover:border-0 hover:bg-gradient-to-r hover:from-teal-300 hover:to-cyan-300 hover:scale-110 hover:text-black duration-[400ms] lg:w-1/4 rounded-2xl p-7">
                <div className="space-y-5">
                  <span className="text-3xl font-semibold">Ultimate</span>
                  <br />
                  <span className="text-neutral-400 group-hover:text-black duration-[400ms]">
                    For large companies
                  </span>
                  <br />
                  <hr />
                  <div>
                    <p className="leading-loose text-neutral-400 group-hover:text-black duration-[400ms]">
                      <span>&#10004;</span> 250 GB Storage <br />
                      <span>&#10004;</span> Security dashboards <br />
                      <span>&#10004;</span> Free guest users
                      <br />
                      <span>&#10004;</span> Container scanning
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold">$99</span> /month
                  </div>
                  <div className="text-center">
                    <button className="bg-white group-hover:bg-black group-hover:text-white text-black font-semibold px-16 py-2 rounded-full duration-[400ms]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 h-[40svh]">
              <div>
                <h1 className="text-4xl font-semibold">Try Live Demo</h1>
                <p className="mt-8 font-semibold text-lg text-neutral-400 max-w-md">
                  Still confused? Try the live demo features! Feel the
                  experience of our software without installing anything.
                </p>
              </div>
              <div className="mt-8">
                <button className="bg-white hover:bg-black hover:border hover:border-white hover:text-white hover:scale-110 text-black font-semibold px-10 py-3 rounded-3xl duration-[400ms]">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-14 md:px-24 pt-10 bg-neutral-950 text-neutral-400">
            <div className="" id="about">
              More info on GitClick
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-[6px] pb-20">
              <div className="hover:text-white cursor-pointer">Address</div>
              <div className="hover:text-white cursor-pointer">
                Business email
              </div>
              <div className="hover:text-white cursor-pointer">
                Social media
              </div>
              <div className="hover:text-white cursor-pointer">
                Work with us
              </div>
              <div className="hover:text-white cursor-pointer">Sponsorship</div>
              <div className="hover:text-white cursor-pointer">
                Collaboration
              </div>
              <div className="hover:text-white cursor-pointer">Reviews</div>
              <div className="hover:text-white cursor-pointer">
                Our partnership
              </div>
              <div className="hover:text-white cursor-pointer">Patreon</div>
            </div>
          </div>
          <div className="text-center text-sm text-neutral-500 bg-black py-4 ">
            Designed by{" "}
            <a
              href="https://dribbble.com/shots/20540597-Web-design-landing-page-ui"
              target="_blank"
              className="hover:text-white"
            >
              Ronas IT @dribble
            </a>
            |{" "}
            <Link href={"/"} className="hover:text-white">
              deardosatria_
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
