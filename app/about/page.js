'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Users, 
  Eye,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Shield,
  Award,
  Globe,
  Star,
  Menu,
  X,
  CheckCircle,
  Zap,
  Building
} from 'lucide-react'

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const values = [
    {
      title: "Collaboration",
      description: "We believe in the power of purposeful collaboration.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Embracing Uniqueness",
      description: "We believe in the importance of being different.",
      icon: <Star className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      title: "Growth Mindset",
      description: "We believe in being open to change and growth—and knowing that those things are not always easy or fun.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "We Challenge Our Potential",
      description: "We're not afraid to try new things because that's how you grow as a company—and as individuals!",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Customer Centricity",
      description: "And lastly… we believe in YOU!",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ]

  const whyChooseUs = [
    "We're committed to providing the highest quality products and services possible",
    "We use agile development methods to make sure our clients' needs come first",
    "We pride ourselves on being flexible, so you can rely on us to roll with the punches (and keep rolling)",
    "Our team works hard to ensure that every member of your team is well-versed in the project and invested in its success",
    "We're focused on delivering results—so you won't have to worry about whether or not we'll get things done",
    "You won't want to leave once it's done: We treat every client like family, so there's no doubt that we'll be working with each other again in the future!"
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
              <a href="/about" className="text-[#38857a] font-semibold">About Us</a>
              <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
              <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
              <a href="/#contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
                <a href="/about" className="text-[#38857a] font-semibold">About Us</a>
                <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
                <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
                <a href="/#contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzUzOTU1MjAzfDA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white text-lg px-6 py-2">
                About
              </Badge>
              <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <span className="text-white">About Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                We Core Your 
                <span className="block" style={{color: '#FF914C'}}>Future</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We build software that works like the world around you.
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    We at Scriza are experts in software development, starting from scratch and building it from the ground up. We understand that not all projects are the same, and that's why we take the time to get to know you and your project before we begin.
                  </p>
                  <p>
                    We've seen it all—horror stories about projects that went south because of poor communication, inadequate planning, or simply not enough time. That's why we're here: to make sure that doesn't happen to you.
                  </p>
                </div>
              </div>
              <Button 
                size="lg" 
                style={{backgroundColor: '#38857a'}} 
                className="text-white hover:opacity-90"
                onClick={() => window.location.href = '/#contact'}
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85" 
                alt="Software Development" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF914C] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#38857a] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" style={{color: '#38857a'}} />
                </div>
                <CardTitle className="text-2xl font-bold" style={{color: '#38857a'}}>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Our mission at Scriza is to create great software that helps people to do better and faster with impact.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" style={{color: '#FF914C'}} />
                </div>
                <CardTitle className="text-2xl font-bold" style={{color: '#FF914C'}}>Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  At Scriza Software, we believe that every business has the potential to be successful. Our vision is to help you make it happen with software…
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Our values define who we are.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className={`h-2 ${value.color}`}></div>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-6`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-4 text-gray-900">{value.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Scriza Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85" 
                alt="Why Choose Scriza" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: '#38857a'}}>100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Why Choose Scriza?
                </h2>
                <p className="text-xl font-semibold" style={{color: '#FF914C'}}>
                  We're not just a software company. We're the solution to your problem.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We know you have a lot of options when it comes to choosing a software development company. That's why we're excited to share the six reasons why Scriza is your best option:
                </p>
              </div>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Don't wait another minute!
                </h2>
                <p className="text-xl text-gray-600">
                  Call us today to schedule a free consultation with one of our experts.
                </p>
              </div>
              <Button 
                size="lg" 
                style={{backgroundColor: '#FF914C'}} 
                className="text-white hover:opacity-90 px-12"
                onClick={() => window.location.href = '/#demo-section'}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Shield className="h-8 w-8 text-[#38857a]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Certification Number</div>
                <div className="text-[#38857a] font-bold">QMS220756</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Award className="h-8 w-8 text-[#FF914C]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Certification Number</div>
                <div className="text-[#FF914C] font-bold">ISMS220754</div>
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