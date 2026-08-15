'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/profil', label: 'Profil Sekolah' },
    { href: '/ppdb', label: 'Pengumuman PPDB' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-institutional border-b border-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-15">
          
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center drop-shadow">
              <Image
                src="/images/logo-school.png"
                alt="Logo Resmi SDN Muara Babuat 2"
                width={36}
                height={36}
                sizes="36px"
                quality={85}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none text-white group-hover:text-secondary transition-colors">
              SDN MUARA BABUAT 2
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-secondary text-primary shadow-sm font-extrabold'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/ppdb"
              className="ml-2 px-3.5 py-1.5 rounded-md bg-secondary text-primary font-bold text-xs sm:text-sm shadow hover:bg-yellow-400 transition-all flex items-center gap-1"
            >
              Info PPDB
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-container border-b border-white/10 animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-secondary text-primary font-bold'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/ppdb"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-4 py-3 rounded-lg bg-secondary text-primary font-bold text-base shadow"
              >
                Informasi PPDB 2026/2027
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
