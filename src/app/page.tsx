//src/app/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/navbar"
import HaloBackground from "@/components/HaloBackground"
import Link from "next/link"
import Image from "next/image"
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
  Play,
  TrendingUp,
  Zap,
  CheckCircle,
  Timer,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MonitorPlay,
  FileText,
  Users2,
  Gamepad2,
  PenTool,
} from "lucide-react"

// Enhanced font configuration with better typography
const fontConfig = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

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

  // Enhanced research areas with more modern structure
  const researchAreas = [
    {
      icon: Microscope,
      title: "Life Sciences",
      description: "Biology, Medicine, Environmental Science",
      learners: "2.3k",
      courses: "45",
      difficulty: "Intermediate",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      slug: "life-science",
      features: ["Lab Simulations", "Research Methods", "Data Analysis"],
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Pure & Applied Mathematics, Statistics",
      learners: "1.8k",
      courses: "38",
      difficulty: "Advanced",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      slug: "mathematics",
      features: ["Problem Solving", "Proof Techniques", "Applications"],
    },
    {
      icon: Atom,
      title: "Physics",
      description: "Theoretical & Experimental Physics",
      learners: "1.5k",
      courses: "32",
      difficulty: "Advanced",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      slug: "physics",
      features: ["Experiments", "Theory", "Simulations"],
    },
    {
      icon: FlaskConical,
      title: "Chemistry",
      description: "Organic, Inorganic, Physical Chemistry",
      learners: "1.9k",
      courses: "41",
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      slug: "chemistry",
      features: ["Lab Work", "Reactions", "Analysis"],
    },
    {
      icon: Brain,
      title: "Social Sciences",
      description: "Psychology, Economics, Sociology",
      learners: "2.1k",
      courses: "36",
      difficulty: "Beginner",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      slug: "social-sciences",
      features: ["Research", "Case Studies", "Analytics"],
    },
    {
      icon: Globe,
      title: "Earth Sciences",
      description: "Geography, Geology, Climate Studies",
      learners: "1.4k",
      courses: "29",
      difficulty: "Beginner",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      slug: "earth-sciences",
      features: ["Field Work", "Climate Data", "Mapping"],
    },
  ]

  // Enhanced achievements with progress data
  const achievements = [
    {
      title: "OPSI Alumni",
      description: "Olimpiade Penelitian Siswa Indonesia",
      icon: Trophy,
      gradient: "from-amber-500 to-orange-500",
      count: "50+",
      progress: 85,
      growth: "+15%",
    },
    {
      title: "OSN Champions",
      description: "Olimpiade Sains Nasional Winners",
      icon: Star,
      gradient: "from-blue-500 to-indigo-500",
      count: "30+",
      progress: 72,
      growth: "+12%",
    },
    {
      title: "BIM Scholars",
      description: "Beasiswa Indonesia Maju Recipients",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-500",
      count: "25+",
      progress: 68,
      growth: "+8%",
    },
    {
      title: "UBC Students",
      description: "University of British Columbia",
      icon: BookOpen,
      gradient: "from-violet-500 to-purple-500",
      count: "15+",
      progress: 45,
      growth: "+25%",
    },
  ]

  // Enhanced blog posts with more metadata
  const blogPosts = [
    {
      id: "research-proposal-guide",
      title: "How to Write a Winning Research Proposal",
      excerpt:
        "Learn the essential components of a compelling research proposal that gets noticed by scholarship committees and academic institutions.",
      author: "Dr. Sarah Chen",
      authorImage: "/authors/sarah-chen.jpg",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "2.4k",
      likes: "156",
      category: "Research Tips",
      difficulty: "Intermediate",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
      tags: ["Research", "Academic Writing", "Scholarships"],
    },
    {
      id: "academic-writing-guide",
      title: "Mastering Academic Writing: A Step-by-Step Guide",
      excerpt:
        "Discover proven strategies for clear, concise academic writing that effectively communicates your research findings.",
      author: "Prof. Ahmad Rahman",
      authorImage: "/authors/ahmad-rahman.jpg",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      views: "3.1k",
      likes: "203",
      category: "Writing Skills",
      difficulty: "Advanced",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      tags: ["Writing", "Communication", "Skills"],
    },
    {
      id: "scholarship-success-stories",
      title: "Scholarship Application Success Stories",
      excerpt:
        "Real stories from Indonesian students who secured international scholarships and their journey to academic excellence.",
      author: "Maria Sari",
      authorImage: "/authors/maria-sari.jpg",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      views: "1.8k",
      likes: "89",
      category: "Success Stories",
      difficulty: "Beginner",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      tags: ["Success", "Motivation", "Scholarships"],
    },
  ]

  // New learning paths data
  const learningPaths = [
    {
      id: "research-fundamentals",
      title: "Research Fundamentals",
      description: "Master the basics of scientific research methodology",
      duration: "4 weeks",
      lessons: 16,
      enrolled: 2400,
      rating: 4.8,
      level: "Beginner",
      badge: "Certificate",
      gradient: "from-blue-500 to-indigo-500",
      skills: ["Research Design", "Data Collection", "Analysis"],
    },
    {
      id: "academic-excellence",
      title: "Academic Excellence",
      description: "Advanced strategies for academic success and publishing",
      duration: "6 weeks",
      lessons: 24,
      enrolled: 1800,
      rating: 4.9,
      level: "Advanced",
      badge: "Certification",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Academic Writing", "Publishing", "Presentations"],
    },
    {
      id: "scholarship-mastery",
      title: "Scholarship Mastery",
      description: "Complete guide to securing international scholarships",
      duration: "8 weeks",
      lessons: 32,
      enrolled: 3200,
      rating: 4.7,
      level: "Intermediate",
      badge: "Diploma",
      gradient: "from-emerald-500 to-teal-500",
      skills: ["Applications", "Essays", "Interviews"],
    },
  ]

  // Interactive features data
  const interactiveFeatures = [
    {
      icon: MonitorPlay,
      title: "Interactive Workshops",
      description: "Live sessions with expert mentors",
      count: "50+ weekly",
    },
    {
      icon: Users2,
      title: "Study Groups",
      description: "Collaborative learning communities",
      count: "200+ active",
    },
    {
      icon: FileText,
      title: "Research Templates",
      description: "Ready-to-use research frameworks",
      count: "100+ templates",
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Points, badges, and leaderboards",
      count: "Unlimited fun",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Enhanced Moving Halo Background */}
      <HaloBackground haloCount={35} haloSize={600} animationSpeed={0.6} mouseEffect={0.3} blurIntensity={60} />

      {/* Enhanced gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/8 via-transparent to-blue-500/8" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/6 via-transparent to-indigo-500/6" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/4 via-transparent to-teal-500/4" />
      <div className="absolute inset-0 bg-white/70 mix-blend-overlay" />

      {/* Main Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <Navbar />

       {/* Enhanced About Section as Hero */}
        <section className="relative py-32 lg:py-40 pt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-2 items-center mb-20">
              {/* Left side - Bird Logo */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                  <Image
                    src="./logo.png"
                    alt="Rebirth Bird Logo"
                    width={600}
                    height={600}
                    className="w-95 h-95 lg:w-96 lg:h-96 object-contain relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                  <Users className="w-4 h-4 mr-2" />
                  About Rebirth
                </Badge>
                <h1 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Indonesian Scholars
                  </span>
                  <span className="block font-light text-slate-700 italic mt-2">& Future Leaders</span>
                </h1>
                <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 leading-relaxed font-normal" style={fontConfig}>
                  We're dedicated to guiding Indonesian students on their journey to become confident researchers and
                  innovators. Together, we're building a supportive community that shares knowledge, experience, and
                  inspiration.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Research Excellence", "Global Network", "Academic Success"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Add CTA buttons here if desired */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      const element = document.getElementById("learning-paths")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25 group inline-flex items-center justify-center text-lg relative overflow-hidden"
                    style={fontConfig}
                  >
                    <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                    <span className="relative z-10">Start Learning</span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Interactive Features Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50/50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {interactiveFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                    <feature.icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</div>
                  <div className="text-sm text-slate-600 mb-2">{feature.description}</div>
                  <div className="text-xs font-medium text-purple-600">{feature.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Learning Paths Section */}
        <section id="learning-paths" className="py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <TrendingUp className="w-5 h-5 mr-2" />
                Popular Learning Paths
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Structured Learning
                </span>
                <span className="block font-light text-slate-700 italic mt-2">
                  from Beginner to Expert
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm transform hover:scale-105 hover:-rotate-1 group cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${path.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${path.gradient} text-white border-0 px-3 py-1`}>
                        {path.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{path.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-heading text-xl text-slate-900 mb-3" style={fontConfig}>
                      {path.title}
                    </CardTitle>
                    
                    <CardDescription className="text-body text-slate-600 text-sm mb-4" style={fontConfig}>
                      {path.description}
                    </CardDescription>

                    {/* Course metadata */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{path.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{path.enrolled.toLocaleString()} enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{path.badge}</span>
                      </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {path.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button className={`w-full bg-gradient-to-r ${path.gradient} hover:shadow-xl text-white font-medium transition-all duration-300 hover:scale-105 py-3 text-sm`} style={fontConfig}>
                      Start Learning Path
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Research Areas Section */}
        <section id="research" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <BookOpen className="w-5 h-5 mr-2" />
                Research Areas We Cover
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  From STEM to Social Sciences
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${area.bgGradient} backdrop-blur-sm transform hover:scale-105 hover:-rotate-1 group cursor-pointer`}>
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-white/80 text-slate-600 text-xs px-2 py-1">
                        {area.difficulty}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-heading text-xl text-slate-900 mb-3" style={fontConfig}>
                      {area.title}
                    </CardTitle>
                    
                    <CardDescription className="text-body text-slate-600 text-sm mb-4" style={fontConfig}>
                      {area.description}
                    </CardDescription>

                    {/* Enhanced metadata */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{area.learners} learners</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{area.courses} courses</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-white/60 text-slate-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Link href={`/research/${area.slug}`}>
                      <Button className="w-full bg-white/80 hover:bg-white text-slate-700 border border-slate-200 font-medium transition-all duration-300 hover:scale-105 py-3 text-sm" style={fontConfig}>
                        Explore {area.title}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Enhanced Achievement Section with Progress */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-20">
      <Badge className="text-caption mb-6 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-6 py-3 border border-amber-300">
        <Trophy className="w-5 h-5 mr-2" />
        Our Achievements
      </Badge>
      <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
        <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Celebrating Excellence &
        </span>
        <span className="block font-light text-slate-700 italic mt-2">Success Stories</span>
      </h2>
      <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal" style={fontConfig}>
        Showcasing the remarkable achievements of our community members who have excelled in competitions, secured prestigious scholarships, and made their mark in academia.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => (
        <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm transform hover:scale-105 group">
          <CardHeader className="text-center pb-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
              <achievement.icon className="w-10 h-10 text-white" />
            </div>
            
            <div className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
              {achievement.count}
            </div>
            
            <CardTitle className="text-heading text-lg text-slate-900 mb-2" style={fontConfig}>
              {achievement.title}
            </CardTitle>
            
            <CardDescription className="text-body text-slate-600 text-sm mb-4" style={fontConfig}>
              {achievement.description}
            </CardDescription>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>Progress</span>
                <span>{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="w-full h-2" />
            </div>

            {/* Growth indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-emerald-600">
              <TrendingUp className="w-4 h-4" />
              <span>{achievement.growth} this year</span>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</section>

        {/* Enhanced Blog Section */}
        <section id="blog" className="py-24 bg-gradient-to-br from-slate-50/30 via-purple-50/20 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <PenTool className="w-5 h-5 mr-2" />
                Latest Insights
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Research Tips &
                </span>
                <span className="block font-light text-slate-700 italic mt-2">Educational Insights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${post.bgGradient} backdrop-blur-sm transform hover:scale-105 group cursor-pointer overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0 px-3 py-1`}>
                        {post.category}
                      </Badge>
                      <Badge className="bg-white/80 text-slate-600 text-xs px-2 py-1">
                        {post.difficulty}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-heading text-lg text-slate-900 mb-3 line-clamp-2" style={fontConfig}>
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-body text-slate-600 text-sm line-clamp-3 mb-4" style={fontConfig}>
                      {post.excerpt}
                    </CardDescription>

                    {/* Author and metadata */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-900">{post.author}</div>
                        <div className="text-xs text-slate-500">{post.date}</div>
                      </div>
                    </div>

                    {/* Engagement metrics */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-white/60 text-slate-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex gap-2">
                      <Link href={`/blog/${post.id}`} className="flex-1">
                        <Button variant="ghost" className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-300 font-medium text-sm" style={fontConfig}>
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/blog">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl text-base" style={fontConfig}>
                  View All Articles
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
       
        </section>

        {/* Vision, Mission & Team Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Title and Subtitle for Vision & Mission */}
    <div className="text-center mb-20">
      <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
        <Target className="w-5 h-5 mr-2" />
        About Our Purpose
      </Badge>
      <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Our Vision & Mission
        </span>
        <span className="block font-light text-slate-700 italic mt-2">Guiding Principles</span>
      </h2>
      <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal" style={fontConfig}>
        Our commitment to empowering Indonesian students through excellence, innovation, and meaningful impact on global education.
      </p>
    </div>
            {/* Vision and Mission - Enhanced */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 backdrop-blur-sm hover:shadow-purple-500/10 transition-all duration-500 group">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-heading text-2xl text-slate-900 mb-3" style={fontConfig}>
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-body text-slate-600 text-base" style={fontConfig}>
                    To become the leading platform that empowers Indonesian students to excel in research and academic
                    pursuits, fostering a generation of innovative thinkers who contribute meaningfully to global
                    knowledge and societal progress.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 backdrop-blur-sm hover:shadow-blue-500/10 transition-all duration-500 group">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-heading text-2xl text-slate-900 mb-3" style={fontConfig}>
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-body text-slate-600 text-base" style={fontConfig}>
                    To provide free, high-quality educational resources, mentorship, and guidance to Indonesian
                    students, helping them develop research skills, academic excellence, and the confidence to pursue
                    their educational dreams.
                  </CardDescription>
                </CardContent>
              </Card>
            </div> 

            {/* Team Section - Enhanced */}
            <div className="text-center">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Passionate Educators &
              </span>
              <span className="block font-light text-slate-700 italic mt-2">Dedicated Mentors</span>
            </h2>
            <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal" style={fontConfig}>
              Meet the inspiring individuals behind Rebirth who are committed to guiding Indonesian students toward academic excellence and research innovation.
            </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Callixta Fidelia",
                    image: "./callixta.jpg",
                    gradient: "from-purple-500 to-pink-500",
                    role: "Research Mentor",
                  },
                  {
                    name: "Rachmania Ulwani",
                    image: "./wani.jpg",
                    gradient: "from-blue-500 to-cyan-500",
                    role: "Academic Advisor",
                  },
                  {
                    name: "Evint Leovonzko",
                    image: "./evint.jpg",
                    gradient: "from-emerald-500 to-teal-500",
                    role: "Program Director",
                  },
                  {
                    name: "Farrel Ramdhani",
                    image: "./farrel.jpg",
                    gradient: "from-violet-500 to-purple-500",
                    role: "Community Lead",
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm transform hover:scale-105 text-center group"
                  >
                    <CardHeader className="pb-4">
                      <div className="relative mx-auto mb-6">
                        <div
                          className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-3xl p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full rounded-3xl object-cover bg-white"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-heading text-xl text-slate-900 mb-3" style={fontConfig}>
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-slate-600 font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center space-x-3">
                        {[Mail, MessageCircle, Globe].map((Icon, iconIndex) => (
                          <button
                            key={iconIndex}
                            className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                          >
                            <Icon className="w-5 h-5 text-white" />
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

        {/* Programs Section - Enhanced */}
        <section id="programs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <Rocket className="w-5 h-5 mr-2" />
                Our Programs
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Comprehensive Educational
                </span>
                <span className="block font-light text-slate-700 italic mt-2">Initiatives</span>
              </h2>
              <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal" style={fontConfig}>
                Designed to nurture research excellence, academic growth, and innovation leadership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  gradient: "from-emerald-500 to-teal-500",
                  bgGradient: "from-emerald-50 to-teal-50",
                  slug: "scholarship-prep",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${program.bgGradient} backdrop-blur-sm transform hover:scale-105 hover:rotate-1 group`}
                >
                  <CardHeader className="pb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-heading text-2xl text-slate-900 mb-3" style={fontConfig}>
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-body text-slate-600 text-base" style={fontConfig}>
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/programs/${program.slug}`}>
                      <Button
                        className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-xl text-white font-medium transition-all duration-300 hover:scale-105 py-3 text-base`}
                        style={fontConfig}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="text-caption mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 border border-purple-300">
                <Zap className="w-5 h-5 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-heading text-4xl lg:text-5xl text-slate-900 mb-8 tracking-tight" style={fontConfig}>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Ready to Join Our
                </span>
                <span className="block font-light text-slate-700 italic mt-2">Community?</span>
              </h2>
              <p className="text-body text-lg lg:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal" style={fontConfig}>
                We'd love to hear from you and help you on your educational journey. Let's create something amazing
                together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white to-blue-50/50 border-0 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8">
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
                        gradient: "from-emerald-500 to-teal-500",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-6 group cursor-pointer">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300`}
                        >
                          <contact.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg">{contact.title}</h4>
                          <p className="text-slate-600">{contact.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-3xl">
                <CardHeader className="pb-8">
                  <CardTitle className="text-heading text-2xl text-slate-900 mb-3" style={fontConfig}>
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-body text-slate-600 text-base" style={fontConfig}>
                    We'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-3">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-3">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-3">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/80 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-3">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200 bg-white/80 text-base"
                      placeholder="Tell us about yourself and how you'd like to get involved..."
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 font-medium transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                    style={fontConfig}
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-3" />
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
            className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 group"
            style={fontConfig}
          >
            <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  )
}