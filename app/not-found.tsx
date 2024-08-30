import React from "react";
import localfont from "next/font/local";
import AboutMe from "@/app/components/sections/Sidebar/AboutMe";
import NewsLetter from "@/app/components/sections/Sidebar/NewsLetter";
import RecentPosts from "./components/sections/Sidebar/RecentPosts";

const druk = localfont({
    src: [
      {
        path: "../public/assets/gtsuper.otf",
      },
    ],
    variable: "--font-druk",
  });

const notfound = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36 pb-20 mb-20 xl:mb-20">
      <div className="lg:flex gap-16">
        <div className="lg:w-9/12 lg:border-r-[1px] lg:border-slate-200 lg:pr-10">
            <h1 className={`${druk.className} text-2xl text-left md:text-4xl capitalize text-zinc-950 mb-3 decoration-orange-500 underline`}>Oops! That page can&#39;t be found</h1>
            <p className="text-lg text-slate-700 mb-6">It looks like nothing was found at this location Maybe try searching?</p>
            <div className="max-w-[80px] h-0.5 bg-slate-300 mb-6"></div>
            <form action="" className="max-w-[700px]">
                <div className="flex justify-center items-center">
                    <input type="text" className="w-full border border-slate-200 bg-white font-semibold text-black shadow rounded-xl py-4 px-4 outline-none" placeholder="Search" />
                    <button className="-ml-12 bg-orange-500 text-white font-bold p-2 rounded-xl transition-all duration-300 hover:bg-orange-600" type="button">GO</button>
                </div>
            </form>
        </div>
        <div className="lg:w-3/12">
            <AboutMe />
            <NewsLetter />
            <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default notfound;
