import React from "react";
import localfont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { author_details } from "@/apis/graphql/author";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const Aboutme = async () => {
  const author = await author_details();

  if (!author) {
    return <p>Author not found</p>;
  }

  return (
    <div className="bg-white py-10 shadow mt-20">
      <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
        <section aria-labelledby="about-me" key={author.id}>
          <div className="lg:flex gap-12">
            <div className="lg:w-5/12">
              <div className="relative overflow-hidden rounded-md flex justify-center items-start">
                <Image
                  className="w-full !h-[400px] mask mask-squircle sm:h-80 object-contain"
                  src={author.avatar.url}
                  alt={author.name}
                  width={0}
                  height={0}
                  quality={100}
                  objectFit="cover"
                  layout="responsive"
                />
                <div
                  className={`absolute inset-0 mask mask-squircle bg-gradient-to-t from-orange-600/45 to-transparent opacity-75`}
                ></div>
              </div>
            </div>
            <div className="lg:w-7/12">
              <div className="flex justify-center h-full items-start flex-col">
                <h2
                  id="about-me"
                  className={`${druk.className} text-center lg:text-left w-full text-orange-600 font-semibold text-4xl mb-5 mt-5`}
                >{author.name}</h2>
                <p className="text-lg mb-7 text-black">{author.description}</p>
                <Link
                  href="/about-us"
                  className={`animated-underline text-md font-semibold text-black underline underline-offset-2 decoration-[#${process.env.NEXT_PUBLIC_TERTIARY_COLOR}] capitalize`}
                >
                  Read more here
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
