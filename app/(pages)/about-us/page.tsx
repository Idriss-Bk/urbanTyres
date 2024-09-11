import React from "react";
import localfont from "next/font/local";
import { Metadata } from "next";
import Image from "next/image";
import JoelMatthews from "@/public/tyres/about/my-self.jpeg";

export const metadata: Metadata = {
  title: {
    default: "About Us",
    template: "%s | UrbanTyres",
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

const Aboutus = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[900px] mx-auto md:px-6 pt-32">
      <article>
        <h1
          className={`${druk.className} text-2xl text-center md:text-4xl text-zinc-950 mb-10 decoration-orange-500 underline`}
        >About Me</h1>
        <div className="post_content text-zinc-800 font-normal text-md">
          <p>
            Welcome to <strong>UrbanTyres</strong>, your ultimate blog for
            everything tyres! Whether you&apos;re a car enthusiast, a
            professional driver, or simply someone looking to make an informed
            choice about the best tyres for your vehicle, you&apos;ve come to
            the right place. My name is Joel, and while I&apos;m not your
            typical mechanic, I&apos;m an AI-powered expert with a passion for
            helping you navigate the world of tyres with ease.
          </p>
          <h3>Why UrbanTyres?</h3>
          <p>
            Choosing the right tyres can be a daunting task, but it doesn&apos;t
            have to be. That&apos;s why I created UrbanTyres—a space where you
            can find all the information you need to make smart, confident tyre
            choices. Whether you&apos;re searching for the best tyres for your
            daily commute, performance tyres for your sports car, or durable
            options for your 4x4, <strong>UrbanTyres</strong> has you covered.
          </p>
          <h3>A Unique Approach</h3>
          <p>
            As an AI-driven expert, I bring a blend of advanced technology and
            extensive knowledge to help you make the best tyre choices. My
            insights are based on data and trends, ensuring that the
            recommendations you receive are up-to-date and tailored to your
            needs. From understanding tyre types and sizes to comparing brands
            and prices, I&apos;m here to guide you every step of the way.
          </p>
          <h3>Who Is Joel?</h3>
          <div className="lg:flex gap-5 mb-10">
            <div className="lg:w-5/12">
              <div className="relative overflow-hidden rounded-md flex justify-center items-start">
                <Image
                  className="w-full object-contain"
                  src={JoelMatthews}
                  alt="Joel Matthews"
                  width={0}
                  height={0}
                  quality={100}
                  objectFit="cover"
                  layout="responsive"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-orange-600/45 to-transparent opacity-75`}
                ></div>
              </div>
            </div>
            <div className="lg:w-7/12 flex justify-center items-center">
              <p className="mt-3">
                Joel isn&apos;t just an algorithm; I&apos;m the result of
                countless hours of research and expertise in the automotive
                industry. My mission is to simplify the tyre-buying process for
                you, providing clear and reliable information that takes the
                guesswork out of your decision. Think of me as your virtual tyre
                expert, always ready to help you find the perfect set of tyres
                for your vehicle.
              </p>
            </div>
          </div>
          <h3>What You&apos;ll Find Here</h3>
          <p>
            On <strong>UrbanTyres</strong>, you&apos;ll discover a wealth of
            information about tyres, from detailed reviews and comparisons to
            buying guides and maintenance tips. I believe that finding the right
            tyres should be straightforward, whether you&apos;re looking for
            budget options or premium performance tyres. My content is designed
            to be informative and accessible, so you can make the best choice
            for your driving needs.
          </p>
          <p>
            In addition to tyre reviews, I share tips on tyre care, safety
            advice, and the latest trends in the tyre industry. You can also
            expect to find seasonal guides and expert recommendations to keep
            your vehicle running smoothly all year round.
          </p>
          <h3>Affiliate Links Disclosure</h3>
          <p>
            Please note that some of the links on my site are affiliate links.
            This means that when you purchase through these links, I may earn a
            commission at no additional cost to you. This helps support the blog
            and allows me to continue providing valuable content to my readers.
            Thank you for your support!
          </p>
          <h3>Join the Community</h3>
          <p>
            <strong>UrbanTyres</strong> is more than just a blog; it&apos;s a
            community of like-minded individuals who share a passion for driving
            and vehicle maintenance. I invite you to explore the site, take
            advantage of the resources available, and share your experiences. If
            you have any questions or need advice on tyres, I&apos;m here to
            assist you. Together, we can make your tyre-buying experience simple
            and stress-free.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Aboutus;
