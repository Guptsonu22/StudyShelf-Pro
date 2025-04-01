'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Code, Database, Briefcase, Brain, Calculator, Globe, Server, Lock, Zap } from 'lucide-react'

const categories = [
  "All Quizzes",
  "Technical",
  "Aptitude",
  "Soft Skills",
  "Company Specific"
]

const quizzes = [
  {
    title: "Data Structures & Algorithms",
    category: "Technical",
    description: "Test your knowledge of fundamental DSA concepts",
    questions: 50,
    timeLimit: 60,
    icon: Code,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Database Management",
    category: "Technical",
    description: "Evaluate your understanding of SQL and database concepts",
    questions: 40,
    timeLimit: 45,
    icon: Database,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Quantitative Aptitude",
    category: "Aptitude",
    description: "Sharpen your mathematical and logical reasoning skills",
    questions: 30,
    timeLimit: 30,
    icon: Calculator,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Verbal Ability",
    category: "Aptitude",
    description: "Improve your language and communication skills",
    questions: 25,
    timeLimit: 25,
    icon: Globe,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Problem-Solving Skills",
    category: "Soft Skills",
    description: "Assess your ability to tackle complex problems",
    questions: 20,
    timeLimit: 40,
    icon: Brain,
    color: "from-red-400 to-red-600"
  },
  {
    title: "Interview Preparation",
    category: "Soft Skills",
    description: "Practice common interview questions and techniques",
    questions: 30,
    timeLimit: 45,
    icon: Briefcase,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Web Development",
    category: "Technical",
    description: "Test your skills in HTML, CSS, and JavaScript",
    questions: 45,
    timeLimit: 50,
    icon: Globe,
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "Operating Systems",
    category: "Technical",
    description: "Evaluate your knowledge of OS concepts",
    questions: 35,
    timeLimit: 40,
    icon: Server,
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Cybersecurity Basics",
    category: "Technical",
    description: "Test your understanding of cybersecurity principles",
    questions: 30,
    timeLimit: 35,
    icon: Lock,
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Google Placement Quiz",
    category: "Company Specific",
    description: "Practice questions tailored for Google interviews",
    questions: 40,
    timeLimit: 60,
    icon: Briefcase,
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Amazon Placement Quiz",
    category: "Company Specific",
    description: "Prepare for Amazon's unique interview process",
    questions: 45,
    timeLimit: 65,
    icon: Briefcase,
    color: "from-yellow-500 to-yellow-700"
  },
  {
    title: "Microsoft Placement Quiz",
    category: "Company Specific",
    description: "Get ready for Microsoft's technical interviews",
    questions: 35,
    timeLimit: 55,
    icon: Briefcase,
    color: "from-blue-600 to-blue-800"
  }
]

export default function QuizCenter() {
  const [selectedCategory, setSelectedCategory] = useState("All Quizzes")
  const [searchTerm, setSearchTerm] = useState('')

  const filteredQuizzes = quizzes.filter(quiz => 
    (selectedCategory === "All Quizzes" || quiz.category === selectedCategory) &&
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Quiz Center</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Practice placement-related quizzes to boost your skills and confidence
      </p>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="All Quizzes" className="mb-8">
        <TabsList className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 m-1"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredQuizzes.map((quiz, index) => (
          <motion.div
            key={quiz.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <CardHeader className={`bg-gradient-to-r ${quiz.color} p-6`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">{quiz.title}</CardTitle>
                  <quiz.icon className="h-10 w-10 text-white opacity-75" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">{quiz.category}</Badge>
                <p className="text-sm text-gray-600 mb-4">{quiz.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{quiz.questions} questions</span>
                  <span>{quiz.timeLimit} minutes</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <p className="text-center text-gray-600">No quizzes found. Try a different search term or category.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

