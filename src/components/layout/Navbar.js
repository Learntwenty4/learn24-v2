'use client';

import { navLinks, siteConfig } from "@/constants/site";
import { useState } from 'react';
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const links = [
  //   { name: 'Home', href: '/' },
  //   { name: 'Courses', href: '/courses' },
  //   { name: 'About', href: '/about' },
  //   { name: 'Contact', href: '/contact' },
  // ];

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-white">
      {/* Logo */}
      <span className="text-2xl font-bold text-gray-900">
        Learn<span className="text-[#5B4FE9]">24</span>
      </span>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10 text-gray-800 font-semibold text-[15px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-[#5B4FE9] transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Side: Cart + Login (desktop) */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-[#5B4FE9] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        <button className="bg-[#5B4FE9] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4B3FD9] transition">
          Login
        </button>
      </div>

      {/* Mobile Right Side: Cart + Hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="relative">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-[#5B4FE9] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-[#5B4FE9] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Click-outside overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Dropdown Card with smooth transition */}
      <div
        className={`absolute top-full right-6 mt-2 w-70 bg-gray-50 rounded-3xl shadow-lg z-50 md:hidden origin-top-right transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium hover:text-[#5B4FE9] hover:font-bold transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
