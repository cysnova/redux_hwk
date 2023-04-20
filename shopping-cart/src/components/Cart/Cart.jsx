import React, { useState } from 'react';
import { addCart, removeCart } from './cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const Cart = () => {
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart.items);
const [newItem, setNewItem] = useState({ id: '', name: '', price: '' });

const handleAddItem = (e) => {
  e.preventDefault();
  dispatch(addCart(newItem));
  setNewItem({ id: uuidv4(), name: '', price: '' });
};

const handleRemoveItem = (id) => {
  dispatch(removeCart({ id }));
};

const handleInputChange = (e) => {
  setNewItem((prevItem) => ({
    ...prevItem,
    [e.target.name]: e.target.value,
  }));
};



    return (
    <div >
    <h1>Shopping Cart</h1>
   
      <form onSubmit={handleAddItem} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
        <label htmlFor="price">Price:</label>
        <input type="text" name="price" value={newItem.price} onChange={handleInputChange} />
        <button type="submit" style={{ marginTop: '10px'}}>Add Item</button>
      </form>

      {cart.map((item) => (
    <div key={item.id}>
       
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
         
        </div>
      ))}
    </div>
  );
};
 

export default Cart;