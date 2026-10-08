import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Editorial Policy & Verification Standards | AI Tools Guide',
  description: 'Our testing methodology, free-tier verification process, dynamic pricing disclosures, and editorial independence guidelines.',
  canonicalPath: '/editorial-policy/',
});

export default function EditorialPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Editorial Policy', href: '/editorial-policy/' },
        ]}
      />

      <article className="prose-container">
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>
            Editorial Policy & Verification Standards
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            How we test AI software, audit free-tier limitations, maintain non-commercial independence, and disclose ongoing changes.
          </p>
        </header>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            1. Independent Curation Standards
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            All tool profiles, head-to-head comparisons, and student guides published on this platform are conceived, written, and verified independently by our editorial team. We do not accept payment, gift subscriptions, or private incentives from software vendors to influence ratings, inclusion, or positioning.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            2. Dynamic Free-Tier Disclosures
          </h2>
          <div
            className="glass-card"
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid var(--accent-warning)',
              marginBottom: 'var(--space-4)',
            }}
          >
            <strong style={{ color: 'var(--accent-warning)', display: 'block', marginBottom: '4px' }}>
              Important Reader Notice:
            </strong>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
              Generative AI cloud service providers regularly update compute allocations, free-tier tokens, message rate limits, and subscription models. While our team conducts periodic manual audits and stamps every page with a <strong>&ldquo;Last Verified Date,&rdquo;</strong> readers are strongly encouraged to verify critical pricing and limits on vendor websites prior to time-sensitive academic deadlines.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            3. Our 4-Step Verification Methodology
          </h2>
          <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', color: 'var(--text-secondary)' }}>
            <li>
              <strong>Direct Account Testing:</strong> We register a standard free account without providing a credit card to inspect onboarding paywalls firsthand.
            </li>
            <li>
              <strong>Quota & Rate-Limit Inspection:</strong> We submit real academic prompts (literature queries, essay outlines, code snippets) to document message throttles.
            </li>
            <li>
              <strong>Export & Watermark Verification:</strong> For presentation and resume tools, we confirm whether completed work can be exported to standard formats (PDF, PPTX) without mandatory payment.
            </li>
            <li>
              <strong>Citation Grounding Checks:</strong> For research tools, we verify that returned citations link directly to verifiable papers with valid DOIs on publishers such as PubMed, Crossref, or Semantic Scholar.
            </li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            4. Performance Disclaimer
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            This website does not guarantee the uptime, generation quality, factual accuracy, or data privacy practices of external third-party software. Users are solely responsible for ensuring their use of generative AI tools complies with their university or institution&apos;s academic integrity codes.
          </p>
          <div>
            Have an update or correction to submit? Please reach out via our{' '}
            <Link href="/contact/" style={{ color: 'var(--brand-primary)' }}>
              Contact Page
            </Link>.
          </div>
        </section>
      </article>
    </div>
  );
}
