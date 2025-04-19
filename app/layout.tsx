import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bmcelectrical.com'),
  title: {
    default: 'BMC Electrical - Professional Electrical Services',
    template: '%s | BMC Electrical'
  },
  description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
  keywords: [
    'electrical services',
    'electrician',
    'residential electrical',
    'commercial electrical',
    'industrial electrical',
    'emergency electrician'
  ],
  authors: [{ name: 'BMC Electrical' }],
  creator: 'BMC Electrical',
  publisher: 'BMC Electrical',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0A1F44' }
    ]
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0A1F44',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bmcelectrical.com',
    siteName: 'BMC Electrical',
    title: 'BMC Electrical - Professional Electrical Services',
    description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Champions - Connect Musicians with Investors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMC Electrical - Professional Electrical Services',
    description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
    images: ['/og-image.jpg'],
    creator: '@bmcelectrical',
  },
  alternates: {
    canonical: 'https://bmcelectrical.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Champions",
              "url": "https://champions.com",
              "logo": "https://champions.com/icon.svg",
              "description": "A marketplace connecting talented musicians with potential investors. Invest in the future of music.",
              "sameAs": [
                "https://twitter.com/champions",
                "https://linkedin.com/company/champions",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}