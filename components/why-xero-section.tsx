"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ConsultationModal from "@/components/consultation-modal"

export default function WhyXeroSection() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why XERO?</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Xero is more than just accounting software—it's a complete financial management solution designed for modern businesses.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Real-Time Access",
            description: "Access your financial data anytime, anywhere. Xero's cloud-based platform gives you real-time insights into your business.",
            icon: "Cloud",
          },
          {
            title: "Automated Processes",
            description: "Save time with automated bank feeds, invoice reminders, and reconciliation. Focus on growing your business, not paperwork.",
            icon: "Automation",
          },
          {
            title: "Collaborative Platform",
            description: "Work seamlessly with your accountant, bookkeeper, and team members. Share data securely and collaborate in real-time.",
            icon: "Collaboration",
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
            <p className="text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Ready to Experience the Power of Xero?</h3>
        <p className="text-slate-300 mb-6">Let Vision Accountants help you get the most out of Xero.</p>
        <Button
          onClick={() => setIsConsultationModalOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          Book a Consultation
        </Button>
      </motion.div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </div>
  )
}
