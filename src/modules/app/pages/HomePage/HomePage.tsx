import { BaseStreamBlock } from '@/components/BaseStreamBlock/BaseStreamBlock';
import { CommonPageProps } from '@/modules/app/pages/types';

interface HomePageProps extends CommonPageProps {}

export const HomePage = ({ blocks }: HomePageProps) => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <BaseStreamBlock blocks={blocks} />
    </div>
  );
};
