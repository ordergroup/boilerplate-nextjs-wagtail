import { HomePage } from '@/modules/app/pages/HomePage';
import {
  PageComponentTypes,
  PageComponentTypesUnion,
} from '@/modules/app/pages/HomePage/PageComponent.types';
import { iget } from '@/utils/object';
import { notFound } from 'next/navigation';

export const pageComponents = {
  [PageComponentTypes.HOME_PAGE]: HomePage,
};

export const getPageComponent = (pageType: PageComponentTypesUnion) => {
  const PageComponent = iget(pageComponents, pageType);
  if (!PageComponent) {
    console.error(`No component found for page type: ${pageType}`);
    notFound();
  }
  return PageComponent;
};
