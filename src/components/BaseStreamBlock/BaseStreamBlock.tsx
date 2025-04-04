import { BaseStreamBlockTypes } from '@/components/BaseStreamBlock/BaseStreamBlock.types';
import { ContactBlock } from '@/components/BaseStreamBlock/ContactBlock';
import { FeaturesBlock } from '@/components/BaseStreamBlock/FeaturesBlock';
import { HeaderBlock } from '@/components/BaseStreamBlock/HeaderBlock';
import { HeroBlock } from '@/components/BaseStreamBlock/HeroBlock';

export interface BlockProps {
  blockType: BaseStreamBlockTypes;
  blockVariant: string;
  id: string;
}

const Block = ({ blockType, blockVariant }: BlockProps) => {
  switch (blockType) {
    case BaseStreamBlockTypes.CONTACT:
      return <ContactBlock variant={blockVariant} />;
    case BaseStreamBlockTypes.HEADER:
      return <HeaderBlock variant={blockVariant} />;
    case BaseStreamBlockTypes.HERO:
      return <HeroBlock variant={blockVariant} />;
    case BaseStreamBlockTypes.FEATURES:
      return <FeaturesBlock variant={blockVariant} />;
    default:
      console.error(`Unknown block type: ${blockType}`);
      return <div>Unknown block type: {blockType}</div>;
  }
};

interface BaseStreamBlockProps {
  blocks: BlockProps[];
}

export const BaseStreamBlock = ({ blocks }: BaseStreamBlockProps) => {
  return (
    <div>
      {blocks.map(block => (
        <Block key={block.id} {...block} />
      ))}
    </div>
  );
};
