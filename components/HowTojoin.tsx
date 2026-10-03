import Image from 'next/image';

export default function HowToJoin() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Sign up',
      desc: 'Visit the wirkspace website and click on sign up button to get started.',
    },
    {
      step: 'Step 2',
      title: 'Fill in your details.',
      desc: 'Fill in the required User information correctly and use a password that is easy for you to remember.',
    },
    {
      step: 'Step 3',
      title: 'Get coupon code.',
      desc: 'You can get your coupon code from one of our dedicated vendors and can only be used once when creating an account. learn more',
    },
    {
      step: 'Step 4',
      title: 'Finish registration.',
      desc: 'Complete your registration to explore the numerous opportunities wirkspace has to offer.',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl bg-[#0b0c10] px-3 py-8 text-white sm:px-5 sm:py-10">

      {/* Join Us Card */}
      <div className="grid w-full grid-cols-1 items-center gap-6 rounded-2xl border border-gray-800/80 bg-[#121318] p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">

        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden rounded-xl sm:h-72 md:h-[380px]">
          <Image
            src="/images/join-us.png"
            alt="Join Us start earning"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 space-y-5 md:space-y-6">

          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            You can register with{' '}
            <span className="font-semibold text-[#c29b38]">
              wirkspace
            </span>{' '}
            and start earning in some few steps.
          </p>

          {/* Timeline */}
          <div className="relative pl-1">

            {/* Connecting Line */}
            <div className="absolute bottom-6 left-[7px] top-3 z-0 w-px bg-gradient-to-b from-yellow-500/80 via-yellow-600/40 to-transparent" />

            <div className="space-y-6">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex items-start gap-3"
                >

                  {/* Dot */}
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-yellow-500/80 bg-[#121318] shadow-[0_0_8px_rgba(234,179,8,0.3)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-[11px] font-normal text-gray-400">
                      {s.step}
                    </span>

                    <h4 className="text-sm font-bold tracking-wide text-[#c29b38]">
                      {s.title}
                    </h4>

                    <p className="max-w-md text-xs leading-relaxed text-gray-400">
                      {s.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Card */}
      <div className="mt-8 grid w-full grid-cols-1 items-center gap-6 rounded-2xl border border-gray-800/80 bg-[#121318] p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">

        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-64">
          <Image
            src="/images/newsletter.png"
            alt="Subscribe to our Newsletter"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 space-y-4">

          <h3 className="text-lg font-bold text-white">
            Subscribe to our newsletter
          </h3>

          <p className="text-xs leading-relaxed text-gray-400">
            Join our wirkspace community to stay updated on the newest web3
            earning opportunities and enjoy numerous benefits of being a valued
            member of our community.
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">

            <div className="relative min-w-0 flex-1">
              <input
                type="email"
                placeholder="Enter your Email address"
                className="w-full rounded-lg border border-gray-700/80 bg-[#1b1c22] py-2.5 pl-3 pr-8 text-xs text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
              />

              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <button className="w-full rounded-lg bg-[#c29b38] px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-yellow-500 sm:w-auto">
              Subscribe
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
