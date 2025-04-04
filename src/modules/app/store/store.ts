import { baseApi } from '@/modules/app/services/api';
import { Middleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import { APP_REDUCER_NAME, appReducer } from './slice';

const middlewares: Middleware[] = [baseApi.middleware];

const logger = createLogger({
  collapsed: true,
});

if (
  process.env.NODE_ENV === 'development' &&
  (process.env.NEXT_PUBLIC_ENABLE_REDUX_LOGGER || 'False') === 'True'
) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    [APP_REDUCER_NAME]: appReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
