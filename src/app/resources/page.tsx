import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful resources on educational psychology, mental health, learning, and wellbeing.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium text-teal-dark tracking-widest uppercase mb-4">
            Helpful Tools & Information
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-6">
            Resources
          </h1>
          <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            A growing collection of guides, articles, and tools for
            individuals, parents, and educators navigating learning and
            psychological wellbeing.
          </p>
        </div>
      </section>

      {/* Placeholder content */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">📋</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-5">
            Resources Coming Soon
          </h2>
          <p className="font-body text-charcoal-light text-lg leading-relaxed mb-10">
            I am currently curating a collection of downloadable resources,
            reading lists, and practical guides. Check back soon, or get in
            touch if there is something specific you are looking for.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-teal text-white font-body font-medium rounded-full hover:bg-teal-dark transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
