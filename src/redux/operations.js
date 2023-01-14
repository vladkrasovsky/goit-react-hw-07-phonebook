import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63bcd044d66006238892d3b0.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
