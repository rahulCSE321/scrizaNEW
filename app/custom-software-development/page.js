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
  Users, 
  Star,
  Shield,
  Award,
  Globe,
  Menu,
  X,
  CheckCircle,
  Code,
  Smartphone,
  Monitor,
  Zap,
  TrendingUp,
  Lock,
  DollarSign,
  BarChart3,
  Settings,
  Database,
  Layers,
  Target,
  Lightbulb,
  MessageSquare,
  Clock,
  Send,
  Building2,
  Cog,
  PieChart
} from 'lucide-react'

export default function CustomSoftwarePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: 'custom-software'
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
          type: 'custom-software'
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const efficiencyFeatures = [
    { title: "100% Customization", description: "Get software that works exactly the way you want." },
    { title: "Scalability", description: "Software solutions that can expand to match your business growth." },
    { title: "Flexibility", description: "Ready to roll software features with changing business needs." },
    { title: "Automate Processes", description: "Reduce manual work by automating routine tasks." },
    { title: "Improve Workflow", description: "Enhanced coordination and workflow management." },
    { title: "Real-time Info Access", description: "Get real-time data analysis for your business operations." }
  ]

  const costBenefits = [
    { title: "Reduce Operational Costs", description: "Streamline processes to save money." },
    { title: "Increase Revenue", description: "Improved efficiency leads to better business performance." },
    { title: "Long-Term Savings", description: "Fewer issues and updates compared to off-the-shelf software." }
  ]

  const securityFeatures = [
    { title: "Data Encryption", description: "Keep sensitive information secure." },
    { title: "Access Control", description: "Restrict access to critical data." },
    { title: "Regular Updates", description: "Keep customer data safe with security features." }
  ]

  const specializations = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "ERP Solutions",
      description: "We have successfully implemented ERP systems in the retail, manufacturing, healthcare and finance sector. We provided bespoke software with features for handling sales, production, inventory and supply chain.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "CRM Systems", 
      description: "Our custom CRM systems are packed with features that make them way better than the off-the-shelf options. For instance, advanced customer segmentation can easily target specific client needs. The features of automated follow-ups ensure you never miss a lead.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Supply Chain Management",
      description: "Our custom software for supply chain management has been a game-changer for various industries. In retail, we have enhanced inventory management and supplier coordination. In the automotive sector, we have simplified parts procurement and distribution.",
      color: "from-green-500 to-emerald-600"
    }
  ]

  const developmentServices = [
    { icon: <Smartphone className="h-6 w-6" />, title: "Mobile Apps", description: "iOS, Android, and cross-platform solutions." },
    { icon: <Globe className="h-6 w-6" />, title: "Web Applications", description: "Custom web apps for various business functions." }, 
    { icon: <Monitor className="h-6 w-6" />, title: "Desktop Applications", description: "Reliable and high performing desktop software." }
  ]

  const whyChooseUs = [
    {
      title: "Expertise and Experience",
      features: [
        "Proven Track Record: Over 100 positive customisation projects.",
        "Industry Experts: Skilled developers with domain expertise.", 
        "Customer Satisfaction: High customer satisfaction rate."
      ]
    },
    {
      title: "Next-gen Solutions", 
      features: [
        "Modern Technologies: AI, Machine Learning, Blockchain and more.",
        "Creative Approaches: Unique solutions to complex problems.",
        "Future-Ready Solutions: Scalable and adaptable software."
      ]
    },
    {
      title: "Customer-Centric Approach",
      features: [
        "Custom Solutions: We create services specifically designed for your business.",
        "Clear Communication: Enjoy weekly project updates throughout the process.",
        "Post-Deployment Support: Ongoing support to ensure smooth operations."
      ]
    }
  ]

  const statistics = [
    { number: "50%", label: "Increase in Productivity", description: "Custom software streamlines operations, leading to significant productivity gains." },
    { number: "30%", label: "Reduction in Costs", description: "Automating tasks can help you cut down business process costs." },
    { number: "40%", label: "Improvement in Customer Satisfaction", description: "Better customer service with personalized solutions." }
  ]

  const services = [
    { icon: <Settings className="h-8 w-8" />, title: "Bespoke solutions", description: "We deliver tailor-made solutions best suited to your business requirements." },
    { icon: <Users className="h-8 w-8" />, title: "Experienced Developers", description: "Our skilled team has worked for 500+ from various industries." },
    { icon: <Cog className="h-8 w-8" />, title: "High-end tools", description: "We use a broad range of high-end software development" },
    { icon: <Clock className="h-8 w-8" />, title: "Well-timed delivery", description: "Our motivated team gives their best to launch the product within the agreed timeline." },
    { icon: <DollarSign className="h-8 w-8" />, title: "Affordable packages", description: "We can adapt to what you expect and keep the price range budget and friendly." },
    { icon: <MessageSquare className="h-8 w-8" />, title: "Constant tech support", description: "We never stop working; constant maintenance and post-release support are assured." }
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
                onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})}
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background with modern gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#38857a]/20 to-[#FF914C]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <a href="/" className="hover:text-[#38857a] transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#38857a] font-semibold">Custom software development solutions</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Custom Software Development for 
                  <span className="block bg-gradient-to-r from-[#38857a] to-[#FF914C] bg-clip-text text-transparent">
                    50% higher revenue growth
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 font-semibold">
                    Workflow efficiency, productivity, customer satisfaction and whatnot!
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The custom software development services by Scriza can boost your business to the next level of efficiency.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Invest in our bespoke software and tailor-made technology solutions. These are designed to fulfil the unique requirements of your business.
                  </p>
                  <p className="text-lg text-gray-700 font-medium">
                    Scriza is a bespoke solution provider that drives results. So get in touch with our technology experts and enjoy 50% higher revenue from now onwards.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  style={{backgroundColor: '#38857a'}} 
                  className="text-white hover:opacity-90"
                  onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  style={{borderColor: '#FF914C', color: '#FF914C'}}
                  className="hover:bg-[#FF914C] hover:text-white"
                  onClick={() => document.getElementById('about-section').scrollIntoView({behavior: 'smooth'})}
                >
                  About
                </Button>
              </div>
            </div>
            
            {/* Right Side Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#38857a] to-[#FF914C] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Custom Software</h3>
                    <p className="text-white/90">Tailored for Your Business</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                      <span>50% Revenue Growth</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <Shield className="h-6 w-6 mx-auto mb-2" />
                      <span>Enhanced Security</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <Zap className="h-6 w-6 mx-auto mb-2" />
                      <span>Process Automation</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <Target className="h-6 w-6 mx-auto mb-2" />
                      <span>100% Customization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Efficiency Section */}
          <div id="about-section" className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    How do custom application development services make your business 50% more efficient?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every business has unique software needs. Off-the-shelf solutions often fall short in completing such specific requirements. Our custom software development ensures that every feature is designed to fit your business processes.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {efficiencyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}:</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3NTM5NjQ5MDB8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Software Development Team Collaboration" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38857a]/90 via-[#38857a]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                    <p className="text-white/90">Building efficient solutions together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost-Effective Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1609659901102-176a8f275b15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2R1Y3Rpdml0eXxlbnwwfHx8fDE3NTM5NjQ5MDZ8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Business Productivity Workspace" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-green-600/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
                    <p className="text-white/90">Maximizing ROI through efficient solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Cost-Effective Custom business software
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Investing in custom software seem costly upfront to small sized business. Though your investment pays off in the long run. Our custom software development services are designed to provide maximum return on investment.
                </p>
                
                <div className="space-y-4">
                  {costBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}:</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  #1 Custom Software Company offering Enhanced Security
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Protect your business data with custom software solutions that offer enhanced security features. Our custom software company ensures your data is secure from breaches and unauthorized access.
                </p>
                
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}:</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc1MzkwOTQyM3ww&ixlib=rb-4.1.0&q=85" 
                    alt="Secure Software Development" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Data Protection</h3>
                    <p className="text-white/90">Advanced security measures & encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our specialization: Custom Software Development Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We create custom software for businesses that aligns with your specific goals. Our solutions are crafted to improve your business processes and bring in growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${spec.color}`}></div>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${spec.color} flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {spec.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-4 text-gray-900">{spec.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {spec.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Services */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3NTM5NjQ5MDB8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Professional Development Meeting" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38857a]/90 via-[#38857a]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Development Excellence</h3>
                    <p className="text-white/90">Professional development services</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Development Services</h3>
                  
                  <div className="grid md:grid-cols-1 gap-6 mb-8">
                    {developmentServices.map((service, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{service.title}:</h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      We sit down with to chat about your needs. We then whip up custom software that perfectly suits your business. Our team handles everything from the initial brainstorming to the final rollout. And the best part? We are always here for software support. Have a quick question or a new feature, our support team has got your back. Let us create some amazing software solutions together.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What makes us the best custom development company?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((section, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <div className="space-y-3">
                      {section.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <p className="text-gray-600 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Result driven custom software for your business
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Custom software development can reduce manual errors, and you can increase profitability with automation features. Here are some key benefits:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {statistics.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-[#38857a]/10 to-[#FF914C]/10 shadow-lg border-0 text-center">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold mb-2" style={{color: index % 2 === 0 ? '#38857a' : '#FF914C'}}>
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Begin with the best custom software developer today!
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-4xl mx-auto">
                Thousands of businesses in your industry are getting help from the best custom software development companies to the next level? What is ceasing you from growing your productivity levels by 50%?
              </p>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Contact us today to get into your custom software development needs. Our team is here to create software that drives success. Partner with the leading custom development company and experience the difference custom solutions can make.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#38857a] hover:bg-white/90"
                onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})}
              >
                Get Started Now
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What do we offer?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                So far, we have successfully delivered over 750 software development projects and helped big and small enterprises achieve their business targets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <Badge className="mb-3" style={{backgroundColor: '#FF914C'}}>Services</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div id="contact-section" className="text-center">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact now</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
                  Scriza boasts a passionate team of individuals who have access to the most powerful development technology. Leverage our proficiency and get bespoke software development solutions suitable for your business requirements. Schedule a discovery call right now!
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your custom software requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    style={{backgroundColor: '#38857a'}}
                    className="text-white hover:opacity-90 px-12"
                  >
                    Get Started
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
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