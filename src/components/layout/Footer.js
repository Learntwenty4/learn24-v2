'use client';

import Link from 'next/link';
import { footerLinks, siteConfig } from '@/constants/site';


export default function Footer() {
  return (
    <footer className="bg-[#2B2560] text-gray-300 px-6 md:px-10 pt-16 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1A1640] rounded-3xl px-6 md:px-10 py-8 mb-16">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
              Stay ahead with Learn24
            </h3>
            <p className="text-gray-200 text-sm">
              Get new course drops and career tips straight to your inbox.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-5 py-3 rounded-full bg-[#0F0C29] border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#5B4FE9]"
            />
            <button className="bg-[#5B4FE9] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#4B3FD9] transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              Learn<span className="text-[#5B4FE9]">24</span>
            </Link>
            <p className="text-gray-200 text-sm mt-4 max-w-xs leading-relaxed">
              A growth subscription designed to help you build practical skills
              through courses launched every week.
            </p>
            <div className="flex gap-3 mt-6">
              {['linkedin', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-10 h-10 rounded-full bg-[#1A1640] flex items-center justify-center hover:bg-[#5B4FE9] transition"
                >
                  <span className="text-xs uppercase text-gray-300">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#5B4FE9] transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#5B4FE9] transition">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-[#5B4FE9] transition">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link href="/courses" className="text-[#5B4FE9] font-semibold hover:underline">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Learn24. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="hover:text-gray-100 transition">
              Contact Us
            </Link>
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-gray-100 transition">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
