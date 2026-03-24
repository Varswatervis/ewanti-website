import { createClient } from "next-sanity";

const token = process.env.SANITY_API_TOKEN;
const hasRealToken = token && token !== "your-api-token-here";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  // Use CDN for unauthenticated public reads; bypass when using a token
  useCdn: !hasRealToken,
  // Only send token when it's a real value
  token: hasRealToken ? token : undefined,
});

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: {
    asset: { _ref: string; _type: string };
    alt?: string;
  };
  body?: unknown[];
  author?: { name: string };
};

export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        author->{ name }
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch (err) {
    console.error("Sanity fetch error (getPosts):", err);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body,
        author->{ name }
      }`,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch (err) {
    console.error("Sanity fetch error (getPost):", err);
    return null;
  }
}
