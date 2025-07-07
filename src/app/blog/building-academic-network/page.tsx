"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Users, MessageCircle, Globe, ArrowRight } from "lucide-react"

export default function BuildingAcademicNetworkPage() {
  const tableOfContents = [
    { title: "Why Academic Networking Matters", anchor: "#why-networking" },
    { title: "Building Your Network", anchor: "#building" },
    { title: "Online Networking Strategies", anchor: "#online" },
    { title: "Conference Networking", anchor: "#conferences" },
    { title: "Maintaining Relationships", anchor: "#maintaining" },
  ]

  const networkingStrategies = [
    {
      title: "Start with Your Institution",
      description: "Connect with professors, fellow students, and alumni from your university",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Engage on Social Media",
      description: "Use LinkedIn, Twitter, and ResearchGate to connect with researchers in your field",
      icon: MessageCircle,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Attend Academic Events",
      description: "Participate in conferences, workshops, and seminars to meet like-minded researchers",
      icon: Globe,
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  const networkingTips = [
    "Be genuine in your interactions - focus on building real relationships",
    "Offer value to others before asking for help or favors",
    "Follow up promptly after meeting new contacts",
    "Stay active in academic communities and discussions",
    "Share your knowledge and expertise with others",
    "Be patient - meaningful relationships take time to develop",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 mb-4">Networking</Badge>

            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
              Building Your Academic Network
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Lisa Wong</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 5, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Essential tips for connecting with researchers, mentors, and peers to advance your academic and research
              career. Learn how to build meaningful professional relationships in academia.
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
                      className="block text-sm text-slate-600 hover:text-cyan-600 transition-colors py-1"
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
                <section id="why-networking" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <Users className="w-8 h-8 text-cyan-600 mr-3" />
                    Why Academic Networking Matters
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Academic networking is more than just collecting business cards or LinkedIn connections. It's about
                    building meaningful relationships that can enhance your research, open doors to opportunities, and
                    provide support throughout your academic journey.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Strong academic networks can lead to research collaborations, job opportunities, mentorship
                    relationships, and access to resources that might otherwise be unavailable. In today's
                    interconnected academic world, your network truly is your net worth.
                  </p>
                </section>

                <section id="building" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6 flex items-center">
                    <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                    Building Your Network
                  </h2>
                  <div className="space-y-6">
                    {networkingStrategies.map((strategy, index) => (
                      <Card key={index} className="border-0 shadow-lg bg-gradient-to-r from-white to-slate-50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${strategy.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                            >
                              <strategy.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-slate-900 mb-2">{strategy.title}</h3>
                              <p className="text-slate-600">{strategy.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                <section id="online" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Online Networking Strategies</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-cyan-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">LinkedIn</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Create a professional profile highlighting your research interests and achievements. Connect
                        with researchers in your field and engage with their content meaningfully.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Academic Twitter</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Follow researchers, share insights about your work, and participate in academic discussions. Use
                        relevant hashtags to increase visibility.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">ResearchGate</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Share your publications, ask questions, and connect with researchers working on similar topics.
                        This platform is specifically designed for academic networking.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="conferences" className="mb-12">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Conference Networking</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Academic conferences provide excellent opportunities for face-to-face networking. Prepare an
                    elevator pitch about your research, attend social events, and don't be afraid to approach speakers
                    after their presentations.
                  </p>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Conference Networking Tips:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {networkingTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="maintaining" className="mb-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-6">Maintaining Relationships</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Building a network is just the beginning. The real value comes from maintaining and nurturing these
                    relationships over time. Regular communication, sharing relevant opportunities, and offering help
                    when possible are key to long-term networking success.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Remember that networking is a two-way street. Always look for ways to add value to your network,
                    whether through sharing resources, making introductions, or offering your expertise.
                  </p>
                </section>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-light mb-4">Ready to Expand Your Network?</h3>
              <p className="text-cyan-100 mb-6">
                Join our community and connect with fellow researchers, mentors, and academic professionals from around
                the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs/research-mentorship">
                  <Button
                    size="lg"
                    className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Join Our Community
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
                  >
                    More Networking Tips
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
