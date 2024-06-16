import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Встановлення заголовка авторизації у вихідних параметрах запиту
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищення заголовка авторизації
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * Виконання POST-запиту на реєстрацію користувача
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // Встановлення отриманого токена авторизації у заголовок
      setAuthHeader(res.data.token); // Повернення даних з відповіді сервера
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Обробка помилки із викликом rejectWithValue
    }
  }
);

/*
 * Виконання POST-запиту на авторизацію користувача
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // Встановлення отриманого токена авторизації у заголовок
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Обробка помилки
    }
  }
);

/*
 * Виконання POST-запиту на виход користувача
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader(); // Очищення заголовка авторизації
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Обробка помилки
  }
});

/*
 * Читання токена зі стану через getState()
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user'); // Помилка, якщо токен не збережений у стані
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current'); // Встановлення збереженого токена авторизації у заголовок
      return res.data; // Повернення даних з відповіді сервера
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Обробка помилки
    }
  }
);
