import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Terms of Use | AI Tools & Productivity Guide',
  description: 'Terms of service and non-commercial educational use terms for the AI Tools & Productivity Guide platform.',
  canonicalPath: '/terms/',
});

export default function TermsPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Use', href: '/terms/' },
        ]}
      />

      <article className="prose-container">
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Effective Date: March 2026 | Non-Commercial Educational License
          </p>
        </header>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            1. Educational &amp; Informational Scope
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            All content published on this platform is provided solely for educational, research, and non-commercial discovery purposes. While we strive to maintain accurate free-tier documentation and quota audits, we make no warranties regarding uninterrupted external service availability or pricing permanence.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            2. Intellectual Property &amp; Trademarks
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            All product names, logos, and brands referenced throughout this website are the property of their respective trademark holders. Nominative fair use of brand names is strictly for identification, comparative review, and academic evaluation.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)' }}>
            3. Academic Integrity Responsibility
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Users are solely responsible for ensuring that their application of any recommended artificial intelligence software aligns with the specific academic honesty policies of their enrolled educational institutions.
          </p>
        </section>
      </article>
    </div>
  );
}
