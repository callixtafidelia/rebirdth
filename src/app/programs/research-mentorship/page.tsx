"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, BookOpen, Trophy, Target, Star, ArrowRight, Award, FileText, Video } from "lucide-react"

export default function ResearchMentorshipPage() {
  const features = [
    {
      icon: Target,
      title: "Personalized Research Guidance",
      description: "One-on-one mentorship tailored to your research interests and academic goals",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: FileText,
      title: "Academic Writing Support",
      description: "Learn to write compelling research papers, proposals, and grant applications",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Publication Assistance",
      description: "Get help preparing your research for publication in academic journals",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Video,
      title: "Presentation Training",
      description: "Master the art of presenting your research at conferences and competitions",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const successStories = [
    {
      name: "Andi Pratama",
      achievement: "Published in Nature Communications",
      story: "With mentor guidance, I successfully published my research on sustainable energy solutions.",
      image: "/placeholder.svg?height=60&width=60",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "Sari Dewi",
      achievement: "Won National Research Competition",
      story: "The mentorship program helped me refine my research methodology and presentation skills.",
      image: "/placeholder.svg?height=60&width=60",
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Ravi Kumar",
      achievement: "Accepted to PhD Program",
      story: "My mentor helped me craft a compelling research proposal that got me into my dream program.",
      image: "/placeholder.svg?height=60&width=60",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Research Mentorship Program
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get free guidance, tips, and roadmaps from OPSI alumni, OSN champions, and BIM scholars to accelerate your
              research journey and achieve academic excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-300 px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                OPSI Alumni
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                OSN Champions
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-300 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                BIM Scholars
              </Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What You'll Get
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

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Join Our Community",
                description: "Sign up for free and access our comprehensive resource library",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50",
              },
              {
                step: "2",
                title: "Access Resources",
                description: "Get free guides, templates, and roadmaps for your research journey",
                gradient: "from-purple-500 to-blue-500",
                bgGradient: "from-purple-50 to-blue-50",
              },
              {
                step: "3",
                title: "Get Guidance",
                description: "Participate in group sessions and get tips from experienced mentors",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm transform hover:scale-105`}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white text-2xl font-bold`}
                  >
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-600">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Start Your Research Journey Today</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our free mentorship program and get the guidance you need to excel in your research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Join Free Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
