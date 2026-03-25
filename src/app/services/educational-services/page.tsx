import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoDivider from "@/components/LogoDivider";
import BotanicalSideSprig from "@/components/BotanicalSideSprig";
import FloralCorner from "@/components/FloralCorner";

export const metadata: Metadata = {
  title: "Educational Services",
  description:
    "Parental guidance, study skills development, academic support, teacher consultation, and school-based collaboration.",
};

const services = [
  {
    title: "Study Skills Development",
    description:
      "Building effective learning habits, time management, note-taking, revision strategies, and exam techniques tailored to each individual learner.",
    icon: "📚",
  },
  {
    title: "Parental Guidance and Support",
    description:
      "Equipping parents with practical strategies, psycho-education, and emotional support to navigate their child's learning and developmental needs confidently.",
    icon: "🤝",
  },
  {
    title: "Learning and Academic Support",
    description:
      "Targeted support for learners experiencing academic difficulties, whether related to specific learning disorders, attention challenges, or gaps in foundational skills.",
    icon: "✏️",
  },
  {
    title: "Teacher Training",
    description:
      "Providing educators with training on a variety of topics to enhance their professional skills and support for learners.",
    icon: "🏫",
  },
  {
    title: "School-Based Collaboration",
    description:
      "Working directly with schools and support teams to develop individualised support plans, facilitate accommodation processes, and foster inclusive educational environments.",
    icon: "🌱",
  },
  {
    title: "Psychoeducation",
    description:
      "Tailored guidance on psychological and emotional topics to support clients' understanding, resilience, and personal growth.",
    icon: "💡",
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
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <FloralCorner position="top-right" size="sm" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoDivider className="mb-10" />
          <p className="font-body text-xl text-charcoal-light leading-relaxed">
            Education is about far more than grades — it is about growing into
            who you are, building confidence, and learning to love the process
            of discovery. My educational services are designed to support
            learners, parents, and educators in building the conditions for
            genuine growth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream py-16 md:py-24 overflow-hidden">
        <BotanicalSideSprig side="left" />
        <BotanicalSideSprig side="right" />
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
      <section className="bg-teal/10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-12 text-center">
            Who Can Benefit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Children, Adolescents, and Adults */}
            <div className="bg-white rounded-2xl p-7 border border-teal/20">
              <h3 className="font-heading text-2xl text-charcoal font-medium mb-4">
                Children, Adolescents, and Adults
              </h3>
              <ul className="space-y-3 font-body text-charcoal-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Those seeking support with emotional wellbeing, social functioning, or learning challenges
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Individuals looking to understand their strengths, challenges, and personal growth opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Clients needing guidance for study skills, career decisions, or life transitions
                </li>
              </ul>
            </div>
            {/* Families */}
            <div className="bg-white rounded-2xl p-7 border border-teal/20">
              <h3 className="font-heading text-2xl text-charcoal font-medium mb-4">
                Families
              </h3>
              <ul className="space-y-3 font-body text-charcoal-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Parents and caregivers seeking strategies to support their child's development, learning, and emotional wellbeing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Families navigating complex challenges or transitions
                </li>
              </ul>
            </div>
            {/* Educators and Schools */}
            <div className="bg-white rounded-2xl p-7 border border-teal/20">
              <h3 className="font-heading text-2xl text-charcoal font-medium mb-4">
                Educators and Schools
              </h3>
              <ul className="space-y-3 font-body text-charcoal-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Teachers and school staff looking for practical strategies and training to support learners with diverse needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  Schools seeking guidance on creating inclusive, supportive, and effective learning environments
                </li>
              </ul>
            </div>
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
