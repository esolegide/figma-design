import React from 'react';
import Image from 'next/image';

export default function VisionSection(): React.JSX.Element {
  return (
    <section className="bg-[#0F1318] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-16 md:py-12">
      <div className="mx-auto w-full max-w-6xl">

        {/* Search Bar */}
        <div className="mb-8 flex w-full justify-center md:justify-end">
          <div className="relative flex w-full max-w-sm items-center rounded-lg border border-gray-800 bg-[#131B22] px-4 py-2">
            <input
              type="text"
              placeholder="Search Wirkspace"
              className="w-full min-w-0 bg-transparent pr-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
            />

            <svg
              className="h-4 w-4 shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-10">

          {/* Left Side */}
          <div className="w-full max-w-xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#D98A2B] sm:text-3xl">
              Our vision
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              Our mission is to introduce young, vibrant minds to this amazing
              technology and give them a means on the liberation the digital
              space & Web3 space has to offer to mankind.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <div className="relative h-52 w-full overflow-hidden rounded-xl border border-gray-800 shadow-lg sm:h-60 md:h-72">
              <Image
                src="/vision-card.png"
                alt="The goal is to be financially free"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
