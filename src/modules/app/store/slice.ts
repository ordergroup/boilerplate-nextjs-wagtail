import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './slice.types';

const initialState: AppState = {
  themeMode: 'light',
};

export const APP_REDUCER_NAME = 'app';

const appSlice = createSlice({
  name: APP_REDUCER_NAME,
  initialState,
  reducers: {
    toggleTheme: state => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const appReducer = appSlice.reducer;
export const appSliceActions = appSlice.actions;
