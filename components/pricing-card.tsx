"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  index: number
  onGetStarted?: () => void
}

export default function PricingCard({ title, price, description, features, popular, index, onGetStarted }: PricingCardProps) {
  return (
    <motion.div
      className="relative flex flex-col h-full bg-white/10 backdrop-blur-lg rounded-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      >
        {popular && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </div>
        )}
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-white mb-4">{price}</div>
        <p className="text-slate-300 mb-6">{description}</p>
        <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
      </div>
      <div className="mt-8">
          <Button
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          onClick={onGetStarted}
          >
            Get Started
          </Button>
      </div>
    </motion.div>
  )
}
