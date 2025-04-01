'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserCircle, Lightbulb, Rocket, ArrowRight } from 'lucide-react'

const categories = [
  { 
    name: 'Role-based Roadmaps', 
    route: 'role-based', 
    icon: UserCircle,
    color: 'from-blue-400 to-blue-600',
    description: 'Explore career paths for different roles in the tech industry',
    examples: ['Frontend Developer', 'Backend Engineer', 'DevOps Specialist']
  },
  { 
    name: 'Skill-based Roadmaps', 
    route: 'skill-based', 
    icon: Lightbulb,
    color: 'from-green-400 to-green-600',
    description: 'Master specific skills and technologies',
    examples: ['React.js', 'Machine Learning', 'Cloud Computing']
  },
  { 
    name: 'Project Ideas', 
    route: 'project-ideas', 
    icon: Rocket,
    color: 'from-purple-400 to-purple-600',
    description: 'Find inspiration for your next coding project',
    examples: ['Web Apps', 'Mobile Apps', 'Data Science Projects']
  },
]

export default function Roadmaps() {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Learning Roadmaps</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Explore career paths, develop skills, and find inspiring project ideas to guide your learning journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={`/roadmaps/${category.route}`}>
              <Card className="h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className={`p-6 bg-gradient-to-br ${category.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className="h-12 w-12" />
                    <Badge variant="secondary" className="bg-white text-gray-800">
                      Explore
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <ArrowRight className="h-4 w-4 mr-2 text-gray-400" />
                        {example}
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 w-full" variant="outline">
                    View Roadmaps
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

