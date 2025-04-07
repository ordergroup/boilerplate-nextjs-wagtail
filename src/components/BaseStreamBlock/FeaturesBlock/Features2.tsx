import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Features2 = () => {
  // Feature card data
  const features = [
    {
      id: 1,
      title: 'Long heading is what you see here in this feature section',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
      image: CONFIG.placeholderImage,
    },
    {
      id: 2,
      title: 'Long heading is what you see here in this feature section',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
      image: CONFIG.placeholderImage,
    },
    {
      id: 3,
      title: 'Long heading is what you see here in this feature section',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
      image: CONFIG.placeholderImage,
    },
  ];

  return (
    <div className="py-16  md:py-28  px-5 md:px-16 w-full relative">
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 max-w-4xl mx-auto">
        Long heading is what you see here in this feature section
      </h1>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map(feature => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] mb-6 md:mb-8 relative">
              <Image
                src={feature.image || '/placeholder.svg'}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 md:mb-4">{feature.title}</h3>

            {/* Description */}
            <p className="mb-6 md:mb-8 text-base">{feature.description}</p>

            {/* Button */}
            <Button variant="link">
              Button
              {/*<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
