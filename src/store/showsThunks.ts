import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {toast} from 'react-toastify';
import {ApiDetailsShows, ApiFetchShows} from '../types';



export const fetchListShows = createAsyncThunk<ApiFetchShows[], string>(
  'shows/fetchListShows', async (value: string) => {
    try {
      const response = await axiosApi.get<ApiFetchShows[]>(`http://api.tvmaze.com/search/shows?q=${value}`);

      if (response.status !== 200) {
        toast.error('An unexpected error occurred, please try again later.');
        throw new Error('An unexpected error occurred, please try again later. ' + response.status);
      }

      if (response.data.length !== 0) {
        return response.data;
      }
    } catch (error) {
      toast.error('An unexpected error occurred, please try again later.');
      console.error('An unexpected error occurred, please try again later. ' + error);
    }
  }
);

export const fetchDetailsShows = createAsyncThunk<ApiDetailsShows[], number>(
  'shows/fetchDetailsShows', async (id: number) => {
    try {
      const response = await axiosApi.get<ApiDetailsShows>(`http://api.tvmaze.com/shows/${id}`);

      if (response.status !== 200) {
        toast.error('An unexpected error occurred, please try again later.');
        throw new Error('An unexpected error occurred, please try again later. ' + response.status);
      }

      if (response.data) {
        return [response.data];
      }

      return [];
    } catch (error) {
      toast.error('An unexpected error occurred, please try again later.');
      console.error('An unexpected error occurred, please try again later. ' + error);
    }
  }
);