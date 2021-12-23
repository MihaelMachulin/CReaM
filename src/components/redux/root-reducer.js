import { configureStore } from '@reduxjs/toolkit';
import starshipsReducer from './starships-reducer';

export default configureStore({
  reducer: {
    starships: starshipsReducer
  }
});