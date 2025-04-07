import { Button } from '@/components/ui/button';
import { CONFIG } from '@/constants/config';

const CardButtons = () => (
  <div className="flex gap-6">
    <Button variant="secondary" className="border-white">
      Button
    </Button>
    <Button variant="link" className="text-white">
      Button
    </Button>
  </div>
);

const FeatureCard = ({
  size = 'small',
  heading,
  text,
  showButtons = false,
  tagline,
}: {
  size?: 'small' | 'medium' | 'large';
  heading: string;
  text: string;
  showButtons?: boolean;
  tagline?: string;
}) => {
  const sizeClasses =
    size === 'large'
      ? 'p-8'
      : size === 'medium'
        ? 'p-8'
        : 'p-6 flex flex-col justify-between items-start';
  const baseClasses = 'text-white p-6 md:h-full relative z-1';

  return (
    <div className="relative h-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-1"
        style={{
          backgroundImage: `url('${CONFIG.placeholderImage}')`,
        }}
      />
      <div className="absolute bg-black inset-0 bg-cover bg-center opacity-50 z-1" />
      <div className={`${baseClasses} ${sizeClasses}`}>
        <div>
          {tagline && <p className="text-sm mb-2">{tagline}</p>}
          <h3
            className={`font-bold mb-5 md:mb-6 ${size === 'small' ? 'text-xl mb-3' : 'text-2xl'}`}>
            {heading}
          </h3>
          <p className="mb-5 md:mb-6">{text}</p>
        </div>
        {showButtons ? (
          <CardButtons />
        ) : (
          <Button variant="link" className="text-white gap-2 group p-0">
            Button
          </Button>
        )}
      </div>
    </div>
  );
};

export const Features4 = () => {
  return (
    <div className="py-16 md:py-28 px-5 md:px-16 w-full relative">
      <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
        <p className="text-sm mb-4">Tagline</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Short heading goes here
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-3 gap-8">
        <div className="row-start-1 row-end-3 col-start-1 col-end-3">
          <FeatureCard
            size="large"
            tagline="Tagline"
            heading="Medium length section heading goes here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            showButtons
          />
        </div>
        <div className="row-start-2 row-end-4 col-start-3 col-end-5">
          <FeatureCard
            size="medium"
            heading="Short heading here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            showButtons
          />
        </div>
        <div className="row-start-1 row-end-2 col-start-3 col-end-5">
          <FeatureCard
            heading="Medium length section heading goes here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          <FeatureCard
            heading="Medium length section heading goes here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="row-start-3 row-end-4 col-start-2 col-end-3">
          <FeatureCard
            size="large"
            tagline="Tagline"
            heading="Medium length section heading goes here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            showButtons
          />
        </div>
      </div>
    </div>
  );
};
