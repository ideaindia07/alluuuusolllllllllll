import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/blog/BlogDetail';
import JsonLd from '@/components/seo/JsonLd';
import { BLOGS, getBlog, blogArticleJsonLd } from '@/lib/blogs';
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
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.dateIso,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const jsonLd = {
    ...blogArticleJsonLd(post),
    image: `${SITE_URL}${post.cover}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ALLSOLL',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/AllSoll_logo.webp`,
      },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogDetail post={post} />
    </>
  );
}
