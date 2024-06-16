import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Створення асинхронної Thunk-дії fetchContacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // Надсилання GET-запиту на '/contacts'
      const response = await axios.get('/contacts');
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Створення асинхронної Thunk-дії addContacts
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      // Надсилання POST-запиту на '/contacts' з даними
      const response = await axios.post('/contacts', contact);
      toast.success('The contact is successfully added');
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Створення асинхронної Thunk-дії deleteContacts
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      // Надсилання DELETE-запиту на `/contacts/${contactId}`
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('The contact is deleted');
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
