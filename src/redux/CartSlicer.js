import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
         products:[],
         productsNumber:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
            addToCart :(state,action)=>{
                   const addProductExists = state.products.find(product => product.id === action.payload.id );
                   if(addProductExists){
                    addProductExists.quantity += parseInt(action.payload.quantity)
                   }
                   else{
                     state.products.push({...action.payload , quantity : parseInt(action.payload.quantity)})
                   }
                   state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
            },
            RemoveFromCart :(state,action)=>{
                const ProducttoRemove = state.products.find(product => product.id === action.payload );
                state.productsNumber = state.productsNumber - ProducttoRemove.quantity;
                const index = state.products.findIndex(product => product.id === action.payload );
                state.products.splice(index,1);
            }
    }

})

export const { addToCart ,RemoveFromCart } = cartSlice.actions ;
export default cartSlice.reducer;