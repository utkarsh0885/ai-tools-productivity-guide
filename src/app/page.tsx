import Link from 'next/link';
import { TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { COMPARISONS } from '@/data/comparisons';
import { ARTICLES } from '@/data/articles';
import ToolCard from '@/components/tools/ToolCard';

export default function HomePage() {
  const popularTools = TOOLS.slice(0, 6);
  const researchTools = TOOLS.filter((t) => t.category === 'research').slice(0, 3);

  return (
    <div>
      {/* 1. Hero Section */}
      <section
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '880px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-success)' }} />
            Zero-Budget Educational Directory • Transparent Free-Tier Audits
          </div>

          <h1
            style={{
              fontSize: '2.75rem',
              lineHeight: '1.15',
              marginBottom: 'var(--space-4)',
              letterSpacing: '-0.03em',
            }}
          >
            Find the Right AI Tool{' '}
            <span
              style={{
                background: 'var(--brand-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              for the Job
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-8)',
              maxWidth: '720px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A fast, non-commercial directory helping university students, researchers, and early-career professionals discover verified zero-cost and freemium AI tools with zero hidden paywalls.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-4)',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/tools/" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
              Explore All AI Tools →
            </Link>
            <Link href="/guides/" className="btn btn-secondary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
              Browse Student Guides
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Popular Verified AI Tools */}
      <section style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-8)',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Verified Selections
              </div>
              <h2>Popular Zero-Cost &amp; Freemium Tools</h2>
            </div>
            <Link href="/tools/" style={{ color: 'var(--brand-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
              View Complete Directory ({TOOLS.length}) →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {popularTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Browse by Functional Category */}
      <section
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-10) auto' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Structured Architecture
            </div>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Browse by Functional Discipline</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Explore 10 curated silos organized specifically for student workflows, thesis research, coding, and career preparation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}/`}
                className="glass-card"
                style={{
                  textDecoration: 'none',
                  padding: 'var(--space-5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    {cat.shortDescription}
                  </p>
                </div>
                <div style={{ marginTop: 'var(--space-3)', fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  Explore Category →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compare Head-to-Head */}
      <section style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: 'var(--space-8)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Decision Frameworks
            </div>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Head-to-Head Tool Showdowns</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Unbiased comparisons examining real differences in free quotas, output nuance, and student workflow fit.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {COMPARISONS.slice(0, 3).map((comp) => (
              <div key={comp.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-2)' }}>
                    <Link href={`/compare/${comp.slug}/`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                      {comp.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: 'var(--space-4)' }}>
                    {comp.overview}
                  </p>
                </div>
                <Link href={`/compare/${comp.slug}/`} className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }}>
                  Read Side-by-Side Matrix →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Student-Focused Guides */}
      <section
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-8)',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Editorial Publications
              </div>
              <h2>Student &amp; Academic Guides</h2>
            </div>
            <Link href="/guides/" style={{ color: 'var(--brand-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
              View All Guides →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {ARTICLES.slice(0, 3).map((art) => (
              <article key={art.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                    {art.readTime} • Updated {art.lastUpdatedDate}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-3)' }}>
                    <Link href={`/guides/${art.slug}/`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                      {art.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: 'var(--space-4)' }}>
                    {art.excerpt}
                  </p>
                </div>
                <Link href={`/guides/${art.slug}/`} className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }}>
                  Read Complete Tutorial →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Research-Focused Tools Spotlight */}
      <section style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: 'var(--space-8)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-success)', textTransform: 'uppercase', marginBottom: '4px' }}>
              Academic Integrity Spotlight
            </div>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Research Tools Grounded in Real Papers</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Avoid fake citations. These tools query peer-reviewed scientific databases or anchor strictly to your uploaded documents.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {researchTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why This Directory Is Different */}
      <section
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'var(--bg-surface-elevated)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-10) auto' }}>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Why This Directory Is Different</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Built to overcome the deceptive pricing and affiliate noise of commercial software aggregators.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            <div className="glass-card">
              <h3 style={{ fontSize: '1.15rem', color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>
                No Affiliate Bias
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                We earn zero commissions. Tools are evaluated purely on genuine student utility and free-tier value.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-success)', marginBottom: 'var(--space-2)' }}>
                Documented Free Limits
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                We document message limits, token caps, and watermark policies so you don&apos;t get trapped midway.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-info)', marginBottom: 'var(--space-2)' }}>
                Ad-Free &amp; Lightweight
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                Zero ad networks, zero popups, zero intrusive tracking scripts. Fast static edge performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Common questions about discovering and using free AI tools for coursework and research.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <details className="glass-card" style={{ padding: 'var(--space-4) var(--space-5)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Are all the tools in this directory genuinely free?
              </summary>
              <p style={{ paddingTop: 'var(--space-3)', fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                Every indexed tool has a verified functional free tier or is open-source. For freemium software, we clearly disclose the free tier limits so you know what is accessible without payment.
              </p>
            </details>

            <details className="glass-card" style={{ padding: 'var(--space-4) var(--space-5)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Do I need a credit card to use the recommended free tiers?
              </summary>
              <p style={{ paddingTop: 'var(--space-3)', fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                No. All free tier evaluations featured in our directory require only a standard email sign-up or Google account, with zero credit or debit card required.
              </p>
            </details>

            <details className="glass-card" style={{ padding: 'var(--space-4) var(--space-5)', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                How do I cite AI tools in my academic coursework?
              </summary>
              <p style={{ paddingTop: 'var(--space-3)', fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                Always adhere to your instructor&apos;s syllabus guidelines and official citation formats (APA, MLA, IEEE). We provide detailed disclosure templates in our editorial guides.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
