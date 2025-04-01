'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Search, Code, Server, Cloud, Smartphone, Database, Brain, Briefcase, Users, PenTool, TestTube } from 'lucide-react'
import { cn } from "@/lib/utils"

const categories = [
  "All Roadmaps",
  "Frontend",
  "Backend",
  "DevOps",
  "Mobile",
  "AI/ML",
  "Data",
  "Management"
]

const roles = [
  { name: "Frontend Developer", route: "frontend-developer", icon: Code, category: "Frontend", level: "Beginner to Advanced", color: "from-blue-400 to-blue-600" },
  { name: "Backend Developer", route: "backend-developer", icon: Server, category: "Backend", level: "Beginner to Advanced", color: "from-green-400 to-green-600" },
  { name: "Full Stack Developer", route: "full-stack-developer", icon: Code, category: "Frontend,Backend", level: "Intermediate to Advanced", color: "from-purple-400 to-purple-600" },
  { name: "DevOps Engineer", route: "devops-engineer", icon: Cloud, category: "DevOps", level: "Intermediate to Advanced", color: "from-red-400 to-red-600" },
  { name: "Mobile App Developer", route: "mobile-app-developer", icon: Smartphone, category: "Mobile", level: "Beginner to Advanced", color: "from-yellow-400 to-yellow-600" },
  { name: "Data Scientist", route: "data-scientist", icon: Database, category: "Data,AI/ML", level: "Intermediate to Advanced", color: "from-indigo-400 to-indigo-600" },
  { name: "Machine Learning Engineer", route: "ml-engineer", icon: Brain, category: "AI/ML", level: "Advanced", color: "from-pink-400 to-pink-600" },
  { name: "Product Manager", route: "product-manager", icon: Briefcase, category: "Management", level: "Intermediate to Advanced", color: "from-teal-400 to-teal-600" },
  { name: "UX Designer", route: "ux-designer", icon: PenTool, category: "Frontend", level: "Beginner to Advanced", color: "from-orange-400 to-orange-600" },
  { name: "QA Engineer", route: "qa-engineer", icon: TestTube, category: "Backend", level: "Beginner to Intermediate", color: "from-cyan-400 to-cyan-600" },
]

export default function RoleBasedRoadmaps() {
  const [selectedCategory, setSelectedCategory] = useState("All Roadmaps")
  const [searchTerm, setSearchTerm] = useState('')
  const [savedRoles, setSavedRoles] = useState<string[]>([])

  const toggleSave = (role: string) => {
    setSavedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    )
  }

  const filteredRoles = roles.filter(role => 
    (selectedCategory === "All Roadmaps" || role.category.includes(selectedCategory)) &&
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Role-Based Roadmaps</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Explore comprehensive learning paths for various tech roles
      </p>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <Tabs defaultValue="All Roadmaps" className="mb-8">
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
        {filteredRoles.map((role, index) => (
          <motion.div
            key={role.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              <CardHeader className={`bg-gradient-to-r ${role.color} p-6`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">{role.name}</CardTitle>
                  <role.icon className="h-10 w-10 text-white opacity-75" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="text-sm">{role.category.split(',')[0]}</Badge>
                  <span className="text-sm text-gray-500">{role.level}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Comprehensive roadmap to become a proficient {role.name}.
                </p>
                <div className="flex justify-between items-center">
                  <Link href={`/roadmaps/role-based/${role.route}`}>
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-gray-100">
                      View Roadmap
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSave(role.name)}
                    className={cn(
                      "transition-all duration-300",
                      savedRoles.includes(role.name) ? "text-primary" : "text-gray-500"
                    )}
                  >
                    <Bookmark 
                      className={cn(
                        "h-5 w-5",
                        savedRoles.includes(role.name) ? "fill-current" : ""
                      )} 
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredRoles.length === 0 && (
        <p className="text-center text-gray-600">No roles found. Try a different search term or category.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/roadmaps">
          <Button variant="outline">Back to Roadmaps</Button>
        </Link>
      </div>
    </div>
  )
}

