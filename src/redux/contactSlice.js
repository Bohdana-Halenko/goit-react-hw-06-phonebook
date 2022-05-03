import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems(state, action) {
      state.contacts.items.push(action.payload);
    },
    setFilter(state, action) {
      state.contacts.filter = action.payload;
    },
    deleteItems: (state, action) => {
      const newItems = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
      state.contacts.items = newItems;
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const itemsReducer = persistReducer(persistConfig, contactSlice.reducer);
export const { setFilter, setItems, deleteItems } = contactSlice.actions;
export default contactSlice.reducer;
// Selectors
// export const getItemsValue = state => state.contacts.contacts;
