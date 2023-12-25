import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from '../state/bookingSlice';

const store = configureStore({
    reducer: {
        users: bookingSlice
    }
});

export default store;
