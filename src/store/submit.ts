import { createSlice } from '@reduxjs/toolkit';

type SubmitState = {
    submitLocation: string;
    submitInsulinTypes: string[];
    submitInsulinFormats: string[];
    submitNotes?: string;
};

const initialState: SubmitState = {
    submitLocation: "",
    submitInsulinTypes: [],
    submitInsulinFormats: [],
    submitNotes: "",
};

const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        setSubmitLocation(state, action: { payload: string }) {
            state.submitLocation = action.payload;
        },
        setSubmitInsulinTypes(state, action: { payload: string[] }) {
            state.submitInsulinTypes = action.payload;
        },
        setSubmitInsulinFormats(state, action: { payload: string[] }) {
            state.submitInsulinFormats = action.payload;
        },
        setSubmitNotes(state, action: { payload: string }) {
            state.submitNotes = action.payload;
        },
    },
});

export const {
    setSubmitLocation,
    setSubmitInsulinTypes,
    setSubmitInsulinFormats,
    setSubmitNotes,
} = submitSlice.actions;
export default submitSlice.reducer;
