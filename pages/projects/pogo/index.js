// assets
import Image from "next/image";
import asset_1 from "../../../public/pogo/img-asset-1.png";
import asset_2 from "../../../public/pogo/img-asset-2.png";

// react-icons
import {FaApple} from "react-icons/fa";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {FaStar} from "react-icons/fa";
import {LiaMoneyBillWaveSolid} from "react-icons/lia";
import {TbPigMoney} from "react-icons/tb";
import {RiMoneyRupeeCircleFill} from "react-icons/ri";
import {FaMoneyCheckDollar} from "react-icons/fa6";

// react
import {useEffect} from "react";
import {useState} from "react";

export default function pogo() {
  // transparent navbar configuration
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // end of transparent navbar config

  return (
    <>
      <div>
        {/* navbar */}
        <nav className="">
          <div
            className={`nav-container fixed flex justify-between items-center px-10 h-[70px] w-screen rounded-b-2xl duration-500 ${
              isTransparent
                ? "bg-black bg-opacity-35 backdrop-blur-sm"
                : "bg-[#524de5]"
            }  text-white text-lg font-semibold z-50`}
          >
            <div>POGO</div>
            <div className="flex gap-6 font-normal text-base text-white">
              <span>Home</span>
              <span>Features</span>
              <span>About Pay</span>
              <span>Screenshots</span>
            </div>
            <div>
              <button>Download</button>
            </div>
          </div>
        </nav>

        <div>
          {/* first-section content */}
          <div className="first-section grid grid-cols-3 items-end gap-3 px-20 h-screen max-h-[600px] w-full bg-[#524de5]">
            <div className="left-section text-white pb-20">
              <div className="font-semibold text-sm">INVEST IN YOUR FUTURE</div>
              <div className="text-[3.5rem] font-bold leading-[1.15]">
                <span className="text-[#c5c5fb]">Saving & </span>
                Investing are made{" "}
                <span className="text-[#c8fea4]">simple.</span>
              </div>
              <div className="mt-10 leading-5 w-20 text-neutral-300">
                Scroll to explore.
              </div>
            </div>
            <div className="flex justify-center z-20">
              <Image src={asset_1} className="-translate-x-10"></Image>
            </div>
            <div className="right-section text-white z-0 py-10">
              <div className="flex justify-start items-center gap-24 w-full">
                <div className="flex flex-col">
                  <span className="text-neutral-400">Active users</span>
                  <span className="font-extrabold text-2xl">5000+</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-400">Download</span>
                  <span className="font-extrabold text-2xl">100K</span>
                </div>
              </div>
              <div className="mt-6 text-neutral-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat, corporis reprehenderit. Aperiam, molestiae iure
                voluptas dicta earum saepe animi. Quis culpa nam illo rem
                aliquid ullam maiores amet nobis quia.
              </div>
              <div className="mt-6 text-sm">
                <span className="font-bold">DOWNLOAD NOW ON:</span>
                <div className="mt-4 flex gap-6 w-full">
                  <button className="flex items-center justify-center px-6 py-3 bg-white rounded-lg font-bold text-black">
                    <span className="text-3xl mr-2">
                      <FaApple />
                    </span>{" "}
                    <span className="flex leading-4 flex-col items-start">
                      <span className="text-xs font-normal text-neutral-500">
                        Available on
                      </span>
                      <span>App Store</span>
                    </span>
                  </button>
                  <button className="flex px-6 py-3 bg-white rounded-lg font-bold text-black">
                    <span className="text-3xl mr-2">
                      <IoLogoGooglePlaystore />
                    </span>{" "}
                    <span className="flex leading-4 flex-col items-start">
                      <span className="text-xs font-normal text-neutral-500">
                        Available on
                      </span>
                      <span>Play Store</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second-section content */}
          <div className="second-section bg-white">
            <div className="first-grid grid justify-center origin-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              <div className="flex flex-col justify-center items-start gap-y-4 p-10 bg-white text-black aspect-square">
                <span className="text-5xl font-extrabold">
                  <LiaMoneyBillWaveSolid />
                </span>
                <span className="text-2xl font-extrabold">Send Money</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, adios.
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-4 p-10 text-black bg-[#c3ff9d] aspect-square">
                <span className="text-5xl font-extrabold">
                  <TbPigMoney />
                </span>
                <span className="text-2xl font-extrabold">Received Money</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, adios.
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-4 p-10 text-black bg-white aspect-square">
                <span className="text-5xl font-extrabold">
                  <RiMoneyRupeeCircleFill />
                </span>
                <span className="text-2xl font-extrabold">Money Exchange</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, adios.
                </span>
              </div>
              <div className="hidden md:flex lg:hidden"></div>
              <div>
                <div className="flex flex-col justify-center items-start gap-y-4 p-10 bg-[#605cf1] aspect-square md:col-auto ">
                  <span className="text-5xl font-extrabold">
                    <FaMoneyCheckDollar />
                  </span>
                  <span className="text-2xl font-extrabold">
                    Multiple Currencies
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, adios.
                  </span>
                </div>
              </div>
              <div className="hidden md:flex lg:hidden"></div>
            </div>

            {/* Main text description */}
            <div className="text-description text-black flex flex-col">
              <div className="flex flex-col mx-auto text-center mt-20">
                <span className="font-bold text-4xl">How it works</span>
                <span className="max-w-[600px] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit asperiores. Nostrum pariatur voluptatum est unde.
                </span>
              </div>

              {/* Cards (how it works) */}
              <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
                <div className="flex flex-col max-w-[300px] bg-neutral-100 py-12 px-4 rounded-xl items-center text-center">
                  <span className="font-bold p-4 rounded-full bg-[#c3ff9d] w-fit aspect-square">
                    01
                  </span>
                  <span className="mt-4 font-bold text-2xl">
                    Install Pogo Partners
                  </span>
                  <span className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit asperiores.
                  </span>
                </div>
                <div className="flex flex-col max-w-[300px] bg-neutral-100 py-12 px-4 rounded-xl items-center text-center">
                  <span className="font-bold p-4 rounded-full bg-[#c3ff9d] w-fit aspect-square">
                    02
                  </span>
                  <span className="mt-4 font-bold text-2xl">
                    Create your account
                  </span>
                  <span className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit asperiores.
                  </span>
                </div>
                <div className="flex flex-col max-w-[300px] bg-neutral-100 py-12 px-4 rounded-xl items-center text-center">
                  <span className="font-bold p-4 rounded-full bg-[#c3ff9d] w-fit aspect-square">
                    03
                  </span>
                  <span className="mt-4 font-bold text-2xl">
                    Enjoy the features
                  </span>
                  <span className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit asperiores.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div className="third-section bg-[#e4fdd5]">
            <div className="top-section flex justify-between text-black px-20 pt-20">
              <div className="left-text flex flex-col">
                <span className="text-[#6b6ece] text-sm font-bold">
                  INVEST IN YOUR FUTURE
                </span>
                <span className="text-5xl font-bold mt-4">
                  <span className="text-neutral-500 leading-[1.2]">About</span>
                  <br /> Pogo Partners
                </span>
              </div>
              <div className="right-text max-w-[500px] flex flex-col text-neutral-600 mb-8">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione voluptates sed nihil aliquid, perspiciatis
                  unde. Nihil aut quisquam repudiandae deleniti repellat maiores
                  ipsa ex blanditiis quibusdam dicta, rem a? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Impedit asperiores.
                </span>
                <span className="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  nisi sed quaerat nihil itaque labore architecto corporis
                  repellendus suscipit, ut exercitationem consequuntur ex, in,
                  iure molestiae? Sed animi maxime incidunt.
                </span>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="bottom-section flex justify-around px-20 pt-20">
              <div className="left-section">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-7">
                  <div className="bg-[#524de5] w-[160px] aspect-square rounded-full flex flex-col items-center justify-center">
                    <span className="font-bold text-4xl">5K</span>
                    <span className="font-semibold text-sm">Active users</span>
                  </div>
                  <div className="bg-[#c3ff9d] text-black w-[160px] aspect-square rounded-full flex flex-col items-center justify-center mt-8">
                    <span className="font-bold text-4xl">10K</span>
                    <span className="font-semibold text-sm">Downloads</span>
                  </div>
                  <div className="bg-white text-black w-[160px] aspect-square rounded-full flex flex-col items-center justify-center ml-4">
                    <span className="font-bold text-4xl">3K</span>
                    <span className="font-semibold text-sm">Best reviews</span>
                  </div>
                  <div className="bg-[#d3feb7] text-black w-[160px] aspect-square rounded-full flex flex-col items-center justify-center mt-8">
                    <span className="font-bold text-4xl">9</span>
                    <span className="font-semibold text-sm">Awards</span>
                  </div>
                </div>
              </div>
              <div className="right-section max-w-[500px]">
                <Image src={asset_2} className=""></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
