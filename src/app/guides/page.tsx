import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Editorial AI Guides & Tutorials for Students & Researchers',
  description: 'In-depth, non-commercial guides on finding free AI tools for academic research, essay writing, ATS resume creation, and literature reviews.',
  canonicalPath: '/guides/',
});

export default function GuidesIndexPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides/' },
        ]}
      />

      <div style={{ maxWidth: '800px', marginBottom: 'var(--space-8)' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>
          Student & Academic AI Guides
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Actionable, verified editorial tutorials designed to help university students and researchers integrate artificial intelligence into academic work ethically and without subscription costs.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {ARTICLES.map((article) => (
          <article
            key={article.slug}
            className="glass-card"
            style={{
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
                  gap: 'var(--space-2)',
                  fontSize: '0.8rem',
                  color: 'var(--brand-primary)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-2)',
                }}
              >
                <span>{article.readTime}</span>
                <span>•</span>
                <span style={{ color: 'var(--text-muted)' }}>Updated {article.lastUpdatedDate}</span>
              </div>

              <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>
                <Link
                  href={`/guides/${article.slug}/`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  {article.title}
                </Link>
              </h2>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: 'var(--space-4)' }}>
                {article.excerpt}
              </p>
            </div>

            <div>
              <Link
                href={`/guides/${article.slug}/`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                Read Complete Guide →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
