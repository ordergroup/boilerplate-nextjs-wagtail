import { Features1 } from '@/components/BaseStreamBlock/FeaturesBlock/Features1';
import { Features2 } from '@/components/BaseStreamBlock/FeaturesBlock/Features2';
import { Features3 } from '@/components/BaseStreamBlock/FeaturesBlock/Features3';
import { Features4 } from '@/components/BaseStreamBlock/FeaturesBlock/Features4';
import { Features5 } from '@/components/BaseStreamBlock/FeaturesBlock/Features5';
import { Features6 } from '@/components/BaseStreamBlock/FeaturesBlock/Features6';
import { Features7 } from '@/components/BaseStreamBlock/FeaturesBlock/Features7';

interface FeaturesBlockProps {
  variant: string;
}

export const FeaturesBlock = ({ variant }: FeaturesBlockProps) => {
  switch (variant) {
    case '1':
      return <Features1 />;
    case '2':
      return <Features2 />;
    case '3':
      return <Features3 />;
    case '4':
      return <Features4 />;
    case '5':
      return <Features5 />;
    case '6':
      return <Features6 />;
    case '7':
      return <Features7 />;
    default:
      return null;
  }
};
