import React from "react";
import Image from "next/image";
import Link from "next/link";
import localfont from "next/font/local";
import { RxDividerVertical } from "react-icons/rx";
import { getCategories } from "@/apis/graphql/categories";
import { GoPlus } from "react-icons/go";
import AboutMe from "@/app/components/sections/Sidebar/AboutMe";
import NewsLetter from "@/app/components/sections/Sidebar/NewsLetter";
import RecentPosts from "../sections/Sidebar/RecentPosts";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

interface Post {
  title: string;
  slug: string;
  content: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    } | null;
  } | null;
}

interface CategoryProps {
  category: {
    name: string;
    description: string;
    slug: string;
    posts: {
      nodes: Post[];
    };
    children?: {
      nodes: {
        posts: { nodes: Post[] };
        name: string;
        slug: string;
        description: string;
      }[];
    };
  };
}

const truncateContent = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

export default async function Category({ category }: CategoryProps) {
  const hasSubcategories =
    category.children?.nodes && category.children.nodes.length > 0;
  const categories = await getCategories();
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36">
      <div className="lg:flex gap-16">
        <div className="lg:w-9/12">
          <h1
            className={`${druk.className} text-5xl md:text-5xl capitalize lg:text-5xl font-bold text-left mb-3 text-black decoration-orange-400 underline`}
          >
            {category.name}
          </h1>
          <p className="text-sm text-zinc-600 mb-3.5">
            When you purchase through links on our site, we may earn an
            affiliate commission.{" "}
            <Link href="/about-us" className="text-blue-500 underline">
              Here&apos;s how it works.
            </Link>
          </p>
          <p className="max-w-[900px] text-left font-medium text-md text-zinc-900 mb-6">
            {category.description}
          </p>

          <section className="columns-1 sm:columns-2 lg:columns-2 xl:columns-2 gap-6 space-y-6">
            {category.posts.nodes.map((post, index) => (
              <div
                key={post.slug}
                className="break-inside-avoid bg-white shadow-md overflow-hidden"
              >
                <Link href={post.slug}>
                  <Image
                    src={post.featuredImage?.node?.sourceUrl!}
                    alt={post.featuredImage?.node?.altText!}
                    width={400}
                    height={280}
                    className="w-full h-auto object-cover"
                  />
                </Link>
                <div className="flex justify-center items-center">
                  <Link
                    href={post.slug}
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
                      {formatDate(post.date)}
                    </p>
                  </div>
                  <Link href="/">
                    <h2
                      className={`${druk.className} text-xl font-bold mb-3 text-black`}
                    >
                      {post.title}
                    </h2>
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
        </div>
        <div className="lg:w-3/12 mt-10 lg:mt-0">
            <AboutMe />
            <NewsLetter />
            <RecentPosts />
        </div>
      </div>
    </div>
  );
}
