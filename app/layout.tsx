import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Compass: Personalized Calorie Calculator',
  description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/CalorieCompassFavicon.svg',
  },
  openGraph: {
    title: 'Calorie Compass: Personalized Calorie Calculator',
    description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
    images: [
      {
        url: '/Calorie-Calculator-Web-Preview.png',
        width: 1200,
        height: 630,
        alt: 'Calorie Compass Calorie Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Compass: Personalized Calorie Calculator',
  description: 'Discover your optimal daily calorie intake with Calorie Compass. Our precise calculator considers your age, gender, height, weight, and activity level for personalized results. Start your health journey today!',
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