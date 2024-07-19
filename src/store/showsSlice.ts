import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchDetailsShows, fetchListShows} from './showsThunks';
import {ApiDetailsShows, ApiFetchShows} from '../types';
import {RootState} from '../app/store';

export interface ShowsState {
  shows: ApiFetchShows [];
  showsDetails: ApiDetailsShows [];
  input: string;
  isLoading: false | 'fetchLoading' | 'getLoading';
  error: boolean;
}

const initialState: ShowsState = {
  shows: [],
  showsDetails: [],
  input: '',
  isLoading: false,
  error: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setInputValue: (state:ShowsState ,action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    showsValue: (state:ShowsState ,action: PayloadAction<ApiFetchShows[]>) => {
      state.shows = action.payload;
    },
    showsDetailsValue: (state:ShowsState ,action: PayloadAction<ApiDetailsShows[]>) => {
      state.showsDetails = action.payload;
    },
  },
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

export const selectShows = (state: RootState) => state.shows.shows;
export const selectDetailsShows = (state: RootState) => state.shows.showsDetails;
export const selectLoading = (state: RootState) => state.shows.isLoading;
export const selectInputValue = (state: RootState) => state.shows.value;

export const {
  setInputValue,
  showsValue ,
  showsDetailsValue,
} = showsSlice.actions;