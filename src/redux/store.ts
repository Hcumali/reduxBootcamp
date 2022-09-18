import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice';
import listReducer from './counter/listSlice';
import updateSlice from './counter/updateListSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        list:listReducer,
        update: updateSlice
    },
})
