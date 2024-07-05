import Head from "next/head";
import Image from "next/image";
import chat_ui from "../../../public/tappa/chat-ui.png";
import chat_ui_2 from "../../../public/tappa/chat-ui-2.png";
import asset1 from "../../../public/tappa/asset-img.jpg";
import asset2 from "../../../public/tappa/asset-img-2.jpg";
import asset3 from "../../../public/tappa/asset-img-3.png";
import asset4 from "../../../public/tappa/asset-img-4.png";
import asset5 from "../../../public/tappa/asset-img-5.png";
import asset6 from "../../../public/tappa/icon-person.png";
import asset7 from "../../../public/tappa/asset-img-6.png";
import sticker1 from "../../../public/tappa/stickers-1.png";
import sticker2 from "../../../public/tappa/stickers-2.png";
import sticker3 from "../../../public/tappa/stickers-3.png";
import sticker4 from "../../../public/tappa/stickers-4.png";
import logo_short from "../../../public/tappa/tappa-logo-short.png";

export default function Tappa() {
  return (
    <div>
      <Head>
        <title>Tappa! | Outcrowd</title>
      </Head>

      <nav className="fixed block top-0 bg-black text-white w-screen px-6 md:px-16 py-6 z-10">
        <div className="nav-container flex justify-between">
          <div className="nav-logo flex items-center text-2xl min-h-fit">
            Tappa!
          </div>
          <div className="nav-components flex items-center gap-8">
            <div className="hidden sm:inline">
              <button className="text-sm border-white border-[1px] rounded-full px-5 py-2 hover:bg-white hover:text-black  hover:scale-[1.2] hover:font-semibold duration-300">
                Get started
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVR4nO3VSwqAMAyE4d6gHlKLh1av8kshPtDWhWahOB9kNe1mICQE+SWgAZJN9M6L7NPEZtx/fppXAT1nySuvsnqOWq+8yqrK9SyGQpW380v5IdDZRO9cVtpjtMdoj78O3WN0j9E9lveaAewKCHZ5+IXWAAAAAElFTkSuQmCC" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-black text-white pt-36">
        <section>
          <div className="first-page flex flex-col justify-center items-center">
            <div className="main-text text-center px-6">
              <div className="text-4xl md:text-6xl font-[500] leading-[1.15]">
                Connect with your <br />
                friends easily
              </div>
              <div className="mt-4 text-neutral-400">
                The best app for your communication
              </div>
              <div className="buttons flex justify-center mt-10 md:mt-6 gap-3 md:gap-6">
                <button className="bg-white text-black font-semibold text-sm rounded-full px-4 py-2 sm:px-5 sm:py-3 hover:scale-110 hover:font-semibold duration-300">
                  <div className="grid grid-flow-col gap-2 items-center">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/color/48/apple-app-store--v1.png"
                      alt="apple-app-store--v1"
                    />
                    <span>App store</span>
                  </div>
                </button>
                <button className="bg-white text-black font-semibold text-sm rounded-full px-4 py-2 sm:px-5 sm:py-3 hover:scale-110 hover:font-semibold duration-300">
                  <div className="grid grid-flow-col gap-2 items-center">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/color/48/google-play.png"
                      alt="google-play"
                    />
                    <span>Google play</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="image-container opacity-75 mt-4">
              <Image src={chat_ui} alt="Tappa app"></Image>
            </div>
          </div>
          <div className="second-page mt-10 px-6 md:px-20 flex flex-col">
            <div className="main-text px-8 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-[500]">
                Send private messages
              </div>
              <div className="mt-7 text-neutral-400  md:text-xl">
                Simple, secure, and provate messaging and calling. <br />
                Free and worldwide connection.
              </div>
              <div className="button mt-8">
                <button className="bg-white rounded-full text-black px-5 py-3 font-bold text-sm hover:scale-110 duration-300">
                  Learn more
                </button>
              </div>
            </div>
            <div className="image-container flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8">
              <div>
                <Image
                  src={asset1}
                  alt="tappa model 1"
                  className="aspect-[9/16] max-h-[80svh] opacity-65 w-auto object-cover md:mt-20 rounded-2xl"
                ></Image>
              </div>
              <div>
                <Image
                  src={asset2}
                  alt="tappa model 2"
                  className="aspect-[12/16] max-h-[80svh] opacity-65 w-auto object-cover rounded-2xl"
                ></Image>
              </div>
            </div>
          </div>
          <div className="third-page flex flex-col items-center justify-center mt-36 px-6 md:px-20">
            <div className="main-text text-center">
              <div className="text-4xl md:text-5xl font-[500]">
                Our Features
              </div>
              <div className="mt-7 text-neutral-400 md:text-xl max-w-xl">
                Save every minute with our new features. We will help you feel
                your interlocutor next to you.
              </div>
            </div>
            <div className="grid lg:grid-rows-2 lg:grid-cols-4 gap-6 max-w-sm lg:max-w-screen-lg mt-10 px-4">
              <div className="lg:row-span-2 lg:col-span-2 bg-[#b1b3fe] rounded-2xl p-8 pb-0 flex flex-col items-center text-center">
                <div className="text-black text-3xl mt-6 font-semibold">
                  Create your team
                </div>
                <div className="mt-6">
                  <button className="bg-black px-4 py-3 text-sm rounded-full hover:bg-neutral-700 duration-300">
                    Get the app
                  </button>
                </div>
                <div className="mt-10">
                  <Image
                    src={chat_ui_2}
                    className="max-w-[180px] md:max-w-72"
                  ></Image>
                </div>
              </div>
              <div className="lg:row-span-1 lg:col-span-2 bg-neutral-800 w-full rounded-2xl p-8 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-6">
                <div className="text-container">
                  <div className="font-[500] text-2xl">Voice transcription</div>
                  <div className="text-neutral-400 text-sm mt-3">
                    These new voice transcription feature helps you record
                    messages while you're on the move.
                  </div>
                </div>
                <div className="image-container rounded-2xl">
                  <Image src={asset3} className="max-w-[160px]"></Image>
                </div>
              </div>
              <div className="lg:row-span-1 lg:col-span-2 bg-[#6e41ff] w-full rounded-2xl p-8 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-6">
                <div className="text-container">
                  <div className="text-2xl font-[500]">Translation</div>
                  <div className="text-neutral-400 text-sm mt-3">
                    No language barrier! Translate your messages into any
                    language.
                  </div>
                  <div className="mt-4">
                    <button className="bg-[#8762fd] px-4 py-3 text-sm rounded-full hover:bg-neutral-400 duration-300">
                      Get the app
                    </button>
                  </div>
                </div>
                <div className="image-container rounded-2xl">
                  <Image src={asset4} className="max-w-[160px]"></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="fourth-page flex justify-center items-center mt-36">
            <div className="z-0">
              <Image src={asset5} className="w-screen"></Image>
            </div>
            <div className="absolute z-1 text-sm md:text-lg leading-normal text-center bg-black bg-opacity-50 p-6 mx-8 rounded-2xl max-w-md lg:max-w-screen-md">
              With private messages and calls, you can be yourself communicate
              freely and stay in touch with the people who matter most, even if
              they are far away.
            </div>
          </div>
          <div className="fifth-page flex flex-col items-center mt-20 px-6">
            <div className="main-text text-center flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-[500]">
                Best sticker for users
              </div>
              <div className="mt-4 md:mt-7 text-neutral-400 md:text-xl max-w-sm">
                A huge number of stickers will help you show your mood.
              </div>
            </div>
            <div className="sticker-examples flex flex-wrap items-center justify-center gap-6 mt-10">
              <div className="bg-neutral-900 flex items-center px-5 py-20 rounded-xl">
                <Image src={sticker1} className="max-w-[160px]"></Image>
              </div>
              <div className="bg-neutral-900 flex items-center px-5 py-20 rounded-xl">
                <Image src={sticker2} className="max-w-[160px]"></Image>
              </div>
              <div className="bg-neutral-900 flex items-center px-5 py-20 rounded-xl">
                <Image src={sticker3} className="max-w-[160px]"></Image>
              </div>
              <div className="bg-neutral-900 flex items-center px-5 py-20 rounded-xl">
                <Image src={sticker4} className="max-w-[160px]"></Image>
              </div>
            </div>
          </div>
          <div className="sixth-page flex flex-col justify-center items-center mt-20">
            <div className="main-text text-center text-4xl font-[500]">
              Thousands of users <br />
              talk about us
            </div>
            <div className="user-reviews flex flex-wrap items-center justify-center gap-8 mt-10 mx-12">
              <div className="container bg-neutral-900 p-5 rounded-xl max-w-sm">
                <div className="account-info flex justify-start items-center space-x-4">
                  <Image src={asset6} className="max-w-8"></Image>
                  <span>Andrei Markovic</span>
                </div>
                <div className="reviews mt-4 text-neutral-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum qui saepe natus commodi quaerat, voluptas ad eos
                  veniam consectetur voluptatibus expedita quas cupiditate!
                  Quasi laboriosam dicta amet labore fugit ab.
                </div>
              </div>
              <div className="container bg-neutral-900 p-5 rounded-xl max-w-sm">
                <div className="account-info flex justify-start items-center space-x-4">
                  <Image src={asset6} className="max-w-8"></Image>
                  <span>Jason Maoi</span>
                </div>
                <div className="reviews mt-4 text-neutral-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum qui saepe natus commodi quaerat, voluptas ad eos
                  veniam consectetur voluptatibus expedita quas cupiditate!
                  Quasi laboriosam dicta amet labore fugit ab.
                </div>
              </div>
              <div className="container bg-neutral-900 p-5 rounded-xl max-w-sm">
                <div className="account-info flex justify-start items-center space-x-4">
                  <Image src={asset6} className="max-w-8"></Image>
                  <span>Luther Fintech</span>
                </div>
                <div className="reviews mt-4 text-neutral-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostril qui saepe natus commodi quaerat, voluptas ad eos
                  veniam consectetur voluptatibus expedita quas cupiditate!
                  Quasi laboriosam dicta amet labore fugit ab.
                </div>
              </div>
            </div>
          </div>
          <div className="seventh-page mt-32 flex items-center justify-center md:px-6">
            <div className="container flex flex-col md:flex-row w-fit justify-center items-center bg-[#6e41ff] sm:rounded-3xl">
              <div className="main-text py-10 px-16">
                <div className="text text-3xl lg:text-5xl font-[500] max-w-screen-sm text-center md:text-start">
                  Download the app, and chat with pleasure!
                </div>
                <div className="buttons mt-6 flex justify-center md:justify-start gap-4">
                  <button className="bg-white text-black font-semibold text-sm rounded-full px-3 py-2 md:px-5 md:py-3 hover:scale-110 hover:font-semibold duration-300">
                    <div className="grid grid-flow-col sm:gap-2 items-center">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/color/48/apple-app-store--v1.png"
                        alt="apple-app-store--v1"
                      />
                      <span>App store</span>
                    </div>
                  </button>
                  <button className="bg-white text-black font-semibold text-sm rounded-full px-3 py-2 md:px-5 md:py-3 hover:scale-110 hover:font-semibold duration-300">
                    <div className="grid grid-flow-col sm:gap-2 items-center">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/color/48/google-play.png"
                        alt="google-play"
                      />
                      <span>Google play</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <Image src={asset7}></Image>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="sm:mt-20 h-[25svh] bg-neutral-900 text-neutral-300">
            <div className="first-row flex justify-between items-center py-6 px-10">
              <div>
                <Image src={logo_short} className="w-12"></Image>
              </div>
              <div className="flex gap-3">
                <a href="#">Price</a>
                <a href="#">About</a>
                <a href="#">Support</a>
                <a href="#">Features</a>
                <a href="#">Contacts</a>
              </div>
              <div className="flex gap-3">
                <a href="#">logo</a>
                <a href="#">logo</a>
              </div>
            </div>
            <span className="bg-neutral-100 h-1 w-full"></span>
            <div className="second-row mt-4 flex justify-between px-10">
              <div>@2023 All Rights Reserved.</div>
              <div className="flex gap-3">
                <a href="#">Terms and conditions</a>
                <a href="#">Privacy statement</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
