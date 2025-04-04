import { CONFIG } from '../constants/config';

export async function enableMocking() {
  if (!CONFIG.enableMocks) {
    return;
  }

  await import('./msw.polyfills');
  const { worker } = await import('./worker');
  return worker.start();
}
