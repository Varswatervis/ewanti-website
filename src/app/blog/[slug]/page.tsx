import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getPosts } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-charcoal-light hover:text-blush-dark transition-colors mb-8"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6 text-xs font-body text-charcoal-light">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            )}
            {post.author?.name && (
              <>
                <span>·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal font-light leading-tight mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-body text-xl text-charcoal-light leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.body ? (
            <div className="prose-blog">
              <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} />
            </div>
          ) : (
            <p className="font-body text-charcoal-light italic">
              No content available for this post.
            </p>
          )}
        </div>
      </section>

      {/* Back link */}
      <section className="bg-cream py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-blush-dark hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </section>
    </>
  );
}
