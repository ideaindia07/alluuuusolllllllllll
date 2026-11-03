'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

const SCROLL_THRESHOLD = 350;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  const checkScroll = useCallback(() => {
    const currentScrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const shouldShow = currentScrollY > SCROLL_THRESHOLD;

    if (shouldShow !== isVisibleRef.current) {
      isVisibleRef.current = shouldShow;
      setIsVisible(shouldShow);
    }
  }, []);

  useEffect(() => {
    checkScroll();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Lenis scroll if available
    let lenisCleanup: (() => void) | undefined;
    const checkLenis = () => {
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.on === 'function') {
        lenis.on('scroll', handleScroll);
        lenisCleanup = () => {
          if (typeof lenis.off === 'function') {
            lenis.off('scroll', handleScroll);
          }
        };
      }
    };

    checkLenis();
    const timeoutId = setTimeout(checkLenis, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      if (lenisCleanup) lenisCleanup();
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = typeof window !== 'undefined' ? (window as any).lenis : null;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { immediate: prefersReduced });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`back-to-top group fixed z-[90] flex items-center justify-center rounded-full border bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-[#FFD43B] focus-visible:outline-offset-4 active:scale-95 right-4 md:right-6 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] md:bottom-6 w-11 h-11 md:w-12 md:h-12 border-white/15 text-white/80 hover:border-accent hover:text-accent hover:bg-[#121212] hover:shadow-[0_0_20px_rgba(255,212,59,0.2)] ${
        isVisible
          ? 'is-visible opacity-100 visible translate-y-0 pointer-events-auto'
          : 'opacity-0 invisible translate-y-2 pointer-events-none'
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="back-to-top-icon transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
