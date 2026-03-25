import Image from "next/image";
import Link from "next/link";
import LogoDivider from "@/components/LogoDivider";
import BotanicalSideSprig from "@/components/BotanicalSideSprig";
import FloralCorner from "@/components/FloralCorner";

const services = [
  {
    title: "Assessments",
    description:
      "Comprehensive psycho-educational, socio-emotional, career, and school readiness assessments providing clarity and a path forward.",
    href: "/services/assessments",
    image: "/images/assessments.png",
    colour: "bg-blush/10 border-blush/30",
    hoverColour: "hover:border-blush",
  },
  {
    title: "Therapy",
    description:
      "Collaborative, evidence-based psychotherapy for children from age 3, adolescents, adults, parents, and families.",
    href: "/services/therapy",
    image: "/images/therapy.png",
    colour: "bg-sage/10 border-sage/30",
    hoverColour: "hover:border-sage",
  },
  {
    title: "Educational Services",
    description:
      "Study skills development, parental guidance, teacher consultation, and school-based support to build lasting confidence.",
    href: "/services/educational-services",
    image: "/images/study-skills.png",
    colour: "bg-teal/10 border-teal/30",
    hoverColour: "hover:border-teal",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden">
        <FloralCorner position="top-right" size="lg" />
        <FloralCorner position="bottom-left" size="md" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-body font-medium text-blush-dark tracking-widest uppercase mb-4">
              Registered Educational Psychologist
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-tight mb-6">
              Holding space for you,{" "}
              <em className="not-italic text-blush-dark">
                just as you are — a place for your story to be heard and understood.
              </em>
            </h1>
            <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              Holistic, individualised psychological support for children,
              adolescents, adults, and families — grounded in client-centred
              and trauma-informed care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blush text-white font-body font-medium rounded-full hover:bg-blush-dark transition-colors text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-charcoal/20 text-charcoal font-body font-medium rounded-full hover:border-blush hover:text-blush-dark transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blush/20 shadow-2xl">
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
      </section>

      {/* Short intro */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <BotanicalSideSprig side="left" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LogoDivider className="mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-light mb-6">
            A safe space to be seen, heard, and understood
          </h2>
          <p className="font-body text-charcoal-light text-lg leading-relaxed">
            I am Ewanti Drinkwater, a registered Educational Psychologist based
            in South Africa. I am passionate about helping people heal, discover
            who they are, and become who they are meant to be. My work supports
            individuals and families navigating trauma, learning differences,
            emotional challenges, and life transitions. I help clients find
            their voice, build confidence and resilience, and recognise just how
            capable they truly are. Whether you are seeking clarity through an
            assessment, healing through therapy, or practical strategies for
            learning and growth, I am here to help.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-blush-dark font-body font-medium hover:underline"
          >
            Read my full story →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream py-16 md:py-24 overflow-hidden">
        <FloralCorner position="bottom-right" size="sm" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoDivider className="mb-10" />
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light mb-4">
              How I can help
            </h2>
            <p className="font-body text-charcoal-light text-lg max-w-2xl mx-auto">
              Services tailored to where you are right now — and where you want
              to go.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group border ${service.colour} ${service.hoverColour} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="h-52 overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-3">
                    {/* Botanical leaf mark */}
                    <svg viewBox="0 0 12 18" className="w-2.5 h-3.5 flex-shrink-0 opacity-50 mt-1.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M6,17 C6,13 6,9 6,4" stroke="#9C8E80" strokeWidth="0.9" strokeLinecap="round"/>
                      <path d="M6,11 Q1,8 2,5 Q5,7 6,11Z" fill="#9C8E80" fillOpacity="0.62"/>
                      <path d="M6,9 Q11,6 10,3 Q7,5 6,9Z" fill="#9C8E80" fillOpacity="0.62"/>
                      <circle cx="6" cy="2.5" r="1.4" fill="#9C8E80" fillOpacity="0.78"/>
                    </svg>
                    <h3 className="font-heading text-2xl text-charcoal font-medium">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm font-body font-medium text-blush-dark group-hover:underline">
                    Find out more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-charcoal/20 text-charcoal font-body font-medium rounded-full hover:border-blush hover:text-blush-dark transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blush py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-4">
            Ready to take the first step?
          </h2>
          <p className="font-body text-white/90 text-lg mb-8">
            Reach out to book a consultation or simply ask a question. I would
            love to hear from you.
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
