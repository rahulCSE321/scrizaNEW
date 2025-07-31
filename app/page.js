'use client'

import { useState, useEffect } from 'react'
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
  Code, 
  Smartphone, 
  Users, 
  Star,
  CheckCircle,
  Award,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Building,
  GraduationCap,
  CreditCard,
  Plane,
  Hotel,
  Menu,
  X
} from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: 'demo' // demo or contact
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
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          type: 'demo'
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "We leverage tried and tested methodologies to offer bespoke software development solutions. The competitively priced technology products are created for both large and small enterprises across various industry verticals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Application Development",
      description: "With 12+ years of industry experience, we have become specialists in sophisticated iOS and Android mobile application development. Partner with us and accelerate the growth of your enterprises beyond your imagination.",
      image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Virtual Developer",
      description: "Need a developer who focuses on your key business outcomes? We'd love to help you streamline your business. Talk to one of our specialists and get a trusted and highly experienced virtual developer for your projects.",
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85"
    }
  ]

  const specializedServices = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Fintech Software Development",
      description: "Our expertise in fintech software development can help you build an app that will make your business run more efficiently and effectively.",
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel Software Development",
      description: "We develop, implement and maintain travel software applications for online booking, inventory management, and reservation functionality for the travel industry.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Recharge Portal Development",
      description: "We develop recharge portals that allow you to boost your business and take it to new heights!",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      icon: <Hotel className="h-6 w-6" />,
      title: "Hotel Management Software",
      description: "We have the expertise to develop an online hotel booking software that's easy to use and integrated with your existing back-end systems.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "School Management Software",
      description: "We're the best in the business at developing school software. We can create a custom management system for your school.",
      color: "bg-gradient-to-br from-teal-500 to-green-600"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Banking API Integration",
      description: "We're the banking API integrator that can help you connect your system with other banks' systems seamlessly.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ]

  const achievements = [
    { number: "2+", label: "Years Experience" },
    { number: "5K+", label: "Clients Worldwide" },
    { number: "30+", label: "Years Global Expertise" },
    { number: "100%", label: "Client Satisfaction" }
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
              <a href="#home" className="text-gray-700 hover:text-[#38857a] transition-colors">Home</a>
              <a href="about" className="text-gray-700 hover:text-[#38857a] transition-colors">About Us</a>
              <a href="#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
              <a href="#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
                <a href="#home" className="text-gray-700 hover:text-[#38857a] transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-[#38857a] transition-colors">About Us</a>
                <a href="#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
                <a href="#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
                <a href="#contact" className="text-gray-700 hover:text-[#38857a] transition-colors">Contact Us</a>
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
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-[#38857a] border-[#38857a]">
                  Scriza Private Limited
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Innovative Software 
                  <span className="block" style={{color: '#38857a'}}>Solutions</span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-semibold" style={{color: '#FF914C'}}>
                    Collaborate. Innovate. Build.
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We provide cutting-edge software development services to help businesses stay ahead in today's fast-paced digital world.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  style={{backgroundColor: '#38857a'}} 
                  className="text-white hover:opacity-90"
                  onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}
                >
                  Discover More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  style={{borderColor: '#FF914C', color: '#FF914C'}}
                  className="hover:bg-[#FF914C] hover:text-white"
                  onClick={() => document.getElementById('demo-section').scrollIntoView({behavior: 'smooth'})}
                >
                  Get a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85" 
                alt="Software Development" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF914C] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#38857a] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "30+ Years of Global Expertise in Business & Technology Consulting. Trusted Partner to 5k+ Clients Worldwide. Let's Create Your Digital Transformation Timeline with Experience & Innovation."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white shadow-lg" style={{color: '#38857a'}}>
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-3" style={{backgroundColor: '#FF914C'}}>Services</Badge>
                  <CardTitle className="text-xl mb-3" style={{color: '#38857a'}}>{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Who We Are</h2>
                <h3 className="text-2xl font-semibold" style={{color: '#FF914C'}}>
                  Powering Software Passionate about Technology.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you're looking for a top software development company that can be trusted to deliver high-quality, innovative solutions at a reasonable price, you've come to the right place. Scriza is the best software development company in the industry. We've been helping our clients solve their biggest problems with Tech.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center">
                    <Code className="h-8 w-8" style={{color: '#38857a'}} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Custom Software Development</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-[#38857a] h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">92%</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center">
                    <Smartphone className="h-8 w-8" style={{color: '#FF914C'}} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Application Development</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-[#FF914C] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">90%</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                style={{backgroundColor: '#38857a'}} 
                className="text-white hover:opacity-90"
                onClick={() => document.getElementById('specialized-services').scrollIntoView({behavior: 'smooth'})}
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85" 
                alt="Technology Innovation" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: '#38857a'}}>2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="specialized-services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Expert Software Development Services</h2>
            <p className="text-xl text-gray-600">Tailored to Your Business Needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className={`h-2 ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-4 text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-[#38857a] hover:text-[#FF914C] group-hover:translate-x-2 transition-all"
                  >
                    View More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievement</h2>
            <p className="text-xl text-white/90">See our success in our numbers.</p>
            <p className="text-lg text-white/80 mt-2">We have come a long way in the last few years...</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-white/90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Don't wait another minute!
              </h2>
              <p className="text-xl text-gray-600">
                Call us today to schedule a free consultation with one of our experts.
              </p>
            </div>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
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
                        Email Address *
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
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      type="submit"
                      size="lg"
                      style={{backgroundColor: '#FF914C'}}
                      className="text-white hover:opacity-90 px-12"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
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

              {/* Certifications */}
              <div className="mt-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded">
                    <Shield className="h-6 w-6 text-[#38857a]" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">QMS220756</div>
                    <div className="text-gray-400">ISO Certified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="bg-white p-2 rounded">
                    <Award className="h-6 w-6 text-[#FF914C]" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">ISMS220754</div>
                    <div className="text-gray-400">Security Certified</div>
                  </div>
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