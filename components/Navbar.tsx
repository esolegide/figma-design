'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-[#0F1318] px-4 py-4 text-white sm:px-6 md:px-8 md:py-5">

      {/* Main Navbar Bar */}
      <div className="flex w-full items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="WirkSpace Logo"
            width={150}
            height={36}
            className="h-6 w-auto object-contain sm:h-7"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center space-x-8 text-sm md:flex">
          <Link
            href="/"
            className="font-medium text-[#c29b38] transition-colors hover:opacity-80"
          >
            Home
          </Link>

          <Link
            href="/exchange"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Exchange
          </Link>

          <Link
            href="/vendor"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Vendor
          </Link>

          <Link
            href="/airdrops"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Airdrops
          </Link>

          <Link
            href="/about"
            className="text-gray-400 transition-colors hover:text-white"
          >
            About Us
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center space-x-5 text-sm md:flex">
          <Link
            href="/signin"
            className="font-medium text-[#c29b38] transition-colors hover:opacity-80"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-[#c29b38] px-5 py-2 font-semibold text-black transition-colors hover:bg-[#b08b30]"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 text-[#c29b38] hover:bg-gray-800/50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* Close "X" Icon */
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-gray-800 bg-[#12161C] p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-4 text-sm">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#c29b38]"
            >
              Home
            </Link>

            <Link
              href="/exchange"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              Exchange
            </Link>

            <Link
              href="/vendor"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              Vendor
            </Link>

            <Link
              href="/airdrops"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              Airdrops
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              About Us
            </Link>

            <div className="my-1 h-px bg-gray-800" />

            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#c29b38]"
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#c29b38] px-5 py-2.5 text-center font-semibold text-black hover:bg-[#b08b30]"
            >
              Sign up
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}