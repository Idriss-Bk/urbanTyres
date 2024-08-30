import { gql } from "graphql-request";
import { client } from "@/apis/graphql-client";

export interface Post {
    id: string;
    title: string;
    date: string;
    content: string;
    seo: {
      metaDesc: string;
      title: string;
      opengraphPublishedTime: string;
      opengraphModifiedTime: string;
    };
    slug: string;
    author: {
      node: {
        name: string;
      };
    };
    categories: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    } | null;
  }
  
  interface PostsQueryResult {
    posts: {
      nodes: Post[];
    };
  }

const BLOG_POSTS = gql`
  query GetPosts {
    posts(first: 5) {
      nodes {
        id
        title
        content
        slug
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
// Garden Shed Posts
export async function getBlogs(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(BLOG_POSTS);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}
