import type React from 'react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';
import Link from 'next/link';

export const Contact3 = () => {
  const locations = [
    {
      city: 'Sydney',
      address: '123 Sample St, Sydney NSW 2000 AU',
      link: '#',
    },
    {
      city: 'New York',
      address: '123 Sample St, New York NY 10000 USA',
      link: '#',
    },
    {
      city: 'London',
      address: '123 Sample St, London W1C 1DE, United Kingdom',
      link: '#',
    },
  ];

  return (
    <div className="py-16 w-full md:py-28 px-5 md:px-16">
      <div className="mb-12 md:mb-20">
        <p className="text-base mb-3 md:mb-4">Tagline</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6 ">
          Locations
        </h1>
        <p className="max-w-lg text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-20">
        <div className="space-y-12">
          {locations.map((location, index) => (
            <div key={location.city} className="relative pl-6 mb-10">
              {index === 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-black" />
              )}
              <h2 className="text-2xl font-bold mb-3 md:mb-4">
                {location.city}
              </h2>
              <p className="mb-5 md:mb-6">{location.address}</p>
              <Button
                variant="link"
                className="p-0 h-auto font-medium text-black hover:text-black/80"
                asChild>
                <Link href={location.link}>View Office</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-[#d9d9d9] aspect-square md:aspect-auto md:min-h-[500px] flex items-center justify-center">
          <Image
            src={CONFIG.placeholderImage}
            alt="Hero image"
            width={1312}
            height={768}
            className="w-full h-auto object-cover max-h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};
