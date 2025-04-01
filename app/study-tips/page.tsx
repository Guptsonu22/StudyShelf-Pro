'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Book, Clock, Brain, Coffee, Focus, Users, Calendar, Lightbulb, Zap } from 'lucide-react'

const categories = [
  "All Tips",
  "Time Management",
  "Concentration",
  "Memorization",
  "Motivation",
  "Group Study",
  "Exam Preparation"
]

const studyTips = [
  {
    problem: "Procrastination",
    category: "Time Management",
    tips: [
      "Break tasks into smaller, manageable chunks",
      "Use the Pomodoro Technique (25 minutes of focused work, 5-minute break)",
      "Set specific goals for each study session",
      "Create a reward system for completing tasks"
    ],
    icon: Clock,
    color: "from-blue-400 to-blue-600"
  },
  {
    problem: "Lack of Focus",
    category: "Concentration",
    tips: [
      "Find a quiet, distraction-free study space",
      "Use noise-cancelling headphones or white noise",
      "Practice mindfulness or meditation before studying",
      "Take regular breaks to maintain concentration"
    ],
    icon: Focus,
    color: "from-green-400 to-green-600"
  },
  {
    problem: "Difficulty Remembering Information",
    category: "Memorization",
    tips: [
      "Use active recall techniques (flashcards, practice tests)",
      "Implement spaced repetition for review",
      "Create mind maps or diagrams to visualize concepts",
      "Teach the material to someone else"
    ],
    icon: Brain,
    color: "from-purple-400 to-purple-600"
  },
  {
    problem: "Lack of Motivation",
    category: "Motivation",
    tips: [
      "Set clear, achievable goals",
      "Visualize your success and the benefits of learning",
      "Find a study buddy or accountability partner",
      "Celebrate small victories and progress"
    ],
    icon: Zap,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    problem: "Ineffective Group Study",
    category: "Group Study",
    tips: [
      "Assign roles and responsibilities to each group member",
      "Use collaborative tools like shared documents and mind maps",
      "Practice explaining concepts to each other",
      "Set clear objectives for each group study session"
    ],
    icon: Users,
    color: "from-pink-400 to-pink-600"
  },
  {
    problem: "Exam Anxiety",
    category: "Exam Preparation",
    tips: [
      "Start preparing well in advance",
      "Practice with past papers and sample questions",
      "Learn and practice relaxation techniques",
      "Maintain a healthy lifestyle (sleep, diet, exercise)"
    ],
    icon: Book,
    color: "from-teal-400 to-teal-600"
  },
  {
    problem: "Information Overload",
    category: "Concentration",
    tips: [
      "Prioritize key information and concepts",
      "Use summarization techniques",
      "Take effective notes (Cornell method, mind mapping)",
      "Review and consolidate information regularly"
    ],
    icon: Lightbulb,
    color: "from-orange-400 to-orange-600"
  },
  {
    problem: "Poor Time Management",
    category: "Time Management",
    tips: [
      "Create a detailed study schedule",
      "Use time-blocking techniques",
      "Identify and eliminate time-wasters",
      "Learn to say no to non-essential activities"
    ],
    icon: Calendar,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    problem: "Lack of Sleep",
    category: "Motivation",
    tips: [
      "Establish a consistent sleep schedule",
      "Create a relaxing bedtime routine",
      "Avoid screens before bedtime",
      "Limit caffeine intake, especially in the evening"
    ],
    icon: Coffee,
    color: "from-red-400 to-red-600"
  }
]

export default function StudyTips() {
  const [selectedCategory, setSelectedCategory] = useState("All Tips")
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTips = studyTips.filter(tip => 
    (selectedCategory === "All Tips" || tip.category === selectedCategory) &&
    tip.problem.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Study Tips</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Discover effective solutions to common study problems and boost your learning
      </p>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search study tips..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="All Tips" className="mb-8">
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
        {filteredTips.map((tip, index) => (
          <motion.div
            key={tip.problem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <CardHeader className={`bg-gradient-to-r ${tip.color} p-6`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">{tip.problem}</CardTitle>
                  <tip.icon className="h-10 w-10 text-white opacity-75" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">{tip.category}</Badge>
                <ul className="list-disc list-inside space-y-2">
                  {tip.tips.map((tipItem, i) => (
                    <li key={i} className="text-sm text-gray-600">{tipItem}</li>
                  ))}
                </ul>
                <Button className="mt-4 w-full" variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Apply This Tip
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <p className="text-center text-gray-600">No study tips found. Try a different search term or category.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

