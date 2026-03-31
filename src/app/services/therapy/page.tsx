import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoDivider from "@/components/LogoDivider";
import BotanicalSideSprig from "@/components/BotanicalSideSprig";
import FloralCorner from "@/components/FloralCorner";

export const metadata: Metadata = {
  title: "Therapy",
  description:
    "Collaborative, trauma-informed psychotherapy for children from age 3, adolescents, adults, parents, and families.",
};

const approaches = [
  {
    name: "Trauma-Informed Therapy",
    description:
      "Recognising and addressing the pervasive impact of trauma on the mind, body, and relationships.",
  },
  {
    name: "Play Therapy",
    description:
      "Using play as the natural language of children to process experiences and emotions in a non-threatening way.",
  },
  {
    name: "Cognitive Behavioural Therapy (CBT)",
    description:
      "Identifying and reshaping unhelpful thought patterns and behaviours to improve emotional wellbeing.",
  },
  {
    name: "Solution-Focused Therapy",
    description:
      "Building on existing strengths and resources to create practical, meaningful change.",
  },
  {
    name: "Narrative Therapy",
    description:
      "Separating the person from the problem, and co-authoring a more empowering life story.",
  },
  {
    name: "BWRT Level 1",
    description:
      "Brain Working Recursive Therapy — a structured, evidence-based technique for rapidly resolving anxiety, trauma responses, and unwanted patterns.",
  },
  {
    name: "Client-centred Therapy",
    description:
      "A humanistic therapeutic approach that emphasises empathy, unconditional positive regard, and authenticity. It enables clients to access their own internal resources, promoting insight, emotional regulation, and meaningful behavioural change.",
  },
];

const whoIWorkWith = [
  "Children from age 3",
  "Adolescents",
  "Adults",
  "Parents",
  "Families",
];

export default function TherapyPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/therapy.png"
          alt="Therapy"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative h-full flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <p className="text-sm font-body font-medium text-sage tracking-widest uppercase mb-2">
              Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-light">
              Therapy
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <FloralCorner position="bottom-left" size="sm" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoDivider className="mb-10" />
          <p className="font-body text-xl text-charcoal-light leading-relaxed mb-6">
            Psychotherapy with me is collaborative and deeply personal. I do
            not believe in a one-size-fits-all approach — instead, I draw from
            a range of evidence-based modalities to meet you or your child
            exactly where you are.
          </p>
          <p className="font-body text-xl text-charcoal-light leading-relaxed">
            The therapeutic relationship itself is the foundation of healing. My
            priority is always to create a space that feels genuinely safe,
            warm, and free of judgement — where real conversations can happen
            and real change can begin.
          </p>
        </div>
      </section>

      {/* Who I work with */}
      <section className="relative bg-cream py-14 overflow-hidden">
        <BotanicalSideSprig side="left" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="font-heading text-4xl text-charcoal font-light mb-6">
                Who I Work With
              </h2>
              <div className="flex flex-wrap gap-3">
                {whoIWorkWith.map((w) => (
                  <span
                    key={w}
                    className="px-5 py-2 bg-sage/20 text-sage-dark font-body text-sm font-medium rounded-full"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-7 border border-sage/20">
              <p className="font-body text-charcoal-light leading-relaxed">
                Whether you are a parent seeking support for your child, an
                individual navigating anxiety or trauma, or a family working
                through a difficult season — there is a place for you here.
                Therapy is not a sign of weakness. It is a brave act of
                self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic approaches */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-10 text-center">
            Therapeutic Approaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((a) => (
              <div
                key={a.name}
                className="bg-cream rounded-2xl p-6 border border-sage/20 hover:border-sage transition-colors"
              >
                <h3 className="font-heading text-xl text-charcoal font-medium mb-2">
                  {a.name}
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-light mb-4">
            Begin Your Therapeutic Journey
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Reaching out is the first, and often the hardest, step. I am here
            for it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-white text-sage-dark font-body font-medium rounded-full hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
