import React from "react";
import localfont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import { tyre_sizes_posts } from "@/apis/graphql/posts";

const druk = localfont({
  src: [
    {
      path: "../../../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-UK", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

const truncateContent = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const truncateTitle = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const Block1 = async () => {
  const posts = await tyre_sizes_posts();
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 mt-20">
      <article>
        <header className="flex justify-between items-center">
          <Link href="/tyre-sizes">
            <h2
              className={`${druk.className} text-3xl md:text-4xl underline decoration-orange-700 underline-offset-2 mb-4 font-bold text-black`}
            >
              Tyre Sizes
            </h2>
          </Link>
          <Link href="/tyre-sizes">
            <p
              className={`${druk.className} text-md text-orange-600 underline font-semibold`}
            >
              View more
            </p>
          </Link>
        </header>
      </article>
      {posts.length > 0 ? (
        <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-5">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="break-inside-avoid bg-white shadow-md overflow-hidden"
            >
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.featuredImage?.node?.sourceUrl!}
                  alt="POST"
                  width={400}
                  height={280}
                  objectFit="cover"
                  className="w-full h-auto"
                />
              </Link>
              <div className="flex justify-center items-center">
                <Link
                  href={`/${post.slug}`}
                  className={`mask mask-hexagon h-16 w-16 bg-slate-100 transition-all hover:bg-orange-600 text-zinc-950 hover:text-white shadow-md -mt-8 flex justify-center items-center`}
                >
                  <GoPlus className="size-8" />
                </Link>
              </div>
              <div className="p-4">
                <div className="flex justify-start items-center gap-1.5 my-3">
                  <Link
                    href="/about-us"
                    className={`animated-underline text-slate-800 text-sm font-semibold underline decoration-orange-600 underline-offset-[1px]`}
                  >
                    Joel Matthews
                  </Link>
                  <span>
                    <RxDividerVertical className="text-slate-300" />
                  </span>
                  <p className="text-sm text-slate-500">
                    {post.date}
                  </p>
                </div>
                <Link href={`/${post.slug}`}>
                  <h2
                    className={`${druk.className} text-xl font-bold mb-3 text-black`}
                  >{truncateTitle(post.title, 50)}</h2>
                </Link>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(post.content, 150),
                  }}
                ></p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Block1;
