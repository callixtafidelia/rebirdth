"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, FlaskConical, Beaker, Atom, Zap, Clock, User, ArrowRight, CheckCircle } from "lucide-react"

export default function ChemistryPage() {
  const researchTopics = [
    {
      icon: FlaskConical,
      title: "Organic Chemistry",
      description: "Study of carbon-based compounds and their reactions",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      topics: ["Synthesis", "Reaction Mechanisms", "Natural Products", "Medicinal Chemistry"],
      mentors: [
        {
          name: "Dr. Sari Kusuma",
          title: "Organic Chemistry Expert",
          background: "PhD Organic Chemistry Harvard, IChO Gold Medalist",
          specialization: "Synthetic Chemistry & Drug Discovery",
        },
      ],
    },
    {
      icon: Atom,
      title: "Inorganic Chemistry",
      description: "Properties and reactions of inorganic compounds",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      topics: ["Coordination Chemistry", "Solid State Chemistry", "Organometallics", "Catalysis"],
      mentors: [
        {
          name: "Prof. Ahmad Rahman",
          title: "Inorganic Chemistry Specialist",
          background: "PhD Inorganic Chemistry MIT, OSN Chemistry Winner",
          specialization: "Catalysis & Materials Chemistry",
        },
      ],
    },
    {
      icon: Zap,
      title: "Physical Chemistry",
      description: "Physical properties and behavior of chemical systems",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      topics: ["Thermodynamics", "Kinetics", "Spectroscopy", "Quantum Chemistry"],
      mentors: [
        {
          name: "Dr. Maya Indira",
          title: "Physical Chemistry Expert",
          background: "PhD Physical Chemistry Stanford, Research Excellence Award",
          specialization: "Spectroscopy & Computational Chemistry",
        },
      ],
    },
    {
      icon: Beaker,
      title: "Analytical Chemistry",
      description: "Methods for identifying and quantifying chemical substances",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      topics: ["Chromatography", "Mass Spectrometry", "Electrochemistry", "Sensors"],
      mentors: [
        {
          name: "Dr. Budi Santoso",
          title: "Analytical Chemistry Specialist",
          background: "PhD Analytical Chemistry UBC, Instrumentation Expert",
          specialization: "Advanced Instrumentation & Method Development",
        },
      ],
    },
  ]

  const resources = [
    {
      title: "Chemical Reaction Mechanisms",
      type: "Interactive Guide",
      duration: "4 hours",
      level: "Intermediate",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Spectroscopy Analysis Workshop",
      type: "Virtual Lab",
      duration: "6 hours",
      level: "Advanced",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Chemistry Problem Solving",
      type: "Problem Set",
      duration: "2 weeks",
      level: "Beginner",
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-teal-50">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6 shadow-lg">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Chemistry
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the molecular world with expert guidance from IChO medalists and chemistry competition champions
              who excel in synthesis, analysis, and chemical research.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-300 px-4 py-2">
                Organic Chemistry
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 px-4 py-2">
                Inorganic Chemistry
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-300 px-4 py-2">
                Physical Chemistry
              </Badge>
            </div>
          </div>
        </div>

        {/* Research Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
        <section className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Explore Chemistry?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of chemistry enthusiasts and get guidance from IChO medalists and expert chemists.
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
                Read Chemistry Tips
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
