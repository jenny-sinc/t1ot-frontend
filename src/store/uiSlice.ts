import { createSlice } from '@reduxjs/toolkit';

type UIState = {
    screenSize: 'mobile' | 'desktop';
    modalOpen: boolean;
};

const initialState: UIState = {
    screenSize: 'desktop',
    modalOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setModalOpen(state, action: { payload: boolean }) {
            state.modalOpen = action.payload;
        },
        setScreenSize(state, action: { payload: 'mobile' | 'desktop' }) {
            state.screenSize = action.payload;
        }
    },
});

export const { setModalOpen, setScreenSize } = uiSlice.actions;
export default uiSlice.reducer;
