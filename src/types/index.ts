export type PricingModel = 'Free' | 'Freemium' | 'Free Trial' | 'Open Source' | 'Paid';

export type Platform = 'Web' | 'macOS' | 'Windows' | 'Linux' | 'iOS' | 'Android' | 'VS Code Extension' | 'CLI' | 'Browser Extension';

export interface AITool {
  id: string;
  name: string;
  slug: string;
  category: string; // matches Category.slug
  categoryName: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  pricingModel: PricingModel;
  freeTierSummary: string;
  platforms: Platform[];
  officialUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  editorialRating: number; // 1 to 5 scale
  lastVerifiedDate: string; // ISO date string e.g. "2026-03-01"
  tags: string[];
  logoIcon?: string;
  relatedToolSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  focusKeywords: string[];
}

export interface Comparison {
  slug: string; // e.g. "chatgpt-vs-claude"
  title: string;
  metaTitle: string;
  metaDescription: string;
  toolASlug: string;
  toolBSlug: string;
  overview: string;
  comparisonPoints: {
    feature: string;
    toolAAssessment: string;
    toolBAssessment: string;
    verdict: string;
  }[];
  freeTierComparison: {
    toolAFreeDetails: string;
    toolBFreeDetails: string;
  };
  finalRecommendation: {
    chooseToolAIf: string[];
    chooseToolBIf: string[];
    summaryVerdict: string;
  };
  lastVerifiedDate: string;
}

export interface AlternativeItem {
  targetToolName: string;
  targetToolSlug: string; // e.g. "chatgpt"
  slug: string; // e.g. "chatgpt" (route: /alternatives/chatgpt)
  title: string;
  metaTitle: string;
  metaDescription: string;
  introText: string;
  whyLookForAlternatives: string[];
  alternativeToolSlugs: string[];
  lastVerifiedDate: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  lastUpdatedDate: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  targetKeyword: string;
  excerpt: string;
  tableOfContents: { id: string; label: string }[];
  quickAnswer: string;
  contentSections: {
    id: string;
    heading: string;
    content: string; // markdown or HTML formatted string
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
  recommendedToolSlugs: string[];
  relatedGuideSlugs: string[];
}
