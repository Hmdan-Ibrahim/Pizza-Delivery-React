import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartItem } from "../../utilities/intefaces/ICartItem";


const initialCart: ICartItem[] = (() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
})();

const initialState ={
    cart: initialCart
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>)=>{
            const existingItem = state.cart.find((item:ICartItem) => item.pizzaId === action.payload.pizzaId)
            if (existingItem) existingItem.quantity += 1;
            else state.cart.unshift(action.payload)

            localStorage.setItem("cart", JSON.stringify(state.cart))
        },

        removeItem: (state, action: PayloadAction <string>)=>{
            state.cart = state.cart.filter((item: ICartItem) => item.pizzaId != action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },

        increaseItemQuantity(state, action: PayloadAction<string>) {
            const item = state.cart.find((item:ICartItem) => item.pizzaId === action.payload) as ICartItem;
            item.quantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },

        decreaseItemQuantity(state, action: PayloadAction <string>) {
            const item = state.cart.find((item: ICartItem) => item.pizzaId === action.payload) as ICartItem;
            item.quantity--;
            if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);

            localStorage.setItem("cart", JSON.stringify(state.cart))
        },

        clearCart(state) {
            state.cart = [];
            localStorage.removeItem("cart")
        }
    }
})

export const {addItem, removeItem, clearCart, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions
export default cartSlice.reducer