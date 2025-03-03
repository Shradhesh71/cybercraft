"use client"

import type React from "react"

import { useState } from "react"
import {
  Shield,
  Upload,
  AlertTriangle,
  CheckCircle,
  Loader2,
  FileText,
  Mail,
  Search,
  AlertCircle,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock data for bulk results
const mockBulkResults = [
  {
    id: 1,
    subject: "Your account has been compromised",
    sender: "security@bank-verify.com",
    status: "phishing",
    confidence: 98.2,
    timestamp: "2025-03-01 14:32",
  },
  {
    id: 2,
    subject: "Team meeting tomorrow",
    sender: "manager@company.com",
    status: "legitimate",
    confidence: 96.5,
    timestamp: "2025-03-01 14:30",
  },
  {
    id: 3,
    subject: "Urgent: Wire transfer needed",
    sender: "ceo.office@company-urgent.net",
    status: "phishing",
    confidence: 99.1,
    timestamp: "2025-03-01 14:28",
  },
  {
    id: 4,
    subject: "February Invoice",
    sender: "billing@vendor.com",
    status: "legitimate",
    confidence: 95.8,
    timestamp: "2025-03-01 14:25",
  },
  {
    id: 5,
    subject: "Your package delivery notification",
    sender: "tracking@delivery-status.info",
    status: "phishing",
    confidence: 97.3,
    timestamp: "2025-03-01 14:20",
  },
]

export default function PhishingDetection() {
  const [subject, setSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | "phishing" | "legitimate">(null)
  const [confidence, setConfidence] = useState(0)
  const [bulkResults, setBulkResults] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState("single")
  const [threatIndicators, setThreatIndicators] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    // Simulate API call
    setTimeout(() => {
      // This is where you would normally call your FastAPI backend
      // const response = await fetch('/api/predict', {
      //   method: 'POST',
      //   body: JSON.stringify({ subject, body: emailBody }),
      //   headers: { 'Content-Type': 'application/json' }
      // })
      // const data = await response.json()

      // Mock response
      const mockResult = Math.random() > 0.5 ? "phishing" : "legitimate"
      const mockConfidence =
        mockResult === "phishing" ? Math.floor(85 + Math.random() * 15) : Math.floor(90 + Math.random() * 10)

      setResult(mockResult)
      setConfidence(mockConfidence)

      if (mockResult === "phishing") {
        setThreatIndicators([
          "Suspicious sender domain",
          "Urgent language patterns",
          "Request for sensitive information",
          "Mismatched URLs in body",
        ])
      } else {
        setThreatIndicators([])
      }

      setLoading(false)
    }, 2000)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleBulkScan = async () => {
    if (!file) return

    setLoading(true)

    // Simulate API call for bulk scanning
    setTimeout(() => {
      setBulkResults(mockBulkResults)
      setLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Header */}
      {/* <header className="bg-gray-900 border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-white">CyberCraft</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Dashboard
              </a>
              <a href="#" className="text-blue-500 font-medium">
                Phishing Detection
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Threat Intelligence
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Reports
              </a>
            </nav>
            <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-800">
              <Shield className="mr-2 h-4 w-4" /> Security Console
            </Button>
          </div>
        </div>
      </header> */}
      <Navbar/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-white">Phishing Detection</h1>
          <p className="text-gray-400">Analyze emails to detect phishing attempts using our advanced AI model</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Emails Scanned</p>
                  <p className="text-2xl font-bold text-white">12,458</p>
                </div>
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Phishing Detected</p>
                  <p className="text-2xl font-bold text-red-500">1,247</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Detection Rate</p>
                  <p className="text-2xl font-bold text-green-500">99.7%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Avg. Response Time</p>
                  <p className="text-2xl font-bold text-white">1.2s</p>
                </div>
                <Search className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Email Analysis</CardTitle>
                <CardDescription>
                  Submit an email for phishing detection or upload a CSV file for bulk analysis
                </CardDescription>
              </CardHeader>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="px-6">
                  <TabsList className="bg-gray-800 w-full text-white/90">
                    <TabsTrigger value="single" className="flex-1 data-[state=active]:bg-gray-700">
                      <Mail className="mr-2 h-4 w-4" /> Single Email
                    </TabsTrigger>
                    <TabsTrigger value="bulk" className="flex-1 data-[state=active]:bg-gray-700">
                      <FileText className="mr-2 h-4 w-4" /> Bulk Analysis
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="single" className="mt-0">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2 text-white/80">
                        <Label htmlFor="subject">Email Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Enter the email subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="bg-gray-800 border-gray-700 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2 text-white/80">
                        <Label htmlFor="body">Email Body</Label>
                        <Textarea
                          id="body"
                          placeholder="Paste the full email content here"
                          value={emailBody}
                          onChange={(e) => setEmailBody(e.target.value)}
                          className="min-h-[200px] bg-gray-800 border-gray-700 focus:border-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={loading || !subject || !emailBody}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Scan for Phishing
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </TabsContent>

                <TabsContent value="bulk" className="mt-0">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-500 mb-2" />
                        <p className="text-sm text-gray-400 mb-2">
                          Upload a CSV file containing emails for bulk analysis
                        </p>
                        <p className="text-xs text-gray-500 mb-4">Format: subject, sender, body (one email per row)</p>
                        <Input
                          type="file"
                          accept=".csv"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <div className="flex flex-col space-y-2">
                          <Label
                            htmlFor="file-upload"
                            className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md inline-flex items-center justify-center"
                          >
                            <Upload className="mr-2 h-4 w-4" />
                            Select CSV File
                          </Label>
                          {file && (
                            <p className="text-sm text-gray-300">
                              {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </p>
                          )}
                        </div>
                      </div>

                      <Button
                        onClick={handleBulkScan}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={loading || !file}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing Bulk Scan...
                          </>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Start Bulk Analysis
                          </>
                        )}
                      </Button>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Max file size: 10MB</span>
                        <a href="#" className="text-blue-500 hover:underline flex items-center">
                          <Download className="mr-1 h-3 w-3" />
                          Download template
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>

              <CardFooter className="bg-gray-950 rounded-b-lg border-t border-gray-800 px-6 py-4">
                <div className="text-xs text-gray-500 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  All email data is processed securely and not stored on our servers
                </div>
              </CardFooter>
            </Card>

            {/* Bulk Results Table */}
            {activeTab === "bulk" && bulkResults.length > 0 && (
              <Card className="bg-gray-900 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle className="text-white">Bulk Analysis Results</CardTitle>
                  <CardDescription>{bulkResults.length} emails analyzed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-gray-800 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-gray-950">
                        <TableRow className="hover:bg-gray-900 border-gray-800">
                          <TableHead className="text-gray-400">Subject</TableHead>
                          <TableHead className="text-gray-400">Sender</TableHead>
                          <TableHead className="text-gray-400">Status</TableHead>
                          <TableHead className="text-gray-400 text-right">Confidence</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bulkResults.map((email) => (
                          <TableRow key={email.id} className="hover:bg-gray-800 border-gray-800">
                            <TableCell className="font-medium text-gray-300">{email.subject}</TableCell>
                            <TableCell className="text-gray-400">{email.sender}</TableCell>
                            <TableCell>
                              {email.status === "phishing" ? (
                                <Badge variant="destructive" className="bg-red-900 hover:bg-red-800 text-red-200">
                                  <AlertTriangle className="mr-1 h-3 w-3" /> Phishing
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="bg-green-900 hover:bg-green-800 text-green-200 border-green-800"
                                >
                                  <CheckCircle className="mr-1 h-3 w-3" /> Legitimate
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end">
                                <span className="mr-2 text-gray-300">{email.confidence}%</span>
                                <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${email.status === "phishing" ? "bg-red-500" : "bg-green-500"}`}
                                    style={{ width: `${email.confidence}%` }}
                                  />
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Download className="mr-2 h-4 w-4" /> Export Results
                  </Button>
                  <div className="text-sm text-gray-400">
                    <span className="text-red-500 font-medium mr-2">3</span> phishing emails detected
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Right Column - Results & Info */}
          <div className="space-y-6">
            {/* Results Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Analysis Results</CardTitle>
                <CardDescription>AI-powered phishing detection results</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                    <p className="text-gray-400">Analyzing email content...</p>
                    <div className="w-full mt-4">
                      <Progress value={45} className="h-2 bg-gray-800" />
                    </div>
                  </div>
                ) : result ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-32 h-32 rounded-full flex items-center justify-center ${
                          result === "phishing"
                            ? "bg-red-900/20 text-red-500 border-2 border-red-700"
                            : "bg-green-900/20 text-green-500 border-2 border-green-700"
                        }`}
                      >
                        {result === "phishing" ? (
                          <AlertTriangle className="h-16 w-16" />
                        ) : (
                          <CheckCircle className="h-16 w-16" />
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className={`text-2xl font-bold ${result === "phishing" ? "text-red-500" : "text-green-500"}`}>
                        {result === "phishing" ? "Phishing Detected" : "Email is Legitimate"}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        {result === "phishing"
                          ? "This email contains suspicious elements"
                          : "No phishing indicators found"}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Confidence Score</span>
                        <span className="text-sm font-medium text-white">{confidence}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={result === "phishing" ? "bg-red-500 h-full transition-all duration-500" : "bg-green-500 h-full transition-all duration-500"}
                          style={{ width: `${confidence}%` }}
                        />
                      </div>
                    </div>

                    {result === "phishing" && threatIndicators.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <h4 className="text-sm font-medium text-white mb-2">Threat Indicators</h4>
                        <ul className="space-y-2">
                          {threatIndicators.map((indicator, index) => (
                            <li key={index} className="flex items-start">
                              <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                              <span className="text-sm text-gray-300">{indicator}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Mail className="h-12 w-12 text-gray-600 mb-4" />
                    <p className="text-gray-400">Submit an email to see analysis results</p>
                  </div>
                )}
              </CardContent>
              {result && (
                <CardFooter className="flex justify-between border-t border-gray-800">
                  <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    Report False Positive
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    View Full Report
                  </Button>
                </CardFooter>
              )}
            </Card>

            {/* Info Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900/30 rounded-full p-2 mr-3">
                    <Search className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Advanced Analysis</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Our AI model analyzes email content, headers, and links to identify phishing attempts
                    </p>
                  </div>
                </div>

                <Separator className="bg-gray-800" />

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900/30 rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Real-time Protection</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Get instant results to protect your organization from sophisticated phishing attacks
                    </p>
                  </div>
                </div>

                <Separator className="bg-gray-800" />

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-900/30 rounded-full p-2 mr-3">
                    <FileText className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Bulk Processing</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Upload CSV files to scan multiple emails at once for efficient threat detection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

