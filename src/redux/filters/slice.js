import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', // Початковий стан фільтра
};

const filtersSlice = createSlice({
  name: 'filters', // Унікальне ім'я для slice
  initialState,
  reducers: {
    // редуктора який змінюватиме стан фільтра на основі переданої дії action
    setContactsFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
