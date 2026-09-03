import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/blog/BlogDetail';
import JsonLd from '@/components/seo/JsonLd';
import { BLOGS, getBlog, blogArticleJsonLd, blogPath } from '@/lib/blogs';
import { SITE_URL } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return { title: 'Journal' };

  const canonical = blogPath(post.slug);
  const absolute = `${SITE_URL}${canonical}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: 'ALLSOLL' }],
    category: post.category,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: absolute,
      locale: 'en_IN',
      siteName: 'ALLSOLL',
      publishedTime: post.dateIso,
      modifiedTime: post.dateIso,
      authors: ['ALLSOLL'],
      tags: post.tags,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogArticleJsonLd(post, SITE_URL)} />
      <BlogDetail post={post} />
    </>
  );
}
