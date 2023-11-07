import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
