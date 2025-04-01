'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BotIcon as Robot, Search, Briefcase, Code, Database, ChevronRight, Pen, TrendingUp, DollarSign } from 'lucide-react'

const interviewTypes = [
  { name: 'Software Engineering', icon: Code, color: 'from-blue-400 to-blue-600' },
  { name: 'Data Science', icon: Database, color: 'from-green-400 to-green-600' },
  { name: 'Product Management', icon: Briefcase, color: 'from-purple-400 to-purple-600' },
  { name: 'UX Design', icon: Pen, color: 'from-pink-400 to-pink-600' },
  { name: 'Marketing', icon: TrendingUp, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Sales', icon: DollarSign, color: 'from-indigo-400 to-indigo-600' },
]

export default function MockInterviewAI() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredInterviewTypes = interviewTypes.filter(type =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Mock Interview AI</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Practice interviews with AI-powered mock sessions to boost your confidence.</p>
      
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search interview types..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredInterviewTypes.map((type, index) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full`}>
              <CardHeader className={`bg-gradient-to-r ${type.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <type.icon className="h-8 w-8" />
                  <Badge variant="secondary" className="bg-white text-gray-800">
                    AI-Powered
                  </Badge>
                </div>
                <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{type.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">Practice {type.name} interviews with our AI-powered mock interview system.</p>
                <Button className="w-full group-hover:bg-gray-100 transition-colors duration-300">
                  Start Mock Interview
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredInterviewTypes.length === 0 && (
        <p className="text-center text-gray-600">No interview types found. Try a different search term.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

