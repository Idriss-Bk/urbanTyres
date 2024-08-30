import React from 'react'
import Image from 'next/image'
import localfont from "next/font/local";
import POST from "@/public/tyres/about/joel-matthews.jpg";

const druk = localfont({
    src: [
      {
        path: "../../../../public/assets/gtsuper.otf",
      },
    ],
    variable: "--font-druk",
});

const AboutMe = () => {
  return (
    <section className="mb-10">
              <h3
                className={`${druk.className} text-black  text-3xl py-3.5 border-y-2 border-slate-200 mb-4`}
              >
                About me
              </h3>
              <div className="relative overflow-hidden rounded-lg flex justify-center items-start">
                <Image
                  className="w-full rounded-lg sm:h-96 object-contain"
                  src={POST}
                  alt="Hamza"
                  width={0}
                  height={0}
                  quality={100}
                  objectFit="cover"
                  layout="responsive"
                />
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-t from-orange-600/45 to-transparent opacity-75`}
                ></div>
              </div>
              <p className="text-md text-slate-700 mt-5">Joel Matthews: Your Virtual Tyre Technician. I combine the knowledge of tyre specialists, automotive enthusiasts, and industry experts to simplify tyre maintenance and selection for all experience levels. I&#39;m here to guide you through each step, offering tips and tricks to help you choose and maintain the perfect tyres.</p>
            </section>
  )
}

export default AboutMe