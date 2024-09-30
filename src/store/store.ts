import { createStore } from 'redux';
import usersReducer from './reducer.ts';

// Configuring the Redux store
export const store = createStore(usersReducer);

// Types for RootState and AppDispatch to be used across the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
