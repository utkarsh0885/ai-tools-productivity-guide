import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TOOLS, getToolBySlug } from '@/data/tools';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { generateSoftwareApplicationSchema } from '@/lib/schema';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return constructMetadata({
    title: `${tool.name} Review & Free Tier Guide: What is Genuinely Free?`,
    description: `${tool.name} analysis: ${tool.shortDescription} Transparent free tier breakdown, limits, key pros & cons, and verified alternatives.`,
    canonicalPath: `/tools/${tool.slug}/`,
  });
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const softwareSchema = generateSoftwareApplicationSchema(tool);

  // Pull related tools based on relatedToolSlugs
  const relatedTools = (tool.relatedToolSlugs || [])
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools/' },
          { label: tool.categoryName, href: `/category/${tool.category}/` },
          { label: tool.name, href: `/tools/${tool.slug}/` },
        ]}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-8)' }}>
        {/* Main Content Area */}
        <div style={{ maxWidth: '860px' }}>
          {/* Hero Header */}
          <header style={{ marginBottom: 'var(--space-8)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-3)',
                flexWrap: 'wrap',
              }}
            >
              <Link href={`/category/${tool.category}/`} className="badge badge-category">
                {tool.categoryName}
              </Link>
              <span className={`badge ${tool.pricingModel === 'Free' ? 'badge-free' : 'badge-freemium'}`}>
                {tool.pricingModel}
              </span>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                }}
              >
                Audited: {tool.lastVerifiedDate}
              </span>
            </div>

            <h1 style={{ marginBottom: 'var(--space-3)' }}>{tool.name}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
              {tool.tagline}
            </p>
          </header>

          {/* Transparent Free Tier Audit Box */}
          <section
            className="glass-card"
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid var(--brand-primary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            <h2 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
              Transparent Free Tier & Quota Audit
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-3)' }}>
              {tool.freeTierSummary}
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <em>Note: Cloud tool providers periodically adjust rate limits and daily quotas. We strongly advise confirming exact thresholds on the official vendor site prior to critical project deadlines.</em>
            </div>
          </section>

          {/* What It Does (Overview) */}
          <section style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
              What is {tool.name}?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
              {tool.detailedDescription}
            </p>
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-4)',
              }}
            >
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '4px' }}>
                Ideal Student & Academic Persona:
              </strong>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>{tool.bestFor}</p>
            </div>
          </section>

          {/* Key Capabilities */}
          <section style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
              Key Features & Capabilities
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {tool.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Pros and Cons Matrix */}
          <section style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
              Strengths & Realistic Limitations
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {/* Pros */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-5)',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-success)', marginBottom: 'var(--space-3)' }}>
                  Pros (Advantages)
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {tool.pros.map((pro, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-success)' }}>+</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-5)',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-warning)', marginBottom: 'var(--space-3)' }}>
                  Cons (Limitations)
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {tool.cons.map((con, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-warning)' }}>-</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Official Website & External Verification */}
          <section
            className="glass-card"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-10)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Visit Official Platform</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Opens external domain directly ({tool.officialUrl})
              </p>
            </div>
            <a
              href={tool.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-primary"
            >
              Visit {tool.name} Official Website ↗
            </a>
          </section>

          {/* Related Tools Cross-Links */}
          {relatedTools.length > 0 && (
            <section style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-4)' }}>
                Related Tools in {tool.categoryName}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 'var(--space-4)',
                }}
              >
                {relatedTools.map((relTool) => (
                  <Link
                    key={relTool!.slug}
                    href={`/tools/${relTool!.slug}/`}
                    className="glass-card"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {relTool!.name}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {relTool!.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
