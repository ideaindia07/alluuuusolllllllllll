'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import type { BlogBlock, BlogPost } from '@/lib/blogs';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TOC = [
  { id: 'what-is-geo', label: "What's GEO" },
  { id: 'seo-quickly', label: 'SEO, quickly' },
  { id: 'the-difference', label: 'The difference' },
  { id: 'which-one', label: 'Which one in 2026' },
];

function accentTitle(title: string) {
  const parts = title.split(/(GEO|SEO)/g);
  return parts.map((part, i) =>
    part === 'GEO' || part === 'SEO' ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function BlockView({ block }: { block: BlogBlock }) {
  if (block.type === 'p') {
    return (
      <p className="font-body text-[17px] md:text-[18px] leading-[1.8] text-white/78">
        {block.text}
      </p>
    );
  }

  if (block.type === 'h2') {
    return (
      <h2
        id={block.id}
        className="scroll-mt-28 font-display text-3xl md:text-4xl font-bold tracking-tight text-white pt-10"
      >
        {accentTitle(block.text)}
      </h2>
    );
  }

  if (block.type === 'image') {
    return (
      <figure className="my-4 overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={block.src} alt={block.alt} className="w-full h-auto object-cover" />
        {block.caption && (
          <figcaption className="border-t border-white/10 px-5 py-3 font-body text-[12px] uppercase tracking-[0.18em] text-text-tertiary">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === 'quote') {
    return (
      <blockquote className="relative my-6 border-l-2 border-accent pl-6 md:pl-8">
        <p className="font-display text-2xl md:text-[2.05rem] font-semibold leading-[1.25] tracking-tight text-white">
          {block.text}
        </p>
      </blockquote>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] p-6 md:p-8">
      <span className="mb-3 block font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
        {block.label}
      </span>
      <p className="font-display text-xl md:text-2xl font-semibold leading-snug text-white">
        {block.text}
      </p>
    </div>
  );
}

function GeoSeoArena() {
  const [side, setSide] = useState<'geo' | 'seo' | null>(null);

  return (
    <section className="my-8 overflow-hidden rounded-[28px] border border-white/10">
      <div className="flex flex-col md:flex-row min-h-[340px] md:min-h-[400px]">
        <button
          type="button"
          onMouseEnter={() => setSide('geo')}
          onMouseLeave={() => setSide(null)}
          onFocus={() => setSide('geo')}
          onBlur={() => setSide(null)}
          onClick={() => setSide((current) => (current === 'geo' ? null : 'geo'))}
          className={`relative flex flex-col justify-between p-8 md:p-10 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${side === 'geo' ? 'md:flex-[1.45] bg-accent text-black' : 'md:flex-1 bg-[#0a0a0a] text-white'}
            ${side === 'seo' ? 'opacity-55' : 'opacity-100'}`}
        >
          <div>
            <span className={`font-body text-[11px] font-semibold uppercase tracking-[0.28em] ${side === 'geo' ? 'text-black/55' : 'text-accent'}`}>
              Generative Engine
            </span>
            <h3 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">GEO</h3>
          </div>
          <p className={`mt-8 max-w-[34ch] font-body text-[15px] leading-relaxed ${side === 'geo' ? 'text-black/75' : 'text-white/60'}`}>
            Get cited inside the answer. ChatGPT, AI Overviews, Perplexity, Gemini — one response, your name in it.
          </p>
        </button>

        <div className="relative z-10 flex items-center justify-center md:w-0">
          <span className="absolute font-display text-[11px] font-bold uppercase tracking-[0.3em] text-black bg-white px-3 py-1.5 rounded-full shadow-[0_0_0_6px_#000]">
            vs
          </span>
        </div>

        <button
          type="button"
          onMouseEnter={() => setSide('seo')}
          onMouseLeave={() => setSide(null)}
          onFocus={() => setSide('seo')}
          onBlur={() => setSide(null)}
          onClick={() => setSide((current) => (current === 'seo' ? null : 'seo'))}
          className={`relative flex flex-col justify-between p-8 md:p-10 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${side === 'seo' ? 'md:flex-[1.45] bg-white text-black' : 'md:flex-1 bg-[#111] text-white'}
            ${side === 'geo' ? 'opacity-55' : 'opacity-100'}`}
        >
          <div>
            <span className={`font-body text-[11px] font-semibold uppercase tracking-[0.28em] ${side === 'seo' ? 'text-black/50' : 'text-white/40'}`}>
              Search Engine
            </span>
            <h3 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tighter">SEO</h3>
          </div>
          <p className={`mt-8 max-w-[34ch] font-body text-[15px] leading-relaxed ${side === 'seo' ? 'text-black/70' : 'text-white/60'}`}>
            Rank on the results page. Keywords, structure, backlinks — someone searches, clicks, lands on your site.
          </p>
        </button>
      </div>
    </section>
  );
}

function TableOfContents({ active }: { active: string }) {
  const columnRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navStyle, setNavStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const OFFSET = 128;

    const tick = () => {
      const column = columnRef.current;
      const nav = navRef.current;
      if (!column || !nav) return;

      const col = column.getBoundingClientRect();
      const navH = nav.offsetHeight;
      const width = col.width;

      if (col.top > OFFSET) {
        setNavStyle({});
        return;
      }

      if (col.bottom <= OFFSET + navH) {
        setNavStyle({
          position: 'absolute',
          top: 'auto',
          bottom: 0,
          left: 0,
          width,
        });
        return;
      }

      setNavStyle({
        position: 'fixed',
        top: OFFSET,
        left: col.left,
        width,
      });
    };

    tick();
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick);
    return () => {
      window.removeEventListener('scroll', tick);
      window.removeEventListener('resize', tick);
    };
  }, []);

  return (
    <aside ref={columnRef} className="relative hidden lg:block">
      <nav
        ref={navRef}
        aria-label="On this page"
        className="z-20 flex flex-col gap-1"
        style={navStyle}
      >
        <span className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-text-tertiary">
          On this page
        </span>
        {TOC.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`border-l py-2 pl-4 font-body text-[13px] transition-colors ${
              active === item.id
                ? 'border-accent text-accent'
                : 'border-white/10 text-text-secondary hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [active, setActive] = useState(TOC[0].id);

  const tocIds = useMemo(() => TOC.map((item) => item.id), []);

  useEffect(() => {
    const els = tocIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tocIds]);

  return (
    <SmoothScroll>
      <Header />

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <main className="relative w-full bg-bg-primary">
        <section className="relative min-h-[88vh] pt-32 md:pt-36">
          <div className="relative mx-auto max-w-[1800px] px-[6%] md:px-[8%]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-10 flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.22em] text-text-tertiary"
            >
              <Link href="/blog/" className="hover:text-accent">
                Journal
              </Link>
              <span>/</span>
              <span className="text-text-secondary">{post.category}</span>
            </motion.div>

            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="mb-6 flex flex-wrap items-center gap-3"
                >
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                    Issue {post.issue}
                  </span>
                  <span className="font-body text-[11px] uppercase tracking-[0.2em] text-text-tertiary">
                    {post.date} · {post.readTime} read
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.05, ease }}
                  className="font-display text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-bold leading-[0.98] tracking-tighter text-white"
                >
                  {accentTitle(post.title)}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease }}
                className="max-w-[420px] font-body text-[16px] leading-relaxed text-text-secondary lg:justify-self-end lg:pb-2"
              >
                {post.excerpt}
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease }}
            className="relative mt-12 md:mt-16 h-[52vh] min-h-[320px] max-h-[680px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover}
              alt={post.coverAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-black/25" />
            <div className="absolute bottom-6 left-[6%] right-[6%] md:left-[8%] md:right-[8%] flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 font-body text-[10px] uppercase tracking-[0.18em] text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="blog-article" className="relative px-[6%] py-16 md:px-[8%] md:py-24">
          <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,720px)_1fr]">
            <TableOfContents active={active} />

            <article className="flex flex-col gap-7">
              {post.blocks.map((block, i) => {
                const showArena = block.type === 'h2' && block.id === 'the-difference';
                return (
                  <div key={i} className="contents">
                    {showArena && <GeoSeoArena />}
                    <BlockView block={block} />
                  </div>
                );
              })}

              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <span className="mb-4 block font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  // Next move
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Need to show up in the answer — not just the results?
                </h3>
                <p className="mt-4 max-w-[46ch] font-body text-[15px] leading-relaxed text-text-secondary">
                  ALLSOLL builds brand systems that search engines rank and generative engines cite.
                </p>
                <Link
                  href="/contact/"
                  data-hover-text="TALK"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-[13px] font-bold tracking-wide text-black
                    border-2 border-black shadow-[4px_4px_0_0_#fff] transition-transform hover:-translate-y-0.5"
                >
                  Talk to us <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
