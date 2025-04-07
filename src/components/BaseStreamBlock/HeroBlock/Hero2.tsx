import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';

export const Hero2 = () => {
  return (
    <section className="py-16 w-full h-[100vh] md:py-28  px-5 md:px-16 relative flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url('${CONFIG.placeholderImage}')`,
        }}
      />
      <div className="absolute bg-black inset-0 bg-cover bg-center opacity-50 z-1" />
      <div className="w-full md:w-1/2 relative z-3">
        <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6">
          Medium length hero headline goes here
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex gap-6">
          <Button variant="primary" className="bg-white text-primary">
            Button
          </Button>
          <Button variant="secondary" className="text-white border-white">
            Button
          </Button>
        </div>
      </div>
    </section>
  );
};
