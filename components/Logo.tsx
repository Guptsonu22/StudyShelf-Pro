import { BookOpen } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <div className="absolute inset-0 bg-white rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6 flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-blue-500" />
        </div>
      </div>
      <div className="text-2xl font-bold">
        <span className="text-blue-500">Study</span>
        <span className="text-purple-600">shelf</span>
      </div>
    </div>
  )
}

