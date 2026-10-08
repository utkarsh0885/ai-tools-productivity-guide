import { SITE_CONFIG } from './seo';
import { AITool, GuideArticle } from '@/types';

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.ico`,
    description: SITE_CONFIG.description,
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${SITE_CONFIG.url}${item.item}`,
    })),
  };
}

export function generateSoftwareApplicationSchema(tool: AITool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    headline: tool.tagline,
    description: tool.shortDescription,
    applicationCategory: 'EducationalApplication',
    operatingSystem: tool.platforms.join(', '),
    url: `${SITE_CONFIG.url}/tools/${tool.slug}`,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      description: tool.freeTierSummary,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.editorialRating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1',
    },
  };
}

export function generateArticleSchema(article: GuideArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    url: `${SITE_CONFIG.url}/guides/${article.slug}`,
    datePublished: article.publishedDate,
    dateModified: article.lastUpdatedDate,
    author: {
      '@type': 'Person',
      name: article.authorName,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/guides/${article.slug}`,
    },
  };
}

export function generateFAQSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateItemListSchema(items: { name: string; url: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
