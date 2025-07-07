"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, FileText, Edit3, BookOpen, ArrowRight } from "lucide-react"

export default function AcademicWritingGuidePage() {
  const tableOfContents = [
    { title: "Understanding Academic Writing", anchor: "#understanding" },
    { title: "Structure and Organization", anchor: "#structure" },
    { title: "Writing Techniques", anchor: "#techniques" },
    { title: "Citation and References", anchor: "#citations" },
    { title: "Revision and Editing", anchor: "#revision" },
  ]

  const writingPrinciples = [
    "Clear and concise language",
    "Logical argument structure",
    "Evidence-based claims",
    "Proper citation format",
    "Objective tone and style",
    "Coherent paragraph development",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50">
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
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4">
              Writing Skills
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              Mastering Academic Writing: A Step-by-Step Guide
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Prof. Ahmad Rahman</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Discover proven strategies for clear, concise academic writing that effectively communicates your research
              findings and engages your academic audience.
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
                <section id="understanding" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                    Understanding Academic Writing
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Academic writing is a formal style of writing used in universities and scholarly publications. It
                    differs from other forms of writing in its emphasis on clarity, precision, and evidence-based
                    arguments.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The key to successful academic writing lies in understanding your audience, purpose, and the
                    conventions of your discipline. Whether you're writing a research paper, thesis, or journal article,
                    these fundamental principles remain constant.
                  </p>
                </section>

                <section id="structure" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <FileText className="w-8 h-8 text-cyan-600 mr-3" />
                    Structure and Organization
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Essential Components:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {writingPrinciples.map((principle, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    A well-structured academic paper follows a logical progression from introduction to conclusion, with
                    each section building upon the previous one to create a coherent argument.
                  </p>
                </section>

                <section id="techniques" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Edit3 className="w-8 h-8 text-green-600 mr-3" />
                    Writing Techniques
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Use Active Voice</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Active voice makes your writing more direct and engaging. Instead of "The experiment was
                        conducted by the researchers," write "The researchers conducted the experiment."
                      </p>
                    </div>

                    <div className="border-l-4 border-cyan-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Maintain Objectivity</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Academic writing requires an objective tone. Avoid personal opinions and emotional language. Let
                        the evidence speak for itself through careful analysis and interpretation.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Use Precise Language</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Choose words carefully to convey exact meanings. Avoid vague terms like "a lot" or "very
                        important." Instead, use specific quantifiers and descriptive language.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="citations" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Citation and References</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Citation Best Practices:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Always cite sources for ideas that are not your own</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Use the citation style required by your discipline</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Include page numbers for direct quotes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Maintain consistency throughout your document</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="revision" className="mb-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Revision and Editing</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Effective academic writing is rewriting. Plan to revise your work multiple times, focusing on
                    different aspects during each revision: content, organization, clarity, and finally, grammar and
                    mechanics.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Consider seeking feedback from peers, mentors, or writing centers. Fresh perspectives can help
                    identify areas for improvement that you might have missed.
                  </p>
                </section>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-light mb-4">Need Help with Academic Writing?</h3>
              <p className="text-blue-100 mb-6">
                Get personalized guidance from our expert mentors who have mastered the art of academic communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs/research-mentorship">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get Writing Support
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
