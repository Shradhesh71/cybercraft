"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Github,
  Twitter,
  Linkedin,
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"

export default function AuthPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Password strength checker
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0)
      return
    }

    let strength = 0
    // Length check
    if (password.length >= 8) strength += 25
    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 25
    // Lowercase check
    if (/[a-z]/.test(password)) strength += 25
    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength += 25

    setPasswordStrength(strength)
  }, [password])

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return ""
    if (passwordStrength <= 25) return "Weak"
    if (passwordStrength <= 75) return "Medium"
    return "Strong"
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500"
    if (passwordStrength <= 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard or home page
      router.push("/")
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (passwordStrength < 50) {
      setError("Please use a stronger password")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Switch to login tab after successful registration
      setActiveTab("login")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#020817] flex flex-col">
      {/* Background rays effect */}
      <div
        className="absolute -mb-64 inset-0 bg-[radial-gradient(circle_at_50%_120%,#0066ff,transparent_60%)] opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 120%, 
            #0066ff 0%, 
            transparent 60%),
            radial-gradient(circle at 50% 100%, 
            #0055dd 0%, 
            transparent 50%)
          `,
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <img
              src="landing.png"
              alt="CyberCraft Logo"
              className="w-6 h-6"
            />
          </div>
          <span className="text-white font-medium">CyberCraft</span>
        </Link>
        <Link href="/" className="text-gray-400 hover:text-white transition flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center  p-6">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Welcome to CyberCraft</h1>
                <p className="text-gray-400">Your gateway to the Security ecosystem</p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <TabsContent value="login" className="mt-0">
                    <motion.form
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleLogin}
                      className="space-y-4"
                    >
                      {error && (
                        <Alert variant="destructive" className="bg-red-900/50 border-red-800 text-red-200">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="password" className="text-gray-300">
                            Password
                          </Label>
                          <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked:any) => setRememberMe(checked as boolean)}
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Twitter className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </div>
                    </motion.form>
                  </TabsContent>

                  <TabsContent value="register" className="mt-0">
                    <motion.form
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleRegister}
                      className="space-y-4"
                    >
                      {error && (
                        <Alert variant="destructive" className="bg-red-900/50 border-red-800 text-red-200">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email" className="text-gray-300">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password" className="text-gray-300">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>

                        {password && (
                          <div className="space-y-1 mt-2">
                            <div className="flex justify-between items-center">
                              <Progress
                                value={passwordStrength}
                                className="h-2"
                                // indicatorClassName={getPasswordStrengthColor()}
                              />
                              <span
                                className={`text-xs ml-2 ${
                                  passwordStrength <= 25
                                    ? "text-red-400"
                                    : passwordStrength <= 75
                                      ? "text-yellow-400"
                                      : "text-green-400"
                                }`}
                              >
                                {getPasswordStrengthText()}
                              </span>
                            </div>
                            <ul className="space-y-1">
                              <li className="text-xs flex items-center">
                                {password.length >= 8 ? (
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                ) : (
                                  <XCircle className="h-3 w-3 text-red-500 mr-1" />
                                )}
                                <span className={password.length >= 8 ? "text-green-400" : "text-gray-400"}>
                                  At least 8 characters
                                </span>
                              </li>
                              <li className="text-xs flex items-center">
                                {/[A-Z]/.test(password) ? (
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                ) : (
                                  <XCircle className="h-3 w-3 text-red-500 mr-1" />
                                )}
                                <span className={/[A-Z]/.test(password) ? "text-green-400" : "text-gray-400"}>
                                  At least one uppercase letter
                                </span>
                              </li>
                              <li className="text-xs flex items-center">
                                {/[^A-Za-z0-9]/.test(password) ? (
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                ) : (
                                  <XCircle className="h-3 w-3 text-red-500 mr-1" />
                                )}
                                <span className={/[^A-Za-z0-9]/.test(password) ? "text-green-400" : "text-gray-400"}>
                                  At least one special character
                                </span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-gray-300">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 bg-gray-800 border-gray-700 text-white"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        {confirmPassword && password !== confirmPassword && (
                          <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                        >
                          I agree to the{" "}
                          <Link href="#" className="text-blue-400 hover:text-blue-300">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-blue-400 hover:text-blue-300">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Twitter className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </div>
                    </motion.form>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </div>
          </motion.div>

          <p className="text-center mt-6 text-gray-500 text-sm">
            {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
              className="text-blue-400 hover:text-blue-300"
            >
              {activeTab === "login" ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </main>


      {/* Footer */}
      <Footer/>
    </div>
  )
}

