import { Hero1 } from '@/components/BaseStreamBlock/HeroBlock/Hero1';
import { Hero2 } from '@/components/BaseStreamBlock/HeroBlock/Hero2';
import { Hero3 } from '@/components/BaseStreamBlock/HeroBlock/Hero3';

interface HeroBlockProps {
  variant: string;
}

export const HeroBlock = ({ variant }: HeroBlockProps) => {
  return <Hero3 />;
  switch (variant) {
    case '1':
      return <Hero1 />;
    default:
      return null;
  }
};
