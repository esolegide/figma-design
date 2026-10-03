import React from 'react';
import Link from 'next/link';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const ResourceCard = ({
  icon,
  title,
  description,
  href = '#',
}: ResourceCardProps) => (
  <div className="flex min-w-0 flex-col items-center rounded-2xl border border-[#1E2630] bg-[#12161C]/90 p-5 text-center shadow-xl backdrop-blur-md transition-all hover:border-[#2E3A4A] sm:p-6">
    
    {/* Icon */}
    <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D98A2B]/30 bg-[#1F1912] text-[#D98A2B]">
      {icon}
    </div>

    {/* Title */}
    <h3 className="mb-2 text-base font-semibold text-white">
      {title}
    </h3>

    {/* Description */}
    <p className="mb-6 max-w-[240px] text-xs leading-relaxed text-gray-400">
      {description}
    </p>

    {/* Link */}
    <Link
      href={href}
      className="mt-auto flex items-center gap-1 text-xs font-medium text-white transition-colors hover:text-[#D98A2B]"
    >
      View more
      <span className="text-[#D98A2B]">&gt;</span>
    </Link>
  </div>
);

export default function ResourcesSection(): React.JSX.Element {
  const resources = [
    {
      title: 'Skill acquisition',
      description:
        'Acquire all skills needed to earn and sell with our all-in-one digital course on wirkspace.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Fx/futures signals',
      description:
        'We offer our subscribers great risk to rewards on trades given on Fx/futures with an accuracy of over 92%.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: 'P2P payments',
      description:
        'Receive payments Worldwide with our cashapp, paypal and other payment services. You can also earn commission for inviting users to use our services.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'P2P Exchange',
      description:
        'Subscribe to wirkspace and have access to our fast and secure exchange platform for smooth transactions. Earn a commission of 50% on referrals.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Claim rubies',
      description:
        'Claim rubies daily on wirkspace to access whitelist spots, convert to airtime and access to various benefits.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: 'VTU services',
      description:
        'Subscribe to wirkspace and become eligible to convert your task earnings/rubies to data, airtime and cable subscriptions.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#0F1318] pt-8 sm:pt-12">

      {/* Section title */}
      <h2 className="mb-6 px-4 text-center text-2xl font-bold tracking-wide text-white sm:mb-8 sm:text-3xl">
        Wirkspace resources
      </h2>

      {/* Cards area */}
      <section className="w-full bg-puzzle-pattern px-3 py-8 sm:px-6 sm:py-10 md:px-16 md:py-12">
        <div className="mx-auto w-full max-w-6xl">

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
            {resources.map((res, index) => (
              <ResourceCard
                key={index}
                title={res.title}
                description={res.description}
                icon={res.icon}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
