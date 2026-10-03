'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FaqAndFooter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: 'What is Wirkspace?' },
    { question: 'How does Wirkspace relate to digital marketng agencies?' },
    { question: 'What is the main goal of Wirkspace?' },
    { question: 'How does wirkspace utilize blockchain technology?' },
    { question: 'What is the registration process for becoming a wirkspace affiliate?' },
    { question: 'What is the significance of airdrops updates for our subscribers?' },
    { question: 'What are some of the utilities and features avaliable on wirkspace?' },
    { question: 'What are digital products and how do they fit into wirkspace?' },
    { question: 'What benefits do subscribers receive upon registration?' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-[#0b0c10] pt-10 text-white sm:pt-16">

      {/* FAQ */}
      <section className="mx-auto mb-16 w-full max-w-4xl px-4 sm:mb-24">

        {/* FAQ Header */}
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="text-lg font-bold text-[#c29b38] sm:text-2xl">
            Frequently asked questions
          </h2>

          <button className="shrink-0 text-xs text-[#c29b38] transition-opacity hover:opacity-80">
            View more &gt;
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800/80 pb-2"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-gray-300"
              >
                <span className="min-w-0 text-xs font-normal leading-relaxed text-gray-300 sm:text-sm">
                  {faq.question}
                </span>

                <svg
                  className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <p className="pb-2 pt-1 text-xs leading-relaxed text-gray-400">
                  Detailed answer for "{faq.question}" goes here.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800/60 bg-[#0e0f14] px-4 pb-8 pt-10 sm:px-8 sm:pt-16 md:px-16">

        <div className="mx-auto mb-12 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:mb-16 md:grid-cols-4 md:gap-10">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">

            <div className="relative h-9 w-40">
              <Image
                src="/logo.png"
                alt="WIRKSPACE"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>

            <div>
              <p className="mb-2 text-[11px] font-medium text-gray-400">
                Follow Us
              </p>

              <div className="flex items-center gap-2">

                {/* X */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/80 transition-colors hover:bg-[#c29b38] group"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-[#c29b38] group-hover:fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/80 transition-colors hover:bg-[#c29b38] group"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-[#c29b38] group-hover:fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/80 transition-colors hover:bg-[#c29b38] group"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-none stroke-[#c29b38] group-hover:stroke-black"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/80 transition-colors hover:bg-[#c29b38] group"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-[#c29b38] group-hover:fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800/80 transition-colors hover:bg-[#c29b38] group"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-[#c29b38] group-hover:fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.32 1.53-1.31 2.53 0 .39.08.78.25 1.13.48 1.01 1.6 1.68 2.72 1.63 1.05-.01 2.03-.6 2.5-1.54.26-.51.35-1.09.34-1.66V.02z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-xs font-bold text-white">
              Our services
            </h4>

            <ul className="space-y-2 text-xs text-gray-400">
              <li>Affiliates</li>
              <li>Exchange</li>
              <li>Rubies</li>
              <li>Airdrops</li>
              <li>Earn</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-3 text-xs font-bold text-white">
              About Us
            </h4>

            <ul className="space-y-2 text-xs text-gray-400">
              <li>Roadmap</li>
              <li>Whitepaper</li>
              <li>Mission</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-xs font-bold text-white">
              Resources
            </h4>

            <ul className="space-y-2 text-xs text-gray-400">
              <li>Legal</li>
              <li>Rubies</li>
              <li>Vendor</li>
              <li>Socials</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mx-auto max-w-6xl border-t border-gray-800/40 pt-6 text-center">
          <p className="text-[10px] text-gray-500 sm:text-[11px]">
            Copyright 2023 Wirkspace technologies limited
          </p>
        </div>

      </footer>
    </div>
  );
}
