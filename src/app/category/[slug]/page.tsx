import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { ARTICLES } from '@/data/articles';
import { constructMetadata } from '@/lib/seo';
import ToolCard from '@/components/tools/ToolCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { generateItemListSchema } from '@/lib/schema';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return constructMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    canonicalPath: `/category/${category.slug}/`,
  });
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category.slug);

  // Relevant guides related to this category
  const relatedGuides = ARTICLES.filter((art) =>
    art.recommendedToolSlugs.some((toolSlug) =>
      tools.some((t) => t.slug === toolSlug)
    )
  );

  const itemListSchema = generateItemListSchema(
    tools.map((tool, idx) => ({
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
          { label: 'Categories', href: '/category/' },
          { label: category.name, href: `/category/${category.slug}/` },
        ]}
      />

      {/* Category Hero */}
      <header style={{ maxWidth: '820px', marginBottom: 'var(--space-8)' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>{category.name}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-4)' }}>
          {category.longDescription}
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {category.focusKeywords.map((kw) => (
            <span
              key={kw}
              style={{
                fontSize: '0.75rem',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-elevated)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              #{kw}
            </span>
          ))}
        </div>
      </header>

      {/* Tools Listing Section */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-6)' }}>
          Verified Tools in {category.name} ({tools.length})
        </h2>

        {tools.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              Additional tools in this category are currently undergoing verification. Check back soon or explore related categories below.
            </p>
          </div>
        )}
      </section>

      {/* Related Educational Guides */}
      {relatedGuides.length > 0 && (
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-4)' }}>
            Related Guides for {category.name}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className="glass-card"
                style={{ textDecoration: 'none' }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '4px' }}>
                  {guide.readTime}
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {guide.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {guide.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category Navigation Silos */}
      <section
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-8)',
        }}
      >
        <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
          Explore Other Functional Disciplines
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {CATEGORIES.filter((c) => c.slug !== category.slug).map((otherCat) => (
            <Link
              key={otherCat.slug}
              href={`/category/${otherCat.slug}/`}
              className="badge badge-category"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              {otherCat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
