import localfont from "next/font/local";
import Link from "next/link";
import React from "react";
import AboutMe from "@/app/components/sections/Sidebar/AboutMe";
import NewsLetter from "../sections/Sidebar/NewsLetter";
import RecentPosts from "../sections/Sidebar/RecentPosts";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

interface pageProps {
  page: {
    title: string;
    content: string;
    slug: string;
  };
}

export default function pagePage({ page }: pageProps) {
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36">
      <div className="lg:flex gap-16">
        <div className="lg:w-9/12 lg:border-r-[1px] lg:border-slate-200 lg:pr-10">
          <article>
            <h1
              className={`${druk.className} text-2xl text-left md:text-4xl text-zinc-950 mb-10 decoration-orange-500 underline`}
            >
              {page.title}
            </h1>
            <div
              className="post_content text-zinc-800 font-normal text-lg"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </article>
        </div>
        <div className="lg:w-3/12">
          <AboutMe />
          <NewsLetter />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}
