'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Building,
  Star,
  Globe,
  Menu,
  X,
  Shield,
  Award,
  Send
} from 'lucide-react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    type: 'contact'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.mobile // Map mobile to phone for backend compatibility
        }),
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          type: 'contact'
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_6f914ea9-3001-4b15-8bcd-1974779942d6/artifacts/34xhd6p7_Scriza-3D-Logo.png" 
                alt="Scriza Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold" style={{color: '#38857a'}}>Scriza</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#38857a] transition-colors">Home</a>
              <a href="/about" className="text-gray-700 hover:text-[#38857a] transition-colors">About Us</a>
              <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
              <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
              <a href="/contact" className="text-[#38857a] font-semibold">Contact Us</a>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>sales@scriza.in</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Phone className="h-4 w-4" />
                  <span>+91 911 6011 899</span>
                </div>
              </div>
              <Button 
                style={{backgroundColor: '#FF914C'}} 
                className="text-white hover:opacity-90"
                onClick={() => window.location.href = '/#demo-section'}
              >
                Get a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-[#38857a] transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-[#38857a] transition-colors">About Us</a>
                <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
                <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
                <a href="/contact" className="text-[#38857a] font-semibold">Contact Us</a>
                <div className="pt-4 border-t border-border">
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4" />
                      <span>sales@scriza.in</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 911 6011 899</span>
                    </div>
                  </div>
                  <Button 
                    style={{backgroundColor: '#FF914C'}} 
                    className="text-white hover:opacity-90 w-full"
                    onClick={() => window.location.href = '/#demo-section'}
                  >
                    Get a Demo
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtfGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white text-lg px-6 py-2">
                Contact
              </Badge>
              <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <span className="text-white">Contact Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Have questions - 
                <span className="block" style={{color: '#FF914C'}}>Contact Us</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Let us help your business to move
                  <span className="block" style={{color: '#38857a'}}>forward.</span>
                </h2>
              </div>

              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name*
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email*
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number*
                      </label>
                      <Input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your message Here
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div className="flex justify-start">
                      <Button 
                        type="submit"
                        size="lg"
                        style={{backgroundColor: '#38857a'}}
                        className="text-white hover:opacity-90 px-12"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Submit
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map/Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-8 h-full min-h-[600px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-[#38857a] flex items-center justify-center mx-auto">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600 max-w-md">
                    Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Head Office */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" style={{color: '#38857a'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Head office</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                </CardDescription>
              </CardContent>
            </Card>

            {/* Email Us */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" style={{color: '#FF914C'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Email us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg">
                  <a href="mailto:sales@scriza.in" className="hover:text-[#FF914C] transition-colors">
                    sales@scriza.in
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Call Us */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" style={{color: '#38857a'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Call us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg">
                  <a href="tel:+919116011899" className="hover:text-[#38857a] transition-colors">
                    Sales :- +91-9116011899
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-12 w-12 text-[#38857a]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#FF914C] font-bold text-xl">QMS220756</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-[#FF914C]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#38857a] font-bold text-xl">ISMS220754</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_6f914ea9-3001-4b15-8bcd-1974779942d6/artifacts/34xhd6p7_Scriza-3D-Logo.png" 
                  alt="Scriza Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold" style={{color: '#FF914C'}}>Scriza Private Limited</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                We at Scriza are experts in software development, starting from scratch and building it from the ground up. We understand that not all projects are the same, and that's why we take the time to get to know you and your project before we begin.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#38857a] flex items-center justify-center">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF914C] flex items-center justify-center">
                  <Star className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{color: '#FF914C'}}>Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">API Documentation</a></li>
              </ul>
              <h4 className="text-lg font-semibold mt-8 mb-4" style={{color: '#FF914C'}}>Our Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Website Designing</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Application Development</a></li>
                <li><a href="#" className="hover:text-[#38857a] transition-colors">Digital Marketing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{color: '#FF914C'}}>Contact Info</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-[#38857a]" />
                  <div className="text-sm">
                    Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#38857a]" />
                  <span>+919116011899</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#38857a]" />
                  <span>sales@scriza.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Scriza Pvt Ltd. All Rights Reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#38857a] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#38857a] transition-colors">Terms and Conditions</a>
                <a href="#" className="hover:text-[#38857a] transition-colors">Refund & Cancellation Policy</a>
                <a href="#" className="hover:text-[#38857a] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#38857a] text-white p-4 rounded-lg shadow-lg max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-sm">We're Online!</span>
          </div>
          <p className="text-sm">How may I help you today?</p>
        </div>
      </div>
    </div>
  )
}