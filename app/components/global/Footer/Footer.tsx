import React from "react";
import localfont from "next/font/local";
import { LuTrees } from "react-icons/lu";
import Link from "next/link";
import {
  FaCaretRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
// import Newsletter from "./Footer/Newsletter";
import { FaSquareXTwitter } from "react-icons/fa6";
// import OurCategories from "@/app/components/global/Footer/OurCategories";
// import QuickLinks from "@/app/components/global/Footer/QuickLinks";
import Image from "next/image";
import LoGo from "@/public/assets/logo.svg";
import QuickLinks from "./QuickLinks";
import UnselfLinks from "./UnselfLinks";
import Newsletter from "./Newsletter";

const druk = localfont({
  src: [
    {
      path: "../../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const Footer = () => {
  return (
    <div className="bg-white shadow-xl border-t-2 border-slate-200 py-4 lg:py-6 mt-20">
      <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
        <div className="lg:flex gap-10">
          <div className="lg:w-4/12">
            <h3
              className={`${druk.className} mb-5 text-black capitalize text-2xl font-bold mt-10 lg:mt-0`}
            >
              Who we are?
            </h3>
            <p className="text-slate-600 text-md mb-5">
              Your go-to source for expert gardening tips and inspiration.
              Transform your outdoor space into a beautiful blue oasis with our
              guidance.
            </p>
            <div className="flex justify-start items-center gap-1.5">
              <h4 className={`${druk.className} text-lg text-zinc-950 mr-1`}>
                Let&#39;s be friends!
              </h4>
              <nav className="">
                <ul className="flex justify-start items-center gap-1">
                  <li>
                    <Link href="/">
                      <FaFacebookSquare className="size-7 text-zinc-950 transition-all duration-300 hover:text-orange-600" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaSquareXTwitter className="size-7 text-zinc-950 transition-all duration-300 hover:text-orange-600" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaYoutubeSquare className="size-7 text-zinc-950 transition-all duration-300 hover:text-orange-600" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaInstagramSquare className="size-7 text-zinc-950 transition-all duration-300 hover:text-orange-600" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="lg:w-2/12">
            <h3
              className={`${druk.className} mb-5 text-black text-2xl font-bold mt-10 lg:mt-0`}
            >
              Unself Links
            </h3>
            <ul>
              <UnselfLinks />
            </ul>
          </div>
          <div className="lg:w-2/12">
            <h3
              className={`${druk.className} mb-5 text-black text-2xl font-bold mt-10 lg:mt-0`}
            >
              Quick Links
            </h3>
            <ul>
              <QuickLinks />
            </ul>
          </div>
          <div className="lg:w-4/12">
            <h3
              className={`${druk.className} mb-5 text-black text-2xl font-bold mt-10 lg:mt-0`}
            >
              Keep in touch!
            </h3>
            <p className="text-zinc-800 text-md mb-3">
              Stay informed about the latest trends in seating plans!
            </p>
            <Newsletter />
            <p className="text-slate-600 text-sm">
              We will not send you spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
