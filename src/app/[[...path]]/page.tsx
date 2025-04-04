import { api } from '@/lib/api';
import { getPageComponent } from '@/modules/app/pages';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ path?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function Page({ params }: PageProps) {
  // Convert path array to string path or use root path
  const { path: pathSplit = [] } = await params;
  const path = `/${pathSplit.join('/')}`;

  try {
    // First fetch to get the specific page type
    const basicPage = await api.getPage();

    // Get the specific page type from meta
    const pageType = basicPage.type;

    // Check if we have a component for this page type
    const PageComponent = getPageComponent(pageType);

    // Second fetch to get the full page data with the specific type
    const page = await api.getPageDetails();

    return <PageComponent blocks={page.blocks} />;
  } catch (error) {
    console.error(`Error fetching page for path ${path}:`, error);
    notFound();
  }
}
