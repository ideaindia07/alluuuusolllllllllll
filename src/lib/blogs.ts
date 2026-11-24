export type BlogTocItem = {
  id: string;
  label: string;
};

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string }
  | { type: 'callout'; label: string; text: string }
  | { type: 'list'; label?: string; items: string[] }
  | { type: 'faq'; items: { q: string; a: string }[] };

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
  toc?: BlogTocItem[];
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

const GEO_FUTURE_SEO_TITLE =
  'Generative Engine Optimization (GEO): The Future of SEO';

const AI_SEO_TITLE = 'AI SEO: How to Optimize Content for AI Search';

const WHY_WEBSITE_2026_TITLE =
  'Why Every Business Needs a Professional Website in 2026?';

export const BLOGS: BlogPost[] = [
  {
    slug: toBlogSlug(AI_SEO_TITLE),
    issue: '04',
    title: AI_SEO_TITLE,
    excerpt:
      'Search engine optimization is evolving with the rise of artificial intelligence. Traditional search engines are no longer the only way people discover information. Users are increasingly relying on AI-powered platforms such as ChatGPT, Google AI Overviews, Gemini and Perplexity to find answers, recommendations and solutions — and that shift has made AI SEO an important strategy for businesses that want to improve online visibility.',
    date: '23 November 2026',
    dateIso: '2026-11-23',
    readTime: '7 min',
    category: 'Search Intelligence',
    tags: ['AI SEO', 'GEO', 'AI Search', 'Content'],
    cover: '/blogs/blog4/cover.webp',
    coverAlt: 'AI SEO: how to optimize content for AI search',
    ogImage: '/blogs/blog4/cover.webp',
    keywords: [
      'AI SEO',
      'AI SEO how to optimize content for AI search',
      'AI search optimization',
      'generative engine optimization GEO',
      'AI search visibility',
      'SEO for AI search',
      'content optimization for AI',
      'ChatGPT search optimization',
      'Google AI Overviews optimization',
      'digital marketing agency AI SEO',
    ],
    toc: [
      { id: 'what-is-ai-seo', label: 'What is AI SEO' },
      { id: 'why-ai-search-optimization-matters', label: 'Why it matters' },
      { id: 'how-to-optimize-for-ai-search', label: 'How to optimize' },
      { id: 'use-relevant-keywords', label: 'Relevant keywords' },
      { id: 'answer-focused-content', label: 'Answer-focused content' },
      { id: 'build-topical-authority', label: 'Topical authority' },
      { id: 'technical-seo-and-structured-data', label: 'Technical SEO' },
      { id: 'strengthen-brand-authority', label: 'Brand authority' },
      { id: 'how-allsoll-can-help', label: 'How Allsoll helps' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
    blocks: [
      {
        type: 'p',
        text: 'Search engine optimization is evolving with the rise of artificial intelligence. Traditional search engines are no longer the only way people discover information. Users are increasingly relying on AI-powered platforms such as ChatGPT, Google AI Overviews, Gemini and Perplexity to find answers, recommendations and solutions.',
      },
      {
        type: 'p',
        text: 'This shift has made AI SEO (Artificial Intelligence Search Engine Optimization) an important strategy for businesses that want to improve online visibility and attract potential customers.',
      },
      {
        type: 'h2',
        id: 'what-is-ai-seo',
        text: 'What Is AI SEO?',
      },
      {
        type: 'p',
        text: 'AI SEO is the process of optimizing website content so it can be easily understood, discovered and referenced by AI-powered search engines and answer engines. Unlike traditional SEO, which focuses primarily on rankings in search engine results pages (SERPs), AI SEO also aims to make your content visible in AI-generated answers.',
      },
      {
        type: 'p',
        text: 'By using strategies such as semantic SEO, structured data, relevant keywords, high-quality content and topical authority, businesses can improve their chances of appearing in AI search results and recommendations.',
      },
      {
        type: 'h2',
        id: 'why-ai-search-optimization-matters',
        text: 'Why Is AI Search Optimization Important?',
      },
      {
        type: 'p',
        text: 'AI search is changing how people look for products, services and information. Instead of clicking multiple links, users often receive direct answers from AI tools. This means businesses need to optimize their websites for both traditional search engines and AI platforms.',
      },
      {
        type: 'list',
        label: 'Key benefits',
        items: [
          'Improved visibility in AI-generated search results',
          'Increased brand awareness across AI platforms',
          'Better chances of being cited as a trusted source',
          'More organic traffic and qualified leads',
          'Stronger online authority and credibility',
        ],
      },
      {
        type: 'image',
        src: '/blogs/blog4/traditional-vs-ai-search.webp',
        alt: 'Traditional search results compared with a single AI-generated answer citing a brand',
        caption: 'Ten blue links competed for position. One generated answer competes for inclusion.',
      },
      {
        type: 'p',
        text: 'Businesses that adopt AI SEO strategies early can build a stronger digital presence as search technology continues to evolve.',
      },
      {
        type: 'h2',
        id: 'how-to-optimize-for-ai-search',
        text: 'How to Optimize Content for AI Search',
      },
      {
        type: 'p',
        text: 'There is no single trick to it. What works is a handful of habits applied consistently across your website, from the words you choose to the way the pages are built.',
      },
      {
        type: 'image',
        src: '/blogs/blog4/ai-seo-pillars.webp',
        alt: 'The five moves of AI SEO: keywords, answer-first content, topical authority, technical SEO and brand authority',
        caption: 'Five moves that make content easy for AI search to find, understand and quote.',
      },
      {
        type: 'h2',
        id: 'use-relevant-keywords',
        text: '1. Use relevant SEO keywords naturally:',
      },
      {
        type: 'p',
        text: 'Keyword research remains an important part of AI SEO. Focus on relevant keywords such as AI SEO, AI search optimization, generative engine optimization (GEO), AI search visibility, SEO for AI search and content optimization for AI.',
      },
      {
        type: 'p',
        text: 'Include these keywords naturally in your headings, introduction, meta description and content. Avoid keyword stuffing and focus on answering the questions your audience is actually searching for.',
      },
      {
        type: 'h2',
        id: 'answer-focused-content',
        text: '2. Create helpful, answer-focused content:',
      },
      {
        type: 'p',
        text: 'AI search platforms prioritize content that provides clear, relevant and useful information. Create blogs, FAQs, guides and service pages that directly answer user questions.',
      },
      {
        type: 'p',
        text: 'Use simple language, short paragraphs, descriptive headings, bullet points and clear explanations. Content that answers questions like “What is AI SEO?” or “How can businesses optimize for AI search?” is easier for both users and search engines to understand.',
      },
      {
        type: 'h2',
        id: 'build-topical-authority',
        text: '3. Build topical authority:',
      },
      {
        type: 'p',
        text: 'Publishing consistent, informative content around your industry helps establish your website as a knowledgeable source. Create content clusters covering related topics, link relevant pages internally and provide accurate information backed by credible sources.',
      },
      {
        type: 'p',
        text: 'Building topical authority can improve your traditional SEO performance while strengthening your visibility in AI-driven search experiences.',
      },
      {
        type: 'h2',
        id: 'technical-seo-and-structured-data',
        text: '4. Optimize technical SEO and structured data:',
      },
      {
        type: 'p',
        text: 'A technically optimized website makes it easier for search engines and AI systems to crawl, understand and access your content. Ensure your website has fast loading speeds, mobile-friendly design, clean URLs, an updated XML sitemap and proper internal linking.',
      },
      {
        type: 'p',
        text: 'Implement relevant schema markup, such as Organization, Article, FAQ and LocalBusiness schema where appropriate, to help search engines understand your website content more effectively.',
      },
      {
        type: 'h2',
        id: 'strengthen-brand-authority',
        text: '5. Strengthen brand authority and online presence:',
      },
      {
        type: 'p',
        text: 'AI platforms may use information from multiple sources to understand and recommend brands. Maintain consistent business information across your website, social media profiles, directories and relevant industry platforms.',
      },
      {
        type: 'p',
        text: 'Customer reviews, expert content, brand mentions and credible backlinks can also help strengthen your brand’s reputation and online trust.',
      },
      {
        type: 'callout',
        label: 'In one line',
        text: 'Traditional SEO earns you the ranking. AI SEO earns you the mention inside the answer.',
      },
      {
        type: 'h2',
        id: 'how-allsoll-can-help',
        text: 'How Allsoll Can Help with AI SEO',
      },
      {
        type: 'p',
        text: 'Allsoll is a digital marketing agency that helps businesses strengthen their online presence through SEO, content marketing, digital marketing strategies and website optimization. As search continues to evolve, businesses need strategies that go beyond traditional keyword rankings.',
      },
      {
        type: 'p',
        text: 'Allsoll focuses on creating SEO-friendly content, improving website visibility, targeting relevant search keywords and building a strong digital presence to help businesses reach their target audience. By combining traditional SEO techniques with emerging AI search optimization strategies, businesses can prepare for the future of search and stay competitive online.',
      },
      {
        type: 'h2',
        id: 'conclusion',
        text: 'Conclusion',
      },
      {
        type: 'p',
        text: 'AI SEO is becoming an essential part of modern digital marketing. Optimizing content for AI search requires helpful information, relevant keywords, strong topical authority, technical SEO and consistent brand visibility. Businesses that adapt to AI-powered search can improve their chances of being discovered by potential customers across multiple platforms.',
      },
      {
        type: 'quote',
        text: 'With the right strategy, businesses can build a stronger online presence, improve search visibility and prepare for the next generation of search engines.',
      },
    ],
  },
  {
    slug: toBlogSlug(WHY_WEBSITE_2026_TITLE),
    issue: '03',
    title: WHY_WEBSITE_2026_TITLE,
    excerpt:
      'Picture a small furniture workshop in Jaipur. The work is beautiful, the regulars are loyal, and most orders come through word of mouth. Then a new customer calls and says, “I searched for you online and couldn’t find anything proper, so I nearly went somewhere else.” That workshop had an Instagram page, but it didn’t have a website and that nearly lost order says more than any statistic could.',
    date: '28 October 2026',
    dateIso: '2026-10-28',
    readTime: '5 min',
    category: 'Website Development',
    tags: ['Website', 'Strategy', 'Mobile', 'Growth'],
    cover: '/blogs/blog3/cover.webp',
    coverAlt: 'Why Every Business Needs a Professional Website in 2026',
    ogImage: '/blogs/blog3/cover.webp',
    keywords: [
      'Why Every Business Needs a Professional Website in 2026',
      'professional website',
      'website development services',
      'website development Jaipur',
      'business website 2026',
      'why business needs a website',
      'social media vs website',
      'mobile first website development',
      'Allsoll website development',
    ],
    toc: [
      { id: 'people-check-you', label: 'People check you first' },
      { id: 'social-media-is-rented-space', label: 'Social media is rented space' },
      { id: 'search-is-changing', label: 'Search is changing' },
      { id: 'most-visitors-on-phone', label: 'Visitors on phone' },
      { id: 'it-works-while-youre-asleep', label: 'Works while you sleep' },
      { id: 'why-a-template-isnt-enough', label: 'Templates aren’t enough' },
      { id: 'what-to-look-for', label: 'Website services' },
      { id: 'the-short-version', label: 'The short version' },
    ],
    blocks: [
      {
        type: 'p',
        text: 'Picture a small furniture workshop in Jaipur. The work is beautiful, the regulars are loyal, and most orders come through word of mouth. Then a new customer calls and says, “I searched for you online and couldn’t find anything proper, so I nearly went somewhere else.”',
      },
      {
        type: 'p',
        text: 'That workshop had an Instagram page, but it didn’t have a website and that nearly lost order says more than any statistic could.',
      },
      {
        type: 'h2',
        id: 'people-check-you',
        text: 'People check you before they trust you:',
      },
      {
        type: 'p',
        text: 'Whatever you sell, the buyer does the same thing first: they look you up. Usually on their phone, often in under a minute. A clean, professional website tells them you’re real, established and serious about your work. No website, or a broken one, makes them wonder and wondering is usually where the sale ends.',
      },
      {
        type: 'h2',
        id: 'social-media-is-rented-space',
        text: 'Social media is rented space:',
      },
      {
        type: 'p',
        text: 'Instagram and Facebook are useful, but you don’t own them. Algorithms change, reach drops, accounts get restricted. Your website is the one place online that belongs to you. Your prices, your story, your contact details and your best work stay put, no matter what a platform decides next month.',
      },
      {
        type: 'h2',
        id: 'search-is-changing',
        text: 'Search is changing, and your website is the source:',
      },
      {
        type: 'p',
        text: 'People still use Google, but more of them now ask ChatGPT or read an AI summary instead. Those tools pull their answers from websites, if yours is thin, outdated or badly built, there’s nothing for them to pick up, and a competitor’s page gets mentioned instead. In 2026, a good website isn’t only a place for visitors, it’s the raw material for every search tool out there.',
      },
      {
        type: 'h2',
        id: 'most-visitors-on-phone',
        text: 'Most visitors will be on a phone:',
      },
      {
        type: 'p',
        text: 'In India especially, most traffic comes from mobile. If your site loads slowly, the text is tiny or the buttons are hard to tap, people leave, fast. A few seconds of delay can cost you real enquiries. Proper website development treats speed and mobile layout as basics, not extras.',
      },
      {
        type: 'h2',
        id: 'it-works-while-youre-asleep',
        text: 'It works while you’re asleep:',
      },
      {
        type: 'p',
        text: 'A website answers questions at 11 pm, shows your work to someone in another city and collects enquiries on a Sunday, it doesn’t take holidays. Once it’s set up well, it’s one of the few parts of your business that keeps selling when you aren’t there.',
      },
      {
        type: 'h2',
        id: 'why-a-template-isnt-enough',
        text: 'Why a template often isn’t enough:',
      },
      {
        type: 'p',
        text: 'Free builders and ready-made templates are fine for a quick start but they tend to look like everyone else’s, load slower than they should and give you little control over how visitors move through the page. If you want people to book, buy or call, the layout, wording and structure all have to push them that way, that takes planning, not just filling in a template.',
      },
      {
        type: 'h2',
        id: 'what-to-look-for',
        text: 'What to look for in website development services:',
      },
      {
        type: 'p',
        text: 'Not all website development services are alike, so ask some plain questions like, Will the site be built around your brand, or adapted from a stock theme? \nHow will it perform on mobile? Who looks after hosting, security and updates once it’s live? and can they show you a site that actually brought a client results, not just one that looks nice?',
      },
      {
        type: 'p',
        text: 'Good website development is part design, part strategy and part engineering. You want a team that’s comfortable with all three, not one that treats it as a design job with a bit of code at the end.',
      },
      {
        type: 'h2',
        id: 'the-short-version',
        text: 'The short version:',
      },
      {
        type: 'quote',
        text: 'A professional website in 2026 isn’t a luxury or a digital brochure. It’s where trust gets built, where search tools find you and where customers land before they ever speak to you.',
      },
      {
        type: 'p',
        text: 'Allsoll builds websites as part of the brand itself, so what people see online feels like the business they’ll meet in person.',
      },
    ],
  },
  {
    slug: toBlogSlug(GEO_FUTURE_SEO_TITLE),
    issue: '02',
    title: GEO_FUTURE_SEO_TITLE,
    excerpt:
      "Try this the next time you’re bored. Open ChatGPT and ask it to recommend a few agencies, or restaurants, or accountants in your city and then do the same search on Google. The answers won’t match, sometimes they won’t even overlap and if your business is missing from the first one, that’s a problem no amount of ranking on page one will fix. That gap is what Generative Engine Optimization (GEO) is about.",
    date: '24 October 2026',
    dateIso: '2026-10-24',
    readTime: '6 min',
    category: 'Search Intelligence',
    tags: ['GEO', 'SEO', 'AI Search', 'AEO'],
    cover: '/blogs/blog2/cover.webp',
    coverAlt: 'Generative Engine Optimization (GEO): The Future of SEO',
    ogImage: '/blogs/blog2/cover.webp',
    keywords: [
      'Generative Engine Optimization',
      'GEO The Future of SEO',
      'GEO vs SEO',
      'what is GEO',
      'AI search optimization',
      'AEO Answer Engine Optimization',
      'ChatGPT search optimization',
      'Google AI Overviews optimization',
      'GEO strategy',
      'GEO best practices',
    ],
    toc: [
      { id: 'what-geo-actually-means', label: 'What GEO actually means' },
      { id: 'geo-vs-seo', label: 'GEO vs SEO' },
      { id: 'and-where-does-aeo-fit-in', label: 'Where does AEO fit in?' },
      { id: 'why-this-is-the-future-of-seo', label: 'Why this is the future' },
      { id: 'how-to-optimize-content', label: 'How to optimize' },
      { id: 'geo-strategy', label: 'A GEO strategy' },
      { id: 'specific-platforms', label: 'Specific platforms' },
      { id: 'best-practices', label: 'Best practices' },
      { id: 'faqs', label: 'FAQs' },
    ],
    blocks: [
      {
        type: 'p',
        text: 'Try this the next time you’re bored. Open ChatGPT and ask it to recommend a few agencies, or restaurants, or accountants in your city and then do the same search on Google. The answers won’t match, sometimes they won’t even overlap and if your business is missing from the first one, that’s a problem no amount of ranking on page one will fix.',
      },
      {
        type: 'p',
        text: 'That gap is what Generative Engine Optimization (GEO) is about.',
      },
      {
        type: 'h2',
        id: 'what-geo-actually-means',
        text: 'What GEO actually means:',
      },
      {
        type: 'p',
        text: 'Strip away the jargon and GEO is simple. You’re making your content easy for AI tools to find, understand and repeat. Old-school SEO was about getting your page to rank. GEO is about getting your name into the answer itself, whether that’s a paragraph in Google’s AI Overview or a recommendation inside ChatGPT.',
      },
      {
        type: 'p',
        text: 'People call it different things. AI search optimization, AI SEO, GEO. Mostly it’s the same idea wearing different labels, so don’t get hung up on the vocabulary.',
      },
      {
        type: 'h2',
        id: 'geo-vs-seo',
        text: 'GEO vs SEO: no, one isn’t killing the other',
      },
      {
        type: 'p',
        text: 'Every few months someone online announces SEO is dead. It isn’t, if anything, the GEO vs SEO argument gets the relationship backwards.',
      },
      {
        type: 'p',
        text: 'AI tools learn from the open web. They read the same pages Google reads. If your site is slow, messy or full of thin content, there’s nothing worth quoting, and the AI moves on to someone else’s page. So SEO stays as the foundation: speed, structure, trust, proper content. GEO sits on top and asks a slightly different question. Not “does this page rank?” but “would an AI feel comfortable quoting it?”',
      },
      {
        type: 'h2',
        id: 'and-where-does-aeo-fit-in',
        text: 'And where does AEO fit in?',
      },
      {
        type: 'p',
        text: 'You’ll also hear about Answer Engine Optimization (AEO). It came a little earlier and is mostly about getting short, direct answers picked up by featured snippets and voice assistants. GEO stretches that idea further, towards longer AI-written responses. The habits overlap a lot. If you write clear answers for one, you’re already halfway there for the other.',
      },
      {
        type: 'h2',
        id: 'why-this-is-the-future-of-seo',
        text: 'Why this is the future of SEO:',
      },
      {
        type: 'p',
        text: 'I don’t think the future of SEO arrives as a big dramatic switch. It’s more of a slow drift. More people start their questions in a chat box. More people read an AI summary and don’t click anything. Traffic gets thinner, but the visitors who do arrive have usually heard your name from somewhere they trust, so they’re warmer.',
      },
      {
        type: 'quote',
        text: 'Which means being mentioned starts to matter more than being listed.',
      },
      {
        type: 'h2',
        id: 'how-to-optimize-content',
        text: 'How to optimize content for AI search engines:',
      },
      {
        type: 'p',
        text: 'There’s no secret trick here, honestly. What works is mostly good writing with a few habits added.',
      },
      {
        type: 'p',
        text: 'Say the answer early. If someone asks “what is GEO?”, the first two lines of that section should tell them. Don’t make the reader (or the machine) dig through a long introduction first.',
      },
      {
        type: 'p',
        text: 'Write to real questions, pull them from your sales calls, your inbox and your comments. Use those as headings. People type questions into AI tools the way they’d ask a friend, so your pages should sound closer to that.',
      },
      {
        type: 'p',
        text: 'Say something specific. A real number from your own work, a small example, an opinion you’d defend. The internet has a thousand pages that all say the same thing, and AI tools have no reason to pick yours unless it adds something.',
      },
      {
        type: 'p',
        text: 'Keep the page tidy, clear headings, short paragraphs, an FAQ at the end. It helps people just as much as it helps machines.',
      },
      {
        type: 'p',
        text: 'Get talked about elsewhere. Reviews, press, forum threads, expert quotes. AI tools don’t only read your website. They read what the rest of the web says about you and update things. A stat from three years ago makes a page look neglected.',
      },
      {
        type: 'h2',
        id: 'geo-strategy',
        text: 'A Generative Engine Optimization strategy you can start this week:',
      },
      {
        type: 'p',
        text: 'A decent Generative Engine Optimization strategy doesn’t need a new department or a big budget. Pick your ten most important pages, rewrite the opening of each so it answers its main question straight away. Add an honest FAQ, link related pages to each other so your site reads like a connected body of knowledge rather than a pile of unrelated posts.',
      },
      {
        type: 'p',
        text: 'Then, once a month, go and ask the AI tools about your category and see what they say. Whether they mention you, how they describe you, who they mention instead. That small habit tells you more about your progress than most dashboards will.',
      },
      {
        type: 'h2',
        id: 'specific-platforms',
        text: 'A word on specific platforms:',
      },
      {
        type: 'p',
        text: 'ChatGPT search optimization leans on clarity and credibility. It tends to favor content that’s well sourced and backed up by mentions across the wider web, so building a presence beyond your own site helps.',
      },
      {
        type: 'p',
        text: 'Google AI Overviews optimization is closer to traditional SEO. Pages that already rank well, load fast and answer a question cleanly are the ones that get pulled in, and strong signals of experience and trust don’t hurt.',
      },
      {
        type: 'h2',
        id: 'best-practices',
        text: 'If you remember only a few Generative Engine Optimization best practices',
      },
      {
        type: 'callout',
        label: 'Best Practices',
        text: 'Answer first, be specific, keep the structure clean, earn mentions elsewhere, update often, check how AI describes you, none of that is glamorous. It’s patient work, the same kind SEO has always rewarded, just pointed at a new kind of reader.',
      },
      {
        type: 'p',
        text: 'The tools will keep changing. The businesses that explain things clearly will keep getting picked.',
      },
      {
        type: 'h2',
        id: 'faqs',
        text: 'FAQs',
      },
      {
        type: 'faq',
        items: [
          {
            q: 'What is Generative Engine Optimization (GEO)?',
            a: 'It’s the practice of shaping your content so AI tools like ChatGPT, Perplexity and Google’s AI Overviews can understand it and use it in their answers.',
          },
          {
            q: 'Is GEO different from SEO?',
            a: 'Yes, but they depend on each other. SEO helps you rank in search results. GEO helps you get mentioned inside AI-written answers. Good SEO is the base that GEO builds on.',
          },
          {
            q: 'How long does GEO take to work?',
            a: 'There’s no fixed timeline. Most businesses start noticing changes after a few months of steady, well-structured content, though it depends on competition and your site’s existing authority.',
          },
          {
            q: 'Is GEO only for big brands?',
            a: 'No. Smaller and local businesses can do well, because AI tools like clear, specific answers and a focused business can give exactly that',
          },
        ],
      },
    ],
  },
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
    toc: [
      { id: 'what-is-geo', label: "What's GEO" },
      { id: 'seo-quickly', label: 'SEO, quickly' },
      { id: 'the-difference', label: 'The difference' },
      { id: 'which-one', label: 'Which one in 2026' },
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
