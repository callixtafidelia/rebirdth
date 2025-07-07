//src/app/page.tsx

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import HaloBackground from "@/components/HaloBackground"
import Link from "next/link"
import Image from 'next/image'

import {
  BookOpen,
  Users,
  Trophy,
  Target,
  Globe,
  ArrowRight,
  Star,
  GraduationCap,
  Microscope,
  Calculator,
  Atom,
  FlaskConical,
  Brain,
  ChevronRight,
  Mail,
  MapPin,
  Sparkles,
  ArrowUp,
  Rocket,
  MessageCircle,
  Award,
  Lightbulb,
  Calendar,
  Clock,
  User,
} from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [email, setEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 1000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const researchAreas = [
    {
      icon: Microscope,
      title: "Life Sciences",
      description: "Biology, Medicine, Environmental Science",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
      slug: "life-science",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Pure & Applied Mathematics, Statistics",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      slug: "mathematics",
    },
    {
      icon: Atom,
      title: "Physics",
      description: "Theoretical & Experimental Physics",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      slug: "physics",
    },
    {
      icon: FlaskConical,
      title: "Chemistry",
      description: "Organic, Inorganic, Physical Chemistry",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      slug: "chemistry",
    },
    {
      icon: Brain,
      title: "Social Sciences",
      description: "Psychology, Economics, Sociology",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      slug: "social-sciences",
    },
    {
      icon: Globe,
      title: "Earth Sciences",
      description: "Geography, Geology, Climate Studies",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      slug: "earth-sciences",
    },
  ]

  const achievements = [
    {
      title: "OPSI Alumni",
      description: "Olimpiade Penelitian Siswa Indonesia",
      icon: Trophy,
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "OSN Champions",
      description: "Olimpiade Sains Nasional Winners",
      icon: Star,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "BIM Scholars",
      description: "Beasiswa Indonesia Maju Recipients",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "UBC Students",
      description: "University of British Columbia",
      icon: BookOpen,
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

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
    <div className="min-h-screen relative overflow-hidden">

     {/* Moving Halo Background */}
<HaloBackground 
  haloCount={30}
  haloSize={500}
  animationSpeed={0.8}
  mouseEffect={0.4}
  blurIntensity={50}
/>

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 via-transparent to-indigo-500/5" />
        <div className="absolute inset-0 bg-white/60 mix-blend-overlay" />

      {/* Main Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-45 lg:py-47 pt-40">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center relative z-10">
              <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Unlock Your Research
                </span>
                <span className="block font-normal bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent italic">
                  Potential
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Join a community of passionate researchers and get expert guidance from{" "}
                <span className="font-semibold text-purple-600">OPSI, OSN alumni</span> and{" "}
                <span className="font-semibold text-blue-600">BIM scholars</span> to excel in your academic journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("programs")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg group inline-flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("research")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="border-2 border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 bg-transparent inline-flex items-center justify-center"
                >
                  <Rocket className="mr-2 w-4 h-4" />
                  Explore Research Areas
                </button>
              </div>
            </div>
          </div>
        </section>

          {/* About Section */}
          <section id="about" className="py-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                {/*Left side - Bird Logo*/}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <Image
                      src="./logo.png"
                      alt="Rebirth Bird Logo"
                      width={384}   
                      height={384}  
                      className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
                   priority
                    />
                  </div>
                </div>

              {/* Right side - Content */}
              <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Indonesian Scholars &
                </span>
                <span className="block font-normal text-slate-700 italic mt-2">
                  Future Research Leaders
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl font-light">
                We’re dedicated to guiding Indonesian students on their journey to become confident researchers and innovators.
                Together, we’re building a supportive community that shares knowledge, experience, and inspiration.
              </p>
            </div>
            </div>

            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">
                    To become the leading platform that empowers Indonesian students to excel in research and academic
                    pursuits, fostering a generation of innovative thinkers who contribute meaningfully to global
                    knowledge and societal progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">
                    To provide free, high-quality educational resources, mentorship, and guidance to Indonesian
                    students, helping them develop research skills, academic excellence, and the confidence to pursue
                    their educational dreams.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Team */}
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-12 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Callixta Fidelia",
                    image: "./callixta.jpg",
                    gradient: "from-purple-500 to-blue-500",
                  },
                  {
                    name: "Rachmania Ulwani",
                    image: "./wani.jpg",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "Evint Leovonzko",
                    image: "./evint.jpg",
                    gradient: "from-green-500 to-teal-500",
                  },
                  {
                    name: "Farrel Ramdhani",
                    image: "./farrel.jpg",
                    gradient: "from-indigo-500 to-purple-500",
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm transform hover:scale-105 text-center"
                  >
                    <CardHeader className="pb-4">
                      <div className="relative mx-auto mb-4">
                        <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full p-1 shadow-lg`}>
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover bg-white"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">{member.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center space-x-3">
                        {[Mail, MessageCircle, Globe].map((Icon, iconIndex) => (
                          <button
                            key={iconIndex}
                            className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md`}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 border border-blue-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Research Areas We Cover
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  From STEM to social sciences,
                </span>
                <span className="block font-normal text-slate-700 italic">
                  get guidance across diverse research fields.
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-700 mx-auto font-light">
                  Learn proven methods, practical tips, and strategies to excel in your research journey.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${area.bgGradient} backdrop-blur-sm transform hover:scale-105 hover:rotate-1 group`}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">{area.description}</CardDescription>
                    <Link href={`/research/${area.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700">
                        Explore Topics <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-4 py-2 border border-green-300"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Our Programs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Comprehensive Educational
                </span>
                <span className="block font-normal text-slate-700 italic">Initiatives</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                Designed to nurture research excellence, academic growth, and innovation leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Research Mentorship",
                  description: "Free guidance and tips from experienced researchers and Olympic alumni",
                  features: [
                    "Research methodology guidance",
                    "Academic writing tips",
                    "Publication roadmaps",
                    "Conference presentation advice",
                  ],
                  gradient: "from-purple-500 to-blue-500",
                  bgGradient: "from-purple-50 to-blue-50",
                  slug: "research-mentorship",
                },
                {
                  icon: Users,
                  title: "Study Groups",
                  description: "Collaborative learning sessions for academic excellence",
                  features: [
                    "Weekly study sessions",
                    "Peer-to-peer learning",
                    "Exam preparation support",
                    "Subject-specific groups",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-50 to-cyan-50",
                  slug: "study-groups",
                },
                {
                  icon: Award,
                  title: "Scholarship Prep",
                  description: "Comprehensive preparation for international scholarships",
                  features: [
                    "Application essay guidance",
                    "Interview preparation",
                    "Portfolio development",
                    "Success story sharing",
                  ],
                  gradient: "from-green-500 to-teal-500",
                  bgGradient: "from-green-50 to-teal-50",
                  slug: "scholarship-prep",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${program.bgGradient} backdrop-blur-sm transform hover:scale-105 hover:rotate-1`}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{program.title}</CardTitle>
                    <CardDescription className="text-slate-600">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/programs/${program.slug}`}>
                      <Button
                        className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-medium transition-all duration-300 hover:scale-105`}
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 border border-indigo-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Latest Insights
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Research Tips &
                </span>
                <span className="block font-normal text-slate-700 italic">Educational Insights</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                Stay updated with the latest research methodologies, academic writing tips, and success stories from our
                community.
              </p>
            </div>

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
                    <div className="flex items-center justify-between text-sm text-slate-500">
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
                        className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View All Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-4 py-2 border border-green-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Ready to Join Our
                </span>
                <span className="block font-normal text-slate-700 italic">Community?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                We'd love to hear from you and help you on your educational journey. Let's create something amazing
                together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white to-blue-50/50 border-0 rounded-xl p-8 shadow-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        info: "rebirdth.id@gmail.com",
                        gradient: "from-purple-500 to-blue-500",
                      },
                      {
                        icon: MapPin,
                        title: "Location",
                        info: "Vancouver, BC, Canada",
                        gradient: "from-blue-500 to-cyan-500",
                      },
                      {
                        icon: Globe,
                        title: "Community",
                        info: "Global Indonesian Students",
                        gradient: "from-green-500 to-teal-500",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{contact.title}</h4>
                          <p className="text-slate-600">{contact.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    We'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200 bg-white/80"
                      placeholder="Tell us about yourself and how you'd like to get involved..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-slate-100 via-purple-100/50 to-blue-100/50 text-slate-800 py-16 relative overflow-hidden border-t border-purple-200/30">
                 <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                    Rebirth
                  </span>
                </div>
                <p className="text-slate-600 mb-6 max-w-sm leading-relaxed">
                  Empowering Indonesian students through research excellence, educational innovation, and community
                  building for positive societal impact.
                </p>
                <div className="flex space-x-3">
                  {[
                    { icon: Globe, gradient: "from-blue-500 to-cyan-500" },
                    { icon: Mail, gradient: "from-green-500 to-teal-500" },
                    { icon: MessageCircle, gradient: "from-indigo-500 to-purple-500" },
                  ].map(({ icon: Icon, gradient }, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="ghost"
                      className="w-10 h-10 rounded-lg hover:bg-purple-100/50 p-0 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-slate-500 hover:text-purple-600" />
                    </Button>
                  ))}
                </div>
                <p className="text-slate-500 mt-8 text-sm">© 2024 Rebirth. All rights reserved.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    { name: "About", href: "/#about" },
                    { name: "Research", href: "/#research" },
                    { name: "Programs", href: "/#programs" },
                    { name: "Blog", href: "/blog" },
                    { name: "Contact", href: "/#contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-600 hover:text-purple-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Connect
                </h4>
                <ul className="space-y-2">
                  {["LinkedIn", "Twitter", "Discord", "YouTube", "Medium"].map((platform) => (
                    <li key={platform}>
                      <a
                        href="#"
                        className="text-slate-600 hover:text-purple-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                      >
                        {platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-purple-300/50 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </Button>
        )}
      </div>
    </div>
  )
}
