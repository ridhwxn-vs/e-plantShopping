import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: 
  {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } 
        else 
        {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => 
    {
        const {name} =action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    decrementQuantity: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem && existingItem.quantity>0) {
            existingItem.quantity--;
        } 
        else if (existingItem && existingItem.quantity==0)
        {
            items = state.items.filter(item => item.name !== action.payload);
        }
    }
}
});

export const { addItem, removeItem, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
