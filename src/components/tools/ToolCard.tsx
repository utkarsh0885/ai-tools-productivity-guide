import Link from 'next/link';
import { AITool } from '@/types';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const isFree = tool.pricingModel === 'Free';

  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        {/* Card Header: Category & Pricing Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-3)',
          }}
        >
          <Link
            href={`/category/${tool.category}/`}
            className="badge badge-category"
            style={{ textDecoration: 'none' }}
          >
            {tool.categoryName}
          </Link>
          <span className={`badge ${isFree ? 'badge-free' : 'badge-freemium'}`}>
            {tool.pricingModel}
          </span>
        </div>

        {/* Tool Name & Tagline */}
        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
          <Link
            href={`/tools/${tool.slug}/`}
            style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
          >
            {tool.name}
          </Link>
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.5',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-4)',
          }}
        >
          {tool.tagline}
        </p>

        {/* Free Tier Highlight Box */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            borderLeft: '3px solid var(--brand-primary)',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>
            Free Tier:
          </strong>
          {tool.freeTierSummary}
        </div>
      </div>

      {/* Card Footer: Platforms & View Link */}
      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-1)',
            marginBottom: 'var(--space-4)',
          }}
        >
          {tool.platforms.map((p) => (
            <span
              key={p}
              style={{
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {p}
            </span>
          ))}
        </div>

        <Link
          href={`/tools/${tool.slug}/`}
          className="btn btn-secondary"
          style={{ width: '100%', fontSize: '0.875rem', padding: '0.5rem' }}
        >
          Read Free Tier Analysis →
        </Link>
      </div>
    </article>
  );
}
