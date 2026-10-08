import { constructMetadata } from '@/lib/seo';
import { TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import ToolDirectory from '@/components/tools/ToolDirectory';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { generateItemListSchema } from '@/lib/schema';

export const metadata = constructMetadata({
  title: 'All AI Tools Directory | Verified Free & Freemium Software',
  description: 'Search, filter, and discover verified free and freemium artificial intelligence tools across 10 functional categories with transparent usage limit audits.',
  canonicalPath: '/tools/',
});

export default function ToolsIndexPage() {
  const itemListSchema = generateItemListSchema(
    TOOLS.map((tool, idx) => ({
      name: tool.name,
      url: `/tools/${tool.slug}/`,
      position: idx + 1,
    }))
  );

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'All AI Tools', href: '/tools/' },
        ]}
      />

      {/* Page Header */}
      <div style={{ marginBottom: 'var(--space-8)', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>
          Curated AI Tools Directory
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Explore our non-commercial, verified index of artificial intelligence software. Filter by academic purpose, pricing model, and operating platform to find the right zero-budget tool for your workflow.
        </p>
      </div>

      {/* Interactive Filterable Directory */}
      <ToolDirectory initialTools={TOOLS} categories={CATEGORIES} />
    </div>
  );
}
