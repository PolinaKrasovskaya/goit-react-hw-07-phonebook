import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { filterContacts } from './contactsSlice';
import { contactsApi } from './contactsSliceQ';

// const MyMiddleware = store => next => aaction => {
//   console.log('Моя прослойка')
// }

export const store = configureStore({
  reducer: {
    contacts: filterContacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
    
  },
  middleware: getDefaultMiddleware =>[
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// export const persistor = persistStore(store)