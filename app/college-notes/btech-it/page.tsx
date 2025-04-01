'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Calendar, Clock } from 'lucide-react'

const semesters = [
  "Semester 1", "Semester 2", "Semester 3", "Semester 4",
  "Semester 5", "Semester 6", "Semester 7", "Semester 8"
]

export default function BTechITNotes() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">B.Tech IT Notes</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Access your B.Tech IT notes organized by semester.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {semesters.map((semester, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={`/college-notes/btech-it/${index + 1}`}>
              <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                <CardHeader className={`bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4`}>
                  <div className="flex items-center justify-between">
                    <Calendar className="h-6 w-6" />
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{semester}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Core Subjects</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Lab Experiments</span>
                    </li>
                  </ul>
                  <Button variant="ghost" className="mt-4 w-full group-hover:bg-blue-50 transition-colors duration-300">
                    View Notes
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

