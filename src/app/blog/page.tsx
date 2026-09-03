import type { Metadata } from 'next';
import BlogIndex from '@/components/blog/BlogIndex';

export const metadata: Metadata = {
  title: 'Journal — GEO, SEO & Brand Intelligence',
  description:
    'ALLSOLL Journal: GEO vs SEO, AI search visibility, and how brands get found when search becomes a generated answer.',
  keywords: [
    'GEO vs SEO',
    'generative engine optimization',
    'AI search visibility',
    'SEO 2026',
    'branding agency India blog',
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'ALLSOLL Journal — GEO, SEO & Brand Intelligence',
    description:
      'How brands get found when search stops being a list of ten blue links.',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogIndex />;
}
