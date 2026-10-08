import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Privacy Policy | AI Tools & Productivity Guide',
  description: 'Our privacy practices: no tracking cookies, no personal data selling, and minimal anonymous web analytics.',
  canonicalPath: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy/' },
        ]}
      />

      <article className="prose-container">
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Effective Date: March 2026 | Academic Educational Project
          </p>
        </header>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            1. No Personal Data Collection
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            AI Tools &amp; Productivity Guide does not require account creation, password registration, or personal profile storage. We do not sell, license, or monetize any visitor data.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            2. External Links &amp; Third-Party Services
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Our directory contains direct links to external artificial intelligence services (such as Google NotebookLM, Anthropic Claude, OpenAI, and Cursor). When you navigate to an external platform, their independent privacy policies and data collection terms apply. We advise reviewing their policies regarding data retention and model training.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            3. Web Analytics &amp; Search Console
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            To fulfill the academic performance tracking requirements of course CSET489, we utilize privacy-conscious web analytics (such as Google Analytics 4) to track aggregated metrics (e.g., page views, popular search terms, country distribution) without storing Personally Identifiable Information (PII).
          </p>
        </section>
      </article>
    </div>
  );
}
