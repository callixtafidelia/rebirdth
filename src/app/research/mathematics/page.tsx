"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import {
  ArrowLeft,
  Calculator,
  TrendingUp,
  BarChart3,
  PieChart,
  Clock,
  User,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function MathematicsPage() {
  const researchTopics = [
    {
      icon: Calculator,
      title: "Pure Mathematics",
      description: "Abstract mathematical concepts and theoretical foundations",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      topics: ["Number Theory", "Abstract Algebra", "Real Analysis", "Topology"],
      mentors: [
        {
          name: "Prof. Budi Santoso",
          title: "Pure Mathematics Expert",
          background: "PhD Mathematics MIT, IMO Gold Medalist",
          specialization: "Number Theory & Abstract Algebra",
        },
      ],
    },
    {
      icon: TrendingUp,
      title: "Applied Mathematics",
      description: "Mathematical methods applied to real-world problems",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      topics: ["Optimization", "Numerical Analysis", "Mathematical Modeling", "Operations Research"],
      mentors: [
        {
          name: "Dr. Sari Wijaya",
          title: "Applied Mathematics Specialist",
          background: "PhD Applied Math Stanford, OSN Mathematics Winner",
          specialization: "Optimization & Mathematical Modeling",
        },
      ],
    },
    {
      icon: BarChart3,
      title: "Statistics & Probability",
      description: "Data analysis and probabilistic modeling",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
      topics: ["Statistical Inference", "Bayesian Statistics", "Time Series", "Machine Learning"],
      mentors: [
        {
          name: "Dr. Andi Kurniawan",
          title: "Statistics Expert",
          background: "PhD Statistics UBC, Data Science Champion",
          specialization: "Bayesian Methods & Machine Learning",
        },
      ],
    },
    {
      icon: PieChart,
      title: "Computational Mathematics",
      description: "Computer-based mathematical problem solving",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      topics: ["Algorithms", "Scientific Computing", "Discrete Mathematics", "Cryptography"],
      mentors: [
        {
          name: "Prof. Lisa Chen",
          title: "Computational Math Specialist",
          background: "PhD Computer Science, ACM Programming Contest Winner",
          specialization: "Algorithms & Scientific Computing",
        },
      ],
    },
  ]

  const resources = [
    {
      title: "Mathematical Proof Techniques",
      type: "Guide",
      duration: "60 min read",
      level: "Intermediate",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Statistical Analysis Workshop",
      type: "Video Series",
      duration: "4 hours",
      level: "Beginner",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Advanced Calculus Problems",
      type: "Problem Set",
      duration: "3 weeks",
      level: "Advanced",
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mathematics
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore pure and applied mathematics with guidance from IMO medalists and mathematics competition
              champions who excel in theoretical and practical problem-solving.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2">
                Pure Mathematics
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-300 px-4 py-2">
                Applied Mathematics
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-300 px-4 py-2">
                Statistics
              </Badge>
            </div>
          </div>
        </div>

        {/* Research Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
                              <p className="text-xs text-blue-600 font-medium">{mentor.title}</p>
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
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
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
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Explore Mathematics?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of mathematics enthusiasts and get guidance from competition champions and expert
            mathematicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs/research-mentorship">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Mentorship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Read Math Tips
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
