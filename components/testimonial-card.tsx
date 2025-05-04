"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  testimonial: {
    name: string
    role: string
    content: string
    image: string
  }
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white/10 backdrop-blur-lg border-0 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-slate-300 mb-6 flex-grow">{testimonial.content}</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-medium">{testimonial.name}</h4>
              <p className="text-slate-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
