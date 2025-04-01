'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Code, Cpu, Brain, Cog, Database, Search, ChevronRight, Eye, Download } from 'lucide-react'

const branches = [
  { name: 'B.Tech IT', route: 'btech-it', icon: Code, color: 'from-blue-400 to-blue-600' },
  { name: 'CSE', route: 'cse', icon: Cpu, color: 'from-green-400 to-green-600' },
  { name: 'AI-ML', route: 'ai-ml', icon: Brain, color: 'from-purple-400 to-purple-600' },
  { name: 'ME (Mechanical Engineering)', route: 'me', icon: Cog, color: 'from-red-400 to-red-600' },
  { name: 'BCA', route: 'bca', icon: Database, color: 'from-yellow-400 to-yellow-600' },
  { name: 'AI-DS', route: 'ai-ds', icon: Brain, color: 'from-indigo-400 to-indigo-600' },
]

export default function CollegeNotes() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">College Notes</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Access your college notes organized by branch and semester.</p>
      
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search branches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredBranches.map((branch, index) => (
          <motion.div
            key={branch.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full`}>
              <CardHeader className={`bg-gradient-to-r ${branch.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <branch.icon className="h-8 w-8" />
                  <ChevronRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{branch.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">Explore comprehensive notes, study materials, and resources for {branch.name}.</p>
                <div className="flex justify-between items-center">
                  <Link href={`/college-notes/${branch.route}`}>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View Notes
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredBranches.length === 0 && (
        <p className="text-center text-gray-600">No branches found. Try a different search term.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

