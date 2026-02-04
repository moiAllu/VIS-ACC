"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, BookOpen, DollarSign, FileCheck, FileText, User } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ServiceProps {
  service: {
    title: string
    description: string
    icon: string
    link: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="h-6 w-6 text-white" />
      case "DollarSign":
        return <DollarSign className="h-6 w-6 text-white" />
      case "BarChart":
        return <BarChart className="h-6 w-6 text-white" />
      case "FileText":
        return <FileText className="h-6 w-6 text-white" />
      case "User":
        return <User className="h-6 w-6 text-white" />
      case "FileCheck":
        return <FileCheck className="h-6 w-6 text-white" />
      default:
        return <BookOpen className="h-6 w-6 text-white" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="bg-card border border-border h-full flex flex-col shadow-sm">
        <CardContent className="p-6 flex-grow">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            {getIcon(service.icon)}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-6 px-6">
          <Link
            href={service.link}
            className="text-blue-600 hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
