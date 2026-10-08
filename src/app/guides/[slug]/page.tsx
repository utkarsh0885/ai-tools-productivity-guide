import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES, getArticleBySlug } from '@/data/articles';
import { getToolBySlug } from '@/data/tools';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return constructMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    canonicalPath: `/guides/${article.slug}/`,
    ogType: 'article',
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = generateArticleSchema(article);
  const faqSchema = article.faqItems.length > 0 ? generateFAQSchema(article.faqItems) : null;

  const recommendedTools = article.recommendedToolSlugs
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides/' },
          { label: article.title, href: `/guides/${article.slug}/` },
        ]}
      />

      <article style={{ maxWidth: '840px', margin: '0 auto' }}>
        {/* Article Header */}
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-3)',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>{article.readTime}</span>
            <span>•</span>
            <span>By {article.authorName}</span>
            <span>•</span>
            <span>Updated: {article.lastUpdatedDate}</span>
          </div>

          <h1 style={{ marginBottom: 'var(--space-4)', lineHeight: '1.25' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {article.excerpt}
          </p>
        </header>

        {/* Quick Answer / Featured Snippet Target Box */}
        <div
          className="glass-card"
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderLeft: '4px solid var(--accent-success)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-success)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--space-2)',
            }}
          >
            Quick Answer / Key Takeaway
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
            {article.quickAnswer}
          </p>
        </div>

        {/* Table of Contents */}
        <nav
          aria-label="Table of Contents"
          className="glass-card"
          style={{
            marginBottom: 'var(--space-10)',
            padding: 'var(--space-5)',
          }}
        >
          <h2 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
            Contents in This Guide
          </h2>
          <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {article.tableOfContents.map((item) => (
              <li key={item.id} style={{ fontSize: '0.9rem' }}>
                <a href={`#${item.id}`} style={{ color: 'var(--text-secondary)' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Article Body Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
          {article.contentSections.map((section) => (
            <section key={section.id} id={section.id} style={{ scrollMarginTop: 'var(--header-height)' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                {section.heading}
              </h2>
              <div
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'pre-line',
                }}
              >
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Recommended AI Tools Box */}
        {recommendedTools.length > 0 && (
          <section
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-12)',
            }}
          >
            <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Recommended Verified Tools Mentioned
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              {recommendedTools.map((tool) => (
                <div
                  key={tool!.slug}
                  style={{
                    backgroundColor: 'var(--bg-surface-elevated)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <Link
                      href={`/tools/${tool!.slug}/`}
                      style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {tool!.name}
                    </Link>
                    <span className="badge badge-free" style={{ fontSize: '0.65rem' }}>
                      {tool!.pricingModel}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                    {tool!.tagline}
                  </p>
                  <Link
                    href={`/tools/${tool!.slug}/`}
                    style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600 }}
                  >
                    View Free Tier Limits →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions (FAQ) Section */}
        {article.faqItems.length > 0 && (
          <section id="faq-section" style={{ marginBottom: 'var(--space-12)', scrollMarginTop: 'var(--header-height)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
              Frequently Asked Questions (FAQ)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {article.faqItems.map((faq, idx) => (
                <details
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: 'var(--space-4) var(--space-5)',
                    cursor: 'pointer',
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  >
                    {faq.question}
                  </summary>
                  <div
                    style={{
                      paddingTop: 'var(--space-3)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Editorial Transparency Footer */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          <div>
            <strong>Editorial Independence Notice:</strong> This article was compiled for educational purposes under the CSET489 SEO project. We receive no affiliate compensation or sponsorships from any software vendor mentioned.
          </div>
          <div>
            Learn more about our verification process in our{' '}
            <Link href="/editorial-policy/" style={{ color: 'var(--brand-primary)' }}>
              Editorial Policy
            </Link>.
          </div>
        </section>
      </article>
    </div>
  );
}
