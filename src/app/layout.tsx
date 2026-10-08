import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/seo';
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content" style={{ flex: 1, paddingBottom: 'var(--space-16)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
