import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    deleteItems: (state, { payload }) => {
      state.filter = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { setFilter, setItems, deleteItems } = contactSlice.actions;
export default contactSlice.reducer;