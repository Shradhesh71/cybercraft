import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%20133321-hqbx8c0VhDVF7iZT1eDwNbhbf9RZZj.png"
            alt="CyberCraft Logo"
            className="w-6 h-6"
          />
        </div>
        <Link href={"/"}>
          {" "}
          <span className="text-white font-medium">CyberCraft</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/about"
          className="text-white hover:text-blue-200 transition"
        >
          About
        </Link>
        <Link
          href="/price"
          className="text-white hover:text-blue-200 transition"
        >
          Pricing
        </Link>
        <Link
          href="/tutorial"
          className="text-white hover:text-blue-200 transition"
        >
          Tutorial
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-blue-200 transition">
            Product
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={"/phishing"} className=" cursor-pointer">
              {" "}
              <DropdownMenuItem>Fraud detect</DropdownMenuItem>
            </Link>
            <Link href={"/tutorial"} className=" cursor-pointer">
              <DropdownMenuItem>Tutorials</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Blog</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          className="hidden md:inline-flex bg-gray-800 text-white hover:bg-gray-700"
        >
          Test Now
        </Button>
        <Link href={"mailto:shradeshjain123@gmail.com"}>
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-100"
          >
            Request a Demo
          </Button>
        </Link>
      </div>
    </nav>
  );
}
