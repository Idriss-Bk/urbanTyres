import React from "react";
import localfont from "next/font/local";
import { featured_articles } from "@/apis/graphql/posts";
import Image from "next/image";
import Link from "next/link";

const druk = localfont({
  src: [
    {
      path: "../../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const truncateContent = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const RecentPosts = async () => {
  const posts = await featured_articles();

  return (
    <section className="mb-10">
      <h2
        className={`${druk.className} text-black text-3xl py-3.5 border-y-2 border-slate-200 mb-4`}
      >
        Recent Posts
      </h2>
      <div>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li className="mb-3" key={post.slug}>
                <Link href={`/${post.slug}`} className="flex justify-center items-center gap-2">
                  <Image
                    src={post.featuredImage?.node?.sourceUrl!}
                    alt={post.featuredImage?.node?.altText || post.title}
                    width={80}
                    height={30}
                    className="float-left w-20 rounded"
                  />
                  <div className="flex-col">
                    <h3 className="text-sm mb-1 text-black font-semibold">
                      {truncateContent(post.title!, 40)}
                    </h3>
                    <p className="text-xs text-slate-600">
                      By: {post.author?.node?.name}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </section>
  );
};

export default RecentPosts;
