'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import SplitText from '@/components/ui/SplitText';
import BlogCard from '@/components/blog/BlogCard';
import { BLOGS } from '@/lib/blogs';

const TICKER = [
  'GEO',
  'SEO',
  'AI Overviews',
  'ChatGPT',
  'Perplexity',
  'Gemini',
  'Citations',
  'Visibility',
  'Generative Search',
];

export default function BlogIndex() {
  const [startReveal, setStartReveal] = useState(false);
  const featured = BLOGS[0];
  const rest = BLOGS.slice(1);

  useEffect(() => {
    const timer = setTimeout(() => setStartReveal(true), 180);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <Header />
      <main className="relative w-full overflow-x-hidden bg-bg-primary">
        <section className="relative px-[6%] pt-36 pb-10 md:px-[8%] md:pt-44 md:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[12%] top-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[160px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[8%] bottom-0 h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[120px]"
          />

          <div className="relative mx-auto max-w-[1800px]">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                // The Journal
              </span>
              <span className="font-body text-[11px] uppercase tracking-[0.22em] text-text-tertiary">
                Issue 01 — 2026
              </span>
            </div>

            <h1 className="max-w-[16ch] font-display text-5xl font-bold leading-[0.92] tracking-tighter md:text-7xl lg:text-[6.4rem]">
              <SplitText text="Intelligence" trigger={startReveal} delay={0.05} className="block" />
              <span className="mt-2 block text-accent">
                <SplitText text="over traffic." trigger={startReveal} delay={0.28} />
              </span>
            </h1>

            <p className="mt-8 max-w-[540px] font-body text-base leading-relaxed text-text-secondary md:text-lg">
              How brands get found when search stops being a list of ten blue links — and becomes a single generated answer.
            </p>
          </div>
        </section>

        <div className="relative border-y border-white/[0.07] py-4 overflow-hidden">
          <div className="flex w-max animate-marquee-ltr">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8 pr-8">
                {TICKER.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-8 font-display text-sm font-semibold uppercase tracking-[0.28em] text-white/35"
                  >
                    {item}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="relative px-[6%] py-16 md:px-[8%] md:py-24">
          <div className="mx-auto max-w-[1800px]">
            {featured && <BlogCard post={featured} featured />}

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { k: 'Then', v: 'Ten blue links' },
                { k: 'Now', v: 'One generated answer' },
                { k: '2026', v: 'Cited, or invisible' },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5"
                >
                  <p className="font-body text-[11px] uppercase tracking-[0.24em] text-accent">{item.k}</p>
                  <p className="mt-2 font-display text-xl font-semibold tracking-tight text-white">{item.v}</p>
                </div>
              ))}
            </div>

            {rest.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
