import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PERSIST,
  REGISTER,
  PAUSE,
  PURGE,
} from 'redux-persist';
import { contactSlice } from './contacts-slice';


export const store = configureStore({
  reducer: {
    books: contactSlice,
  },
  
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
