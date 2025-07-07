"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "research-proposal-guide",
      title: "How to Write a Winning Research Proposal",
      excerpt:
        "Learn the essential components of a compelling research proposal that gets noticed by scholarship committees and academic institutions.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Research Tips",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
    },
    {
      id: "academic-writing-guide",
      title: "Mastering Academic Writing: A Step-by-Step Guide",
      excerpt:
        "Discover proven strategies for clear, concise academic writing that effectively communicates your research findings.",
      author: "Prof. Ahmad Rahman",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Writing Skills",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: "scholarship-success-stories",
      title: "Scholarship Application Success Stories",
      excerpt:
        "Real stories from Indonesian students who secured international scholarships and their journey to academic excellence.",
      author: "Maria Sari",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Success Stories",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      id: "research-methodology-beginners",
      title: "Research Methodology for Beginners",
      excerpt:
        "A comprehensive introduction to research methods, from formulating hypotheses to analyzing data and drawing conclusions.",
      author: "Dr. Kevin Tan",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Methodology",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      id: "building-academic-network",
      title: "Building Your Academic Network",
      excerpt:
        "Essential tips for connecting with researchers, mentors, and peers to advance your academic and research career.",
      author: "Lisa Wong",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Networking",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      id: "time-management-research",
      title: "Time Management for Research Students",
      excerpt:
        "Proven techniques to balance coursework, research, and personal life while maintaining high academic standards.",
      author: "Dr. Ravi Patel",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Productivity",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-12">
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
                Research Blog
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and stories from our community of researchers and academic excellence champions.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${post.bgGradient} backdrop-blur-sm transform hover:scale-105 group cursor-pointer`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0 text-xs px-2 py-1`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500 space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}