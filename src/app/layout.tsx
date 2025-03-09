import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bhoonidhiorganics.com'),
  title: {
    default: 'Bhoonidhi Organics - Premium A2 Cowdung Vermicompost',
    template: '%s | Bhoonidhi Organics'
  },
  description: 'Premium quality vermicompost made from pure Indian A2 cowdung. Natural, organic, and highly effective for all your agricultural needs.',
  keywords: 'vermicompost, cowdung compost, organic farming, natural fertilizer, Indian cowdung, sustainable agriculture',
  authors: [{ name: 'Bhoonidhi Organics' }],
  creator: 'Bhoonidhi Organics',
  publisher: 'Bhoonidhi Organics',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bhoonidhi Organics',
    title: 'Bhoonidhi Organics - Premium A2 Cowdung Vermicompost',
    description: 'Premium quality vermicompost made from pure Indian A2 cowdung. Natural, organic, and highly effective for all your agricultural needs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhoonidhi Organics - Premium A2 Cowdung Vermicompost',
    description: 'Premium quality vermicompost made from pure Indian A2 cowdung. Natural, organic, and highly effective for all your agricultural needs.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'verification_token', // Add your Google Search Console verification token
  },
  alternates: {
    canonical: 'https://bhoonidhiorganics.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
