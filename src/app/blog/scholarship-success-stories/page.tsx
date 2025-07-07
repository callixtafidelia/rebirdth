"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Trophy, Star, ArrowRight, Quote } from "lucide-react"

export default function ScholarshipSuccessStoriesPage() {
  const successStories = [
    {
      name: "Andi Pratama",
      scholarship: "Fulbright Scholarship",
      university: "Stanford University",
      program: "PhD in Environmental Science",
      story:
        "Coming from a small town in East Java, I never imagined I would study at Stanford. The key was starting early, building strong relationships with mentors, and being authentic in my application essays. I focused on how my research could address Indonesia's environmental challenges.",
      tip: "Start building your profile early. Engage in research projects, volunteer work, and leadership activities that align with your academic goals.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      name: "Sari Dewi",
      scholarship: "LPDP Scholarship",
      university: "University of Oxford",
      program: "Master's in Public Policy",
      story:
        "My journey to Oxford began with a clear vision of how I wanted to contribute to Indonesia's development. I spent months crafting my research proposal and connecting it to real policy challenges. The interview process was intense, but my preparation paid off.",
      tip: "Connect your academic goals with Indonesia's development needs. Show how your studies will benefit the country and demonstrate your commitment to returning.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      name: "Ravi Kumar",
      scholarship: "Australia Awards",
      university: "University of Melbourne",
      program: "Master's in Engineering",
      story:
        "As a first-generation college student, I faced many challenges. However, I focused on building a strong academic record and gaining practical experience through internships. My community service work also played a crucial role in my application.",
      tip: "Don't let your background limit your dreams. Focus on your strengths, seek mentorship, and demonstrate your potential through concrete achievements.",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-teal-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 mb-4">
              Success Stories
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              Scholarship Application Success Stories
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Maria Sari</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Real stories from Indonesian students who secured international scholarships and their journey to academic
              excellence. Learn from their experiences and apply their strategies to your own scholarship applications.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="space-y-8">
          {successStories.map((story, index) => (
            <Card key={index} className={`border-0 shadow-xl bg-gradient-to-br ${story.bgGradient} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-semibold text-slate-900 mb-2">{story.name}</h2>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={`bg-gradient-to-r ${story.gradient} text-white border-0`}>
                          {story.scholarship}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          {story.university}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          {story.program}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Quote className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-700 leading-relaxed italic">{story.story}</p>
                      </div>
                    </div>

                    <div className="bg-white/60 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Key Advice:</h4>
                          <p className="text-slate-700 leading-relaxed">{story.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-light text-slate-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Key Takeaways
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Start your preparation early - at least 1-2 years before application deadlines",
              "Build strong relationships with mentors and professors for recommendation letters",
              "Connect your academic goals with real-world impact and national development",
              "Demonstrate leadership through extracurricular activities and community service",
              "Be authentic in your essays - tell your unique story and experiences",
              "Practice interview skills and prepare for common scholarship questions",
            ].map((takeaway, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-light mb-4">Ready to Start Your Scholarship Journey?</h3>
          <p className="text-green-100 mb-6">
            Get personalized guidance and support for your scholarship applications from our expert mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs/scholarship-prep">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Join Scholarship Prep
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
              >
                More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
