import { BaseStreamBlock } from '@/components/BaseStreamBlock/BaseStreamBlock';
import { CommonPageProps } from '@/modules/app/pages/types';

interface HomePageProps extends CommonPageProps {}

export const HomePage = ({ blocks }: HomePageProps) => {
  return (
    <div>
      <BaseStreamBlock blocks={blocks} />
    </div>
  );
};
