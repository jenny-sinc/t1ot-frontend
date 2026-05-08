import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
    searchLocation: string;
    insulinFormat: string[];

};

const initialState: SearchState = {
    searchLocation: '',
    insulinFormat: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchLocation(state, action: { payload: string }) {
            state.searchLocation = action.payload;
        },
        setInsulinFormat(state, action: { payload: string[] }) {
            state.insulinFormat = action.payload;
        }
    },
});

export const { setSearchLocation, setInsulinFormat } = searchSlice.actions;
export default searchSlice.reducer;
