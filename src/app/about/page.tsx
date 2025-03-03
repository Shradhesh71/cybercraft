"use client"
import { motion } from "framer-motion"
import { Shield, Zap, Users, BarChart, Code, Mail, Globe, ChevronRight, Github, Linkedin, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/footer"

const MotionCard = motion(Card)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-white">CyberCraft</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition">
                Home
              </a>
              <a href="/phishing" className="text-gray-400 hover:text-white transition">
                Phishing Detection
              </a>
              <a href="/tutorial" className="text-gray-400 hover:text-white transition">
                Tutorial
              </a>
              <a href="#" className="text-blue-500 font-medium">
                About
              </a>
            </nav>
            <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-800">
              <Shield className="mr-2 h-4 w-4" /> Try It Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Protecting Your Digital World
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're on a mission to make email communication safer for everyone through advanced AI-powered phishing
            detection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                AI SOC Analyst was born out of a passion for cybersecurity and a vision to make the digital world safer
                for everyone. Our team of dedicated experts combines cutting-edge AI technology with years of security
                experience to combat the ever-growing threat of phishing attacks.
              </p>
              <p className="text-gray-400">
                We believe that by empowering individuals and businesses with advanced phishing detection tools, we can
                create a more secure online environment for all.
              </p>
            </div>
            <div className="relative">
              <img
                src="/shradhesh.jpg?height=400&width=600"
                alt="Team working on cybersecurity"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">3.4 Billion</p>
                <p className="text-sm">Phishing emails sent daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To provide cutting-edge AI-powered phishing detection solutions that protect individuals and
                  organizations from cyber threats, ensuring a safer digital communication environment for all.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To create a world where email communication is inherently secure, where phishing attempts are
                  instantly recognized and neutralized, empowering users to communicate with confidence in the digital
                  age.
                </p>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our advanced AI models analyze email content in real-time, learning and adapting to new phishing
                  techniques.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Shield className="h-6 w-6 text-green-500 mr-2" />
                  Comprehensive Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We scan for phishing keywords, analyze links for suspiciousness, and detect fraudulent patterns in
                  email content.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Zap className="h-6 w-6 text-blue-500 mr-2" />
                  Instant Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Get immediate results on whether an email is safe or a potential phishing attempt, allowing for quick
                  action.
                </p>
              </CardContent>
            </MotionCard>
          </div>
          <div className="mt-12 text-center">
            <img
              src="/vu.png?height=300&width=800"
              alt="Phishing Detection Process Diagram"
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Who Can Use It */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Can Use It?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  Individuals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Protect your personal emails and stay safe from identity theft and financial fraud attempts.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <BarChart className="h-6 w-6 text-green-500 mr-2" />
                  Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Secure your corporate communication and protect sensitive business data from cyber threats.
                </p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Shield className="h-6 w-6 text-red-500 mr-2" />
                  IT & Cybersecurity Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Enhance your organization's security posture by preventing phishing attacks before they reach
                  employees.
                </p>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Why This Project Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why This Project Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 mt-1">
                    <BarChart className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Rising Phishing Attacks</h3>
                    <p className="text-gray-400">
                      With 3.4 billion phishing emails sent daily, the threat to individuals and organizations is at an
                      all-time high.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
                    <p className="text-gray-400">
                      Our tool helps safeguard sensitive information from falling into the hands of cybercriminals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Time-Saving Automation</h3>
                    <p className="text-gray-400">
                      By automating email security checks, we save valuable time for individuals and IT teams alike.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/Cybersecurity-visualization.png?height=400&width=600"
                alt="Cybersecurity impact visualization"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm">of breaches start with phishing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technologies Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Code className="h-6 w-6 text-blue-500 mr-2" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300"> Next.js</p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Code className="h-6 w-6 text-green-500 mr-2" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">FastAPI / Python</p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">TensorFlow, Scikit-learn</p>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Database className="h-6 w-6 text-purple-500 mr-2" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">PostgreSQL</p>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/shradhesh.jpg?height=96&width=96" alt="Shradesh Jodawat" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-white text-center mt-4">Shradesh Jodawat</CardTitle>
                <CardDescription className="text-center">Founder & Lead Developer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Cybersecurity expert with a passion for AI-driven solutions.</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/Shradhesh71/" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/shradesh-jodawat-147730265/" target="_blank" className="text-blue-400 hover:text-blue-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Your Name" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-white text-center mt-4">Shivam Kumar</CardTitle>
                <CardDescription className="text-center">Machine Learning & Security Engineer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">
                  Specialized in developing cutting-edge ML models for threat detection.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-500 mr-2" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Need help? Reach out to our support team.</p>
                <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-700">
                  support@cybercraft.com
                </Button>
              </CardContent>
            </MotionCard>
            <MotionCard
              className="bg-gray-800 border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-500 mr-2" />
                  Visit Our Website
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">For more information and resources.</p>
                <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-700">
                  www.cybercraft.com
                </Button>
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

