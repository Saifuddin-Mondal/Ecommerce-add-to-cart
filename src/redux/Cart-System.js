import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

const initialState={
    cart:[],
    totalItem:0,
    total:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            const index=state.cart.findIndex((items)=>items.id===item.id);
            if(index>0){
                toast.error("item is already added");
                console.log("item is already added");
                return;
            }
            state.cart.push(item);
            state.totalItem++;
            state.total=state.total+item.price
            toast("Item is added");
            console.log("item is added");
        },
        removeFromCart:(state,action)=>{
            const item=action.payload;
            const index=state.cart.findIndex((items)=>items.id===item.id);
            if(index>=0){
                state.totalItem--;
                state.total=state.total-state.cart[index].price;
                state.cart.splice(index,1);
                toast.success("Course removed from cart")
            }
        }
    }
})
export const { addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer