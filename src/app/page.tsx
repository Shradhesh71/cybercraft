import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "@/components/navbar";

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
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Agentic AI SOC Analyst
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
          Triage, investigate, and respond to alerts with unparalleled speed and
          precision while empowering your analysts to focus on{" "}
          <span className="text-white">real threats.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8"
          >
            Request a Demo
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-8"
          >
            Blog
          </Button>
        </div>
      </main>
    </div>
  );
}
