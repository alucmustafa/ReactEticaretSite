import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import cardSlice from './cardSlice'


export const store = configureStore({
  reducer: {
    categories:CategorySlice,
    products:ProductSlice,
    carts:cardSlice,
   
  },
})