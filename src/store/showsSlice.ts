import {createSlice} from '@reduxjs/toolkit';
import {fetchDetailsShows, fetchListShows} from './showsThunks';
import {ApiDetailsShows, ApiFetchShows} from '../types';

export interface ShowsState {
  shows: ApiFetchShows [];
  showsDetails: ApiDetailsShows [];
  isLoading: false | 'fetchLoading' | 'getLoading';
  error: boolean;
}

const initialState: ShowsState = {
  shows: [],
  showsDetails: [],
  isLoading: false,
  error: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {x},
  extraReducers: (builder) => {
    builder.addCase(fetchListShows.pending, (state: ShowsState) => {
      state.error = false;
      state.isLoading = 'fetchLoading';
    });
    builder.addCase(fetchListShows.fulfilled, (state: ShowsState, {payload: shows}) => {
      state.isLoading = false;
      state.shows = shows;
    });
    builder.addCase(fetchListShows.rejected, (state: ShowsState) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(fetchDetailsShows.pending, (state: ShowsState) => {
      state.error = false;
      state.isLoading = 'getLoading';
    });
    builder.addCase(fetchDetailsShows.fulfilled, (state: ShowsState, {payload: showsDetails}) => {
      state.isLoading = false;
      state.showsDetails = showsDetails;
    });
    builder.addCase(fetchDetailsShows.rejected, (state: ShowsState) => {
      state.isLoading = false;
      state.error = true;
    });
  }
});

export const showsReducer = showsSlice.reducer;

