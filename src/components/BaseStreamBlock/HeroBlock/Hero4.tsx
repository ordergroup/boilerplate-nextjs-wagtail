import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';

export const Hero4 = () => {
  return (
    <section className="py-16 w-full h-[100vh] md:py-28  px-5 md:px-16 relative flex items-center justify-center">
      {/* Hero content */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${CONFIG.placeholderImage}')`,
        }}
      />
      <div className="text-center relative z-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-6">
          Medium length hero heading goes here
        </h1>
        <p className="text-lg max-w-2xl mx-auto  mb-6 md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
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
    </section>
  );
};
