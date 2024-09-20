import React, { useState } from 'react';
import { useWishlist } from '../components/wishlistSate';

// Defines the structure of a cart item
interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

// Cart component definition
const Cart: React.FC = () => {
    // States to hold the list of items in the cart
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    // Gets the dispatch function from the wishlist context
    const { dispatch: wishlistDispatch } = useWishlist();

    const handleRemoveItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

     // Function to handle removing an item from the cart
    const handleMoveToWishlist = (item: CartItem) => {
        // Remove the item from the cart
        handleRemoveItem(item.id);
        // Add the item to the wishlist
        wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: { id: item.id, name: item.name, price: item.price } });
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                 // Display a message if the cart is empty
                <p>Your cart is empty</p>
                ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                             {/* Button to move the item to the wishlist */}
                            <button onClick={() => handleMoveToWishlist(item)}>I wish</button> 
                             {/* Button to remove the item from the cart */}
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;




