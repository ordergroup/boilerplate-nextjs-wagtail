import { RootState } from './store';

const getThemeMode = (state: RootState) => state.app.themeMode;

export const appSelectors = {
  getThemeMode,
};
