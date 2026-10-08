import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    item: item.href,
  }));

  const breadcrumbJsonLd = generateBreadcrumbSchema(schemaItems);

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-6)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'var(--space-2)',
          listStyle: 'none',
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {index > 0 && <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>/</span>}
              {isLast ? (
                <span
                  aria-current="page"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
