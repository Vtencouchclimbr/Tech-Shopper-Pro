import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import '../utils/offCanvas.css';

export  interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface WishlistState {
    items: WishlistItem[];
}

interface WishlistContextProps {
    state: WishlistState;
    dispatch: React.Dispatch<any>;
}

// Creates context for the wishlist with an undefined initial value
const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

// Reducer function to manage the wishlist state based on actions
const wishlistReducer = (state: WishlistState, action: any): WishlistState => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            // Adds a new item to the wishlist
            return {
                ...state, items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_WISHLIST':
            // Removes an item from the wishlist by filtering it out
            return {
                ...state, items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            // Returns the current state if the action type is not recognized
            return state;
    }
};

// Provider component to wrap the application and provide wishlist state and dispatch function
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    // Initializes the wishlist state with an empty items array
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    return (
         // Provides the wishlist state and dispatch function to the context
        <WishlistContext.Provider value={{ state, dispatch }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Custom hook to use the wishlist context
export const useWishlist = (): WishlistContextProps => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};