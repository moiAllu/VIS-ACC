import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, Clock, Users, TrendingUp, Gift } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  package: string
  services: string[]
  message: string
}

interface WelcomePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: '',
    services: [],
    message: ''
  })

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formDataToSend = new FormData()
    
    // Add form fields to FormData
    formDataToSend.append('name', formData.name)
    formDataToSend.append('company', formData.company)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('package', formData.package)
    formDataToSend.append('services', JSON.stringify(formData.services))
    formDataToSend.append('message', formData.message)
    
    try {
      const response = await fetch('https://slategrey-porpoise-967301.hostingersite.com/', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message || 'Thank you! We\'ll be in touch shortly.')
        // Reset form data after successful submission
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          package: '',
          services: [],
          message: ''
        })
        onClose()
      } else {
        const errorData = await response.json().catch(() => null)
        alert(errorData?.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border border-border shadow-2xl welcome-popup-scrollbar"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(59, 130, 246, 0.5) transparent'
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 md:p-8">
              {/* Header Section */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full mb-4"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Special Welcome Offer
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  Transform Your Business Finances Today!
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground mb-6"
                >
                  Get a <span className="text-blue-600 font-semibold">FREE 30-minute consultation</span> and discover how our cloud-based accounting can save you time and money.
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                >
                  <div className="flex items-center justify-center p-3 bg-muted rounded-lg border border-border">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-muted-foreground text-sm">Save 10+ hours/week</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-muted rounded-lg border border-border">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-muted-foreground text-sm">Real-time insights</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-muted rounded-lg border border-border">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-muted-foreground text-sm">Expert support team</span>
                  </div>
                </motion.div>
              </div>

              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-muted/50 rounded-xl p-6 border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Book Your Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="popup-name" className="text-foreground text-sm">
                        Name *
                      </label>
                      <input
                        id="popup-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="popup-company" className="text-foreground text-sm">
                        Company Name *
                      </label>
                      <input
                        id="popup-company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="popup-email" className="text-foreground text-sm">
                        Email *
                      </label>
                      <input
                        id="popup-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="popup-phone" className="text-foreground text-sm">
                        Phone Number *
                      </label>
                      <input
                        id="popup-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="popup-package" className="text-foreground text-sm">
                      Interested Package (Optional)
                    </label>
                    <select
                      id="popup-package"
                      name="package"
                      value={formData.package}
                      onChange={(e) => handleInputChange('package', e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none [&>option]:bg-background"
                    >
                      <option value="">Select a package</option>
                      <option value="launch">Launch Package - $150/month</option>
                      <option value="grow">Grow Package - $300/month</option>
                      <option value="soar">Soar Package - $500/month</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-foreground text-sm block">Services You&apos;re Interested In</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Bookkeeping & Accounting Services',
                        'Payroll Services',
                        'Monthly Management Reports',
                        'Tax Preparation',
                        'Virtual Bookkeeper',
                        'Project Accounting'
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`popup-${service}`}
                            checked={formData.services.includes(service)}
                            onChange={(e) => handleServiceChange(service, e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-background border-input rounded focus:ring-blue-500"
                          />
                          <label htmlFor={`popup-${service}`} className="text-muted-foreground text-sm">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="popup-message" className="text-foreground text-sm">
                      Tell us about your business needs *
                    </label>
                    <textarea
                      id="popup-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground text-sm focus:border-blue-500 focus:outline-none"
                      placeholder="What challenges are you facing with your finances?"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Consultation'}
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to receive communications from Vision Accountants.
                  </p>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-center"
              >
                <div className="flex items-center justify-center space-x-6 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    <span>Expert advice</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 