import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';

type FeatureCardProps = {
  tagline: string;
  heading: string;
  description: string;
  imageSrc: string;
  layout?: 'horizontal' | 'vertical';
};

const FeatureCard = ({
  tagline,
  heading,
  description,
  imageSrc,
  layout = 'vertical',
}: FeatureCardProps) => {
  const isHorizontal = layout === 'horizontal';

  return (
    <Card className="border overflow-hidden py-0 border-primary rounded-none">
      <div
        className={
          isHorizontal
            ? 'grid md:grid-cols-2 h-full py-0'
            : 'flex flex-col h-full py-0'
        }>
        <div
          className={`p-6 ${isHorizontal && 'md:flex md:flex-col md:justify-center'}`}>
          <p className="text-sm mb-2">{tagline}</p>
          <h3 className="text-xl font-bold mb-2">{heading}</h3>
          <p className="text-base mb-5 md:mb-6">{description}</p>
          <Button variant="link">
            Button
            {/* <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
        </div>
        <div
          className={`bg-[#E5E5E5] relative h-48 ${
            isHorizontal ? 'md:h-full' : 'mt-auto'
          }`}>
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>
      </div>
    </Card>
  );
};

export const Features3 = () => {
  return (
    <div className="py-16 md:py-28 px-5 md:px-16 w-full relative">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
        <p className="text-sm mb-3 md:mb-4">Tagline</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6">
          Short heading goes here
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          tagline="Tagline"
          heading="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc={CONFIG.placeholderImage}
          layout="horizontal"
        />
        <FeatureCard
          tagline="Tagline"
          heading="Short heading here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc={CONFIG.placeholderImage}
        />
        <FeatureCard
          tagline="Tagline"
          heading="Short heading here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc={CONFIG.placeholderImage}
        />
      </div>
    </div>
  );
};
