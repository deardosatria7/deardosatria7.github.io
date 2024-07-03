import Head from "next/head";
import Image from "next/image";
import chat_ui from "../../../public/tappa/chat-ui.png";

export default function Tappa() {
  return (
    <div>
      <Head>
        <title>Tappa! | Outcrowd</title>
      </Head>

      <nav className="fixed block top-0 bg-black text-white w-screen px-16 py-6 z-10">
        <div className="nav-container flex justify-between">
          <div className="nav-logo flex items-center text-2xl min-h-fit">
            Tappa!
          </div>
          <div className="nav-components flex items-center gap-8">
            <div>
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

      <div className="bg-black text-white pt-36 pb-6">
        <section>
          <div className="first-page flex flex-col justify-center items-center">
            <div className="main-text text-center">
              <div className="text-6xl font-[500] leading-[1.15]">
                Connect with your <br />
                friends easily
              </div>
              <div className="mt-4 text-neutral-400">
                The best app for your communication
              </div>
              <div className="buttons mt-6 space-x-7">
                <button className="bg-white text-black font-semibold text-sm rounded-full px-5 py-3 hover:scale-110 hover:font-semibold duration-300">
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
                <button className="bg-white text-black font-semibold text-sm rounded-full px-5 py-3 hover:scale-110 hover:font-semibold duration-300">
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
              <div className="image-container opacity-75 mt-4">
                <Image src={chat_ui} alt="Tappa app"></Image>
              </div>
            </div>
          </div>
          <div className="second-page mt-10">
            <div className="main-text px-8">
              <div className="text-5xl font-[500]">Send private messages</div>
              <div className="mt-7 text-neutral-400 text-xl">
                Simple, secure, and provate messaging and calling. <br />
                Free and worldwide connection.
              </div>
              <div className="button mt-8">
                <button className="bg-white rounded-full text-black px-5 py-3 font-bold text-sm hover:scale-110 duration-300">
                  Learn more
                </button>
              </div>
            </div>
            <div className="image-container"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
