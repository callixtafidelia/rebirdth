"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Atom, Zap, Waves, Orbit, Clock, User, ArrowRight, CheckCircle } from "lucide-react"

export default function PhysicsPage() {
  const researchTopics = [
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Study of matter and energy at the smallest scales",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      topics: ["Quantum Mechanics", "Quantum Computing", "Particle Physics", "Quantum Field Theory"],
      mentors: [
        {
          name: "Dr. Rahman Hidayat",
          title: "Quantum Physics Expert",
          background: "PhD Quantum Physics MIT, IPhO Gold Medalist",
          specialization: "Quantum Computing & Particle Physics",
        },
      ],
    },
    {
      icon: Zap,
      title: "Electromagnetism",
      description: "Electric and magnetic phenomena and their applications",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      topics: ["Classical Electrodynamics", "Optics", "Plasma Physics", "Electromagnetic Waves"],
      mentors: [
        {
          name: "Prof. Maya Sari",
          title: "Electromagnetism Specialist",
          background: "PhD Physics Stanford, OSN Physics Champion",
          specialization: "Optics & Electromagnetic Theory",
        },
      ],
    },
    {
      icon: Waves,
      title: "Condensed Matter",
      description: "Properties of solid and liquid matter",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      topics: ["Solid State Physics", "Superconductivity", "Nanomaterials", "Phase Transitions"],
      mentors: [
        {
          name: "Dr. Kevin Tan",
          title: "Condensed Matter Expert",
          background: "PhD Materials Science UBC, Research Excellence Award",
          specialization: "Superconductivity & Nanomaterials",
        },
      ],
    },
    {
      icon: Orbit,
      title: "Astrophysics",
      description: "Physics of celestial objects and cosmic phenomena",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      topics: ["Stellar Physics", "Cosmology", "Black Holes", "Gravitational Waves"],
      mentors: [
        {
          name: "Prof. Andi Wijaya",
          title: "Astrophysics Specialist",
          background: "PhD Astrophysics Caltech, NASA Research Fellow",
          specialization: "Cosmology & Gravitational Physics",
        },
      ],
    },
  ]

  const resources = [
    {
      title: "Classical Mechanics Fundamentals",
      type: "Course",
      duration: "8 weeks",
      level: "Beginner",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Quantum Physics Laboratory",
      type: "Virtual Lab",
      duration: "12 hours",
      level: "Advanced",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Physics Problem Solving",
      type: "Workshop",
      duration: "2 days",
      level: "Intermediate",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
              <Atom className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Physics
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the fundamental laws of nature with expert guidance from IPhO medalists and physics competition
              champions who excel in theoretical and experimental physics.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-300 px-4 py-2">
                Quantum Physics
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2">
                Classical Physics
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-300 px-4 py-2">
                Astrophysics
              </Badge>
            </div>
          </div>
        </div>

        {/* Research Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                              <p className="text-xs text-indigo-600 font-medium">{mentor.title}</p>
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
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Explore Physics?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our community of physics enthusiasts and get guidance from IPhO medalists and expert physicists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs/research-mentorship">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Mentorship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Read Physics Tips
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
