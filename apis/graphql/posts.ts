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

// TYRE_PRESSURE Queries
const TYRE_PRESSURE = gql`
  query GetPosts {
    posts(
      first: 3
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Tyre Pressure"
      }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
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
// TYRE_PRESSURE Posts
export async function tyre_pressure_posts(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(TYRE_PRESSURE);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}
// TYPE_SIZES Queries
const TYPE_SIZES = gql`
  query GetPosts {
    posts(
      first: 3
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Tyre Sizes"
      }
    ) {
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
// TYRE_PRESSURE Posts
export async function tyre_sizes_posts(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(TYPE_SIZES);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}
// BIKE_TYRES Queries
const BIKE_TYRES = gql`
  query GetPosts {
    posts(
      first: 3
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Bike Tyres"
      }
    ) {
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
// BIKE_TYRES Posts
export async function bike_tyres_posts(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(BIKE_TYRES);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}

const BLOG_ARTICLES = gql`
  query GetPosts {
    posts {
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
export async function garden_blog_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(BLOG_ARTICLES);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}


const FEATURED_ARTICLES = gql`
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
export async function featured_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(FEATURED_ARTICLES);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}
