import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ewanti Drinkwater to book a consultation, ask a question, or learn more about her services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body font-medium text-blush-dark tracking-widest uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal font-light mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, want to book a consultation, or simply
            want to know more — I would love to hear from you. No question is
            too small.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-3xl text-charcoal font-light mb-8">
                Contact Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm mb-1">
                      Email
                    </p>
                    <p className="font-body text-charcoal-light text-sm">
                      ewantidv@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm mb-1">
                      Phone
                    </p>
                    <p className="font-body text-charcoal-light text-sm">
                      076 355 0871
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm mb-1">
                      Location
                    </p>
                    <p className="font-body text-charcoal-light text-sm">
                      South Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm mb-1">
                      Response Time
                    </p>
                    <p className="font-body text-charcoal-light text-sm">
                      All enquiries are responded to within 1–2 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-cream rounded-2xl border border-blush/20">
                <h3 className="font-heading text-xl text-charcoal font-medium mb-3">
                  HPCSA Registered
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  Ewanti Drinkwater is a registered Educational Psychologist
                  with the Health Professions Council of South Africa,
                  PS0165964, registered with the Board of Healthcare Funders
                  (BHF), PR1319612.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-heading text-3xl text-charcoal font-light mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
