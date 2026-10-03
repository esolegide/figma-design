import React from 'react';
import Image from 'next/image';

export default function HeroBanner(): React.JSX.Element {
  return (
    <section className="bg-[#12161A] px-3 py-4 sm:px-4 sm:py-6 md:px-12 md:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <Image
          src="/Frame.png"
          alt="WirkSpace Banner"
          width={1200}
          height={500}
          priority
          className="block w-full h-auto rounded-xl sm:rounded-2xl"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 1200px"
        />
      </div>
    </section>
  );
}
