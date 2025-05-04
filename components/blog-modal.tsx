"use client"

import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  blog: {
    title: string
    content: string
    image: string
    date: string
    author: string
  } | null
}

export default function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
      window.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen || !blog) return null

  // Function to convert blog content with paragraphs to JSX
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Check if paragraph is a heading (starts with number and colon)
      if (/^\d+:/.test(paragraph)) {
        return (
          <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
            {paragraph}
          </h3>
        )
      }

      // Check if paragraph starts with "Why" for subheadings
      if (
        paragraph.startsWith("Why") ||
        paragraph.includes("?") ||
        paragraph.startsWith("What") ||
        paragraph.startsWith("Ready")
      ) {
        return (
          <h4 key={index} className="text-lg font-medium text-white mt-5 mb-2">
            {paragraph}
          </h4>
        )
      }

      // Check if paragraph is a list item
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 text-slate-300 mb-2">
            {paragraph.substring(2)}
          </li>
        )
      }

      // Regular paragraph
      return (
        <p key={index} className="text-slate-300 mb-4">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div ref={modalRef} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <Card className="bg-slate-900/95 border-purple-500/30 shadow-xl overflow-hidden">
          <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-slate-900/95 border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="p-6">
            <div className="flex items-center text-sm text-slate-400 mb-6">
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <span>{blog.author}</span>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg">
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-auto object-cover" />
            </div>

            <div className="prose prose-invert max-w-none">{renderContent(blog.content)}</div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-center">
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Close
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
