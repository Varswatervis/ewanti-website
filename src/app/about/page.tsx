import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BotanicalDivider from "@/components/BotanicalDivider";
import BotanicalSideSprig from "@/components/BotanicalSideSprig";
import FloralCorner from "@/components/FloralCorner";

export const metadata: Metadata = {
  title: "Who I Am",
  description:
    "Learn about Ewanti Drinkwater, a registered Educational Psychologist with expertise in trauma-informed practice, inclusive education, and psycho-educational assessment.",
};

const qualifications = [
  {
    title: "Bachelor of Education (Senior Phase and FET)",
    detail: "Cum Laude",
  },
  {
    title: "Honours in Educational Psychology",
    detail: "Cum Laude — University of Pretoria (2022)",
  },
  {
    title: "Master's in Educational Psychology",
    detail: "University of Johannesburg, 2023–2024",
  },
  {
    title: "Irlen Screener Certificate",
    detail: "2023",
  },
  {
    title: "BWRT Level 1 Practitioner",
    detail: "June 2025",
  },
];

const registrations = [
  "Registered Educational Psychologist (HPCSA)",
  "BWRT Level 1 Practitioner",
  "Irlen Screener",
  "Board of Healthcare Funders (BHF)",
];

const areas = [
  "Trauma",
  "Anxiety and mood difficulties",
  "Self-harm and suicidal ideation",
  "Attachment challenges",
  "Specific learning disorders",
  "ADHD",
  "Abuse",
  "Educational accommodations",
  "Learning diversity",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
        <FloralCorner position="top-right" size="lg" />
        <FloralCorner position="bottom-left" size="sm" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-14">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blush/30 shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="Ewanti Drinkwater"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain p-8 bg-white"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-body font-medium text-blush-dark tracking-widest uppercase mb-3">
                Registered Educational Psychologist
              </p>
              <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-4">
                Ewanti Drinkwater
              </h1>
              <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-xl">
                A warm, holistic, and client-centred approach to psychological
                support for individuals, families, and educational communities.
              </p>
              <p className="font-body text-sm text-charcoal-light mt-3 tracking-wide">
                PS0165964 | PR1319612
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <BotanicalSideSprig side="left" />
        <BotanicalSideSprig side="right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider className="mb-10" />
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-5">
                A safe space to be seen, heard, and understood
              </h2>
              <p className="font-body text-charcoal-light text-lg leading-relaxed">
                I am a registered Educational Psychologist working with
                children, adolescents, and adults. I also work closely with
                families and schools, recognising the important role that
                relationships and context play in each person&apos;s wellbeing
                and development. My work is holistic, client-centred, and
                trauma-informed. I believe that growth begins where you feel
                safe enough to be yourself. I meet each person exactly where
                they are, with compassion, curiosity, and respect, seeking to
                understand their unique needs and providing support that is
                practical, relevant, and tailored to them. I believe that every
                person is capable of becoming the best version of themselves. I
                strive to foster resilience, offer compassion, and provide a
                safe, supportive space for growth.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-5">
                Areas of Experience
              </h2>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-6">
                My experience spans a wide range of needs and challenges,
                including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-blush flex-shrink-0" />
                    <span className="font-body text-charcoal text-sm">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-5">
                Services I Offer
              </h2>
              <ul className="space-y-3 font-body text-charcoal-light text-lg">
                {[
                  "Individual psychotherapy",
                  "Psycho-educational and developmental assessments",
                  "Learning and study support",
                  "Parent and teacher consultation",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Registrations */}
      <section className="relative bg-cream py-16 md:py-24 overflow-hidden">
        <FloralCorner position="top-left" size="sm" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Qualifications */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-8">
                Qualifications
              </h2>
              <div className="space-y-4">
                {qualifications.map((q) => (
                  <div
                    key={q.title}
                    className="bg-white rounded-xl p-5 border border-blush/20"
                  >
                    <p className="font-body font-medium text-charcoal text-sm mb-1">
                      {q.title}
                    </p>
                    <p className="font-body text-charcoal-light text-sm">
                      {q.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Registrations + Publication */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-8">
                  Registrations
                </h2>
                <div className="space-y-3">
                  {registrations.map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-sage/20"
                    >
                      <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                      <span className="font-body text-charcoal text-sm">
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-6">
                  Publication
                </h2>
                <div className="bg-white rounded-xl p-6 border border-teal/20">
                  <p className="font-body text-charcoal text-sm leading-relaxed italic">
                    "Psycho-educational interventions for caregivers supporting
                    foster-care children with developmental barriers to
                    learning"
                  </p>
                  <p className="font-body text-charcoal-light text-sm mt-3">
                    University of Johannesburg, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage/20 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-4">
            Ready to connect?
          </h2>
          <p className="font-body text-charcoal-light text-lg mb-8">
            I would love to learn more about how I can support you or your
            loved one.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-blush text-white font-body font-medium rounded-full hover:bg-blush-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
