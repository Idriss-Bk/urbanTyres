import Link from "next/link";
import React from "react";
import localfont from "next/font/local";

const druk = localfont({
  src: [
    {
      path: "../../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const NewsLetter = () => {
  return (
    <section className="mb-10">
      <h3
        className={`${druk.className} text-black text-3xl py-3.5 border-y-2 border-slate-200 mb-2`}
      >
        Keep in touch!
      </h3>
      <p className="text-slate-600 mb-4">
        Subscribe to our newsletter for the latest news, updates, and exclusive
        offers.
      </p>
      <form action="">
        <input
          type="email"
          className="w-full text-zinc-950 font-semibold text-md bg-slate-100 border-[1px] border-slate-200 outline-none rounded py-3.5 px-4 mb-2"
          placeholder="Enter your email"
        />
        <button
          className={`w-full bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white capitalize font-semibold rounded text-md py-3.5`}
        >
          Get Updates
        </button>
      </form>
      <p className="text-xs text-slate-800 mt-2">
        By submitting your information you agree to the{" "}
        <Link href="/terms-of-conditions" className="text-blue-500">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="text-blue-500">
          Privacy Policy
        </Link>{" "}
        and are aged 16 or over.
      </p>
    </section>
  );
};

export default NewsLetter;
