import Link from "next/link";
import Image from "next/image";
import localfont from "next/font/local";
import {
  FaFacebookF,
  FaPinterestP,
  FaRegShareSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { CiViewTable } from "react-icons/ci";
import { featured_articles } from "@/apis/graphql/posts";
import { GetServerSideProps } from "next";
import { FaXTwitter } from "react-icons/fa6";
import AboutMe from "@/app/components/sections/Sidebar/AboutMe";
import NewsLetter from "@/app/components/sections/Sidebar/NewsLetter";
import RecentPosts from "@/app/components/sections/Sidebar/RecentPosts";

const druk = localfont({
  src: [
    {
      path: "../../../public/assets/gtsuper.otf",
    },
  ],
  variable: "--font-druk",
});

interface PostProps {
  post: {
    title: string;
    content: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    } | null;
    slug: string;
    author: {
      node: {
        name: string;
      };
    };
    seo: {
      metaDesc: string;
      title: string;
      opengraphPublishedTime: string;
      opengraphModifiedTime: string;
      readingTime: number;
    };
    categories: {
      nodes: { name: string; slug: string }[];
    };
    relatedPosts: {
      title: string;
      slug: string;
      featuredImage: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      } | null;
    }[];
  };
  featuredPosts: any[];
}

interface RelatedPost {
  title: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(dateString));
};

const truncateContent = (content: string, maxLength: number) => {
  return content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;
};

interface TableOfContentsItem {
  text: string;
  id: string;
  level: number;
}

