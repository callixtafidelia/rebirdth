"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Search, BarChart3, FileText, ArrowRight } from "lucide-react"

export default function ResearchMethodologyBeginnersPage() {
  const tableOfContents = [
    { title: "What is Research Methodology?", anchor: "#what-is" },
    { title: "Types of Research", anchor: "#types" },
    { title: "Research Process", anchor: "#process" },
    { title: "Data Collection Methods", anchor: "#data-collection" },
    { title: "Analysis and Interpretation", anchor: "#analysis" },
  ]

  const researchTypes = [
    {
      type: "Quantitative Research",
      description: "Uses numerical data and statistical analysis",
      examples: ["Surveys", "Experiments", "Statistical analysis"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      type: "Qualitative Research",
      description: "Focuses on understanding meanings and experiences",
      examples: ["Interviews", "Focus groups", "Case studies"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      type: "Mixed Methods",
      description: "Combines both quantitative and qualitative approaches",
      examples: ["Sequential studies", "Concurrent designs", "Transformative frameworks"],
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  const researchSteps = [
    "Identify research problem",
    "Review existing literature",
    "Formulate research questions",
    "Choose methodology",
    "Collect data",
    "Analyze findings",
    "Draw conclusions",
    "Report results",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 mb-4">
              Methodology
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              Research Methodology for Beginners
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dr. Kevin Tan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 8, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              A comprehensive introduction to research methods, from formulating hypotheses to analyzing data and
              drawing conclusions. Perfect for students beginning their research journey.
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
                      className="block text-sm text-slate-600 hover:text-indigo-600 transition-colors py-1"
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
                <section id="what-is" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Search className="w-8 h-8 text-indigo-600 mr-3" />
                    What is Research Methodology?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Research methodology is the systematic approach used to conduct research. It encompasses the
                    methods, techniques, and procedures used to collect, analyze, and interpret data to answer research
                    questions or test hypotheses.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Think of methodology as your research roadmap - it guides you through the entire research process
                    and ensures your findings are valid, reliable, and meaningful.
                  </p>
                </section>

                <section id="types" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <BarChart3 className="w-8 h-8 text-purple-600 mr-3" />
                    Types of Research
                  </h2>
                  <div className="space-y-6">
                    {researchTypes.map((type, index) => (
                      <Card key={index} className="border-0 shadow-lg bg-gradient-to-r from-white to-slate-50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                            >
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-slate-900 mb-2">{type.type}</h3>
                              <p className="text-slate-600 mb-4">{type.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-slate-700">Examples:</h4>
                                {type.examples.map((example, exampleIndex) => (
                                  <div key={exampleIndex} className="flex items-center text-sm text-slate-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span>{example}</span>
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

                <section id="process" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Research Process</h2>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">8-Step Research Process:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {researchSteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-slate-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Each step builds upon the previous one, creating a systematic approach to generating new knowledge
                    and understanding.
                  </p>
                </section>

                <section id="data-collection" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Data Collection Methods</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Primary Data</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Data collected directly by the researcher through surveys, interviews, observations, or
                        experiments. This data is original and specific to your research question.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Secondary Data</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Existing data collected by others, such as published research, government statistics, or
                        organizational records. This data provides context and background for your research.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="analysis" className="mb-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Analysis and Interpretation</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Data analysis transforms raw data into meaningful insights. The method depends on your research
                    type: statistical analysis for quantitative data, thematic analysis for qualitative data, or a
                    combination for mixed methods.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Remember, analysis is not just about finding patterns - it's about interpreting what those patterns
                    mean in the context of your research question and existing knowledge.
                  </p>
                </section>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-light mb-4">Ready to Start Your Research?</h3>
              <p className="text-indigo-100 mb-6">
                Get personalized guidance on research methodology from our expert mentors who have successfully
                conducted research across various disciplines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs/research-mentorship">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get Research Guidance
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
                  >
                    More Methodology Tips
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
