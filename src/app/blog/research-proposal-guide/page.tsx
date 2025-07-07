"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Lightbulb, Target, FileText, ArrowRight } from "lucide-react"

export default function ResearchProposalGuidePage() {
  const tableOfContents = [
    { title: "Understanding Research Proposals", anchor: "#understanding" },
    { title: "Key Components", anchor: "#components" },
    { title: "Writing Strategies", anchor: "#strategies" },
    { title: "Common Mistakes to Avoid", anchor: "#mistakes" },
    { title: "Review and Revision", anchor: "#review" },
  ]

  const keyPoints = [
    "Clear problem statement and research questions",
    "Comprehensive literature review",
    "Detailed methodology section",
    "Realistic timeline and budget",
    "Strong theoretical framework",
    "Ethical considerations",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 mb-4">
              Research Tips
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              How to Write a Winning Research Proposal
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dr. Sarah Chen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Learn the essential components of a compelling research proposal that gets noticed by scholarship
              committees and academic institutions. This comprehensive guide will walk you through each step of the
              process.
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
                      className="block text-sm text-slate-600 hover:text-purple-600 transition-colors py-1"
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
                    <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
                    Understanding Research Proposals
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    A research proposal is your roadmap to academic success. It's a detailed document that outlines your
                    research project, demonstrating your understanding of the field, your research methodology, and the
                    significance of your proposed work.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Whether you're applying for graduate school, seeking research funding, or participating in
                    competitions like OPSI, a well-crafted proposal can make the difference between acceptance and
                    rejection.
                  </p>
                </section>

                <section id="components" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Target className="w-8 h-8 text-blue-600 mr-3" />
                    Key Components
                  </h2>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Essential Elements:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {keyPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Each component serves a specific purpose in convincing reviewers that your research is valuable,
                    feasible, and well-planned. Let's dive deeper into each element.
                  </p>
                </section>

                <section id="strategies" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <FileText className="w-8 h-8 text-green-600 mr-3" />
                    Writing Strategies
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Start with a Strong Hook</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Begin your proposal with a compelling opening that immediately captures the reader's attention.
                        Use statistics, thought-provoking questions, or real-world examples to demonstrate the
                        importance of your research.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Be Specific and Concrete</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Avoid vague statements and generalizations. Provide specific details about your methodology,
                        timeline, and expected outcomes. Reviewers want to see that you've thought through every aspect
                        of your research.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Show Your Expertise</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Demonstrate your knowledge of the field through a comprehensive literature review. Show how your
                        research builds upon existing work and fills important gaps in knowledge.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="mistakes" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Common Mistakes to Avoid</h2>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Being too ambitious with scope and timeline</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Inadequate literature review</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Unclear research questions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Ignoring ethical considerations</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="review" className="mb-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Review and Revision</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    The key to a successful research proposal is thorough revision. After completing your first draft,
                    set it aside for a few days, then return with fresh eyes. Look for clarity, coherence, and
                    completeness.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Consider seeking feedback from mentors, peers, or through our mentorship program. External
                    perspectives can help identify weaknesses and strengthen your proposal significantly.
                  </p>
                </section>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-light mb-4">Need Help with Your Research Proposal?</h3>
              <p className="text-purple-100 mb-6">
                Get personalized guidance from our expert mentors who have successfully navigated the research proposal
                process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs/research-mentorship">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get Mentorship
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
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
