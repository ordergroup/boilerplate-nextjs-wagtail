import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Features7 = () => {
  // Feature data
  const features = [
    {
      id: 1,
      title: 'Short heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      id: 2,
      title: 'Short heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      id: 3,
      title: 'Short heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
  ];

  return (
    <div className="py-16 md:py-28 px-5 md:px-16 w-full relative">
      {/* Main heading section */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <p className="text-sm mb-3 md:mb-4">Tagline</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6">
          Medium length section heading goes here
        </h1>
        <p className="mb-6 md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex gap-6 justify-center">
          <Button variant="secondary">Button</Button>
          <Button variant="link">
            Button
            {/*<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
          </Button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {/* Left column - Features */}
        <div className="md:py-14">
          {features.map((feature, index) => (
            <div key={feature.id}>
              <div className="flex gap-3 items-start py-6">
                {/*<Cube className="h-6 w-6 flex-shrink-0 mt-1" />*/}
                <div>
                  <h3 className="text-xl font-bold mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </div>
              {index < features.length - 1 && (
                <Separator className="bg-primary" />
              )}
            </div>
          ))}
        </div>

        {/* Right column - Image */}
        <div className="aspect-[4/5] relative order-first md:order-last mb-8 md:mb-0">
          <Image
            src={CONFIG.placeholderImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