const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const generateTableOfContents = (
  content: string
): { toc: TableOfContentsItem[]; modifiedContent: string } => {
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/g;
  const toc: TableOfContentsItem[] = [];
  let modifiedContent = content;

  modifiedContent = modifiedContent.replace(
    headingRegex,
    (match, level, text) => {
      const cleanText = text.replace(/<[^>]+>/g, "").trim();
      const id = createSlug(cleanText);
      toc.push({ text: cleanText, id, level: parseInt(level) });
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  return { toc, modifiedContent };
};

export default function Post({ post, featuredPosts = [] }: PostProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  const { toc, modifiedContent } = generateTableOfContents(post.content);
  console.log("Featured posts in Post component:", featuredPosts);
  return (
    <main className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 pt-36">
      <div className="lg:flex gap-12">
        <TableOfContents toc={toc} />
        <MainContent
          post={post}
          modifiedContent={modifiedContent}
          featuredPosts={featuredPosts}
        />
        <Sidebar featuredPosts={featuredPosts} />
      </div>
      <MobileFooter />
    </main>
  );
}

const TableOfContents = ({ toc }: { toc: TableOfContentsItem[] }) => (
  <nav className="lg:w-2/12 hidden lg:block">
    <div className="sticky top-[100px]">
      <h2
        className={`${druk.className} font-semibold text-lg mb-4 capitalize underline text-slate-700 decoration-orange-500 underline-offset-[3px]`}
      >
        Table of Contents
      </h2>
      <ul>
        {toc.map((item, index) => (
          <li key={index} className="mb-2.5">
            <Link
              href={`#${item.id}`}
              className="toc-link text-zinc-500 text-md transition-all hover:text-slate-950"
              data-id={item.id}
            >{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const MainContent = ({
  post,
  modifiedContent,
  featuredPosts,
}: {
  post: PostProps["post"];
  modifiedContent: string;
  featuredPosts: any[];
}) => (
  <article className="lg:w-7/12">
    <header>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex justify-start items-center gap-2">
          <li className="text-zinc-950 text-sm font-semibold capitalize">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block text-slate-500 text-sm">/</li>
          <li className="text-zinc-950 text-sm font-semibold capitalize">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="inline-block text-slate-500 text-sm">/</li>
          <li
            className="text-zinc-950 text-sm font-semibold capitalize"
            aria-current="page"
          >
            {truncateContent(post.title, 30)}
          </li>
        </ol>
      </nav>
      <h1
        className={`${druk.className} text-3xl lg:text-3xl lg:leading-[45px] font-bold mb-1.5 text-zinc-950`}
      >
        {post.title}
      </h1>
      <p className="mb-4">
        <Link
          href={`/${post.categories.nodes[0].slug}`}
          className={`text-black font-semibold text-md capitalize transition-all underline decoration-orange-600`}
        >
          {post.categories.nodes[0].name}
        </Link>
      </p>
      <div className="flex justify-start items-center gap-1 mb-4">
        <time
          dateTime={post.seo.opengraphPublishedTime}
          className="text-zinc-500 capitalize"
        >
          Published: {formatDate(post.seo.opengraphPublishedTime)}
        </time>
        <span>
          <RxDividerVertical className="text-slate-300" />
        </span>
        <Link href="/about-us" className="text-zinc-500 capitalize">
          {post.author.node.name}
        </Link>
        <span>
          <RxDividerVertical className="text-slate-300" />
        </span>
        <p className="text-zinc-500 capitalize">
          {post.seo.readingTime} min read
        </p>
      </div>
      <p className="text-slate-700 text-lg">{post.seo.metaDesc}</p>

      <div className="w-full flex justify-start items-center gap-1.5 my-6">
        <ul className="flex justify-center items-center gap-1">
          <li>
            <a
              href="#"
              className="rounded-full bg-[#1877F2] text-white flex justify-center items-center w-7 h-7"
            >
              <FaFacebookF />
              <span className="sr-only">Share on Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full bg-black text-white flex justify-center items-center w-7 h-7"
            >
              <FaXTwitter />
              <span className="sr-only">Share on Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full bg-[#E60023] text-white flex justify-center items-center w-7 h-7"
            >
              <FaPinterestP />
              <span className="sr-only">Share on Pinterest</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full bg-[#25D366] text-white flex justify-center items-center w-7 h-7"
            >
              <FaWhatsapp />
              <span className="sr-only">Share on WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      <p className="text-[13px] text-zinc-600 mb-8">
        When you purchase through links on our site, we may earn an affiliate
        commission.{" "}
        <Link href="/about-us" className="text-blue-500 underline">
          Here&apos;s how it works.
        </Link>
      </p>
    </header>

    <section>
      {post.featuredImage && (
        <figure>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={0}
            height={0}
            layout="responsive"
            className="mb-8 rounded w-full h-full"
          />
          {post.featuredImage.node.altText && (
            <figcaption className="sr-only">
              {post.featuredImage.node.altText}
            </figcaption>
          )}
        </figure>
      )}

      <div
        className="post_content text-zinc-900 text-[17px] tracking-[.2px] leading-[1.5] mb-8"
        dangerouslySetInnerHTML={{ __html: modifiedContent }}
      />
    </section>
  </article>
);

const Sidebar = ({ featuredPosts }: { featuredPosts?: any[] }) => (
  <aside className="lg:w-3/12">
    <Newsletter />
  </aside>
);

const posts = featured_articles();

const Newsletter = async () => (
  <>
    <AboutMe />
    <NewsLetter />
    <RecentPosts />
  </>
);

const MobileFooter = () => (
  <footer className="fixed w-full bg-zinc-900 py-4 px-3 left-0 bottom-0 lg:hidden rounded-t-xl">
    <div className="grid grid-cols-2 gap-2">
      <button className="py-2 bg-zinc-900 border-[1px] border-zinc-600 font-semibold !w-full rounded-full text-zinc-50">
        <CiViewTable className="inline-block text-zinc-50 size-5 relative -top-[2.5px] mr-0.5" />{" "}
        Table of Contents
      </button>
      <button className="py-2 bg-zinc-900 border-[1px] border-zinc-600 font-semibold !w-full rounded-full text-zinc-50">
        <FaRegShareSquare className="inline-block text-zinc-50 size-4 relative -top-[2.5px] mr-0.5" />{" "}
        Share
      </button>
    </div>
  </footer>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const featuredPosts = await featured_articles();
    return {
      props: {
        featuredPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        featuredPosts: [],
      },
    };
  }
};
