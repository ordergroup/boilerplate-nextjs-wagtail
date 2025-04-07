import { Hero1 } from '@/components/BaseStreamBlock/HeroBlock/Hero1';
import { Hero2 } from '@/components/BaseStreamBlock/HeroBlock/Hero2';
import { Hero3 } from '@/components/BaseStreamBlock/HeroBlock/Hero3';
import { Hero4 } from '@/components/BaseStreamBlock/HeroBlock/Hero4';
import { Hero5 } from '@/components/BaseStreamBlock/HeroBlock/Hero5';
import { Hero6 } from '@/components/BaseStreamBlock/HeroBlock/Hero6';

interface HeroBlockProps {
  variant: string;
}

export const HeroBlock = ({ variant }: HeroBlockProps) => {
  switch (variant) {
    case '1':
      return <Hero1 />;
    case '2':
      return <Hero2 />;
    case '3':
      return <Hero3 />;
    case '4':
      return <Hero4 />;
    case '5':
      return <Hero5 />;
    case '6':
      return <Hero6 />;
    default:
      return null;
  }
};
