"use client";
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, gql } from "@apollo/client";
import client from "@/apis/apollo/apollo-client";
import { Post } from "@/apis/graphql/queries";
import Link from "next/link";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import localfont from "next/font/local";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const druk = localfont({
  src: [
    {
      path: "../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        content
        slug
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 9 }, // Increased to 9 for a 3x3 grid
    client: client,
  });

  useEffect(() => {
    if (data) {
      setPosts(data.posts.nodes);
      setHasMore(data.posts.pageInfo.hasNextPage);
      setEndCursor(data.posts.pageInfo.endCursor);
    }
  }, [data]);

  const fetchMorePosts = useCallback(() => {
    if (!hasMore) return;

    fetchMore({
      variables: {
        first: 9,
        after: endCursor,
      },
    }).then((result) => {
      setPosts([...posts, ...result.data.posts.nodes]);
      setHasMore(result.data.posts.pageInfo.hasNextPage);
      setEndCursor(result.data.posts.pageInfo.endCursor);
    });
  }, [fetchMore, endCursor, hasMore, posts]);

  const refresh = useCallback(() => {
    setPosts([]);
    setHasMore(true);
    setEndCursor(null);

    fetchMore({
      variables: {
        first: 9,
        after: null,
      },
    }).then((result) => {
      setPosts(result.data.posts.nodes);
      setHasMore(result.data.posts.pageInfo.hasNextPage);
      setEndCursor(result.data.posts.pageInfo.endCursor);
    });
  }, [fetchMore]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) return title;
    return title.substr(0, maxLength) + "...";
  };

  const truncateContent = (content: string, maxLength: number) => {
    const strippedContent = content.replace(/<[^>]+>/g, "");
    if (strippedContent.length <= maxLength) return strippedContent;
    return strippedContent.substr(0, maxLength) + "...";
  };

  const renderSkeletons = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="break-inside-avoid bg-white shadow-md overflow-hidden"
      >
        <Skeleton height={280} />
        <div className="p-4">
          <Skeleton height={30} width="60%" />
          <Skeleton height={20} count={3} />
        </div>
      </div>
    ));
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="mt-10" style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
        scrollableTarget="scrollableDiv"
      >
        <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-8 space-y-8">
          {loading
            ? renderSkeletons(9) // Display 9 skeleton loaders when loading
            : posts.map((post) => (
                <div
                  key={post.slug}
                  className="break-inside-avoid bg-white shadow-md overflow-hidden"
                >
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={
                        post.featuredImage?.node?.sourceUrl ||
                        "/placeholder-image.jpg"
                      }
                      alt={post.featuredImage?.node?.altText || post.title}
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
                        {post.author.node.name}
                      </Link>
                      <span>
                        <RxDividerVertical className="text-slate-300" />
                      </span>
                      <p className="text-sm text-slate-500">
                        {formatDate(post.date)}
                      </p>
                    </div>
                    <Link href={`/${post.slug}`}>
                      <h2
                        className={`${druk.className} text-xl font-bold mb-3 text-black`}
                      >
                        {truncateTitle(post.title, 50)}
                      </h2>
                    </Link>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: truncateContent(post.content, 120),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
        </section>
      </InfiniteScroll>
    </div>
  );
};

export default BlogPage;
