import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});


export const { increment } = optionsSlice.actions;