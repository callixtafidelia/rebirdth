//components/ui/navbar.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

 const scrollToSection = (sectionId: string) => {
  if (sectionId === "about") {
    // Scroll to top of page for About section
    window.scrollTo({ top: 0, behavior: "smooth" })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  setIsMenuOpen(false)
}

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/95 backdrop-blur-xl border-purple-200/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                Rebirdth
              </span>
              <span className="text-xs text-slate-500 -mt-0.5 tracking-wider font-medium"> Re-define and Re-build your lost ideas </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: "About", id: "about" },
              { name: "Research", id: "research" },
              { name: "Programs", id: "programs" },
              { name: "Blog", id: "blog" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors duration-200 rounded-lg hover:bg-purple-50/50 relative group"
              >
                {item.name}
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </button>
            ))}

            <div className="ml-6 pl-6 border-l border-slate-200">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact
              </button>
            </div>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-purple-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-200/50 bg-white/95 backdrop-blur-xl">
            <nav className="px-2 py-4 space-y-1">
              {[
                { name: "About", id: "about" },
                { name: "Research", id: "research" },
                { name: "Programs", id: "programs" },
                { name: "Blog", id: "blog" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 text-sm font-medium rounded-lg"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  )
}
