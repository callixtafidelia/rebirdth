"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  FileText,
  Users,
  CheckCircle,
  Star,
  User,
  ArrowRight,
  Target,
  BookOpen,
  Globe,
  Trophy,
} from "lucide-react"

export default function ScholarshipPrepPage() {
  const features = [
    {
      icon: FileText,
      title: "Essay Writing Guidance",
      description: "Learn to craft compelling personal statements and scholarship essays",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Practice sessions and tips for scholarship interviews",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Portfolio Development",
      description: "Build a strong academic and extracurricular portfolio",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Trophy,
      title: "Success Stories",
      description: "Learn from students who successfully secured scholarships",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const scholarshipTypes = [
    {
      title: "Undergraduate Scholarships",
      description: "Full and partial scholarships for bachelor's degree programs",
      examples: ["LPDP Scholarship", "Australia Awards", "Chevening Scholarship"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      title: "Graduate Scholarships",
      description: "Master's and PhD funding opportunities worldwide",
      examples: ["Fulbright Scholarship", "DAAD Scholarship", "Erasmus Mundus"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Research Grants",
      description: "Funding for research projects and academic conferences",
      examples: ["Research Excellence Grant", "Conference Travel Grant", "Publication Fund"],
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
    },
  ]

  const preparationSteps = [
    {
      phase: "Planning Phase",
      duration: "3-6 months before deadline",
      tasks: [
        "Research scholarship opportunities",
        "Assess eligibility requirements",
        "Gather required documents",
        "Plan application timeline",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      phase: "Application Phase",
      duration: "2-3 months before deadline",
      tasks: [
        "Write personal statement",
        "Complete application forms",
        "Request recommendation letters",
        "Prepare for interviews",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      phase: "Final Phase",
      duration: "1 month before deadline",
      tasks: [
        "Review and refine essays",
        "Practice interview questions",
        "Submit applications",
        "Follow up on requirements",
      ],
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  const successStories = [
    {
      name: "Andi Pratama",
      scholarship: "Fulbright Scholarship - PhD in Environmental Science",
      university: "Stanford University",
      tip: "Start early and be authentic in your personal statement. Show your passion for your field.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Sari Dewi",
      scholarship: "LPDP Scholarship - Master's in Public Policy",
      university: "University of Oxford",
      tip: "Connect your academic goals with Indonesia's development needs. Show how you'll contribute back.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ravi Kumar",
      scholarship: "Australia Awards - Master's in Engineering",
      university: "University of Melbourne",
      tip: "Demonstrate leadership experience and community involvement. Scholarships look for future leaders.",
      gradient: "from-purple-500 to-blue-500",
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
              <Award className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Scholarship Preparation Program
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get comprehensive guidance and resources to prepare for international scholarship applications. Learn from
              successful scholarship recipients and increase your chances of success.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-300 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Free Guidance
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                International Focus
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-300 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scholarship Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Scholarship Categories
            </span>
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((type, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${type.bgGradient} backdrop-blur-sm transform hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">{type.title}</CardTitle>
                  <CardDescription className="text-slate-600">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-700 mb-3">Popular Examples:</h4>
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Preparation Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Preparation Timeline
            </span>
          </h2>

          <div className="space-y-6">
            {preparationSteps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{step.phase}</CardTitle>
                      <CardDescription className="text-slate-600 font-medium">{step.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center text-slate-600">
                        <Target className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${story.gradient} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{story.name}</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">{story.scholarship}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 mb-4">
                    {story.university}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{story.tip}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Start Your Scholarship Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our free scholarship preparation program and get the guidance you need to secure funding for your
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Join Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Download Guide
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
