import {
    Shield,
    Book,
    Zap,
    Lock,
    Search,
    CheckCircle,
    AlertTriangle,
    HelpCircle,
    Cpu,
    Mail,
    FileText,
    AlertCircle,
    ChevronRight,
    MessageSquare,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
  import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
  
  export default function TutorialPage() {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-200">
        {/* Header */}
       <Navbar/>
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-white">Email Phishing Detection Tutorial</h1>
            <p className="text-gray-400">
              Learn how to use our advanced AI-powered tool to protect yourself from phishing attacks
            </p>
          </div>
  
          {/* Table of Contents */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Book className="mr-2 h-5 w-5 text-blue-500" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "Introduction", href: "#introduction" },
                  { icon: Cpu, title: "How It Works", href: "#how-it-works" },
                  { icon: Zap, title: "Getting Started", href: "#getting-started" },
                  { icon: Search, title: "Using the Web Interface", href: "#using-interface" },
                  { icon: CheckCircle, title: "Understanding Results", href: "#understanding-results" },
                  { icon: Lock, title: "Best Practices", href: "#best-practices" },
                  { icon: HelpCircle, title: "FAQs", href: "#faqs" },
                  { icon: AlertCircle, title: "Troubleshooting", href: "#troubleshooting" },
                  { icon: ChevronRight, title: "Future Updates", href: "#future-updates" },
                  { icon: FileText, title: "API Documentation", href: "#api-docs" },
                  { icon: MessageSquare, title: "Community Forum", href: "#community" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    <item.icon className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-white/80">{item.title}</span>
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
  
          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1️⃣ Introduction</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Overview of the Email Phishing Detection Tool</CardTitle>
                <CardDescription>Empowering users to identify and prevent phishing attacks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/60">
                  Our Email Phishing Detection Tool is designed to help users easily detect potential phishing attempts in
                  their emails. By leveraging advanced AI and machine learning algorithms, we provide a robust defense
                  against increasingly sophisticated cyber threats.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-2">
                    <Search className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Scan Single or Bulk Emails</h3>
                      <p className="text-sm text-gray-400">
                        Analyze individual emails or process large batches efficiently
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Fast and Accurate Detection</h3>
                      <p className="text-sm text-gray-400">Get results in seconds with high precision</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Lock className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Secure Processing</h3>
                      <p className="text-sm text-gray-400">Your data is encrypted and never stored</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* How It Works */}
          <section id="how-it-works" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2️⃣ How It Works</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">The Mechanism Behind Our Phishing Detection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Enter Email Details</h3>
                        <p className="text-sm text-gray-400">Input the email subject and body content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Initiate Scan</h3>
                        <p className="text-sm text-gray-400">Click the "Scan Email" button to start the analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">AI Analysis</h3>
                        <p className="text-sm text-gray-400">
                          Our system analyzes the email for various phishing indicators
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Get Results</h3>
                        <p className="text-sm text-gray-400">Receive a verdict: Legitimate or Phishing</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-white font-medium mb-2">Phishing Detection Flowchart</h3>
                    {/* Replace this with an actual flowchart or diagram */}
                    <div className="bg-gray-700 h-64 rounded-md flex items-center justify-center">
                      {/* <span className="text-gray-400">Flowchart Placeholder</span> */}
                      <img src="\vu1.png" height={300} width={400}></img>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* Getting Started */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3️⃣ Getting Started</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Quick Start Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="access" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="access">Accessing the Tool</TabsTrigger>
                    <TabsTrigger value="requirements">System Requirements</TabsTrigger>
                  </TabsList>
                  <TabsContent value="access" className="mt-4 space-y-4">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Open the Website</h3>
                        <p className="text-sm text-gray-400">Navigate to our secure web application</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Go to Bulk Email Scanning</h3>
                        <p className="text-sm text-gray-400">Find the "Bulk Email Scanning" option in the main menu</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Start Scanning</h3>
                        <p className="text-sm text-gray-400">You're now ready to scan emails for phishing attempts</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="requirements" className="mt-4 text-white">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Works on any modern browser (Chrome, Firefox, Edge, Safari)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>No installation or downloads required</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Stable internet connection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>JavaScript enabled in your browser settings</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
  
          {/* Using the Web Interface */}
          <section id="using-interface" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4️⃣ Using the Web Interface</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step-by-Step Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="single" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="single">Single Email Scan</TabsTrigger>
                    <TabsTrigger value="bulk">Bulk Email Scan</TabsTrigger>
                  </TabsList>
                  <TabsContent value="single" className="mt-4 space-y-4">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Enter Email Subject</h3>
                        <p className="text-sm text-gray-400">Input the subject line of the email you want to scan</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Paste Email Body</h3>
                        <p className="text-sm text-gray-400">Copy and paste the full content of the email body</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Click "Scan Email"</h3>
                        <p className="text-sm text-gray-400">Initiate the scanning process</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">View Results</h3>
                        <p className="text-sm text-gray-400">See if the email is marked as Safe or Phishing</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="bulk" className="mt-4 space-y-4">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Click "Upload CSV"</h3>
                        <p className="text-sm text-gray-400">Select the option to upload a CSV file</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Select CSV File</h3>
                        <p className="text-sm text-gray-400">Choose a CSV file containing multiple email details</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Click "Start Scan"</h3>
                        <p className="text-sm text-gray-400">Begin the bulk scanning process</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">View Results Table</h3>
                        <p className="text-sm text-gray-400">See a table with results for all scanned emails</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
  
          {/* Understanding the Results */}
          <section id="understanding-results" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5️⃣ Understanding the Results</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Interpreting Scan Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 p-2 bg-green-900/20 rounded-md">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-medium text-white">Green (Safe Email)</h3>
                    <p className="text-sm text-gray-400">No phishing indicators detected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-red-900/20 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <div>
                    <h3 className="font-medium text-white">Red (Phishing Alert)</h3>
                    <p className="text-sm text-gray-400">Email contains phishing indicators</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-yellow-900/20 rounded-md">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium text-white">Yellow (Suspicious)</h3>
                    <p className="text-sm text-gray-400">Requires manual review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* Best Practices */}
          <section id="best-practices" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6️⃣ Best Practices for Email Security</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Protecting Yourself from Phishing Attacks</CardTitle>
              </CardHeader>
              <CardContent className=" text-white/80">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Never click on unknown or suspicious links in emails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Always verify the sender's email address</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Use strong, unique passwords for all your accounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Enable two-factor authentication (2FA) whenever possible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Report suspected phishing emails to your IT department or email provider</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Keep your software and operating systems up to date</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Be cautious of emails requesting sensitive information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
  
          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7️⃣ Frequently Asked Questions</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Common Questions and Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className=" text-white/80">Why is my email marked as phishing?</AccordionTrigger>
                    <AccordionContent className=" text-white/60">
                      Our tool detects suspicious elements such as unusual sender addresses, suspicious links, urgent
                      language, or requests for sensitive information. If these indicators are present, the email may be
                      flagged as potential phishing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className=" text-white/80">Can I scan bulk emails?</AccordionTrigger>
                    <AccordionContent className=" text-white/60">
                      Yes! Our tool supports bulk email scanning. You can upload a CSV file containing multiple email
                      details for efficient batch processing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className=" text-white/80">Is my data secure?</AccordionTrigger>
                    <AccordionContent className=" text-white/60">
                      Absolutely. We take data security very seriously. All email content is processed in real-time and is
                      not stored on our servers. We use encryption for data in transit and adhere to strict privacy
                      policies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className=" text-white/80">How accurate is the phishing detection?</AccordionTrigger>
                    <AccordionContent className=" text-white/60">
                      Our AI-powered system has a high accuracy rate, typically above 95%. However, we always recommend
                      using the tool in conjunction with your own judgment and following best practices for email
                      security.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className=" text-white/80">What should I do if an email is flagged as phishing?</AccordionTrigger>
                    <AccordionContent className=" text-white/60">
                      If an email is flagged as phishing, do not click on any links or download any attachments. Report
                      the email to your IT department or email provider, and delete it from your inbox.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
  
          {/* Troubleshooting & Support */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8️⃣ Troubleshooting & Support</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Common Issues and Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Error Messages & Solutions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Error: Unable to process email</span>
                        <p className="text-sm text-gray-400">
                          Solution: Ensure the email content is properly formatted and try again. If the issue persists,
                          try clearing your browser cache.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Error: CSV file upload failed</span>
                        <p className="text-sm text-gray-400">
                          Solution: Check that your CSV file is properly formatted and doesn't exceed the maximum file
                          size (10MB).
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Contact Support</h3>
                  <p className="text-gray-400 mb-2">
                    If you're experiencing issues not covered here, please contact our support team:
                  </p>
                  <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-800">
                    <Mail className="mr-2 h-4 w-4" /> support@phishingdetector.com
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Additional Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-500 hover:underline flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Comprehensive User Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 hover:underline flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Community Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* Future Updates & Roadmap */}
          <section id="future-updates" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9️⃣ Future Updates & Roadmap</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Features and Improvements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  We're constantly working to improve our Email Phishing Detection Tool. Here's a glimpse of what's
                  coming:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">Real-time Scanning</span>
                      <p className="text-sm text-gray-400">Instant analysis as you receive emails</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">Browser Extension</span>
                      <p className="text-sm text-gray-400">Seamless integration with popular email clients</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">Gmail Integration</span>
                      <p className="text-sm text-gray-400">Direct scanning within your Gmail inbox</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">Advanced AI Models</span>
                      <p className="text-sm text-gray-400">Continuous improvements in detection accuracy</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
  
          {/* API Documentation */}
          <section id="api-docs" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">🔟 API Documentation</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Integrate Our Phishing Detection into Your Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  For developers looking to integrate our phishing detection capabilities into their own applications, we
                  offer a robust API. Here's a quick overview:
                </p>
                <div className="bg-gray-800 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-white mb-2">API Endpoint</h3>
                  <code className="text-sm text-blue-400">POST https://api.phishingdetector.com/v1/scan</code>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Request Format</h3>
                  <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm text-green-400">
                      {`{
    "subject": "Your email subject",
    "body": "Full email body content",
    "sender": "sender@example.com"
  }`}
                    </code>
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Response Format</h3>
                  <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm text-green-400">
                      {`{
    "status": "phishing" | "legitimate" | "suspicious",
    "confidence": 0.95,
    "indicators": ["suspicious_link", "urgent_language"],
    "message": "This email contains potential phishing indicators."
  }`}
                    </code>
                  </pre>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="border-gray-700 text-black hover:text-white hover:bg-gray-800">
                    <FileText className="mr-2 h-4 w-4" /> Full API Documentation
                  </Button>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                    Beta
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* Community Forum */}
          <section id="community" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1️⃣1️⃣ Community Forum</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Join the Conversation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  Connect with other users, share experiences, and get community support in our forum.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-white mb-2">Latest Discussions</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-400 hover:text-blue-400 transition-colors">
                        <a href="#">Best practices for employee training</a>
                      </li>
                      <li className="text-gray-400 hover:text-blue-400 transition-colors">
                        <a href="#">How to handle false positives</a>
                      </li>
                      <li className="text-gray-400 hover:text-blue-400 transition-colors">
                        <a href="#">Integrating with Outlook: Tips and tricks</a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-white mb-2">Community Stats</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Members:</span>
                        <span className="text-white font-medium">10,542</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Topics:</span>
                        <span className="text-white font-medium">3,217</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Posts:</span>
                        <span className="text-white font-medium">27,890</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="mr-2 h-4 w-4" /> Join the Community Forum
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
  
        {/* Footer */}
       <Footer/>
      </div>
    )
  }
  
  