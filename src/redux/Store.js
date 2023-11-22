import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlicer';

export default configureStore({       
        reducer :{
               cart : CartReducer
        }       
})