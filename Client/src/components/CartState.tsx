import React, { createContext, useContext,  useReducer, ReactNode } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

interface CartContextProps {
    state: CartState;
    dispatch: React.Dispatch<any>;
}

// Create a context for the cart with an undefined initial value
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Reducer function to manage the cart state based on actions
const cartReducer = (state: CartState, action: any): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Add a new item to the cart
            return {
                ...state, items: [...state.items, action.payload] 
            };
        case 'REMOVE_ITEM':
            // Remove an item from the cart by filtering it out
            return {
                ...state, items: state.items.filter(item => item.id !== action.payload)
            };
        case 'UPDATE_ITEM':
            // Update the quantity of an existing item in the cart
            return {
            ...state, items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item),
            };
        default:
            // Return the current state if the action type is not recognized
            return state;
    }
};

// Provider component to wrap the application and provide cart state and dispatch function
export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Initialize the cart state with an empty items array
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        // Provide the cart state and dispatch function to the context
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};