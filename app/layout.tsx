import './globals.css'
import type { Metadata } from 'next'
import { structuredData } from './structured-data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Calorie Compass: Personalized Calorie Calculator',
  description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/Calorie-Compass-Calculator-Favicon.png',
  },
  keywords: 'calorie calculator, daily calorie intake, personalized nutrition, weight management',
  authors: [{ name: 'Calorie Compass' }],
  metadataBase: new URL('https://www.caloriecompass.xyz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Calorie Compass',
    title: 'Calorie Compass: Personalized Calorie Calculator',
    description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
    images: [
      {
        url: '/Calorie-Compass-Calculator-WebPreview.png',
        width: 1200,
        height: 630,
        alt: 'Calorie Compass Calorie Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TheCalorieComp',
    creator: '@TheCalorieComp',
    title: 'Calorie Compass: Personalized Calorie Calculator',
    description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
    images: ['/Calorie-Compass-Calculator-WebPreview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-QXCQNVV0FN`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QXCQNVV0FN');
          `}
        </Script>
      </head>
      <body className="bg-green-50 text-green-900">{children}</body>
    </html>
  )
}