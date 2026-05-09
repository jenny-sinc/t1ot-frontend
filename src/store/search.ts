import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
    searchLocation: string;
    searchInsulinTypes: string[];
    searchInsulinFormats: string[];
    searchDistance: number;
};

const initialState: SearchState = {
    searchLocation: "",
    searchInsulinTypes: [],
    searchInsulinFormats: [],
    searchDistance: 5,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchLocation(state, action: { payload: string }) {
            state.searchLocation = action.payload;
        },
        setSearchInsulinTypes(state, action: { payload: string[] }) {
            state.searchInsulinTypes = action.payload;
        },
        setSearchInsulinFormats(state, action: { payload: string[] }) {
            state.searchInsulinFormats = action.payload;
        },
        setSearchDistance(state, action: { payload: number }) {
            state.searchDistance = action.payload;
        },
        // resetSearchState(state)
    },
});

export const {
    setSearchLocation,
    setSearchInsulinTypes,
    setSearchInsulinFormats,
    setSearchDistance
} = searchSlice.actions;
export default searchSlice.reducer;
