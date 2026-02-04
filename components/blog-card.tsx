"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  content: string
}

interface BlogProps {
  blog: BlogPost
  index: number
  onReadMore: (blog: BlogPost) => void
}

export default function BlogCard({ blog, index, onReadMore }: BlogProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="bg-card border border-border h-full flex flex-col shadow-sm">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.author}</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{blog.title}</h3>
          <p className="text-muted-foreground">{blog.excerpt}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-6 px-6">
          <button
            onClick={() => onReadMore(blog)}
            className="text-blue-600 hover:text-blue-700 transition-colors flex items-center text-sm font-medium bg-transparent border-none cursor-pointer"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
