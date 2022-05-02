import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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