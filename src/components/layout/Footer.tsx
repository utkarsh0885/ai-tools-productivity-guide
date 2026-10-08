import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-10)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                }}
              >
                AI
              </span>
              <span>ToolsGuide</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: 'var(--space-4)' }}>
              An independent, non-commercial educational directory evaluating artificial intelligence tools with transparent free-tier audits for students and researchers.
            </p>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              CSET489 SEO Mini-Project — Educational Case Study
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Top Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}/`}
                    style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/category/"
                  style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 600 }}
                >
                  View All 10 Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Decision Engines */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Decision Engines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>
                <Link href="/tools/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  All Tools Directory
                </Link>
              </li>
              <li>
                <Link href="/compare/chatgpt-vs-claude/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  ChatGPT vs Claude
                </Link>
              </li>
              <li>
                <Link href="/compare/cursor-vs-copilot/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Cursor vs GitHub Copilot
                </Link>
              </li>
              <li>
                <Link href="/compare/elicit-vs-consensus/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Elicit vs Consensus
                </Link>
              </li>
              <li>
                <Link href="/alternatives/chatgpt/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Free ChatGPT Alternatives
                </Link>
              </li>
              <li>
                <Link href="/guides/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Editorial Study Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic & Trust Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              Transparency & Ethics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>
                <Link href="/about/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Editorial Policy & Testing
                </Link>
              </li>
              <li>
                <Link href="/contact/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Submit Tool / Feedback
                </Link>
              </li>
              <li>
                <Link href="/privacy/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 AI Tools & Productivity Guide. Zero-budget academic publication.
          </div>
          <div>
            Non-commercial project built with Next.js and deployed on Vercel.
          </div>
        </div>
      </div>
    </footer>
  );
}
