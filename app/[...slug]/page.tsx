// /app/[...slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs } from "@/apis/graphql/content";
import { Metadata, ResolvingMetadata } from "next";

import Page from "@/app/components/contents/Page";
import Post from "@/app/components/contents/Post";
import Category from "@/app/components/contents/Category";
import SubCategory from "@/app/components/contents/SubCategory";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug.join("/");
  let content = await getContentBySlug(slug);

  if (!content) {
    // If content is not found, it might be a subcategory
    const parentSlug = params.slug[0];
    const parentContent = await getContentBySlug(parentSlug);

    if (parentContent && parentContent.type === "category") {
      const childSlug = params.slug.slice(1).join("/");
      content = await getContentBySlug(childSlug);

      if (content) {
        content = {
          ...content,
          parentSlug: parentSlug,
          isSubCategory: true,
        };
      }
    }
  }

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  switch (content.type) {
    case "category":
      return {
        title: content.name,
        description: content.description || `Posts in category ${content.name}`,
      };
    case "page":
      return {
        title: content.title,
        description: content.content ? content.content.substring(0, 160) : "",
      };
    case "post":
      return {
        title: content.title,
        description:
          content.seo?.metaDesc ||
          (content.content ? content.content.substring(0, 160) : ""),
        openGraph: {
          title: content.seo?.title || content.title,
          description:
            content.seo?.metaDesc ||
            (content.content ? content.content.substring(0, 160) : ""),
          type: "article",
          publishedTime: content.seo?.opengraphPublishedTime,
          modifiedTime: content.seo?.opengraphModifiedTime,
          authors: [content.author?.node?.name],
          images: [
            {
              url: content.featuredImage?.node?.sourceUrl || "",
              alt: content.featuredImage?.node?.altText || "",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: content.seo?.title || content.title,
          description:
            content.seo?.metaDesc ||
            (content.content ? content.content.substring(0, 160) : ""),
          images: [content.featuredImage?.node?.sourceUrl || ""],
        },
      };
    default:
      return {
        title: "Content",
        description: "Dynamic content page",
      };
  }
}

export default async function DynamicPage({ params }: Props) {
  const slug = params.slug.join("/");
  let content = await getContentBySlug(slug);

  if (!content) {
    // If content is not found, it might be a subcategory
    const parentSlug = params.slug[0];
    const parentContent = await getContentBySlug(parentSlug);

    if (parentContent && parentContent.type === "category") {
      const childSlug = params.slug.slice(1).join("/");
      content = await getContentBySlug(childSlug);

      if (content) {
        content = {
          ...content,
          parentSlug: parentSlug,
          isSubCategory: true,
        };
      } else {
        notFound();
      }
    } else {
      notFound();
    }
  }

  switch (content.type) {
    case "category":
      return content.isSubCategory ? (
        <SubCategory category={content} />
      ) : (
        <Category category={content} />
      );
    case "page":
      return <Page page={content} />;
    case "post":
      return <Post post={content} featuredPosts={[]} />;
    default:
      notFound();
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug: slug.split("/") }));
}
