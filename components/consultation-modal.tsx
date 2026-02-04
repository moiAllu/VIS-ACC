import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  package: string
  services: string[]
  message: string
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
    const form = e.target as HTMLFormElement
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
        alert(data.message || 'Message sent successfully!')
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      // Only close if explicitly set to false (close button clicked)
      // Don't close if open is true (outside click)
      if (!open) {
        onClose()
      }
    }}>
      <DialogContent 
        className="max-h-[90vh] overflow-y-auto w-[98vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] bg-background text-foreground p-4 sm:p-6 md:p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-none" 
        onPointerDownOutside={(e) => e.preventDefault()} 
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">Book a Free Consultation</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm md:text-base">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="space-y-2">
              <label htmlFor="modal-name" className="text-foreground text-sm md:text-base">
                Name
              </label>
              <input
                id="modal-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-company" className="text-foreground text-sm md:text-base">
                Company Name
              </label>
              <input
                id="modal-company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base"
                placeholder="Your company name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-email" className="text-foreground text-sm md:text-base">
                Email
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base"
                placeholder="Your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-phone" className="text-foreground text-sm md:text-base">
                Phone Number
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base"
                placeholder="Your phone number"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-package" className="text-foreground text-sm md:text-base">
                Select Package (Optional)
              </label>
              <select
                id="modal-package"
                name="package"
                value={formData.package}
                onChange={(e) => handleInputChange('package', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base [&>option]:bg-background"
              >
                <option value="">Select a package</option>
                <option value="launch">Launch Package - $150/month</option>
                <option value="grow">Grow Package - $300/month</option>
                <option value="soar">Soar Package - $500/month</option>
              </select>
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-foreground text-sm md:text-base block">Select Services</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { id: 'modal-bookkeeping', label: 'Bookkeeping & Accounting Services' },
                  { id: 'modal-payroll', label: 'Payroll Services' },
                  { id: 'modal-reports', label: 'Monthly Management/Financial Reports' },
                  { id: 'modal-project', label: 'Project Accounting' },
                  { id: 'modal-backlog', label: 'Backlog Bookkeeping' },
                  { id: 'modal-virtual', label: 'Hire a full time virtual bookkeeper' },
                  { id: 'modal-tax', label: 'Tax Preparation' },
                  { id: 'modal-year-end', label: 'Annual/Year-end Accounts' }
                ].map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={service.id}
                      name="services"
                      checked={formData.services.includes(service.label)}
                      onChange={(e) => handleServiceChange(service.label, e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-background border border-input rounded focus:ring-blue-500"
                    />
                    <label htmlFor={service.id} className="text-muted-foreground text-sm md:text-base">
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-message" className="text-foreground text-sm md:text-base">
                Message
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-input rounded-lg text-foreground text-sm md:text-base"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-foreground text-sm md:text-base py-2 md:py-3"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 