import { Footer1 } from '@/components/BaseStreamBlock/FooterBlock/Footer1';
import { Footer2 } from '@/components/BaseStreamBlock/FooterBlock/Footer2';
import { Footer3 } from '@/components/BaseStreamBlock/FooterBlock/Footer3';

interface FooterBlockProps {
  variant: string;
}

export const FooterBlock = ({ variant }: FooterBlockProps) => {
  switch (variant) {
    case '1':
      return <Footer1 />;
    case '2':
      return <Footer2 />;
    case '3':
      return <Footer3 />;
    default:
      return null;
  }
};
