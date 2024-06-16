import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';

// Конфігурація, вказуємо ключ, зберігання та поля, які треба зберегти
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Редюсер для керування станом користувача
    contacts: contactsReducer, // Редюсер для керування станом контактів
    filters: filtersReducer, // Редюсер для керування станом фільтра
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store); // persistor для збереження стану Redux у локальному сховищі.
