'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, FileText, Map, Building, Brain, Lightbulb, LogOut, BotIcon as Robot } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

const mainSections = [
  { 
    title: 'College Notes', 
    icon: BookOpen, 
    href: '/college-notes',
    description: 'Access your comprehensive college notes organized by subject and semester.',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    title: 'Coding Notes', 
    icon: Code, 
    href: '/coding-languages',
    description: 'Explore various programming languages and enhance your coding skills.',
    gradient: 'from-green-400 to-green-600'
  },
  { 
    title: 'Cheat Sheets', 
    icon: FileText, 
    href: '/cheat-sheets',
    description: 'Quick reference guides for various topics to boost your productivity.',
    gradient: 'from-yellow-400 to-yellow-600'
  },
  { 
    title: 'Roadmaps', 
    icon: Map, 
    href: '/roadmaps',
    description: 'Follow structured learning paths to achieve your career goals.',
    gradient: 'from-purple-400 to-purple-600'
  },
  { 
    title: 'Placement Drives', 
    icon: Building, 
    href: '/placement-drives',
    description: 'Stay updated with the latest company placement drives and prepare effectively.',
    gradient: 'from-red-400 to-red-600'
  },
  { 
    title: 'Quiz Center', 
    icon: Brain, 
    href: '/quiz-center',
    description: 'Test your knowledge with interactive quizzes on various subjects.',
    gradient: 'from-pink-400 to-pink-600'
  },
  { 
    title: 'Study Tips', 
    icon: Lightbulb, 
    href: '/study-tips',
    description: 'Learn effective study techniques to improve your learning process.',
    gradient: 'from-orange-400 to-orange-600'
  },
  {
    title: 'Mock Interview AI',
    icon: Robot,
    href: '/mock-interview-ai',
    description: 'Practice interviews with AI-powered mock sessions to boost your confidence.',
    gradient: 'from-teal-400 to-teal-600'
  },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Educational Resources Dashboard</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Welcome, {user.name}</span>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="ghost" onClick={() => router.push('/login')} className="mr-2">Login</Button>
            <Button onClick={() => router.push('/signup')}>Sign Up</Button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mainSections.map((section, index) => (
          <Link href={section.href} key={section.title} className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <CardContent className={`p-6 bg-gradient-to-br ${section.gradient} text-white h-full flex flex-col justify-between relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <section.icon className="h-8 w-8" />
                      <div className="text-xs font-semibold uppercase tracking-wider bg-white bg-opacity-20 rounded-full px-2 py-1">
                        Explore
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                    <p className="text-sm opacity-90">{section.description}</p>
                  </div>
                  <div className="mt-4 flex justify-end relative z-10">
                    <div className="text-xs font-semibold uppercase tracking-wider bg-white bg-opacity-20 rounded-full px-2 py-1">
                      Learn More →
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-full group-hover:bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}

