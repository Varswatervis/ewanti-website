import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assessments",
  description:
    "Psycho-educational, socio-emotional, career, subject choice, and school readiness assessments for children, adolescents, and adults.",
};

const assessmentTypes = [
  {
    title: "Psycho-Educational Assessment",
    description:
      "A comprehensive evaluation of cognitive, emotional, and developmental functioning to identify strengths and areas of need. This assessment also supports school accommodations and personalised intervention planning.",
  },
  {
    title: "Socio-Emotional Assessment",
    description:
      "An in-depth evaluation of emotional wellbeing, social functioning, and behaviour to provide insight and guide therapeutic or intervention planning.",
  },
  {
    title: "Career assessments:",
    description:
      "Explore strengths, interests, and personality traits to support meaningful career decisions, study choices, or career transitions.",
  },
  {
    title: "Subject Choice Assessment (Grades 10–12)",
    description:
      "Structured guidance to help learners make informed subject choices aligned with their abilities, interests, and future aspirations.",
  },
  {
    title: "School Readiness Assessment",
    description:
      "Evaluate a child's cognitive, language, social-emotional, and fine motor readiness for formal schooling.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake Session",
    description:
      "A one-hour session with legal guardians for informed consent and background information gathering.",
  },
  {
    step: "02",
    title: "Assessment Sessions",
    description:
      "Scheduled one-on-one assessment sessions using standardised tools appropriate to the referral question.",
  },
  {
    step: "03",
    title: "Report & Feedback",
    description:
      "A comprehensive written report is compiled, followed by a dedicated feedback session to discuss findings and recommendations.",
  },
];

export default function AssessmentsPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/assessments.png"
          alt="Assessments"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative h-full flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <p className="text-sm font-body font-medium text-blush tracking-widest uppercase mb-2">
              Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-light">
              Assessments
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xl text-charcoal-light leading-relaxed">
            A thorough, evidence-based assessment helps make sense of a
            person's unique strengths and challenges. Every assessment is
            conducted with care and respect, ensuring every individual feels
            safe, seen, and valued throughout the process.
          </p>
        </div>
      </section>

      {/* Assessment types */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-10 text-center">
            Types of Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessmentTypes.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-7 border border-blush/20 hover:border-blush transition-colors"
              >
                <h3 className="font-heading text-2xl text-charcoal font-medium mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-12 text-center">
            The Assessment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blush/20 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading text-2xl text-blush-dark font-medium">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-charcoal font-medium mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-light mb-4">
            Book an Assessment
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Get in touch to discuss your needs and schedule an intake session.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-blush-dark font-body font-medium rounded-full hover:bg-cream transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
