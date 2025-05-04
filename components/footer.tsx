import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                VISION
              </span>
              <span className="text-2xl font-bold text-white ml-1">Accountants</span>
            </Link>
            <p className="mb-6">
              Stress-Free Accounting, No Surprises. We help businesses turn financial chaos into clarity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="hover:text-purple-400 transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#bookkeeping" className="hover:text-purple-400 transition-colors">
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link href="#payroll" className="hover:text-purple-400 transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link href="#tax" className="hover:text-purple-400 transition-colors">
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link href="#project" className="hover:text-purple-400 transition-colors">
                  Project Accounting
                </Link>
              </li>
              <li>
                <Link href="#virtual" className="hover:text-purple-400 transition-colors">
                  Virtual Bookkeeper
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-0.5" />
                <span>USA & Canada</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-purple-400 mr-3 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mr-3 mt-0.5" />
                <span>admin@visionaccountant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vision Accountants. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
