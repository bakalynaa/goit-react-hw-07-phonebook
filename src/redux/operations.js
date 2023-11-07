import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://654a18d0e182221f8d527e00.mockapi.io/contacts/';

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
      const { data } = await axios.get('contacts');
      return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async ({ name, phone }, thunkAPI) => {
      const { data } = await axios.post('contacts', { name, phone });
      return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
  }
);
