import React from "react";
import localfont from "next/font/local";
import Link from "next/link";
import AboutMe from "@/app/components/sections/Sidebar/AboutMe";
import NewsLetter from "@/app/components/sections/Sidebar/NewsLetter";
import { Metadata } from "next";
import RecentPosts from "@/app/components/sections/Sidebar/RecentPosts";

export const metadata: Metadata = {
  title: {
    default: "Contact Us",
    template: "%s | SimplyGarden",
  },
  description: "",
  // twitter: {
  //   card: "summary_large_image",
  // },
};

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const ContactUs = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36">
      <div className="lg:flex gap-16">
        <div className="lg:w-9/12 lg:border-r-[1px] lg:border-slate-200 lg:pr-10">
          <article>
            <h1
              className={`${druk.className} text-2xl text-left md:text-4xl text-zinc-950 mb-10 decoration-orange-500 underline`}
            >
              Contact Us
            </h1>
          </article>
          <section>
            <p className="text-slate-800 font-normal text-lg">
            Have a question or feedback about our tyres? We&#39;re always eager to hear from our customers. Whether you want to comment on a specific product or share an idea, please fill out the form below. Alternatively, you can reach us directly at: contact@urbantyres.co.uk.
            </p>
            <form action="" className="mt-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                <label htmlFor="" className="text-sm font-semibold text-black">First Name <span className="text-red-500 relative top-[2px]">*</span></label>
                <input type="text" name="first_name" placeholder="First Name" className="w-full mt-1 border border-slate-200 bg-white font-semibold text-black rounded-md py-4 px-4 outline-none" />
                </div>
                <div>
                <label htmlFor="" className="text-sm font-semibold text-black">Last Name <span className="text-red-500 relative top-[2px]">*</span></label>
                <input type="text" name="last_name" placeholder="Last Name" className="w-full mt-1 border border-slate-200 bg-white font-semibold text-black rounded-md py-4 px-4 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="" className="text-sm font-semibold text-black">Address Email <span className="text-red-500 relative top-[2px]">*</span></label>
                <input type="email" name="address_email" placeholder="Address Email" className="w-full mt-1 border border-slate-200 bg-white font-semibold text-black rounded-md py-4 px-4 outline-none" />
              </div>
              <div className="grid grid-cols-1 mt-6 mb-6">
                <label htmlFor="" className="text-sm font-semibold text-black">Comment or Message <span className="text-red-500 relative top-[2px]">*</span></label>
                <textarea name="message" placeholder="Write anything..." className="w-full mt-1 border border-slate-200 bg-white font-semibold text-black rounded-md py-4 px-4 outline-none"></textarea>
              </div>
              <button type="button" className="px-6 py-3 bg-orange-500 transition-all hover:bg-orange-600 text-white font-bold rounded-md">Send Message</button>
            </form>
          </section>
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

export default ContactUs;
