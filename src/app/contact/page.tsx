import { constructMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = constructMetadata({
  title: 'Contact & Feedback | AI Tools & Productivity Guide',
  description: 'Submit an AI tool for verification, report outdated free-tier information, or share feedback on our academic project.',
  canonicalPath: '/contact/',
});

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact/' },
        ]}
      />

      <article className="prose-container">
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>
            Contact & Editorial Feedback
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We welcome updates from students, educators, and software builders. Help us keep free-tier quotas and tool listings accurate.
          </p>
        </header>

        <div className="glass-card" style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
            How to Submit Feedback or Corrections
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
            As a non-commercial educational project, we rely on community vigilance to flag unexpected paywall changes or rate-limit modifications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '2px' }}>
                Report an Outdated Free Tier:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                If an indexed tool has reduced its free quota, instituted a credit card requirement, or shifted behind a paywall, please include the tool name and official URL.
              </p>
            </div>

            <div>
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '2px' }}>
                Suggest a Genuinely Free AI Tool:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Recommend tools that provide immediate academic, research, coding, or productivity utility for college students with a functional zero-cost tier.
              </p>
            </div>

            <div>
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '2px' }}>
                Academic Coursework Inquiries:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                This platform is developed as part of continuous assessment for course code <strong>CSET489: Search Engine Optimization</strong>.
              </p>
            </div>
          </div>
        </div>

        <section style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-2)' }}>Academic Project Maintainers</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            Undergraduate Project Team, School of Computer Science &amp; Engineering.<br />
            Published openly on GitHub and deployed on Vercel Edge.
          </p>
        </section>
      </article>
    </div>
  );
}
