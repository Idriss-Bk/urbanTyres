"use client";
import React from "react";
import localfont from "next/font/local";
import Newslettere from "@/public/newsletters/newsletter.jpeg";
import Image from "next/image";
import NewsletterPopUp from "./NewsletterPopUp";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const Newsletter = () => {
  const [popup, setPopup] = React.useState(false);

  const handleSubscribe = () => {
    setPopup(true);
  };

  return (
    <div className="mt-20 max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
      <div className="lg:flex">
        <div className="lg:w-6/12 bg-green-100 text-black font-bold text-center flex justify-center items-center">
          <div className="relative overflow-hidden">
            <Image
              className="w-full object-contain"
              src={Newslettere}
              alt="Hamza"
              width={0}
              height={0}
              quality={100}
              objectFit="cover"
              layout="responsive"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-orange-400/45 to-transparent opacity-75`}
            ></div>
          </div>
        </div>
        <div className="lg:w-6/12 bg-slate-100 px-10 py-8 lg:py-0 text-black font-bold text-center flex justify-center items-center flex-col">
          <h3
            className={`${druk.className} text-4xl font-semibold text-black mb-6`}
          >
            Keep in touch!
          </h3>
          <div className="flex justify-center items-center flex-col">
            <div className="max-w-[400px] mx-auto">
              <div className="h-[2px] bg-orange-200 mb-4 w-[100px]"></div>
            </div>
            <div className="max-w-[400px] mx-auto">
              <p className="text-slate-600 text-lg text-center mb-7 font-normal">
                Sign up and I'll send you great tyre care tips and driving
                advice!
              </p>
              <button
                onClick={handleSubscribe}
                className="py-3 rounded bg-orange-600 text-white font-semibold uppercase w-full mb-2"
                type="button"
              >
                Sign up for my emails
              </button>
              <span className="text-sm text-slate-500 font-normal">
                We will not send you spam. Unsubscribe at any time!
              </span>
            </div>
          </div>
        </div>
      </div>

      <NewsletterPopUp popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default Newsletter;
