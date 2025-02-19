import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload
    }
});

// Export các action để sử dụng trong component
export const { increment, decrement } = counterSlice.actions;
