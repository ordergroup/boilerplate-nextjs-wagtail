import { BlockProps } from '@/components/BaseStreamBlock/BaseStreamBlock';
import { BaseStreamBlockTypes } from '@/components/BaseStreamBlock/BaseStreamBlock.types';
import { PageComponentTypes } from '@/modules/app/pages/HomePage/PageComponent.types';

//  TODO: add wagtail api integration

const getPage = async () => {
  return {
    type: PageComponentTypes.HOME_PAGE,
  };
};

const getPageDetails = async (): Promise<{
  blocks: BlockProps[];
}> => {
  return {
    blocks: [
      {
        blockType: BaseStreamBlockTypes.HEADER,
        blockVariant: '1',
        id: '1',
      },
      {
        blockType: BaseStreamBlockTypes.HERO,
        blockVariant: '1',
        id: '2',
      },
      {
        blockType: BaseStreamBlockTypes.FEATURES,
        blockVariant: '1',
        id: '3',
      },
      {
        blockType: BaseStreamBlockTypes.CONTACT,
        blockVariant: '1',
        id: '4',
      },
    ],
  };
};

export const api = {
  getPage,
  getPageDetails,
};
