import React from 'react';
import Link from 'next/link';

export default function FeatureCards(): React.JSX.Element {
  return (
    <section className="w-full bg-[#0F1318] px-3 py-10 text-white sm:px-5 sm:py-12 md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8 md:space-y-12">

        {/* Card 1: Forex Signals */}
        <div className="grid w-full grid-cols-1 items-center gap-6 rounded-2xl border border-[#1E2630] bg-[#12161C] p-4 shadow-xl sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">

          {/* Image */}
          <div className="w-full min-w-0 overflow-hidden rounded-xl bg-[#1A202A]">
            <img
              src="/airdrops.png"
              alt="Wirkspace forex signals"
              className="block h-auto w-full rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex min-w-0 flex-col items-start justify-center">
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Wirkspace forex signals
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:mb-8">
              Get access to our 92% accurate forex signals group where you can
              get accurate forex signals from our seasoned forex traders. With
              years of experience about forex trading, We guarantee seamless
              and a profitable trade with Us
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D98A2B] transition-opacity hover:opacity-80"
            >
              Get started

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D98A2B] text-xs">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Card 2: Airdrops */}
        <div className="grid w-full grid-cols-1 items-center gap-6 rounded-2xl border border-[#1E2630] bg-[#12161C] p-4 shadow-xl sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">

          {/* Text */}
          <div className="order-2 flex min-w-0 flex-col items-start justify-center md:order-1">
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Wirkspace Airdrops
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:mb-8">
              On wirkspace, all subscribers are immediately eligible to
              airdrops and testnet updates.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D98A2B] transition-opacity hover:opacity-80"
            >
              Get started

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D98A2B] text-xs">
                ↗
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 w-full min-w-0 overflow-hidden rounded-xl bg-[#1A202A] md:order-2">
            <img
              src="/forex-signals.png"
              alt="Wirkspace Airdrops"
              className="block h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
