import { Header1 } from '@/components/BaseStreamBlock/HeaderBlock/Header1';
import { Header2 } from '@/components/BaseStreamBlock/HeaderBlock/Header2';
import { Header3 } from '@/components/BaseStreamBlock/HeaderBlock/Header3';

interface HeaderBlockProps {
  variant: string;
}

export const HeaderBlock = ({ variant }: HeaderBlockProps) => {
  switch (variant) {
    case '1':
      return <Header1 />;
    case '2':
      return <Header2 />;
    case '3':
      return <Header3 />;
    default:
      return null;
  }
};
