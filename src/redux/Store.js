import { configureStore } from "@reduxjs/toolkit"; // Use import for ES Modules
import counterReducer from './slices/Features/CounterSlice'; // Ensure the path to the slice is correct

const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default Store;
