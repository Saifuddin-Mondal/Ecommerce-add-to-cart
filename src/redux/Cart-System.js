import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import Cookies from "js-cookie"

const initialState = {
    cart:Cookies.get("cart")?JSON.parse(Cookies.get("cart")): [],
    totalItem:Cookies.get("totalItem")? parseInt(Cookies.get("totalItem")): 0,
    total: Cookies.get("total")? parseFloat(Cookies.get("total")): 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex((items) => items.id === item.id);
            if (index >= 0) {
                toast.error("item is already added");
                console.log("item is already added");
                return;
            }
            state.cart.push(item);
            state.totalItem++;
            state.total = state.total + item.price

            Cookies.set("cart", JSON.stringify(state.cart));
            Cookies.set("totalItem", state.totalItem.toString());
            Cookies.set("total", state.total.toString());

            toast("Item is added");
            console.log("item is added");
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex((items) => items.id === item.id);
            if (index >= 0) {
                state.totalItem--;
                state.total = state.total - state.cart[index].price;
                state.cart.splice(index, 1);
                Cookies.set("cart", JSON.stringify(state.cart));
                Cookies.set("totalItem", state.totalItem.toString());
                Cookies.set("total", state.total.toString());
                toast.success("Course removed from cart")
            }
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer