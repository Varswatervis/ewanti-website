"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-sage/10 border border-sage/30 p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading text-2xl text-charcoal font-medium mb-2">
          Message Sent
        </h3>
        <p className="font-body text-charcoal-light">
          Thank you for reaching out! I will be in touch within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block font-body text-sm font-medium text-charcoal mb-2"
          >
            Name <span className="text-blush">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal text-sm focus:outline-none focus:border-blush transition-colors placeholder:text-charcoal-light/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-body text-sm font-medium text-charcoal mb-2"
          >
            Email <span className="text-blush">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal text-sm focus:outline-none focus:border-blush transition-colors placeholder:text-charcoal-light/50"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-body text-sm font-medium text-charcoal mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal text-sm focus:outline-none focus:border-blush transition-colors"
        >
          <option value="">Select a topic…</option>
          <option value="Assessment Enquiry">Assessment Enquiry</option>
          <option value="Therapy Enquiry">Therapy Enquiry</option>
          <option value="Educational Services">Educational Services</option>
          <option value="Workshop Enquiry">Workshop Enquiry</option>
          <option value="General Question">General Question</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-charcoal mb-2"
        >
          Message <span className="text-blush">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal text-sm focus:outline-none focus:border-blush transition-colors placeholder:text-charcoal-light/50 resize-none"
          placeholder="Tell me a little about what you are looking for…"
        />
      </div>

      {state === "error" && (
        <p className="text-sm font-body text-red-600 bg-red-50 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-3 bg-blush text-white font-body font-medium rounded-full hover:bg-blush-dark transition-colors disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
