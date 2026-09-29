'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({
  faqs,
  heading = 'Questions, answered.',
}: {
  faqs: Faq[];
  heading?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="border-t border-border-custom px-[6%] py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-[820px]">
        <span className="mb-4 block font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
          // FAQs
        </span>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {heading}
        </h2>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-medium tracking-tight md:text-xl">
          {question}
        </span>
        <span
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm transition-transform duration-300 ${open ? 'rotate-45 border-accent text-accent' : 'text-white/60'}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-base leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
