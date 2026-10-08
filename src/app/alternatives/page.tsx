import Link from 'next/link';
import { ALTERNATIVES } from '@/data/alternatives';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Free Alternatives to Popular AI Tools | Zero-Cost Replacements',
  description: 'Discover verified free alternatives to expensive AI software. Find zero-cost replacements for ChatGPT, Cursor, GitHub Copilot, QuillBot, and Gamma.',
  canonicalPath: '/alternatives/',
});

export default function AlternativesIndexPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Alternatives', href: '/alternatives/' },
        ]}
      />

      <div style={{ maxWidth: '800px', marginBottom: 'var(--space-8)' }}>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>
          Free Alternatives to Popular AI Software
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Avoid subscription traps and usage paywalls. We analyze legitimate zero-cost and student-friendly replacements for commercial AI software.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {ALTERNATIVES.map((alt) => (
          <article
            key={alt.slug}
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
                  color: 'var(--accent-info)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                  letterSpacing: '0.05em',
                }}
              >
                Replacement Guide
              </div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>
                <Link
                  href={`/alternatives/${alt.slug}/`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  {alt.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: 'var(--space-4)' }}>
                {alt.introText}
              </p>
            </div>

            <div>
              <Link
                href={`/alternatives/${alt.slug}/`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                View Recommended Free Alternatives →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
