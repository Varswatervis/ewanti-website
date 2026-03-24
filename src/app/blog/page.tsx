import type { Metadata } from "next";
import { getPosts } from "@/lib/sanity";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, reflections, and resources on educational psychology, mental health, learning, and wellbeing.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium text-blush-dark tracking-widest uppercase mb-4">
            Insights & Reflections
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-6">
            Blog
          </h1>
          <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Thoughts, guidance, and reflections on psychology, learning,
            mental health, and wellbeing — for individuals, parents, and
            educators.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-blush/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✍️</span>
              </div>
              <h2 className="font-heading text-3xl text-charcoal font-light mb-3">
                Coming Soon
              </h2>
              <p className="font-body text-charcoal-light">
                Blog posts are on their way. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
