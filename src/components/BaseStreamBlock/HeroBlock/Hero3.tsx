import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Hero3 = () => {
  return (
    <div className="py-16 w-full h-[100vh] md:py-28 px-5 md:px-16">
      {/* Header Content */}
      <div className="md:w-1/2 mb-12 md:mb-25">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-6">
          Long heading is what you see here in this header section
        </h1>
        <p className="text-lg  mb-6 md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-black text-white hover:bg-black/90 rounded-none">
            Button
          </Button>
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black/5 rounded-none">
            Button
          </Button>
        </div>
      </div>

      {/* Image Grid */}
      <Image
        src={CONFIG.placeholderImage}
        alt="Hero image"
        width={1312}
        height={768}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
