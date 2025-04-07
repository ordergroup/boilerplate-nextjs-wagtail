import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Features5 = () => {
  // Feature data
  const features = [
    {
      id: 1,
      title: 'Subheading one',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      image: CONFIG.placeholderImage,
    },
    {
      id: 2,
      title: 'Subheading two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      image: CONFIG.placeholderImage,
    },
    {
      id: 3,
      title: 'Subheading three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      image: CONFIG.placeholderImage,
    },
    {
      id: 4,
      title: 'Subheading four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      image: CONFIG.placeholderImage,
    },
  ];

  return (
    <div className="flex">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 ">
        {/* Main heading section */}
        <div className="md:w-1/2 px-5 md:px-12 py-12 md:py-70">
          <p className="text-sm mb-3 md:mb-4">Tagline</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-6">
            Medium length section heading goes here
          </h1>
          <p className="mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex gap-6">
            <Button variant="secondary">Button</Button>
            <Button variant="link">
              Button
              {/*<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
            </Button>
          </div>
        </div>

        {/* Feature list */}
        <div className="md:w-1/2">
          {features.map((feature, index) => (
            <div key={feature.id}>
              <div className="flex flex-col gap-6 md:gap-8 pl-5 md:pl-10 pr-5 md:pr-30    py-55 md:py-54">
                {/* Image */}
                <div className="w-full  aspect-[4/3] relative">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
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
      </div>
    </div>
  );
};
