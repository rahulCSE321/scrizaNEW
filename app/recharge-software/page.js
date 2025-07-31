'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Users, 
  Star,
  Shield,
  Award,
  Globe,
  Menu,
  X,
  CheckCircle,
  Smartphone,
  Zap,
  CreditCard,
  BarChart3,
  Lock,
  Clock,
  Headphones,
  Palette,
  ArrowDown,
  Send
} from 'lucide-react'

export default function RechargeSoftwarePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    option: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
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
          type: 'demo',
          phone: formData.mobile,
          message: `Recharge Software Demo Request - Selected Option: ${formData.option}`
        }),
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          option: ''
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const apiServices = [
    "Bank Account Verification API",
    "UPI Verification API", 
    "Company Verification API",
    "DIN Verification API",
    "Udyog Aadhaar Verification API",
    "Aadhaar Verification API",
    "Voter ID Verification API",
    "PAN Card Validation API",
    "Driving Licence Verification API",
    "Advanced API for Vehicle RC Verification",
    "Aadhaar Validation API"
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Supports various telecom operators",
      description: "Serve a wider customer base and offer recharge services for any service provider. Our software supports multiple service providers and major telecom operators in India."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Scriza has an unswerving dedication to robust security measures. Therefore, with each software solution, we deliver the promise of safety and confidentiality. Rest assured, all of the customer data and transaction details will remain secure."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Comprehensive Reporting",
      description: "Want to stay ahead of the competition? Try our recharge software solution that also provides valuable insights into your recharge business. Features like comprehensive reporting and analytics are great for monitoring sales, tracking recharge trends, and making informed business decisions."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easy API Integration",
      description: "No hassle for additional back-end developments. Simply integrate our recharge software with your existing systems, websites, or mobile applications and enhance the user experience. Our offered robust APIs are known for their ease of use."
    }
  ]

  const whyChooseFeatures = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "User-Friendly Interface",
      description: "Scriza's advantage lies in its user-friendly and intuitive interface. Our software is thoughtfully designed to deliver a smooth recharging platform for non-tech savvy personnel. No need to understand all the technical jargon, simply connect with us and make the recharging processes quick and effortless."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment gateway of your choice",
      description: "We are ranked as the top service provider for recharge software because we offer custom development solutions. We will include a payment gateway of your choice to ensure a seamless recharging experience."
    }
  ]

  const bestFeatures = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Flexible Payment Options",
      description: "Our software development solutions can be integrated with your choice of payment gateways. This will be an added benefit because your customers get to choose from a wide range of payment options, including credit cards, debit cards, net banking, and mobile wallets."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "White Label Solutions",
      description: "We offer customizable white label software development solutions for all sizes of organisations. We can brand the recharge software with your own logo, design, and branding elements. Connect with us to explore the options for giving your business a unique identity."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Technical Support",
      description: "Recharge from anywhere and at any time with total confidence because our dedicated support team is always available to assist you. We are working round the clock to resolve your queries or technical issues."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "White Label Solutions",
      description: "Get customized recharge software as per your specifications. Enjoy multiple API integrations, secure payment processing and a single recharge platform at Scriza. Connect with us to explore the features and benefits."
    }
  ]

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
              <a href="/contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
                onClick={() => document.getElementById('demo-section').scrollIntoView({behavior: 'smooth'})}
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
                <a href="/contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#38857a]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#FF914C]/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <a href="/" className="hover:text-[#38857a] transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#38857a] font-semibold">Recharge Software</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Recharge 
                    <span className="block" style={{color: '#38857a'}}>Software</span>
                  </h1>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Scriza simplifies recharging solutions with a robust and efficient platform. In this era of mobile connectivity, take your business to new heights with our hassle-free and seamless recharging solutions.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold" style={{color: '#38857a'}}>
                        India's best recharge software provider is empowering
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#38857a]/10 to-[#38857a]/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-[#38857a] flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Telecom Operators</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF914C]/10 to-[#FF914C]/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF914C] flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Service Providers</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <Star className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Entrepreneurs</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-4">
                      What are you waiting for? Deliver exceptional recharging experience to your customers by connecting with us. We offer top-notch recharging technology which works smoothly and efficiently. Connect with our team to discuss more about your business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Illustration */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#38857a] to-[#FF914C] rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Smartphone className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Recharge Platform</h3>
                      <p className="text-white/90">Seamless & Efficient</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Mobile Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>DTH Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Data Card Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Multi-Service Platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Demo Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of choosing the best Mobile Recharge Software Development Company
                </h2>
                <p className="text-lg text-[#38857a] font-semibold mb-6">
                  Grow your business with the best in the industry.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">Eliminate the recharge and payment complexities</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">Eliminate the hassles of traditional manual recharge methods</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Automate and streamline the mobile recharge process</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Being the most trusted recharge software provider in the industry, we are dedicated to delivering best-in-class products. Simplify the user experience by leveraging our wide range of recharge options, including prepaid mobile recharge, DTH recharge, data card recharge, and more, all from a single platform.
                </p>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the features provided by the best recharge software development company?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We provide B2B and B2C recharge solutions. Do recharges for any service providers from anywhere at any time. All you need is one account to manage the recharging requests. Below are the features that offer a competitive edge to your recharging business.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why choose our recharge software development solutions?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Reduce the chance of fraud or manual errors during recharging. Connect with us and empower your business decisions.
                </p>
                
                <div className="space-y-8">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF914C] to-[#38857a] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Scriza assures you of smooth operations and uninterrupted service delivery at the best price. What else do you need? Attain a competitive edge by making us your technology partners.
                  </p>
                </div>
              </div>

              {/* Best Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us India's best multi recharge software development company?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Quick, easy and reliable solution for all your mobile and DTH recharge applications. With our low development costs and custom solutions, we have become a preferred name for recharge software development in India.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {bestFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us - Transform your recharge business</h2>
                <p className="text-xl text-white/90 mb-6">
                  So don't waste time anymore, unlock new growth opportunities in the dynamic world of mobile recharge services.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section').scrollIntoView({behavior: 'smooth'})}
                >
                  Book For Demo
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Demo Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Demo Form */}
                <Card id="demo-section" className="bg-white shadow-xl border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Book For Demo</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number*
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +91
                          </span>
                          <Input
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="rounded-l-none border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select Option
                        </label>
                        <Select value={formData.option} onValueChange={(value) => handleSelectChange('option', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]">
                            <SelectValue placeholder="---- Select Option ----" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mobile-recharge">Mobile Recharge</SelectItem>
                            <SelectItem value="dth-recharge">DTH Recharge</SelectItem>
                            <SelectItem value="data-card">Data Card Recharge</SelectItem>
                            <SelectItem value="multi-service">Multi-Service Platform</SelectItem>
                            <SelectItem value="custom-solution">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="text-center text-sm text-gray-600 py-2">
                        100% Privacy. We Don't Share Your Data.
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full"
                        style={{backgroundColor: '#38857a'}}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Book Demo
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* API Services */}
                <Card className="bg-white shadow-lg border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">API Verification Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      {apiServices.map((service, index) => (
                        <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-700">{service}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Try it now</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Confirm your compliance with the UIDAI norms of Aadhaar Validation with our API technology. Talk to our sales team right now to access the hassle-free validation solution.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" style={{backgroundColor: '#38857a'}} className="text-white">
                          Contact Us
                        </Button>
                        <Button size="sm" variant="outline" className="border-[#FF914C] text-[#FF914C]">
                          About Us
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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