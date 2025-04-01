'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Network, Code, Globe, Server, Lock, Brain, Cloud, Cpu, Smartphone } from 'lucide-react'

const categories = [
  {
    name: "DBMS",
    icon: Database,
    color: "from-blue-400 to-blue-600",
    description: "Database Management Systems",
    topics: ["SQL", "Normalization", "Transactions"]
  },
  {
    name: "CN",
    icon: Network,
    color: "from-green-400 to-green-600",
    description: "Computer Networks",
    topics: ["TCP/IP", "OSI Model", "Network Security"]
  },
  {
    name: "DSA",
    icon: Code,
    color: "from-purple-400 to-purple-600",
    description: "Data Structures and Algorithms",
    topics: ["Arrays", "Linked Lists", "Graph Algorithms"]
  },
  {
    name: "Web Dev",
    icon: Globe,
    color: "from-yellow-400 to-yellow-600",
    description: "Web Development",
    topics: ["HTML/CSS", "JavaScript", "React"]
  },
  {
    name: "OS",
    icon: Server,
    color: "from-red-400 to-red-600",
    description: "Operating Systems",
    topics: ["Process Management", "Memory Management", "File Systems"]
  },
  {
    name: "Cybersecurity",
    icon: Lock,
    color: "from-indigo-400 to-indigo-600",
    description: "Cybersecurity",
    topics: ["Encryption", "Network Security", "Ethical Hacking"]
  },
  {
    name: "AI/ML",
    icon: Brain,
    color: "from-pink-400 to-pink-600",
    description: "Artificial Intelligence and Machine Learning",
    topics: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    color: "from-teal-400 to-teal-600",
    description: "Cloud Computing",
    topics: ["AWS", "Azure", "Google Cloud"]
  },
  {
    name: "IoT",
    icon: Cpu,
    color: "from-orange-400 to-orange-600",
    description: "Internet of Things",
    topics: ["Sensors", "Embedded Systems", "IoT Protocols"]
  },
  {
    name: "Mobile Dev",
    icon: Smartphone,
    color: "from-cyan-400 to-cyan-600",
    description: "Mobile Development",
    topics: ["Android", "iOS", "React Native"]
  }
]

export default function CodingLanguagesCategories() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Coding Languages and Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white h-full flex flex-col">
              <CardHeader className={`bg-gradient-to-br ${category.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                  <category.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {category.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300">
                  Explore {category.name}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/coding-languages">
          <Button variant="outline" className="hover:bg-gray-100 transition-colors duration-300">
            Back to Coding Languages
          </Button>
        </Link>
      </div>
    </div>
  )
}

