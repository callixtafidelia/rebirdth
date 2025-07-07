"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Brain, TrendingUp, Users, Scale, Clock, User, ArrowRight, CheckCircle } from "lucide-react"

export default function SocialSciencesPage() {
  const researchTopics = [
    {
      icon: Brain,
      title: "Psychology",
      description: "Study of human behavior and mental processes",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      topics: ["Cognitive Psychology", "Social Psychology", "Developmental Psychology", "Clinical Psychology"],
      mentors: [
        {
          name: "Dr. Lisa Wijaya",
          title: "Psychology Expert",
          background: "PhD Psychology UBC, Licensed Clinical Psychologist",
          specialization: "Cognitive Behavioral Research & Therapy",
        },
      ],
    },
    {
      icon: TrendingUp,
      title: "Economics",
      description: "Analysis of production, distribution, and consumption",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      topics: ["Microeconomics", "Macroeconomics", "Econometrics", "Behavioral Economics"],
      mentors: [
        {
          name: "Prof. Rahman Hakim",
          title: "Economics Specialist",
          background: "PhD Economics LSE, Economic Policy Advisor",
          specialization: "Development Economics & Policy Analysis",
        },
      ],
    },
    {
      icon: Users,
      title: "Sociology",
      description: "Study of society and social relationships",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      topics: ["Social Theory", "Research Methods", "Urban Sociology", "Social Inequality"],
      mentors: [
        {
          name: "Dr. Maya Sari",
          title: "Sociology Expert",
          background: "PhD Sociology Harvard, Social Research Specialist",
          specialization: "Urban Studies & Social Inequality",
        },
      ],
    },
    {
      icon: Scale,
      title: "Political Science",
      description: "Study of government systems and political behavior",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      topics: ["Comparative Politics", "International Relations", "Public Policy", "Political Theory"],
      mentors: [
        {
          name: "Prof. Andi Kusuma",
          title: "Political Science Specialist",
          background: "PhD Political Science Oxford, Policy Research Fellow",
          specialization: "International Relations & Public Policy",
        },
      ],
    },
  ]

  const resources = [
    {
      title: "Qualitative Research Methods",
      type: "Workshop",
      duration: "3 days",
      level: "Intermediate",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Statistical Analysis for Social Sciences",
      type: "Course",
      duration: "6 weeks",
      level: "Advanced",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Survey Design and Implementation",
      type: "Guide",
      duration: "2 hours",
      level: "Beginner",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
              <Brain className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Social Sciences
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore human behavior, society, and social systems with expert guidance from social science researchers
              and policy experts who excel in understanding complex social phenomena.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-300 px-4 py-2">
                Psychology
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-300 px-4 py-2">
                Economics
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-300 px-4 py-2">
                Sociology
              </Badge>
            </div>
          </div>
        </div>

        {/* Research Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
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
                              <p className="text-xs text-cyan-600 font-medium">{mentor.title}</p>
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
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Explore Social Sciences?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join our community of social science researchers and get guidance from experts in psychology, economics,
            sociology, and political science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs/research-mentorship">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Mentorship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
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
