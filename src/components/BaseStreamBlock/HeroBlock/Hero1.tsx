import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Hero1 = () => {
  return (
    <section className="py-16 w-full h-[100vh] md:py-28  px-5 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column - Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6">
            Medium length hero headline goes here
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex gap-6">
            <Button variant="primary">Button</Button>
            <Button variant="secondary">Button</Button>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="bg-[#E5E5E5] aspect-square md:aspect-[4/5] relative">
          <Image
            src={CONFIG.placeholderImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
