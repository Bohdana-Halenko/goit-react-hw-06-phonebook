import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items.push(action.payload);
    },

    // deleteItems: (state, { payload }) =>
    //   state.items.filter(({ id }) => id !== payload),
    
    deleteItems: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, setItems, deleteItems } = contactsSlice.actions;

export default contactsSlice.reducer;