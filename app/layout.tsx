import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { Logo } from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studyshelf - Your Educational Resource Center',
  description: 'Access comprehensive study materials, roadmaps, and resources for your educational journey.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <Logo />
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-white border-t mt-12 py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              © 2024 Studyshelf. All rights reserved.
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'