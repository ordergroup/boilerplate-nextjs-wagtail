'use client';

import { ReactNode, useEffect, useState } from 'react';
import { CONFIG } from '@/constants/config';
import { enableMocking } from '@/mocks/enableMocking';
import { StoreProvider } from '@/modules/app/store';
import styles from './RootLayout.styles.module.css';

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppWithStore>{children}</AppWithStore>
        </StoreProvider>
      </body>
    </html>
  );
}

const AppWithStore: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className={styles.main}>
      <MockingProvider>{children}</MockingProvider>
    </main>
  );
};

const MockingProvider = ({ children }: { children: ReactNode }) => {
  const [mockingInitialized, setMockingInitialized] = useState<boolean>(
    !CONFIG.enableMocks,
  );

  useEffect(() => {
    enableMocking().then(() => {
      setMockingInitialized(true);
    });
  }, []);

  if (!mockingInitialized) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};
