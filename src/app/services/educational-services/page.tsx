import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Educational Services",
  description:
    "Parental guidance, study skills development, academic support, teacher consultation, and school-based collaboration.",
};

const services = [
  {
    title: "Parental Guidance and Support",
    description:
      "Equipping parents with practical strategies, psycho-education, and emotional support to navigate their child's learning and developmental needs confidently.",
    icon: "🤝",
  },
  {
    title: "Study Skills Development",
    description:
      "Building effective learning habits, time management, note-taking, revision strategies, and exam techniques tailored to each individual learner.",
    icon: "📚",
  },
  {
    title: "Learning and Academic Support",
    description:
      "Targeted support for learners experiencing academic difficulties, whether related to specific learning disorders, attention challenges, or gaps in foundational skills.",
    icon: "✏️",
  },
  {
    title: "Teacher Consultation",
    description:
      "Providing educators with practical guidance on supporting learners with diverse needs within the classroom — including recommendations from assessments and strategies for inclusive teaching.",
    icon: "🏫",
  },
  {
    title: "School-Based Collaboration",
    description:
      "Working directly with schools and support teams to develop individualised support plans, facilitate accommodation processes, and foster inclusive educational environments.",
    icon: "🌱",
  },
];

export default function EducationalServicesPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/study-skills.png"
          alt="Educational Services"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative h-full flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <p className="text-sm font-body font-medium text-teal tracking-widest uppercase mb-2">
              Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-light">
              Educational Services
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xl text-charcoal-light leading-relaxed mb-6">
            Education is about far more than grades — it is about growing into
            who you are, building confidence, and learning to love the process
            of discovery. My educational services are designed to support
            learners, parents, and educators in building the conditions for
            genuine growth.
          </p>
          <p className="font-body text-xl text-charcoal-light leading-relaxed">
            I work extensively with specific learning disorders, ADHD, and
            educational accommodations, and have deep experience navigating
            the South African educational landscape.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-10 text-center">
            What I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 border border-teal/20 hover:border-teal transition-colors"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-heading text-2xl text-charcoal font-medium mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="bg-teal/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-6">
            Who Can Benefit?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Learners with learning difficulties",
              "Children with ADHD",
              "Learners needing exam accommodations",
              "Parents seeking guidance",
              "Teachers supporting diverse classrooms",
              "Schools developing inclusive practices",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-white text-teal-dark font-body text-sm font-medium rounded-full border border-teal/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-light mb-4">
            Support Every Step of the Way
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Whether you are a parent, educator, or learner — I am here to help
            you find the best path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-teal-dark font-body font-medium rounded-full hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
