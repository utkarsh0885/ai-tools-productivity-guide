import Link from 'next/link';
import { COMPARISONS } from '@/data/comparisons';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'AI Tool Head-to-Head Comparisons | Objective Student Benchmarks',
  description: 'Compare popular AI tools side-by-side. Unbiased evaluations of free access tiers, academic writing quality, coding capabilities, and user workflows.',
  canonicalPath: '/compare/',
});

export default function ComparisonsIndexPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/compare/' },
        ]}
      />

      <div style={{ maxWidth: '800px', marginBottom: 'var(--space-8)' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>
          AI Tool Comparisons
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Objective, transparent head-to-head evaluations. We examine real differences in free-tier allowances, output nuance, citation transparency, and student workflow suitability.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {COMPARISONS.map((comp) => (
          <article
            key={comp.slug}
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
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                  letterSpacing: '0.05em',
                }}
              >
                Head-to-Head Showdown
              </div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>
                <Link
                  href={`/compare/${comp.slug}/`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  {comp.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: 'var(--space-4)' }}>
                {comp.overview}
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Verified: {comp.lastVerifiedDate}
              </div>
              <Link
                href={`/compare/${comp.slug}/`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                Read Full Comparison Matrix →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
