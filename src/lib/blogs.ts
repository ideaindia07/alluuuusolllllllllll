export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string }
  | { type: 'callout'; label: string; text: string };

export type BlogPost = {
  slug: string;
  issue: string;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  readTime: string;
  category: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  ogImage: string;
  keywords: string[];
  blocks: BlogBlock[];
};

const img = {
  branding: '/blogs/blog1/cover.webp',
  marketing: '/blogs/blog1/Marketing.webp',
  seo: '/blogs/blog1/seo-services.webp',
};

export function toBlogSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[''`´]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function blogPath(slug: string) {
  return `/blog/${slug}/`;
}

const GEO_VS_SEO_TITLE =
  "GEO vs SEO: What's the Difference and Which One Does Your Business Need in 2026?";

export const BLOGS: BlogPost[] = [
  {
    slug: toBlogSlug(GEO_VS_SEO_TITLE),
    issue: '01',
    title: GEO_VS_SEO_TITLE,
    excerpt:
      "Ranking on Google's first page used to be the whole game. In 2026, AI answers decide whether you get found — or disappear from the conversation.",
    date: '03 September 2026',
    dateIso: '2026-09-03',
    readTime: '6 min',
    category: 'Search Intelligence',
    tags: ['GEO', 'SEO', 'AI Search', 'Visibility'],
    cover: img.branding,
    coverAlt: 'Branding and marketing strategy for AI-era search visibility',
    ogImage: img.branding,
    keywords: [
      'GEO vs SEO',
      'GEO vs SEO 2026',
      "what's the difference between GEO and SEO",
      'generative engine optimization',
      'which one does your business need',
      'AI search visibility',
      'Google AI Overviews',
      'ChatGPT brand visibility',
      'SEO 2026',
      'branding agency India',
    ],
    blocks: [
      {
        type: 'p',
        text: "For years, ranking on Google's first page was basically the whole game. Marketing budgets got built around SEO, keywords, backlinks, meta descriptions, the usual playbook all working toward one thing: showing up before your competitor does. Then 2026 happened, and a new term started showing up in every marketing conversation: GEO, or Generative Engine Optimization. If you run a business, you can't really ignore this shift anymore. Understanding GEO vs SEO now decides whether you get found or quietly disappear from the conversation.",
      },
      {
        type: 'h2',
        id: 'what-is-geo',
        text: "So, what's GEO, exactly?",
      },
      {
        type: 'p',
        text: "GEO is about optimizing your content so AI tools, ChatGPT, Google's AI Overviews, Perplexity, Gemini, take your pick, pull your brand directly into their generated answers. There's no list of ten blue links anymore. Just one response, stitched together by the model. GEO is the work of making sure your business ends up somewhere in that response.",
      },
      {
        type: 'p',
        text: "This is really what AI search visibility comes down to. Say someone asks an AI assistant for the best branding agencies in India, and your name never comes up in that answer. Doesn't matter how well you rank on Google page one that customer already moved on without you.",
      },
      {
        type: 'image',
        src: img.marketing,
        alt: 'Marketing in the age of generative search',
        caption: 'One generated answer. One chance to be named.',
      },
      {
        type: 'quote',
        text: "There's no list of ten blue links anymore. Just one response, stitched together by the model.",
      },
      {
        type: 'h2',
        id: 'seo-quickly',
        text: 'SEO, quickly',
      },
      {
        type: 'p',
        text: "SEO is the practice of shaping your website so search engines rank it higher. Keywords, site structure, backlinks, content relevance all of it feeds into where you land on the results page. Someone searches, clicks a blue link, ends up on your site. That's the traffic you've been fighting for.",
      },
      {
        type: 'image',
        src: img.seo,
        alt: 'SEO services and search ranking strategy',
        caption: 'SEO still wins the click. GEO wins the citation.',
      },
      {
        type: 'h2',
        id: 'the-difference',
        text: 'The difference that actually matters',
      },
      {
        type: 'p',
        text: 'SEO is a competition for position. GEO is a competition for inclusion. One asks: can we rank above the next brand? The other asks: will the model mention us at all? You can own page one and still lose the conversation if AI tools never cite you. The interface changed. The prize changed with it.',
      },
      {
        type: 'callout',
        label: 'In one line',
        text: 'SEO gets you onto the results page. GEO gets you into the answer.',
      },
      {
        type: 'h2',
        id: 'which-one',
        text: 'Which one does your business need in 2026?',
      },
      {
        type: 'p',
        text: "Both. SEO is still how people land on your site, how crawlers understand your pages, how authority compounds. GEO is how you stay present when the search never becomes a click — when the answer is generated, cited, and closed. Brands that treat this as either/or will watch traffic flatten while competitors get quoted instead.",
      },
      {
        type: 'p',
        text: "If you sell expertise, services, or a point of view — branding, strategy, anything a founder would ask an AI to recommend — GEO is no longer optional. The businesses that get named in those answers will own the next decade of discovery. The ones that only optimize for ten blue links will keep winning a game fewer people are playing.",
      },
    ],
  },
];

export function getBlog(slug: string) {
  return BLOGS.find((post) => post.slug === slug);
}

export function getBlogSlugs() {
  return BLOGS.map((post) => post.slug);
}

export function blogArticleJsonLd(post: BlogPost, siteUrl: string) {
  const url = `${siteUrl}${blogPath(post.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    url,
    image: `${siteUrl}${post.cover}`,
    author: {
      '@type': 'Organization',
      name: 'ALLSOLL',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ALLSOLL',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/AllSoll_logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    inLanguage: 'en-IN',
  };
}

export function blogIndexJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ALLSOLL Journal',
    description:
      'GEO vs SEO, AI search visibility, and how brands get found when search becomes a generated answer.',
    url: `${siteUrl}/blog/`,
    publisher: {
      '@type': 'Organization',
      name: 'ALLSOLL',
      url: siteUrl,
    },
    blogPost: BLOGS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${siteUrl}${blogPath(post.slug)}`,
      datePublished: post.dateIso,
      description: post.excerpt,
    })),
  };
}
