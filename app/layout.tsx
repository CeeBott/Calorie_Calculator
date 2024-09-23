import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Calculator',
  description: 'Calculate your daily calorie needs with our easy-to-use tool.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/CalorieCompassFavicon.svg',
  },
  openGraph: {
    title: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs with our easy-to-use tool.',
    images: [
      {
        url: '/Calorie-Calculator-Web-Preview.png',
        width: 1200,
        height: 630,
        alt: 'Calorie Compass Calorie Calculator Web Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs with our easy-to-use tool.',
    images: ['/Calorie-Calculator-Web-Preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900">{children}</body>
    </html>
  )
}