'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Download, ExternalLink } from 'lucide-react'

const subjects = [
  {
    name: "Mathematics I",
    topics: ["Calculus", "Linear Algebra", "Differential Equations"],
    resources: ["Lecture Notes", "Practice Problems", "Previous Year Questions"]
  },
  {
    name: "Physics",
    topics: ["Mechanics", "Thermodynamics", "Optics"],
    resources: ["Lab Manuals", "Experiment Videos", "Quiz Bank"]
  },
  {
    name: "Basic Electrical Engineering",
    topics: ["Circuit Analysis", "Transformers", "Electrical Machines"],
    resources: ["Circuit Diagrams", "Simulation Software", "Project Ideas"]
  },
  {
    name: "Engineering Graphics & Design",
    topics: ["Orthographic Projections", "Isometric Views", "AutoCAD Basics"],
    resources: ["Drawing Templates", "CAD Tutorials", "3D Model Gallery"]
  },
  {
    name: "Programming for Problem Solving",
    topics: ["C Programming", "Data Structures", "Algorithms"],
    resources: ["Code Samples", "Online Judge Problems", "Coding Challenges"]
  },
]

export default function BTechITSemester1() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">B.Tech IT - Semester 1</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Explore your first semester subjects and resources.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4">
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Key Topics:</h3>
                <ul className="list-disc list-inside mb-4">
                  {subject.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-600">{topic}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mb-2">Resources:</h3>
                <ul className="space-y-2">
                  {subject.resources.map((resource, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Notes
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Online Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

