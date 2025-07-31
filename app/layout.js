import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Scriza Private Limited - Innovative Software Solutions',
  description: 'We provide cutting-edge software development services to help businesses stay ahead in today\'s fast-paced digital world. Expert software development, mobile applications, and custom solutions.',
  keywords: 'software development, mobile app development, custom software, fintech development, travel software, school management, hotel management, API integration',
  author: 'Scriza Private Limited',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Scriza Private Limited - Innovative Software Solutions',
    description: 'We provide cutting-edge software development services to help businesses stay ahead in today\'s fast-paced digital world.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}