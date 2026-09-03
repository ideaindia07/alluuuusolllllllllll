import type { Metadata } from 'next';
import BlogIndex from '@/components/blog/BlogIndex';
import JsonLd from '@/components/seo/JsonLd';
import { BLOGS, blogIndexJsonLd } from '@/lib/blogs';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Journal — GEO vs SEO & Brand Intelligence',
  description:
    "ALLSOLL Journal: GEO vs SEO — what's the difference and which one your business needs in 2026. AI search visibility, generative engine optimization, and brand discovery.",
  keywords: [
    'GEO vs SEO',
    'GEO vs SEO 2026',
    'generative engine optimization',
    'AI search visibility',
    'SEO 2026',
    'ALLSOLL Journal',
    'branding agency India blog',
    ...BLOGS.flatMap((post) => [post.title, ...post.keywords]),
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'ALLSOLL Journal — GEO vs SEO & Brand Intelligence',
    description:
      "How brands get found when search stops being a list of ten blue links. GEO vs SEO: what's the difference and which one your business needs in 2026.",
    type: 'website',
    url: `${SITE_URL}/blog/`,
    locale: 'en_IN',
    siteName: 'ALLSOLL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALLSOLL Journal — GEO vs SEO & Brand Intelligence',
    description:
      "GEO vs SEO: what's the difference and which one your business needs in 2026.",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogIndexJsonLd(SITE_URL)} />
      <BlogIndex />
    </>
  );
}
