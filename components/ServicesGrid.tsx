import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'cv-resume',
    title: 'Web3 CV/Resume creation',
    description:
      "With WIrkspace, you don't have to worry too much about landing that dream job. Our workspace team is dedicated to writing and editing a well detailed resume/cv that's accepted and respected by notable organizations.",
    imageSrc: '/images/resume-card.png',
    ctaLink: '/services/resume',
    imageOnLeft: true,
  },
  {
    id: 'giftcard',
    title: 'WIrkspace giftcard',
    description:
      'Sell all your giftcards to us, likes of Apple/iTunes giftcard, Amazon Giftcards, Google Play, Steam giftcard, Vanilla, Sephora, eBay, Walmart, etc while you also get commissioned when you invite users to use our service.',
    imageSrc: '/images/giftcards-card.png',
    ctaLink: '/services/giftcards',
    imageOnLeft: false,
  },
  {
    id: 'payment',
    title: 'WIrkspace payment',
    description:
      'Receive payment worldwide with our CASHAPP, PAYPAL, VENMO, ZELLE, APPLE PAY, GOOGLE PAY payment services. While you get commissioned for inviting users to use our service.',
    imageSrc: '/images/payment-card.png',
    ctaLink: '/services/payment',
    imageOnLeft: true,
  },
  {
    id: 'p2p-exchange',
    title: 'Wirkspace exchange (P2P)',
    description:
      'Subscribe to Wirkspace to have access to our fast and secure exchange platform. With best market rates for smooth transactions. Register on the exchange to earn a commission of 50% on each trade you close.',
    imageSrc: '/images/exchange-card.png',
    ctaLink: '/services/exchange',
    imageOnLeft: false,
  },
  {
    id: 'marketing-agency',
    title: 'Marketing agency',
    description:
      'Wirkspace is available for all your web3 and web2 promotions and marketing. We serve as a medium between our advertisers and their target customers.',
    imageSrc: '/images/payment-card.png',
    ctaLink: '/services/marketing',
    imageOnLeft: true,
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-[#0b0c10] px-3 py-10 text-white sm:px-5 sm:py-12 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">

        {services.map((service) => (
          <div
            key={service.id}
            className="grid w-full min-w-0 grid-cols-1 items-center gap-6 rounded-2xl border border-gray-800/60 bg-[#121318] p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8"
          >
            {/* Image */}
            <div
              className={`relative h-48 w-full min-w-0 overflow-hidden rounded-xl bg-gray-900 sm:h-56 md:h-72 ${
                service.imageOnLeft ? 'md:order-1' : 'md:order-2'
              }`}
            >
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div
              className={`flex min-w-0 flex-col justify-center space-y-4 ${
                service.imageOnLeft ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {service.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                {service.description}
              </p>

              <div>
                <Link
                  href={service.ctaLink}
                  className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  <span>Get started</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-600 text-xs">
                    ➔
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
