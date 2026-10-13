import { SERVICES } from '@/lib/services';
import { BLOGS } from '@/lib/blogs';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://allsoll.com').replace(
  /\/$/,
  ''
);

export const SITE_NAME = 'ALLSOLL';

export const HOME_SEO_TITLE =
  'Digital Marketing Agency In Jaipur | Brand Consultant | AllSoll';
export const HOME_SEO_DESCRIPTION =
  'AllSoll is a trusted Digital Marketing Agency in Jaipur providing SEO, brand consulting, social media, and digital marketing solutions for businesses.';

export const HOME_HEADING =
  'Digital Marketing Agency in Jaipur for Business Growth';
export const HOME_INTRO =
  'AllSoll is a digital marketing agency in Jaipur helping businesses build a strong online presence through SEO, social media marketing, branding, performance marketing, and strategic digital solutions. We create customized strategies designed to increase visibility, reach the right audience, and support sustainable business growth.';

export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: 'What does AllSoll offer as a digital marketing agency in Jaipur?',
    a: 'AllSoll provides complete digital marketing services in Jaipur, including SEO, social media marketing, Google Ads, website development, branding, and content marketing.',
  },
  {
    q: 'Why choose AllSoll as a digital marketing agency in Jaipur?',
    a: 'AllSoll focuses on customized digital marketing strategies that help businesses improve their online visibility, reach the right audience, generate leads, and grow their brand.',
  },
  {
    q: 'Does AllSoll provide SEO services in Jaipur?',
    a: 'Yes, AllSoll offers SEO services designed to improve search engine rankings, increase organic traffic, and help businesses build a stronger online presence.',
  },
  {
    q: 'Does AllSoll provide brand consulting services?',
    a: 'Yes. AllSoll provides brand consulting to help businesses develop a clear brand identity, positioning, messaging, and marketing strategy.',
  },
  {
    q: 'Can AllSoll help improve my Google rankings?',
    a: "Yes. Our SEO strategies focus on technical SEO, on-page optimization, content, local SEO, and other proven practices to improve your website's search visibility.",
  },
  {
    q: 'Does AllSoll offer local SEO services in Jaipur?',
    a: 'Yes. AllSoll helps local businesses improve their visibility in Google Search and Google Maps through local SEO, Google Business Profile optimization, and location-focused strategies.',
  },
  {
    q: 'How can digital marketing help my business grow?',
    a: 'Digital marketing can help your business reach potential customers online, increase brand awareness, generate qualified leads, and build long-term online visibility.',
  },
  {
    q: 'Does AllSoll create customized digital marketing strategies?',
    a: 'Yes. AllSoll develops customized strategies based on your business goals, target audience, industry, competition, and current online presence.',
  },
  {
    q: 'What businesses can work with AllSoll?',
    a: 'AllSoll can work with businesses across different industries and create digital marketing, SEO, branding, and online growth strategies based on their specific requirements.',
  },
  {
    q: 'How can I get started with AllSoll?',
    a: 'You can contact AllSoll to discuss your business goals and online marketing requirements. Our team can recommend suitable digital marketing, SEO, or branding solutions.',
  },
];

export const SEO_KEYWORDS = [
  'branding agency in Jaipur',
  'branding agency in India',
  'best branding agency in India',
  'top branding agencies in India',
  'top 10 branding companies in India',
  'creative agency Jaipur',
  'creative agency India',
  'marketing agency in Jaipur',
  'digital marketing agency in Jaipur',
  'brand consultant Jaipur',
  'brand consulting Jaipur',
  'digital marketing agency in India',
  'digital marketing agency for startups',
  'performance marketing agency Jaipur',
  'performance marketing expert India',
  'performance marketing management',
  'advertising agency Jaipur',
  'best ad agencies in India',
  'social media agency Jaipur',
  'social media marketing India',
  'website design company Jaipur',
  'website development India',
  'Performance Marketing Agency agency India',
  'brand photoshoot Jaipur',
  'brand strategy India',
  'brand identity design Jaipur',
  'Allsoll Jaipur',
  'Allsoll India',
  'GEO vs SEO',
  'generative engine optimization',
];

/** Crawlable footer links — visually hidden, kept in DOM for search engines */
export const FOOTER_CRAWL_LINKS: { label: string; href: string }[] = [
  { label: 'Branding agency in Jaipur', href: '/services/branding/' },
  { label: 'Branding agency in India', href: '/services/branding/' },
  { label: 'Best branding agency in India', href: '/services/branding/' },
  { label: 'Top branding agencies in India', href: '/services/branding/' },
  { label: 'Top 10 branding companies in India', href: '/services/branding/' },
  { label: 'Brand identity design Jaipur', href: '/services/branding/' },
  { label: 'Marketing agency in Jaipur', href: '/services/brand-consultation-strategy/' },
  { label: 'Brand strategy India', href: '/services/brand-consultation-strategy/' },
  { label: 'Performance marketing expert India', href: '/services/brand-consultation-strategy/' },
  { label: 'Performance marketing management', href: '/services/brand-consultation-strategy/' },
  { label: 'Digital marketing agency in Jaipur', href: '/services/expert-social-media/' },
  { label: 'Digital marketing agency in India', href: '/services/expert-social-media/' },
  { label: 'Social media agency Jaipur', href: '/services/expert-social-media/' },
  { label: 'Social media marketing India', href: '/services/expert-social-media/' },
  { label: 'Website design company Jaipur', href: '/services/website-design-development/' },
  { label: 'Website development India', href: '/services/website-design-development/' },
  { label: 'Digital marketing agency for startups', href: '/services/website-design-development/' },
  { label: 'Performance Marketing Agency agency India', href: '/services/performance-marketing-agency/' },
  { label: 'Best ad agencies in India', href: '/services/performance-marketing-agency/' },
  { label: 'Brand photoshoot Jaipur', href: '/services/brand-photoshoots/' },
  { label: 'Creative agency Jaipur', href: '/services/' },
  { label: 'Creative agency India', href: '/services/' },
  { label: 'Advertising agency Jaipur', href: '/services/' },
  { label: 'Performance marketing agency Jaipur', href: '/services/' },
  { label: 'Allsoll Jaipur', href: '/about/' },
  { label: 'Allsoll India', href: '/about/' },
  { label: 'ALLSOLL Journal', href: '/blog/' },
  ...BLOGS.map((post) => ({
    label: post.title,
    href: `/blog/${post.slug}/`,
  })),
];

