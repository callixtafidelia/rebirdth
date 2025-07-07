"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Globe, Mountain, Cloud, Waves, Clock, User, ArrowRight, CheckCircle } from "lucide-react"

export default function EarthSciencesPage() {
  const researchTopics = [
    {
      icon: Mountain,
      title: "Geology",
      description: "Study of Earth's structure, materials, and processes",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      topics: ["Mineralogy", "Petrology", "Structural Geology", "Geochemistry"],
      mentors: [
        {
          name: "Dr. Budi Hartono",
          title: "Geology Expert",
          background: "PhD Geology UBC, Geological Survey Specialist",
          specialization: "Structural Geology & Mineral Resources",
        },
      ],
    },
    {
      icon: Globe,
      title: "Geography",
      description: "Study of Earth's landscapes, environments, and places",
      gradient: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
      topics: ["Physical Geography", "Human Geography", "GIS", "Remote Sensing"],
      mentors: [
        {
          name: "Prof. Sari Dewi",
          title: "Geography Specialist",
          background: "PhD Geography Oxford, GIS Expert",
          specialization: "Environmental Geography & Spatial Analysis",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Atmospheric Science",
      description: "Study of Earth's atmosphere and weather systems",
      gradient: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
      topics: ["Meteorology", "Climatology", "Air Quality", "Atmospheric Chemistry"],
      mentors: [
        {
          name: "Dr. Ahmad Wijaya",
          title: "Atmospheric Scientist",
          background: "PhD Atmospheric Science MIT, Climate Research Fellow",
          specialization: "Climate Modeling & Weather Prediction",
        },
      ],
    },
    {
      icon: Waves,
      title: "Oceanography",
      description: "Study of Earth's oceans and marine environments",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      topics: ["Physical Oceanography", "Marine Biology", "Ocean Chemistry", "Coastal Processes"],
      mentors: [
        {
          name: "Dr. Maya Kusuma",
          title: "Oceanography Expert",
          background: "PhD Oceanography Scripps, Marine Research Specialist",
          specialization: "Ocean Dynamics & Marine Ecosystems",
        },
      ],
    },
  ]

  const resources = [
    {
      title: "Field Geology Techniques",
      type: "Field Guide",
      duration: "1 week",
      level: "Intermediate",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "GIS and Remote Sensing",
      type: "Software Training",
      duration: "4 weeks",
      level: "Beginner",
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "Climate Data Analysis",
      type: "Workshop",
      duration: "3 days",
      level: "Advanced",
      gradient: "from-sky-500 to-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Earth Sciences
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our planet's systems and processes with expert guidance from earth science researchers who excel
              in geology, geography, atmospheric science, and oceanography.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-300 px-4 py-2">
                Geology
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-300 px-4 py-2">
                Geography
              </Badge>
              <Badge className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 border-sky-300 px-4 py-2">
                Climate Science
              </Badge>
            </div>
          </div>
        </div>

        {/* Research Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Research Areas
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {researchTopics.map((topic, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${topic.bgGradient} backdrop-blur-sm transform hover:scale-105`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${topic.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <topic.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{topic.title}</CardTitle>
                  <CardDescription className="text-slate-600">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-700">Research Topics:</h4>
                      {topic.topics.map((subtopic, subIndex) => (
                        <div key={subIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{subtopic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-slate-700 mb-3">Expert Mentor:</h4>
                      {topic.mentors.map((mentor, mentorIndex) => (
                        <div key={mentorIndex} className="bg-white/50 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 bg-gradient-to-br ${topic.gradient} rounded-full flex items-center justify-center`}
                            >
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-slate-900 text-sm">{mentor.name}</h5>
                              <p className="text-xs text-green-600 font-medium">{mentor.title}</p>
                              <p className="text-xs text-slate-500">{mentor.background}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`bg-gradient-to-r ${resource.gradient} text-white border-0 text-xs px-2 py-1`}>
                      {resource.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {resource.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{resource.duration}</span>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${resource.gradient} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Explore Earth Sciences?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of earth science researchers and get guidance from experts in geology, geography,
            atmospheric science, and oceanography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs/research-mentorship">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Mentorship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Read Research Tips
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
