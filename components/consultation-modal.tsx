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

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target as HTMLFormElement
    const formData = new FormData()
    
    // Get form elements
    const nameInput = form.querySelector('#modal-name') as HTMLInputElement
    const companyInput = form.querySelector('#modal-company') as HTMLInputElement
    const emailInput = form.querySelector('#modal-email') as HTMLInputElement
    const phoneInput = form.querySelector('#modal-phone') as HTMLInputElement
    const packageSelect = form.querySelector('#modal-package') as HTMLSelectElement
    const messageTextarea = form.querySelector('#modal-message') as HTMLTextAreaElement
    
    // Get selected services
    const selectedServices = Array.from(form.querySelectorAll('input[name="services"]:checked'))
      .map((checkbox) => (checkbox as HTMLInputElement).value)
    
    // Add form fields to FormData
    formData.append('name', nameInput.value)
    formData.append('company', companyInput.value)
    formData.append('email', emailInput.value)
    formData.append('phone', phoneInput.value)
    formData.append('package', packageSelect.value)
    formData.append('services', JSON.stringify(selectedServices))
    formData.append('message', messageTextarea.value)
    
    try {
      const response = await fetch('https://slategrey-porpoise-967301.hostingersite.com/', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message || 'Message sent successfully!')
        form.reset()
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto w-[98vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] bg-slate-900 text-white p-4 sm:p-6 md:p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-none">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-white">Book a Consultation</DialogTitle>
          <DialogDescription className="text-slate-300 text-sm md:text-base">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="space-y-2">
              <label htmlFor="modal-name" className="text-white text-sm md:text-base">
                Name
              </label>
              <input
                id="modal-name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-company" className="text-white text-sm md:text-base">
                Company Name
              </label>
              <input
                id="modal-company"
                name="company"
                type="text"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base"
                placeholder="Your company name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-email" className="text-white text-sm md:text-base">
                Email
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base"
                placeholder="Your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-phone" className="text-white text-sm md:text-base">
                Phone Number
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base"
                placeholder="Your phone number"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-package" className="text-white text-sm md:text-base">
                Select Package (Optional)
              </label>
              <select
                id="modal-package"
                name="package"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base [&>option]:bg-black"
              >
                <option value="">Select a package</option>
                <option value="launch">Launch Package - $150/month</option>
                <option value="grow">Grow Package - $300/month</option>
                <option value="soar">Soar Package - $500/month</option>
              </select>
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-white text-sm md:text-base block">Select Services</label>
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
                      value={service.label}
                      className="w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-500"
                    />
                    <label htmlFor={service.id} className="text-slate-300 text-sm md:text-base">
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-message" className="text-white text-sm md:text-base">
                Message
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm md:text-base"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm md:text-base py-2 md:py-3"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 