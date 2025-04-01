'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Database, Cpu, Network, Lock, Globe, FileText, BarChart, Cog, Smartphone } from 'lucide-react'

const semesters = [
  {
    name: "Semester 1",
    subjects: [
      { name: "Introduction to Programming", icon: Code, color: "from-blue-400 to-blue-600" },
      { name: "Digital Logic", icon: Cpu, color: "from-green-400 to-green-600" },
      { name: "Mathematics for CS", icon: BarChart, color: "from-purple-400 to-purple-600" },
    ]
  },
  {
    name: "Semester 2",
    subjects: [
      { name: "Data Structures", icon: Database, color: "from-yellow-400 to-yellow-600" },
      { name: "Computer Organization", icon: Cpu, color: "from-red-400 to-red-600" },
      { name: "Discrete Mathematics", icon: BarChart, color: "from-indigo-400 to-indigo-600" },
    ]
  },
  {
    name: "Semester 3",
    subjects: [
      { name: "Algorithms", icon: Code, color: "from-pink-400 to-pink-600" },
      { name: "Operating Systems", icon: Cog, color: "from-teal-400 to-teal-600" },
      { name: "Database Systems", icon: Database, color: "from-orange-400 to-orange-600" },
    ]
  },
  {
    name: "Semester 4",
    subjects: [
      { name: "Computer Networks", icon: Network, color: "from-cyan-400 to-cyan-600" },
      { name: "Software Engineering", icon: Cog, color: "from-lime-400 to-lime-600" },
      { name: "Web Development", icon: Globe, color: "from-fuchsia-400 to-fuchsia-600" },
    ]
  },
  {
    name: "Semester 5",
    subjects: [
      { name: "Artificial Intelligence", icon: Cpu, color: "from-emerald-400 to-emerald-600" },
      { name: "Cybersecurity", icon: Lock, color: "from-rose-400 to-rose-600" },
      { name: "Cloud Computing", icon: Globe, color: "from-sky-400 to-sky-600" },
    ]
  },
  {
    name: "Semester 6",
    subjects: [
      { name: "Machine Learning", icon: Cpu, color: "from-violet-400 to-violet-600" },
      { name: "Distributed Systems", icon: Network, color: "from-amber-400 to-amber-600" },
      { name: "Mobile App Development", icon: Smartphone, color: "from-blue-400 to-indigo-600" },
    ]
  },
  {
    name: "Semester 7",
    subjects: [
      { name: "Big Data Analytics", icon: Database, color: "from-green-400 to-teal-600" },
      { name: "Internet of Things", icon: Cpu, color: "from-red-400 to-pink-600" },
      { name: "Natural Language Processing", icon: FileText, color: "from-purple-400 to-indigo-600" },
    ]
  },
  {
    name: "Semester 8",
    subjects: [
      { name: "Blockchain Technology", icon: Lock, color: "from-yellow-400 to-orange-600" },
      { name: "Computer Vision", icon: Cpu, color: "from-blue-400 to-cyan-600" },
      { name: "Quantum Computing", icon: Cpu, color: "from-indigo-400 to-purple-600" },
    ]
  },
]

export default function CSENotes() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">CSE Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {semesters.map((semester, index) => (
          <motion.div
            key={semester.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4">
                <CardTitle className="text-xl font-bold">{semester.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {semester.subjects.map((subject, subIndex) => (
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
      <div className="text-center">
        <Link href="/college-notes">
          <Button variant="outline">Back to College Notes</Button>
        </Link>
      </div>
    </div>
  )
}

