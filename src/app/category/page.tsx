import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { TOOLS } from '@/data/tools';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'All AI Tool Categories | Browse 10 Functional Disciplines',
  description: 'Explore artificial intelligence tools organized across 10 functional categories including Academic Research, Coding, Writing, Presentations, and Resume building.',
  canonicalPath: '/category/',
});

export default function CategoriesIndexPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/category/' },
        ]}
      />

      <div style={{ maxWidth: '800px', marginBottom: 'var(--space-8)' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>
          AI Tool Categories
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Browse artificial intelligence tools by functional discipline. Each category silo provides transparent free-tier audits, workflows, and student-focused recommendations.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {CATEGORIES.map((cat) => {
          const count = TOOLS.filter((t) => t.category === cat.slug).length;

          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}/`}
              className="glass-card"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Category Silo
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {count} {count === 1 ? 'Tool' : 'Tools'} Indexed
                  </span>
                </div>

                <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  {cat.name}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {cat.shortDescription}
                </p>
              </div>

              <div
                style={{
                  marginTop: 'var(--space-4)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--brand-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Browse {cat.name} Tools →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
