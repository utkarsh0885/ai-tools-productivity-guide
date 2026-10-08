import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALTERNATIVES, getAlternativeBySlug } from '@/data/alternatives';
import { getToolBySlug } from '@/data/tools';
import { constructMetadata } from '@/lib/seo';
import ToolCard from '@/components/tools/ToolCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface AlternativePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALTERNATIVES.map((alt) => ({
    slug: alt.slug,
  }));
}

export async function generateMetadata({ params }: AlternativePageProps) {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);
  if (!alt) return {};

  return constructMetadata({
    title: alt.metaTitle,
    description: alt.metaDescription,
    canonicalPath: `/alternatives/${alt.slug}/`,
  });
}

export default async function AlternativeDetailPage({ params }: AlternativePageProps) {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);

  if (!alt) {
    notFound();
  }

  const alternativeTools = alt.alternativeToolSlugs
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Alternatives', href: '/alternatives/' },
          { label: alt.title, href: `/alternatives/${alt.slug}/` },
        ]}
      />

      <article style={{ maxWidth: '880px' }}>
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Verified Alternatives: {alt.lastVerifiedDate}
          </div>
          <h1 style={{ marginBottom: 'var(--space-4)' }}>{alt.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {alt.introText}
          </p>
        </header>

        {/* Why Look for Alternatives Callout */}
        <section
          className="glass-card"
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderLeft: '4px solid var(--accent-info)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
            Common Reasons Students & Developers Seek Alternatives
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {alt.whyLookForAlternatives.map((reason, i) => (
              <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--accent-info)' }}>•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Free Replacements Grid */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontSize: '1.45rem', marginBottom: 'var(--space-6)' }}>
            Verified Zero-Cost & Freemium Replacements
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {alternativeTools.map((tool) => (
              <ToolCard key={tool!.slug} tool={tool!} />
            ))}
          </div>
        </section>

        {/* Cross-Link Footer */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <Link href="/tools/" className="btn btn-secondary">
            Browse All AI Tools in Directory →
          </Link>
          <Link href="/guides/" className="btn btn-secondary">
            Read Student Productivity Guides →
          </Link>
        </section>
      </article>
    </div>
  );
}
