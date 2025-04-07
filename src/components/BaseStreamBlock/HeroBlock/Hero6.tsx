import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

export const Hero6 = () => {
  return (
    <main className="w-full h-full flex flex-col md:flex-row">
      {/* Hero Section */}
      <section className="w-full md:w-1/2 px-5 md:px-16 py-16 flex items-center md:h-[100vh]">
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
      </section>

      {/* Secondary Content Section */}
      <section className="w-full md:w-1/2 flex flex-wrap flex-col">
        <div className=" grow">
          <Image
            src={CONFIG.placeholderImage}
            alt="Hero image"
            width={1312}
            height={768}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Short heading goes here
            </h2>
            <p className="text-base text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-black w-10 h-10">
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-black w-10 h-10">
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
