import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';

const FeatureSection = () => (
  <div className="flex flex-col items-center text-center relative z-1 text-white">
    <p className="text-sm mb-3 md:mb-4">Tagline</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6">
      Medium length section heading goes here
    </h2>
    <p className="max-w-md mb-6 md:mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
    <div className="flex gap-4">
      <Button variant="secondary" className="border-white">
        Button
      </Button>
      <Button variant="link" className="text-white">
        Button
        {/* <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
      </Button>
    </div>
  </div>
);

export const Features1 = () => {
  return (
    <div className="py-16  md:py-28  px-5 md:px-16 w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
          style={{
            backgroundImage: `url('${CONFIG.placeholderImage}')`,
          }}
        />
        <div className="absolute bg-black inset-0 bg-cover bg-center opacity-50 z-1" />
        <FeatureSection />
        <FeatureSection />
      </div>
    </div>
  );
};
