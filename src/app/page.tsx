import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020817] relative overflow-hidden">
      {/* Background rays effect */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0066ff,transparent_60%)] opacity-30"
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

      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6  pt-32 pb-64 text-center max-w-7xl mx-auto">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0066ff,transparent_60%)] opacity-30"
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Agentic AI SOC Analyst
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
          Triage, investigate, and respond to alerts with unparalleled speed and
          precision while empowering your analysts to focus on{" "}
          <span className="text-white">real threats.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"mailto:shradeshjain123@gmail.com"}>
            <Button
              size="lg"
              variant="default"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8"
            >
              Request a Demo
            </Button>
          </Link>
          <Button
            size="lg"
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8"
          >
            Blog
          </Button>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose CyberCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Shield className="h-6 w-6 text-blue-500 mr-2" />
                  Enhanced Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  State-of-the-art encryption and multi-emails security
                  protocols to keep your emails safe.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                  Lightning Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Optimized for speed, ensuring quick transactions and seamless
                  user experience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Users className="h-6 w-6 text-green-500 mr-2" />
                  User-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Intuitive interface designed for both beginners and
                  experienced developer users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Cyber Security Developer",
                content:
                  "CyberCraft has revolutionized the way I build dApps. The chain abstraction is simply brilliant!",
              },
              {
                name: "Sarah Lee",
                role: "Crypto Enthusiast",
                content:
                  "I've never felt more secure managing my digital emails. CyberCraft's user interface is a game-changer.",
              },
              {
                name: "Michael Chen",
                role: "FinTech Startup Founder",
                content:
                  "Integrating CyberCraft into our platform was seamless. It's opened up a whole new world of possibilities for our users.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "What is CyberCraft?",
                answer:
                  "CyberCraft is a cutting-edge Cyber Security platform that provides intuitive chain abstraction tools, enabling developers to build seamless Apps and users to navigate the Security ecosystem with ease and confidence.",
              },
              {
                question: "How does CyberCraft ensure security?",
                answer:
                  "CyberCraft employs state-of-the-art encryption techniques, multi-factor authentication, and regular security audits to ensure the highest level of protection for your digital assets and transactions.",
              },
              {
                question: "Can I use CyberCraft with multiple Tasks?",
                answer:
                  "Yes, CyberCraft is designed to support multiple Tasks, allowing for seamless cross-chain operations and interactions. This feature is available in our Pro and Enterprise plans.",
              },
              {
                question: "Is there a mobile app for CyberCraft?",
                answer:
                  "Yes, CyberCraft offers mobile apps for both iOS and Android platforms, providing you with the flexibility to manage your Web interactions on the go.",
              },
              {
                question: "How can I get started with CyberCraft?",
                answer:
                  "Getting started with CyberCraft is easy! Simply sign up for an account on our website, download the CyberCraft wallet, and you'll be ready to explore the world of Security with our intuitive tools and interfaces.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-blue-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Blockchain Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and users who are already benefiting
            from CyberCraft's powerful blockchain tools and seamless user
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 text-lg px-8"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-balck hover:bg-violet-900 text-lg px-8"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