export const SERVICE_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  branding: {
    title: 'Branding Agency In India | Brand Strategy Consultant | AllSoll',
    description:
      'Build a strong brand with AllSoll, a branding agency in India offering expert brand strategy, identity, positioning, and consulting for business growth.',
    keywords: [
      'branding agency in India',
      'brand strategy consultant',
      'brand strategy India',
      'brand identity design',
      'brand positioning India',
      'branding agency in Jaipur',
      'best branding agency in India',
      'top branding agencies in India',
      'top 10 branding companies in India',
      'logo and brand system India',
    ],
  },
  'brand-consultation-strategy': {
    title: 'Brand Strategy & Consultation in Jaipur | Marketing Agency — ALLSOLL',
    description:
      'Brand consultation and strategy from a marketing agency in Jaipur. Positioning, competitor mapping and performance marketing management that compounds.',
    keywords: [
      'marketing agency in Jaipur',
      'brand strategy India',
      'brand consultation Jaipur',
      'performance marketing expert',
      'performance marketing management',
      'positioning strategy India',
    ],
  },
  'expert-social-media': {
    title: 'Social Media Agency in Jaipur | Expert Social Media — ALLSOLL',
    description:
      'Expert social media from a digital marketing agency in Jaipur. Organic and paid campaigns built for recall, engagement and conversion — not vanity metrics.',
    keywords: [
      'social media agency Jaipur',
      'digital marketing agency in Jaipur',
      'social media marketing India',
      'Instagram marketing Jaipur',
      'LinkedIn marketing India',
      'best performance marketing agencies',
    ],
  },
  'website-design-development': {
    title: 'Website Design & Development in Jaipur | Custom Sites — ALLSOLL',
    description:
      'Custom website design and development in Jaipur and across India. Immersive, luxury digital experiences for startups and brands — built to convert, not templates.',
    keywords: [
      'website design company Jaipur',
      'website development India',
      'digital marketing agency for startups',
      'custom website design Jaipur',
      'ecommerce website India',
    ],
  },
  'performance-marketing-agency': {
    title: 'Performance Marketing Agency | Paid Google Advertising | AllSoll',
    description:
      ' AllSoll is a performance marketing agency in Jaipur offering Google Ads and paid advertising to boost leads, conversions, and business growth.',
    keywords: [
      'Performance Marketing Agency agency India',
      'best ad agencies in India',
      'premium brand marketing India',
      'luxury advertising Jaipur',
      'top 10 branding companies in India',
    ],
  },
  'brand-photoshoots': {
    title: 'Brand Photoshoots in Jaipur | Cinematic Brand Photography — ALLSOLL',
    description:
      'Cinematic brand photoshoots in Jaipur with full production — concept, styling, location and post. Visual assets at the standard of top creative agencies in India.',
    keywords: [
      'brand photoshoot Jaipur',
      'brand photography India',
      'top creative agencies in India',
      'commercial photoshoot Jaipur',
      'brand content production India',
    ],
  },
};

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash === '//' ? '/' : withSlash}`;
}

export type SitePage = {
  path: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  lastModified?: string;
};

export const SITE_PAGES: SitePage[] = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/about/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services/', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/contact/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/privacy-policy/', changeFrequency: 'yearly' as const, priority: 0.4 },
  ...SERVICES.map((service) => ({
    path: `/services/${service.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  })),
  ...BLOGS.map((post) => ({
    path: `/blog/${post.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: post.dateIso,
  })),
];

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/AllSoll_logo.webp`,
    image: `${SITE_URL}/AllSoll_logo.webp`,
    email: 'tanishka@allsoll.com',
    description:
      'Branding, digital marketing, social media, website design, Performance Marketing Agency and brand photoshoots. A creative agency in Jaipur serving brands across India.',
    areaServed: [
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.9124,
      longitude: 75.7873,
    },
    sameAs: [
      'https://www.instagram.com/allsoll.global',
      'https://www.youtube.com/@allsoll.global',
    ],
    knowsAbout: SEO_KEYWORDS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ALLSOLL Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}/`),
          description: service.desc,
          areaServed: ['Jaipur', 'India'],
        },
      })),
    },
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  if (faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function homeFaqJsonLd() {
  return faqPageJsonLd(HOME_FAQS);
}

export function serviceFaqJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service || service.faqs.length === 0) return null;
  return faqPageJsonLd(service.faqs);
}
