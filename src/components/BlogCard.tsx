import Link from "next/link";
import type { Post } from "@/lib/sanity";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-blush/20 hover:border-blush hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Placeholder image bar */}
      <div className="h-3 bg-gradient-to-r from-blush via-sage to-teal" />
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4 text-xs font-body text-charcoal-light">
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
        <h2 className="font-heading text-2xl text-charcoal font-medium mb-3 group-hover:text-blush-dark transition-colors">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="font-body text-charcoal-light text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <span className="inline-block mt-5 text-sm font-body font-medium text-blush-dark group-hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  );
}
