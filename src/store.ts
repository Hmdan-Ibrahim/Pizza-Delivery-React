import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
// import {  useSelector } from 'react-redux'


const store = configureStore({
  reducer: {
    cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export default store