'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Database, BarChartIcon as ChartBar, Code, Network, Cloud, BotIcon as Robot, Cog, Globe, LineChart, Zap } from 'lucide-react'

const programs = [
  {
    name: "AI-ML",
    semesters: [
      {
        name: "Semester 1",
        subjects: [
          { name: "Introduction to AI", icon: Brain, color: "from-blue-400 to-blue-600" },
          { name: "Mathematics for ML", icon: ChartBar, color: "from-green-400 to-green-600" },
          { name: "Programming Fundamentals", icon: Code, color: "from-purple-400 to-purple-600" },
        ]
      },
      {
        name: "Semester 2",
        subjects: [
          { name: "Machine Learning Basics", icon: Cog, color: "from-yellow-400 to-yellow-600" },
          { name: "Data Structures for AI", icon: Database, color: "from-red-400 to-red-600" },
          { name: "Statistical Methods", icon: ChartBar, color: "from-indigo-400 to-indigo-600" },
        ]
      },
      {
        name: "Semester 3",
        subjects: [
          { name: "Deep Learning", icon: Brain, color: "from-pink-400 to-pink-600" },
          { name: "Natural Language Processing", icon: Globe, color: "from-teal-400 to-teal-600" },
          { name: "Computer Vision", icon: Robot, color: "from-orange-400 to-orange-600" },
        ]
      },
      {
        name: "Semester 4",
        subjects: [
          { name: "Reinforcement Learning", icon: Zap, color: "from-cyan-400 to-cyan-600" },
          { name: "AI Ethics and Governance", icon: Cog, color: "from-lime-400 to-lime-600" },
          { name: "Big Data Analytics", icon: Database, color: "from-fuchsia-400 to-fuchsia-600" },
        ]
      },
      {
        name: "Semester 5",
        subjects: [
          { name: "AI in Robotics", icon: Robot, color: "from-emerald-400 to-emerald-600" },
          { name: "Advanced ML Algorithms", icon: Brain, color: "from-rose-400 to-rose-600" },
          { name: "AI Project Management", icon: Cog, color: "from-sky-400 to-sky-600" },
        ]
      },
      {
        name: "Semester 6",
        subjects: [
          { name: "AI Research Methods", icon: BookOpen, color: "from-violet-400 to-violet-600" },
          { name: "Capstone AI Project", icon: Brain, color: "from-amber-400 to-amber-600" },
          { name: "AI in Industry Applications", icon: Cog, color: "from-blue-400 to-indigo-600" },
        ]
      },
    ]
  },
  {
    name: "AI-DS",
    semesters: [
      {
        name: "Semester 1",
        subjects: [
          { name: "Intro to Data Science", icon: Database, color: "from-blue-400 to-blue-600" },
          { name: "Programming for DS", icon: Code, color: "from-green-400 to-green-600" },
          { name: "Statistics for DS", icon: ChartBar, color: "from-purple-400 to-purple-600" },
        ]
      },
      {
        name: "Semester 2",
        subjects: [
          { name: "Data Visualization", icon: LineChart, color: "from-yellow-400 to-yellow-600" },
          { name: "Machine Learning Fundamentals", icon: Cog, color: "from-red-400 to-red-600" },
          { name: "Database Systems", icon: Database, color: "from-indigo-400 to-indigo-600" },
        ]
      },
      {
        name: "Semester 3",
        subjects: [
          { name: "Big Data Technologies", icon: Cloud, color: "from-pink-400 to-pink-600" },
          { name: "Deep Learning for DS", icon: Brain, color: "from-teal-400 to-teal-600" },
          { name: "Time Series Analysis", icon: LineChart, color: "from-orange-400 to-orange-600" },
        ]
      },
      {
        name: "Semester 4",
        subjects: [
          { name: "Natural Language Processing", icon: Globe, color: "from-cyan-400 to-cyan-600" },
          { name: "Computer Vision in DS", icon: Robot, color: "from-lime-400 to-lime-600" },
          { name: "Data Mining Techniques", icon: Database, color: "from-fuchsia-400 to-fuchsia-600" },
        ]
      },
      {
        name: "Semester 5",
        subjects: [
          { name: "AI for Business Analytics", icon: ChartBar, color: "from-emerald-400 to-emerald-600" },
          { name: "Cloud Computing for DS", icon: Cloud, color: "from-rose-400 to-rose-600" },
          { name: "Data Science Ethics", icon: Cog, color: "from-sky-400 to-sky-600" },
        ]
      },
      {
        name: "Semester 6",
        subjects: [
          { name: "Advanced Analytics", icon: Brain, color: "from-violet-400 to-violet-600" },
          { name: "DS Capstone Project", icon: Database, color: "from-amber-400 to-amber-600" },
          { name: "Data Science in Production", icon: Cog, color: "from-blue-400 to-indigo-600" },
        ]
      },
    ]
  }
]

export default function AIMLDSNotes() {
  return (
    <div className="container mx-auto p-4">
      {programs.map((program) => (
        <div key={program.name} className="mb-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">{program.name} Notes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {program.semesters.map((semester, index) => (
              <motion.div
                key={semester.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className={`bg-gradient-to-br from-${program.name === 'AI-ML' ? 'purple' : 'blue'}-500 to-${program.name === 'AI-ML' ? 'indigo' : 'cyan'}-600 text-white p-4`}>
                    <CardTitle className="text-xl font-bold">{semester.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {semester.subjects.map((subject) => (
                        <li key={subject.name} className="flex items-center space-x-2">
                          <div className={`p-2 rounded-full bg-gradient-to-br ${subject.color}`}>
                            <subject.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Notes
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center">
        <Link href="/college-notes">
          <Button variant="outline">Back to College Notes</Button>
        </Link>
      </div>
    </div>
  )
}

