'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { BlogPost } from '@/lib/blogs';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
  index?: number;
};

export default function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.08, ease }}
        style={{ perspective: 1400 }}
      >
        <Link
          ref={ref}
          href={`/blog/${post.slug}/`}
          data-hover-text="READ"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]
            shadow-[0_0_0_1px_rgba(255,212,59,0.06)]
            transition-[border-color,box-shadow] duration-500
            hover:border-accent/40 hover:shadow-[0_30px_80px_-20px_rgba(255,212,59,0.18)]"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[640px]"
          >
            <div className="relative lg:col-span-7 overflow-hidden min-h-[280px] sm:min-h-[360px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/80" />
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />

              <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
                <span className="rounded-full border border-accent/40 bg-accent text-black px-3 py-1 font-display text-[10px] font-bold tracking-[0.22em] uppercase">
                  GEO
                </span>
                <span className="h-px w-8 bg-white/40" />
                <span className="rounded-full border border-white/25 bg-black/40 backdrop-blur-md px-3 py-1 font-display text-[10px] font-bold tracking-[0.22em] uppercase text-white">
                  SEO
                </span>
              </div>

              <span className="absolute bottom-5 left-5 font-display text-[5.5rem] sm:text-[7rem] font-bold leading-none tracking-tighter text-white/[0.12] lg:bottom-8 lg:left-8">
                {post.issue}
              </span>
            </div>

            <div className="relative lg:col-span-5 flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3 font-body text-[11px] uppercase tracking-[0.22em] text-text-tertiary">
                  <span className="text-accent">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{post.readTime} read</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{post.date}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold leading-[1.12] tracking-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-5 font-body text-[15px] leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-10 flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.16em] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-accent">
                  Open
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <Link
        href={`/blog/${post.slug}/`}
        data-hover-text="READ"
        className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
      >
        <div className="relative h-[220px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt={post.coverAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-black">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.2em] text-text-tertiary">
              {post.date} · {post.readTime}
            </p>
            <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-white group-hover:text-accent transition-colors">
              {post.title}
            </h3>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 font-display text-[12px] font-semibold text-accent">
            Read article
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
