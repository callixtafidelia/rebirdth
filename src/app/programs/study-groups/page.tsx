"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  BookOpen,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Target,
  MessageCircle,
} from "lucide-react"

export default function StudyGroupsPage() {
  const features = [
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learn together with peers who share similar academic goals and interests",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Subject-Specific Groups",
      description: "Join groups focused on your area of study for targeted learning",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: MessageCircle,
      title: "Peer Support",
      description: "Get help from fellow students and share your knowledge with others",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented Sessions",
      description: "Structured sessions focused on achieving specific academic objectives",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const studyGroups = [
    {
      title: "STEM Research Group",
      subject: "Science, Technology, Engineering, Mathematics",
      schedule: "Tuesdays & Thursdays, 7:00 PM WIB",
      members: "15 active members",
      focus: "Research methodology, data analysis, scientific writing",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
    },
    {
      title: "Social Sciences Circle",
      subject: "Psychology, Economics, Sociology",
      schedule: "Wednesdays & Saturdays, 8:00 PM WIB",
      members: "12 active members",
      focus: "Qualitative research, survey design, statistical analysis",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Academic Writing Workshop",
      subject: "Cross-disciplinary writing skills",
      schedule: "Sundays, 6:00 PM WIB",
      members: "20 active members",
      focus: "Research papers, thesis writing, publication preparation",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
  ]

  const benefits = [
    "Free participation in all study groups",
    "Access to shared resources and materials",
    "Peer review and feedback sessions",
    "Regular progress tracking",
    "Networking with like-minded students",
    "Mentorship from senior students",
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
              <Users className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Study Groups Program
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join collaborative learning sessions with fellow Indonesian students. Share knowledge, get support, and
              achieve academic excellence together through peer-to-peer learning.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-300 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Collaborative Learning
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-300 px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Subject-Specific
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-300 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Free Access
              </Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Join Study Groups?
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

        {/* Active Study Groups */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Active Study Groups
            </span>
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {studyGroups.map((group, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${group.bgGradient} backdrop-blur-sm transform hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">{group.title}</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">{group.subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Users className="w-4 h-4 mr-3 text-green-500" />
                      <span>{group.members}</span>
                    </div>
                    <div className="flex items-start text-sm text-slate-600">
                      <Target className="w-4 h-4 mr-3 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>{group.focus}</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${group.gradient} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              What You'll Get
            </span>
          </h2>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-teal-50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Join */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              How to Join
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account and complete your academic profile",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "2",
                title: "Choose Groups",
                description: "Browse and select study groups that match your interests",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                step: "3",
                title: "Start Learning",
                description: "Attend sessions, participate actively, and grow together",
                gradient: "from-green-500 to-teal-500",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105 text-center"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white text-2xl font-bold`}
                  >
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-light mb-6">Ready to Join Our Study Groups?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with fellow Indonesian students, share knowledge, and achieve academic excellence together through
            collaborative learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Join Study Groups
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
