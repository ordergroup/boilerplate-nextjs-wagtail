import { ReactNode } from 'react';
import { store } from '@/modules/app/store/store';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
