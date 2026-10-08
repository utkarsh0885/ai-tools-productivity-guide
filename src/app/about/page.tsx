import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'About Our Educational Project | AI Tools & Productivity Guide',
  description: 'Learn about the mission, methodology, and non-commercial educational framework behind the AI Tools & Productivity Guide project.',
  canonicalPath: '/about/',
});

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about/' },
        ]}
      />

      <article className="prose-container">
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>
            About the Project
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            An independent, non-commercial educational directory evaluating artificial intelligence software with transparent free-tier audits.
          </p>
        </header>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            Our Mission & Purpose
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            The rapid proliferation of artificial intelligence software has created widespread information asymmetry. Search engine results are flooded with commercial affiliate aggregators that indiscriminately label aggressive freemiums as &ldquo;100% Free,&rdquo; leaving students and researchers stranded behind unexpected paywalls during critical assignment deadlines.
          </p>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            <strong>AI Tools &amp; Productivity Guide</strong> was built as an academic case study for the <em>CSET489 Search Engine Optimization</em> curriculum to demonstrate that high-utility, transparent, and search-optimized publishing can outperform commercial affiliate spam without spending a single rupee.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            Core Principles
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-primary)', marginBottom: '4px' }}>
                1. Zero Commercial Affiliation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                We do not accept sponsored placements, paid listing bumps, or affiliate referral bounties. Every tool recommendation is based strictly on evaluated utility and genuine free-tier accessibility.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-success)', marginBottom: '4px' }}>
                2. Transparent Free-Tier Audits
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Instead of vague marketing slogans, we document exact daily quotas, message limits, and export restrictions so users know precisely what is free before investing hours into onboarding.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-info)', marginBottom: '4px' }}>
                3. Academic Integrity &amp; Source Grounding
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                We explicitly distinguish between general-purpose conversational LLMs (which may hallucinate citations) and specialized academic search engines grounded in peer-reviewed scientific literature.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            Technology &amp; Academic Scope
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            This platform is deployed via modern static edge architecture utilizing Next.js App Router, TypeScript, and the Vercel Edge Network. It enforces zero third-party tracking scripts, zero display advertisements, and complete schema structured data compliance.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Link href="/editorial-policy/" className="btn btn-secondary">
              Read Our Editorial Policy →
            </Link>
            <Link href="/contact/" className="btn btn-secondary">
              Contact / Feedback →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
