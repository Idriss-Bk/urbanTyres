import React from "react";
import Image from "next/image";
import CA1 from "@/public/hero/brown.jpeg";
import CA2 from "@/public/hero/white.jpeg";
import HeroCategories from "@/app/components/sections/HeroCategories";
import localfont from "next/font/local";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const Hero = async () => {
  return (
    <div className="pt-36 pb-20 mb-16 xl:mb-24 bg-gradient-to-r from-slate-100 to-slate-50 shadow">
      <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
        <div className="lg:flex gap-20">
          <div className="lg:w-6/12 flex justify-center items-center">
            <div>
              <h1
                className={`${druk.className} text-3xl md:text-4xl text-black font-bold mb-5`}
              >
                Your Ultimate Guide to Tyres: Expert Insights & Tips
              </h1>
              <p className="text-lg text-slate-600 font-normal mb-10">
                Discover comprehensive guides on tyre pressure, sizes, and bike
                tyres. Stay informed and keep your wheels rolling smoothly.
              </p>
              <p className="text-md font-semibold text-slate-800 mb-2 capitalize">Our expert research will help you find the best</p>
              <div className="mb-10 lg:mt-0">
                <HeroCategories />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12">
            <div className="grid grid-cols-2 gap-4">
              <Image
                className="animate__animated animate__zoomIn w-full rounded-xl"
                src={CA1}
                alt="office content 1"
                height={0}
                width={0}
                style={{ width: "100%", height: "200px" }}
                layout="responsive"
                placeholder="blur"
              />
              <Image
                className="animate__animated animate__zoomIn mt-4 w-full lg:mt-10 rounded-xl"
                src={CA2}
                alt="office content 2"
                height={0}
                width={0}
                style={{ width: "100%", height: "200px" }}
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
