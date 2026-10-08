import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMPARISONS, getComparisonBySlug } from '@/data/comparisons';
import { getToolBySlug } from '@/data/tools';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface ComparisonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};

  return constructMetadata({
    title: comp.metaTitle,
    description: comp.metaDescription,
    canonicalPath: `/compare/${comp.slug}/`,
  });
}

export default async function ComparisonDetailPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);

  if (!comp) {
    notFound();
  }

  const toolA = getToolBySlug(comp.toolASlug);
  const toolB = getToolBySlug(comp.toolBSlug);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/compare/' },
          { label: comp.title, href: `/compare/${comp.slug}/` },
        ]}
      />

      <article style={{ maxWidth: '880px' }}>
        {/* Comparison Header */}
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Last Audited: {comp.lastVerifiedDate}
          </div>
          <h1 style={{ marginBottom: 'var(--space-4)' }}>{comp.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {comp.overview}
          </p>
        </header>

        {/* Free Tier Comparison Callout */}
        <section
          className="glass-card"
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderLeft: '4px solid var(--brand-primary)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <h2 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
            Free Tier & Quota Differences
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-3)' }}>
            <div>
              <strong style={{ color: 'var(--brand-primary)' }}>Option A Free Tier: </strong>
              <span style={{ color: 'var(--text-secondary)' }}>{comp.freeTierComparison.toolAFreeDetails}</span>
            </div>
            <div>
              <strong style={{ color: 'var(--accent-info)' }}>Option B Free Tier: </strong>
              <span style={{ color: 'var(--text-secondary)' }}>{comp.freeTierComparison.toolBFreeDetails}</span>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix Table */}
        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
            Feature-by-Feature Evaluation Matrix
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-medium)', backgroundColor: 'var(--bg-surface)' }}>
                  <th style={{ padding: 'var(--space-3) var(--space-4)', width: '25%' }}>Evaluation Area</th>
                  <th style={{ padding: 'var(--space-3) var(--space-4)', width: '35%' }}>First Tool Assessment</th>
                  <th style={{ padding: 'var(--space-3) var(--space-4)', width: '40%' }}>Second Tool Assessment</th>
                </tr>
              </thead>
              <tbody>
                {comp.comparisonPoints.map((point, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)',
                    }}
                  >
                    <td style={{ padding: 'var(--space-3) var(--space-4)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {point.feature}
                    </td>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--text-secondary)' }}>
                      {point.toolAAssessment}
                    </td>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--text-secondary)' }}>
                      {point.toolBAssessment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Actionable Verdict & Recommendation */}
        <section
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-3)', color: 'var(--brand-primary)' }}>
            Editorial Recommendation: Which Should You Choose?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-6)' }}>
            {comp.finalRecommendation.summaryVerdict}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {/* Choose Tool A If */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Choose First Option If:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {comp.finalRecommendation.chooseToolAIf.map((rec, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Tool B If */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                Choose Second Option If:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {comp.finalRecommendation.chooseToolBIf.map((rec, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-info)' }}>✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dedicated Profile Links */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          {toolA && (
            <Link href={`/tools/${toolA.slug}/`} className="btn btn-secondary">
              View {toolA.name} Full Profile →
            </Link>
          )}
          {toolB && (
            <Link href={`/tools/${toolB.slug}/`} className="btn btn-secondary">
              View {toolB.name} Full Profile →
            </Link>
          )}
        </section>
      </article>
    </div>
  );
}
