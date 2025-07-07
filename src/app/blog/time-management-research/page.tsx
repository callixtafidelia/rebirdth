"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Timer, Target, Zap, ArrowRight } from "lucide-react"

export default function TimeManagementResearchPage() {
  const tableOfContents = [
    { title: "The Research Student's Dilemma", anchor: "#dilemma" },
    { title: "Time Management Strategies", anchor: "#strategies" },
    { title: "Productivity Techniques", anchor: "#techniques" },
    { title: "Managing Research Projects", anchor: "#projects" },
    { title: "Work-Life Balance", anchor: "#balance" },
  ]

  const timeManagementTechniques = [
    {
      title: "Pomodoro Technique",
      description: "Work in focused 25-minute intervals with 5-minute breaks",
      icon: Timer,
      gradient: "from-red-500 to-pink-500",
      benefits: ["Improved focus", "Reduced mental fatigue", "Better time awareness"],
    },
    {
      title: "Time Blocking",
      description: "Schedule specific time blocks for different activities",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Clear priorities", "Reduced multitasking", "Better planning"],
    },
    {
      title: "Energy Management",
      description: "Align demanding tasks with your peak energy hours",
      icon: Zap,
      gradient: "from-green-500 to-teal-500",
      benefits: ["Higher productivity", "Better quality work", "Less burnout"],
    },
  ]

  const productivityTips = [
    "Set clear daily and weekly goals",
    "Use the 2-minute rule for small tasks",
    "Batch similar activities together",
    "Eliminate or minimize distractions",
    "Take regular breaks to maintain focus",
    "Review and adjust your schedule weekly",
    "Learn to say no to non-essential commitments",
    "Use technology tools to automate routine tasks",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 mb-4">
              Productivity
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              Time Management for Research Students
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dr. Ravi Patel</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 3, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Proven techniques to balance coursework, research, and personal life while maintaining high academic
              standards. Learn how to maximize your productivity and avoid burnout.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={item.anchor}
                      className="block text-sm text-slate-600 hover:text-blue-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
                <section id="dilemma" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Clock className="w-8 h-8 text-blue-600 mr-3" />
                    The Research Student's Dilemma
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Research students face unique time management challenges. Unlike traditional coursework with clear
                    deadlines, research projects can stretch indefinitely. You're juggling literature reviews, data
                    collection, analysis, writing, and often teaching or other responsibilities.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The key is to treat research as a professional endeavor with structured approaches to time
                    management, rather than waiting for inspiration to strike.
                  </p>
                </section>

                <section id="strategies" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Target className="w-8 h-8 text-purple-600 mr-3" />
                    Time Management Strategies
                  </h2>
                  <div className="space-y-6">
                    {timeManagementTechniques.map((technique, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg bg-gradient-to-r from-white to-slate-50"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${technique.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                            >
                              <technique.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-slate-900 mb-2">{technique.title}</h3>
                              <p className="text-slate-600 mb-4">{technique.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-slate-700">Benefits:</h4>
                                {technique.benefits.map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-center text-sm text-slate-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                <section id="techniques" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Productivity Techniques</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Essential Productivity Tips:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {productivityTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="projects" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Managing Research Projects</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Break Down Large Tasks</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Divide your research project into smaller, manageable tasks. Instead of "write thesis," break
                        it down into "outline chapter 1," "write introduction," "review literature on topic X."
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Set Artificial Deadlines</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Create your own deadlines for research milestones. Share these with your advisor or peers to
                        add accountability. This helps maintain momentum even when external deadlines are distant.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Track Your Progress</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Keep a research journal or use project management tools to track your daily progress. This
                        helps you see how much you've accomplished and identify patterns in your productivity.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="balance" className="mb-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Work-Life Balance</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Research can be all-consuming, but maintaining balance is crucial for long-term success and mental
                    health. Set clear boundaries between work and personal time, and stick to them.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Remember that rest and recreation are not luxuries - they're essential for maintaining creativity,
                    focus, and motivation. A well-rested mind is more productive than an exhausted one.
                  </p>
                </section>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-light mb-4">Need Help Managing Your Research Time?</h3>
              <p className="text-blue-100 mb-6">
                Get personalized productivity strategies and time management guidance from our expert mentors who
                understand the unique challenges of research students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs/research-mentorship">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get Mentorship
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
                  >
                    More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}