import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CodingLanguagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/coding-languages">
          <Button variant="outline">Back to Languages</Button>
        </Link>
      </nav>
      {children}
    </div>
  )
}

