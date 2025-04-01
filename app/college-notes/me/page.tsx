'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Cog, Ruler, Thermometer, Wrench, Zap, Truck, Cpu, BarChart, Compass, Hammer, Droplet, Wind, Activity, GitBranch, Hexagon } from 'lucide-react'

const semesters = [
  {
    name: "Semester 1",
    subjects: [
      { name: "Engineering Mathematics I", icon: BarChart, color: "from-blue-400 to-blue-600" },
      { name: "Engineering Physics", icon: Zap, color: "from-green-400 to-green-600" },
      { name: "Engineering Graphics", icon: Ruler, color: "from-purple-400 to-purple-600" },
    ]
  },
  {
    name: "Semester 2",
    subjects: [
      { name: "Engineering Mathematics II", icon: Compass, color: "from-yellow-400 to-yellow-600" },
      { name: "Engineering Chemistry", icon: Hexagon, color: "from-red-400 to-red-600" },
      { name: "Basic Electrical Engineering", icon: Zap, color: "from-indigo-400 to-indigo-600" },
    ]
  },
  {
    name: "Semester 3",
    subjects: [
      { name: "Thermodynamics", icon: Thermometer, color: "from-pink-400 to-pink-600" },
      { name: "Strength of Materials", icon: Hammer, color: "from-teal-400 to-teal-600" },
      { name: "Manufacturing Processes", icon: Cog, color: "from-orange-400 to-orange-600" },
    ]
  },
  {
    name: "Semester 4",
    subjects: [
      { name: "Fluid Mechanics", icon: Droplet, color: "from-cyan-400 to-cyan-600" },
      { name: "Kinematics of Machinery", icon: GitBranch, color: "from-lime-400 to-lime-600" },
      { name: "Machine Design", icon: Wrench, color: "from-fuchsia-400 to-fuchsia-600" },
    ]
  },
  {
    name: "Semester 5",
    subjects: [
      { name: "Heat Transfer", icon: Thermometer, color: "from-emerald-400 to-emerald-600" },
      { name: "Dynamics of Machinery", icon: Cog, color: "from-rose-400 to-rose-600" },
      { name: "Mechatronics", icon: Cpu, color: "from-sky-400 to-sky-600" },
    ]
  },
  {
    name: "Semester 6",
    subjects: [
      { name: "Control Systems", icon: Activity, color: "from-violet-400 to-violet-600" },
      { name: "Automobile Engineering", icon: Truck, color: "from-amber-400 to-amber-600" },
      { name: "Renewable Energy Systems", icon: Wind, color: "from-blue-400 to-indigo-600" },
    ]
  },
]

export default function MENotes() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mechanical Engineering Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {semesters.map((semester, index) => (
          <motion.div
            key={semester.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <CardHeader className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-4">
                <CardTitle className="text-xl font-bold">{semester.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  {semester.subjects.map((subject) => (
                    <li key={subject.name} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-gradient-to-br ${subject.color}`}>
                        <subject.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300">
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
          <Button variant="outline" className="hover:bg-gray-100 transition-colors duration-300">
            Back to College Notes
          </Button>
        </Link>
      </div>
    </div>
  )
}

