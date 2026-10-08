import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { COMPARISONS } from '@/data/comparisons';
import { ALTERNATIVES } from '@/data/alternatives';
import { ARTICLES } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = '2026-03-01';

  // Static Core Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/editorial-policy/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic Category Routes
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}/`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Tool Detail Routes
  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}/`,
    lastModified: tool.lastVerifiedDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Comparison Routes
  const comparisonRoutes: MetadataRoute.Sitemap = COMPARISONS.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}/`,
    lastModified: comp.lastVerifiedDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Dynamic Alternative Routes
  const alternativeRoutes: MetadataRoute.Sitemap = ALTERNATIVES.map((alt) => ({
    url: `${baseUrl}/alternatives/${alt.slug}/`,
    lastModified: alt.lastVerifiedDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Dynamic Guide Articles Routes
  const guideRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${baseUrl}/guides/${article.slug}/`,
    lastModified: article.lastUpdatedDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...toolRoutes,
    ...comparisonRoutes,
    ...alternativeRoutes,
    ...guideRoutes,
  ];
}
