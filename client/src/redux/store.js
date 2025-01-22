import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authslice'; // Adjust the import to match the new filename

const store = configureStore({
    reducer: {
        auth: authReducer, // Add your auth reducer
    },
});

export default store;