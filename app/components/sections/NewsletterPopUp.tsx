import React from "react";
import { IoMdClose } from "react-icons/io";
import Jeol from "@/public/tyres/about/joel-matthews.jpg";
import Image from "next/image";
import { Pinyon_Script } from "next/font/google";
import localfont from "next/font/local";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});
const pinyon = Pinyon_Script({ weight: "400", subsets: ["latin"] });

interface NewsletterPopUpProps {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewsletterPopUp: React.FC<NewsletterPopUpProps> = ({
  popup,
  setPopup,
}) => {
  return (
    <>
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 h-screen p-5 lg:pt-16">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[900px]">
              <div className="lg:flex">
                <div className="lg:w-5/12 hidden lg:block">
                  <div className="relative overflow-hidden flex justify-center items-start">
                    <Image
                      className="w-full h-96 object-contain"
                      src={Jeol}
                      alt="Hamza"
                      width={0}
                      height={0}
                      quality={100}
                      objectFit="cover"
                      layout="responsive"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent opacity-75`}
                    ></div>
                  </div>
                </div>
                <div className="lg:w-7/12">
                  <div className="bg-white p-8">
                    <div className="flex justify-end items-center">
                      <IoMdClose
                        className="text-slate-400 size-6 -mt-2.5 cursor-pointer"
                        onClick={() => setPopup(false)}
                      />
                    </div>
                    <h4
                      className={`${druk.className} text-3xl font-semibold text-black mb-5`}
                    >
                      Keep in touch!
                    </h4>
                    <p className="text-slate-600 mb-5 text-sm">
                      Sign up we&#39;ll send you a seasonal recipe, easy gardening
                      idea, or fun entertaining tip that you can do at home.
                      (Know that I respect your privacy and will never ever
                      share your information.)
                    </p>
                    <p
                      className={`${pinyon.className} text-3xl text-black font-bold lowercase mb-8`}
                    >
                      Joel Matthews
                    </p>
                    <form action="">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="w-full">
                          <input
                            className="w-full bg-slate-200 outline-none text-black font-semibold rounded p-3"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="w-full">
                          <input
                            className="w-full bg-slate-200 outline-none text-black font-semibold rounded p-3"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mb-3">
                        <div className="w-full">
                          <input
                            className="w-full bg-slate-200 outline-none text-black font-semibold rounded p-3"
                            type="text"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="py-3 rounded bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white font-semibold w-full"
                      >
                        Yes, Sign me up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopUp;
