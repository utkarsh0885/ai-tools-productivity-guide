import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'AI Tools & Productivity Guide',
  shortName: 'AI Tools Guide',
  description: 'A verified, non-commercial educational directory helping students, researchers, and professionals discover useful AI tools with transparent free-tier information.',
  url: 'https://ai-tools-guide.vercel.app', // Production default
  ogImage: '/images/og-default.png',
  author: 'Independent Educational SEO Project',
  links: {
    github: 'https://github.com',
  }
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  canonicalPath = '',
  ogType = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.shortName}` 
    : `${SITE_CONFIG.name} — Curated Free AI Discovery Directory`;

  const cleanCanonicalPath = canonicalPath.startsWith('/') 
    ? canonicalPath 
    : `/${canonicalPath}`;
  const canonicalUrl = `${SITE_CONFIG.url}${cleanCanonicalPath}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: ogType,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
