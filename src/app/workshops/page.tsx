import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Workshops and group sessions on educational psychology, mental health, parenting, and learning for schools and communities.",
};

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium text-sage-dark tracking-widest uppercase mb-4">
            Group Learning & Community
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-6">
            Workshops
          </h1>
          <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Practical, engaging workshops for schools, organisations, and
            community groups on topics spanning psychology, learning, parenting,
            and wellbeing.
          </p>
        </div>
      </section>

      {/* Placeholder content */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🎙️</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-5">
            Workshops Coming Soon
          </h2>
          <p className="font-body text-charcoal-light text-lg leading-relaxed mb-6">
            Workshop dates and topics will be listed here as they are
            scheduled. Topics may include:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Understanding Learning Differences",
              "Supporting Anxious Children",
              "Study Skills for Teens",
              "Trauma-Informed Parenting",
              "Navigating School Accommodations",
              "Mindfulness for Educators",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-sage/10 text-sage-dark font-body text-sm rounded-full border border-sage/20"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="font-body text-charcoal-light mb-8">
            Interested in booking a workshop for your school or organisation?
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-sage text-white font-body font-medium rounded-full hover:bg-sage-dark transition-colors"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
