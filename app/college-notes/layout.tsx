import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BookOpen } from 'lucide-react'

export default function CollegeNotesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/college-notes" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">College Notes</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 EduHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

