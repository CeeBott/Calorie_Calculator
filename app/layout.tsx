import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Calculator',
  description: 'Calculate your daily calorie needs with our easy-to-use tool.',
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