"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = window.location.href === "https://cybercraft.itsmeshradhesh.tech/";

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

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
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? " " : <Menu className="w-6 h-6" />}
      </button>
      {/* Mobile Menu */}
      {isHome ? (
        <div
          className={cn(
            "fixed z-50 inset-0 bg-black text-white flex flex-col items-center gap-6 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <Link
            href="/about"
            className="text-xl mt-3 -mb-3 z-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/price"
            className="text-xl -mb-3"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/tutorial"
            className="text-xl -mb-3"
            onClick={() => setIsOpen(false)}
          >
            Tutorial
          </Link>
          <Link
            href="/phishing"
            className="text-xl -mb-3"
            onClick={() => setIsOpen(false)}
          >
            Fraud Detect
          </Link>
        </div>
      ) : (
        <div
          className={cn(
            "fixed  inset-0 bg-black text-white flex flex-col justify-center items-center gap-6 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <Link
            href="/about"
            className="text-xl mt-3"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/price"
            className="text-xl "
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/tutorial"
            className="text-xl "
            onClick={() => setIsOpen(false)}
          >
            Tutorial
          </Link>
          <Link
            href="/phishing"
            className="text-xl "
            onClick={() => setIsOpen(false)}
          >
            Fraud Detect
          </Link>
        </div>
      )}
    </nav>
  );
}
