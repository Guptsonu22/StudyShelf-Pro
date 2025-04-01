'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Building, Calendar, DollarSign, Users, MapPin, ExternalLink } from 'lucide-react'

const placementDrives = [
  { 
    company: "TechNova Solutions", 
    role: "Software Engineer", 
    package: "18 LPA", 
    openings: 50, 
    location: "Bangalore", 
    logo: "/logos/technova.png",
    color: "from-blue-400 to-blue-600"
  },
  { 
    company: "DataSphere Analytics", 
    role: "Data Scientist", 
    package: "22 LPA", 
    openings: 30, 
    location: "Hyderabad", 
    logo: "/logos/datasphere.png",
    color: "from-green-400 to-green-600"
  },
  { 
    company: "CloudPeak Technologies", 
    role: "Cloud Solutions Architect", 
    package: "25 LPA", 
    openings: 20, 
    location: "Mumbai", 
    logo: "/logos/cloudpeak.png",
    color: "from-purple-400 to-purple-600"
  },
  { 
    company: "AI Innovate", 
    role: "Machine Learning Engineer", 
    package: "20 LPA", 
    openings: 15, 
    location: "Pune", 
    logo: "/logos/aiinnovate.png",
    color: "from-red-400 to-red-600"
  },
  { 
    company: "CyberShield Securities", 
    role: "Cybersecurity Analyst", 
    package: "19 LPA", 
    openings: 25, 
    location: "Chennai", 
    logo: "/logos/cybershield.png",
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    company: "QuantumLeap Systems", 
    role: "Quantum Computing Researcher", 
    package: "28 LPA", 
    openings: 10, 
    location: "Bangalore", 
    logo: "/logos/quantumleap.png",
    color: "from-indigo-400 to-indigo-600"
  },
  { 
    company: "EcoTech Innovations", 
    role: "IoT Solutions Developer", 
    package: "17 LPA", 
    openings: 35, 
    location: "Delhi", 
    logo: "/logos/ecotech.png",
    color: "from-teal-400 to-teal-600"
  },
  { 
    company: "FinEdge Systems", 
    role: "FinTech Software Developer", 
    package: "21 LPA", 
    openings: 40, 
    location: "Mumbai", 
    logo: "/logos/finedge.png",
    color: "from-pink-400 to-pink-600"
  }
]

export default function PlacementDrives() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDrives = placementDrives.filter(drive =>
    drive.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drive.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drive.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Placement Drives</h1>
      <p className="mb-8 text-center text-lg text-gray-600">Stay updated with the latest company placement drives and prepare effectively.</p>
      
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search placement drives..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredDrives.map((drive, index) => (
          <motion.div
            key={drive.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-full`}>
              <CardHeader className={`bg-gradient-to-r ${drive.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <img src={drive.logo} alt={`${drive.company} logo`} className="h-10 w-10 rounded-full bg-white p-1" />
                  {/* <Badge variant="secondary" className="bg-white text-gray-800">
                    {new Date(drive.date).toLocaleDateString()}
                  </Badge> */}
                </div>
                <CardTitle className="mt-2 group-hover:translate-x-2 transition-transform duration-300">{drive.company}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{drive.role}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>Package: {drive.package}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Openings: {drive.openings}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Location: {drive.location}</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4 w-full group-hover:bg-gray-100 transition-colors duration-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredDrives.length === 0 && (
        <p className="text-center text-gray-600">No placement drives found. Try a different search term.</p>
      )}

      <div className="text-center mt-8">
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

