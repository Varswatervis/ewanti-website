import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BotanicalSideSprig from "@/components/BotanicalSideSprig";
import FloralCorner from "@/components/FloralCorner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Psycho-educational assessments, therapy, and educational services for children, adolescents, adults, and families.",
};

const services = [
  {
    title: "Assessments",
    description:
      "Comprehensive psycho-educational, socio-emotional, career, subject choice, and school readiness assessments. Each assessment includes an intake session, assessment sessions, a written report, and a feedback session.",
    href: "/services/assessments",
    image: "/images/assessments.png",
    accent: "text-blush-dark",
    border: "border-blush/20 hover:border-blush",
  },
  {
    title: "Therapy",
    description:
      "Evidence-based, collaborative psychotherapy for children from age 3, adolescents, adults, parents, and families. Drawing on a range of approaches including play therapy, CBT, narrative therapy, and BWRT.",
    href: "/services/therapy",
    image: "/images/therapy.png",
    accent: "text-sage-dark",
    border: "border-sage/20 hover:border-sage",
  },
  {
    title: "Educational Services",
    description:
      "Parental guidance, study skills development, academic support, teacher consultation, and school-based collaboration to support learning and wellbeing in educational environments.",
    href: "/services/educational-services",
    image: "/images/study-skills.png",
    accent: "text-teal-dark",
    border: "border-teal/20 hover:border-teal",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
        <FloralCorner position="top-right" size="md" />
        <FloralCorner position="bottom-left" size="sm" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium text-blush-dark tracking-widest uppercase mb-4">
            How I Can Help
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-6">
            Services
          </h1>
          <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Every person deserves support that is tailored to their unique
            needs. My services span assessment, therapy, and educational
            support — always holistic, always individualised.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <BotanicalSideSprig side="left" />
        <BotanicalSideSprig side="right" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group border ${s.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start gap-2 mb-3">
                    {/* Botanical leaf mark */}
                    <svg viewBox="0 0 12 18" className="w-2.5 h-3.5 flex-shrink-0 opacity-50 mt-1.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M6,17 C6,13 6,9 6,4" stroke="#9C8E80" strokeWidth="0.9" strokeLinecap="round"/>
                      <path d="M6,11 Q1,8 2,5 Q5,7 6,11Z" fill="#9C8E80" fillOpacity="0.62"/>
                      <path d="M6,9 Q11,6 10,3 Q7,5 6,9Z" fill="#9C8E80" fillOpacity="0.62"/>
                      <circle cx="6" cy="2.5" r="1.4" fill="#9C8E80" fillOpacity="0.78"/>
                    </svg>
                    <h2 className="font-heading text-2xl text-charcoal font-medium">
                      {s.title}
                    </h2>
                  </div>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <span className={`font-body font-medium text-sm ${s.accent} group-hover:underline`}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-4">
            Not sure where to start?
          </h2>
          <p className="font-body text-charcoal-light text-lg mb-8">
            Reach out and we can figure it out together. There is no wrong
            question.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-blush text-white font-body font-medium rounded-full hover:bg-blush-dark transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
