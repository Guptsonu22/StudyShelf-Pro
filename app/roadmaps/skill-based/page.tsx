'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Search, Code, Server, Cloud, Smartphone, Database, Brain, Globe, Terminal, Shield, GitBranch, Cpu, Zap } from 'lucide-react'
import { cn } from "@/lib/utils"

const categories = [
  "All Skills",
  "Programming Languages",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Data Science",
  "AI/ML",
  "Cloud Computing",
  "Cybersecurity"
]

const skills = [
  { name: "JavaScript", route: "javascript", icon: Code, category: "Programming Languages,Web Development", difficulty: "Beginner to Advanced", color: "from-yellow-400 to-yellow-600" },
  { name: "Python", route: "python", icon: Code, category: "Programming Languages,Data Science,AI/ML", difficulty: "Beginner to Advanced", color: "from-blue-400 to-blue-600" },
  { name: "React", route: "react", icon: Code, category: "Web Development", difficulty: "Intermediate", color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", route: "nodejs", icon: Server, category: "Web Development", difficulty: "Intermediate", color: "from-green-400 to-green-600" },
  { name: "Docker", route: "docker", icon: Cloud, category: "DevOps", difficulty: "Intermediate", color: "from-blue-500 to-blue-700" },
  { name: "Kubernetes", route: "kubernetes", icon: Cloud, category: "DevOps,Cloud Computing", difficulty: "Advanced", color: "from-blue-600 to-blue-800" },
  { name: "TensorFlow", route: "tensorflow", icon: Brain, category: "AI/ML", difficulty: "Advanced", color: "from-orange-400 to-orange-600" },
  { name: "AWS", route: "aws", icon: Cloud, category: "Cloud Computing", difficulty: "Intermediate to Advanced", color: "from-yellow-500 to-yellow-700" },
  { name: "SQL", route: "sql", icon: Database, category: "Data Science", difficulty: "Beginner to Intermediate", color: "from-blue-400 to-blue-600" },
  { name: "React Native", route: "react-native", icon: Smartphone, category: "Mobile Development", difficulty: "Intermediate", color: "from-blue-400 to-indigo-600" },
  { name: "Flutter", route: "flutter", icon: Smartphone, category: "Mobile Development", difficulty: "Intermediate", color: "from-blue-400 to-cyan-600" },
  { name: "GraphQL", route: "graphql", icon: Database, category: "Web Development", difficulty: "Intermediate", color: "from-pink-400 to-pink-600" },
  { name: "Cybersecurity Fundamentals", route: "cybersecurity-fundamentals", icon: Shield, category: "Cybersecurity", difficulty: "Beginner to Intermediate", color: "from-red-400 to-red-600" },
  { name: "Machine Learning", route: "machine-learning", icon: Brain, category: "AI/ML,Data Science", difficulty: "Advanced", color: "from-purple-400 to-purple-600" },
  { name: "Git", route: "git", icon: GitBranch, category: "DevOps", difficulty: "Beginner to Intermediate", color: "from-orange-400 to-red-600" },
]

export default function SkillBasedRoadmaps() {
  const [selectedCategory, setSelectedCategory] = useState("All Skills")
  const [searchTerm, setSearchTerm] = useState('')
  const [savedSkills, setSavedSkills] = useState<string[]>([])

  const toggleSave = (skill: string) => {
    setSavedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const filteredSkills = skills.filter(skill => 
    (selectedCategory === "All Skills" || skill.category.includes(selectedCategory)) &&
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Skill-Based Roadmaps</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Master specific skills and technologies with our comprehensive learning paths
      </p>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <Tabs defaultValue="All Skills" className="mb-8">
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
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              <CardHeader className={`bg-gradient-to-r ${skill.color} p-6`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">{skill.name}</CardTitle>
                  <skill.icon className="h-10 w-10 text-white opacity-75" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="text-sm">{skill.category.split(',')[0]}</Badge>
                  <span className="text-sm text-gray-500">{skill.difficulty}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Comprehensive roadmap to master {skill.name}.
                </p>
                <div className="flex justify-between items-center">
                  <Link href={`/roadmaps/skill-based/${skill.route}`}>
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-gray-100">
                      View Roadmap
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSave(skill.name)}
                    className={cn(
                      "transition-all duration-300",
                      savedSkills.includes(skill.name) ? "text-primary" : "text-gray-500"
                    )}
                  >
                    <Bookmark 
                      className={cn(
                        "h-5 w-5",
                        savedSkills.includes(skill.name) ? "fill-current" : ""
                      )} 
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <p className="text-center text-gray-600">No skills found. Try a different search term or category.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/roadmaps">
          <Button variant="outline">Back to Roadmaps</Button>
        </Link>
      </div>
    </div>
  )
}

