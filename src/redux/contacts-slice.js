import { createSlice } from '@reduxjs/toolkit';


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


export const { setFilter, setItems, deleteItems } = contactSlice.actions;
export default contactSlice.reducer;