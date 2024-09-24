import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import '../utils/offCanvas.css';

export interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface WishlistState {
    items: WishlistItem[];
}

interface AddToWishlistAction {
    type: 'ADD_TO_WISHLIST';
    payload: WishlistItem;
}

interface RemoveFromWishlistAction {
    type: 'REMOVE_FROM_WISHLIST';
    payload: number; // id of the item to remove
}

type WishlistAction = AddToWishlistAction | RemoveFromWishlistAction;

interface WishlistContextProps {
    state: WishlistState;
    dispatch: React.Dispatch<WishlistAction>;
}

// Creates context for the wishlist with an undefined initial value
const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

// Reducer function to manage the wishlist state based on actions
const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            return {
                ...state, items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state, items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

// Provider component to wrap the application and provide wishlist state and dispatch function
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    // Initializes the wishlist state with an empty items array
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    return (
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
