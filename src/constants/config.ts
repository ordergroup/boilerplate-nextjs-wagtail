export const CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  enableMocks: ['true', 'True'].includes(
    process.env.NEXT_PUBLIC_ENABLE_MOCKS || 'false',
  ),
  mswPrefix: '/api',
  placeholderImage: 'images/placeholder.svg',
};
