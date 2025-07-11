"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface DocumentationLayoutProps {
  children: React.ReactNode
}

export function DocumentationLayout({ children }: DocumentationLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navigationItems = [
    { id: "introduction", label: "Introduction" },
    { id: "getting-started", label: "Getting Started" },
    { id: "installation", label: "Installation" },
    { id: "configuration", label: "Configuration" },
    { id: "api-reference", label: "API Reference" },
    { id: "examples", label: "Examples" },
    { id: "troubleshooting", label: "Troubleshooting" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-blue-500">
      <div className="grid-container">
        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Sidebar */}
        <nav className={`toc-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="logo">Documentation</div>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
