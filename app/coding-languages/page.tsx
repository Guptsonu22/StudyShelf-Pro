'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Code, FileCode, Terminal, Database, Globe, Server, Shield, Smartphone, Hash, BarChart, CupSodaIcon as Cup, DiamondIcon, Eye, Download } from 'lucide-react'

const topics = [
  { name: 'JavaScript', route: 'javascript', icon: FileCode, color: 'from-yellow-400 to-yellow-600', tag: 'Frontend' },
  { name: 'Python', route: 'python', icon: Code, color: 'from-blue-400 to-blue-600', tag: 'Backend' },
  { name: 'Java', route: 'java', icon: Cup, color: 'from-red-400 to-red-600', tag: 'Backend' },
  { name: 'C++', route: 'cpp', icon: Terminal, color: 'from-purple-400 to-purple-600', tag: 'Systems' },
  { name: 'Ruby', route: 'ruby', icon: DiamondIcon, color: 'from-red-400 to-pink-600', tag: 'Full-stack' },
  { name: 'Go', route: 'go', icon: Server, color: 'from-cyan-400 to-cyan-600', tag: 'Backend' },
  { name: 'Rust', route: 'rust', icon: Shield, color: 'from-orange-400 to-orange-600', tag: 'Systems' },
  { name: 'Swift', route: 'swift', icon: Smartphone, color: 'from-orange-400 to-red-600', tag: 'Mobile' },
  { name: 'TypeScript', route: 'typescript', icon: FileCode, color: 'from-blue-400 to-blue-600', tag: 'Frontend' },
  { name: 'SQL', route: 'sql', icon: Database, color: 'from-green-400 to-green-600', tag: 'Database' },
  { name: 'PHP', route: 'php', icon: Globe, color: 'from-indigo-400 to-indigo-600', tag: 'Backend' },
  { name: 'C#', route: 'csharp', icon: Hash, color: 'from-purple-400 to-purple-600', tag: 'Backend' },
  { name: 'Kotlin', route: 'kotlin', icon: Smartphone, color: 'from-orange-400 to-purple-600', tag: 'Mobile' },
  { name: 'Scala', route: 'scala', icon: Code, color: 'from-red-400 to-red-600', tag: 'Big Data' },
  { name: 'R', route: 'r', icon: BarChart, color: 'from-blue-400 to-blue-600', tag: 'Data Science' },
]

export default function CodingLanguages() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Coding Languages and Technologies</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Explore various programming languages and enhance your coding skills.</p>
      
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search languages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {filteredTopics.map((topic, index) => (
          <motion.div
            key={topic.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full`}>
              <CardHeader className={`bg-gradient-to-r ${topic.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <topic.icon className="h-8 w-8" />
                  <Badge variant="secondary" className="bg-white text-gray-800">
                    {topic.tag}
                  </Badge>
                </div>
                <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{topic.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">Dive deep into {topic.name} programming concepts, best practices, and advanced techniques.</p>
                <div className="flex justify-between items-center">
                  <Link href={`/coding-languages/${topic.route}`}>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View
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

      {filteredTopics.length === 0 && (
        <p className="text-center text-gray-600">No languages found. Try a different search term.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

