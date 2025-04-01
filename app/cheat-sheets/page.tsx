'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Download, Eye, Code, Terminal, Globe, Database, Cloud } from 'lucide-react'

const cheatSheets = [
  { name: 'Git Commands', category: 'Version Control', icon: Code, color: 'from-orange-400 to-red-600' },
  { name: 'Linux Terminal', category: 'Operating System', icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Regular Expressions', category: 'Programming', icon: FileText, color: 'from-green-400 to-green-600' },
  { name: 'SQL Queries', category: 'Database', icon: Database, color: 'from-blue-400 to-blue-600' },
  { name: 'Docker Commands', category: 'DevOps', icon: Cloud, color: 'from-cyan-400 to-cyan-600' },
  { name: 'CSS Flexbox', category: 'Web Development', icon: Globe, color: 'from-purple-400 to-purple-600' },
  { name: 'Python Basics', category: 'Programming', icon: Code, color: 'from-blue-400 to-green-600' },
  { name: 'JavaScript ES6+', category: 'Programming', icon: FileText, color: 'from-yellow-400 to-orange-600' },
  { name: 'React Hooks', category: 'Web Development', icon: Code, color: 'from-blue-400 to-cyan-600' },
  { name: 'Vim Commands', category: 'Text Editor', icon: Terminal, color: 'from-green-400 to-blue-600' },
  { name: 'Markdown Syntax', category: 'Documentation', icon: FileText, color: 'from-gray-400 to-gray-600' },
  { name: 'AWS Services', category: 'Cloud Computing', icon: Cloud, color: 'from-orange-400 to-yellow-600' },
]

export default function CheatSheets() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCheatSheets = cheatSheets.filter(sheet =>
    sheet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sheet.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Cheat Sheets</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Quick reference guides for various programming topics and technologies.</p>
      
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search cheat sheets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {filteredCheatSheets.map((sheet, index) => (
          <motion.div
            key={sheet.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full`}>
              <CardHeader className={`bg-gradient-to-r ${sheet.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <sheet.icon className="h-8 w-8" />
                  <Badge variant="secondary" className="bg-white text-gray-800">
                    {sheet.category}
                  </Badge>
                </div>
                <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{sheet.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Quick reference guide for {sheet.name}. Essential commands and syntax at your fingertips.</p>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCheatSheets.length === 0 && (
        <p className="text-center text-gray-600">No cheat sheets found. Try a different search term.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

