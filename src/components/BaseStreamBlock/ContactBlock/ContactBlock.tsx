import { Contact1 } from '@/components/BaseStreamBlock/ContactBlock/Contact1';
import { Contact2 } from '@/components/BaseStreamBlock/ContactBlock/Contact2';
import { Contact3 } from '@/components/BaseStreamBlock/ContactBlock/Contact3';

interface ContactBlockProps {
  variant: string;
}

export const ContactBlock = ({ variant }: ContactBlockProps) => {
  switch (variant) {
    case '1':
      return <Contact1 />;
    case '2':
      return <Contact2 />;
    case '3':
      return <Contact3 />;
    default:
      return null;
  }
};
