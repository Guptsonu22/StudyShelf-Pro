'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Search, Code, Server, Globe, Smartphone, Database, Brain, Cog, Gamepad, LinkIcon, ShoppingCart, Activity, BarChart2, Zap, Lock } from 'lucide-react'
import { cn } from "@/lib/utils"

const categories = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "Data Science",
  "Machine Learning",
  "IoT",
  "Game Development",
  "Blockchain"
]

const projects = [
  { 
    title: "Personal Portfolio Website", 
    category: "Web Development",
    difficulty: "Beginner",
    description: "Create a responsive portfolio website to showcase your projects and skills.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    icon: Globe,
    color: "from-blue-400 to-blue-600"
  },
  { 
    title: "Task Management App", 
    category: "Mobile Apps",
    difficulty: "Intermediate",
    description: "Develop a mobile app for managing tasks and to-do lists with reminders.",
    technologies: ["React Native", "Firebase"],
    icon: Smartphone,
    color: "from-green-400 to-green-600"
  },
  { 
    title: "Movie Recommendation System", 
    category: "Data Science,Machine Learning",
    difficulty: "Advanced",
    description: "Build a recommendation system using machine learning algorithms to suggest movies based on user preferences.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    icon: Brain,
    color: "from-purple-400 to-purple-600"
  },
  { 
    title: "Smart Home Automation", 
    category: "IoT",
    difficulty: "Intermediate",
    description: "Create a system to control home devices using IoT sensors and a mobile app interface.",
    technologies: ["Raspberry Pi", "Python", "MQTT"],
    icon: Cog,
    color: "from-red-400 to-red-600"
  },
  { 
    title: "2D Platformer Game", 
    category: "Game Development",
    difficulty: "Intermediate",
    description: "Design and develop a 2D platformer game with multiple levels and character progression.",
    technologies: ["Unity", "C#"],
    icon: Gamepad,
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    title: "Decentralized Voting System", 
    category: "Blockchain",
    difficulty: "Advanced",
    description: "Implement a secure and transparent voting system using blockchain technology.",
    technologies: ["Solidity", "Ethereum", "Web3.js"],
    icon: Lock,
    color: "from-indigo-400 to-indigo-600"
  },
  { 
    title: "E-commerce Website", 
    category: "Web Development",
    difficulty: "Intermediate",
    description: "Build a fully functional e-commerce website with product listings, cart, and checkout process.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    icon: ShoppingCart,
    color: "from-pink-400 to-pink-600"
  },
  { 
    title: "Fitness Tracking App", 
    category: "Mobile Apps",
    difficulty: "Intermediate",
    description: "Create a mobile app to track workouts, calories, and provide personalized fitness plans.",
    technologies: ["Flutter", "Firebase"],
    icon: Activity,
    color: "from-teal-400 to-teal-600"
  },
  { 
    title: "Sentiment Analysis Tool", 
    category: "Data Science,Machine Learning",
    difficulty: "Intermediate",
    description: "Develop a tool to analyze sentiment in text data, such as social media posts or product reviews.",
    technologies: ["Python", "NLTK", "Tensorflow"],
    icon: BarChart2,
    color: "from-orange-400 to-orange-600"
  },
]

export default function ProjectIdeas() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [searchTerm, setSearchTerm] = useState('')
  const [savedProjects, setSavedProjects] = useState<string[]>([])

  const toggleSave = (project: string) => {
    setSavedProjects(prev => 
      prev.includes(project) 
        ? prev.filter(p => p !== project)
        : [...prev, project]
    )
  }

  const filteredProjects = projects.filter(project => 
    (selectedCategory === "All Projects" || project.category.includes(selectedCategory)) &&
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Project Ideas</h1>
      <p className="mb-8 text-center text-lg text-gray-600">
        Discover exciting project ideas to enhance your skills and build your portfolio
      </p>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search project ideas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <Tabs defaultValue="All Projects" className="mb-8">
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
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              <CardHeader className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">{project.title}</CardTitle>
                  <project.icon className="h-10 w-10 text-white opacity-75" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="text-sm">{project.category.split(',')[0]}</Badge>
                  <span className="text-sm text-gray-500">{project.difficulty}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-100">{tech}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-gray-100">
                    <Zap className="mr-2 h-4 w-4" />
                    Start Project
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSave(project.title)}
                    className={cn(
                      "transition-all duration-300",
                      savedProjects.includes(project.title) ? "text-primary" : "text-gray-500"
                    )}
                  >
                    <Bookmark 
                      className={cn(
                        "h-5 w-5",
                        savedProjects.includes(project.title) ? "fill-current" : ""
                      )} 
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-600">No projects found. Try a different search term or category.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/roadmaps">
          <Button variant="outline">Back to Roadmaps</Button>
        </Link>
      </div>
    </div>
  )
}

