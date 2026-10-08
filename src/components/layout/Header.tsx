'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 'var(--header-height)',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            fontWeight: 800,
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--brand-primary)',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 900,
            }}
          >
            AI
          </span>
          <span>
            Tools<span style={{ color: 'var(--brand-primary)' }}>Guide</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-6)',
          }}
          className="desktop-nav"
        >
          <Link
            href="/tools/"
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
          >
            All Tools
          </Link>
          <Link
            href="/category/"
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
          >
            Categories
          </Link>
          <Link
            href="/compare/"
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
          >
            Comparisons
          </Link>
          <Link
            href="/alternatives/"
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
          >
            Alternatives
          </Link>
          <Link
            href="/guides/"
            style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
          >
            Guides
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Link
            href="/tools/"
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          >
            Find Tools
          </Link>

          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface)',
            }}
            className="mobile-toggle"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            padding: 'var(--space-4) var(--space-6)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
          }}
        >
          <Link
            href="/tools/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '0.5rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Explore All Tools
          </Link>
          <Link
            href="/category/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '0.5rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Browse Categories
          </Link>
          <Link
            href="/compare/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '0.5rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Tool Comparisons
          </Link>
          <Link
            href="/alternatives/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '0.5rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Free Alternatives
          </Link>
          <Link
            href="/guides/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '0.5rem 0', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Student & Research Guides
          </Link>
          <div
            style={{
              paddingTop: 'var(--space-3)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: 'var(--space-4)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <Link href="/about/" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/editorial-policy/" onClick={() => setMobileMenuOpen(false)}>Editorial Policy</Link>
            <Link href="/contact/" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
