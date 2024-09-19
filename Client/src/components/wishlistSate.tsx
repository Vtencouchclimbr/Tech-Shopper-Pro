import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface WishlistItem {
    id: number;
    name: string;
    price: number;
}

interface WishlistState {
    items: WishlistItem[];
}

interface WishlistContextProps {
    state: WishlistState;
    dispatch: React.Dispatch<any>;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

const wishlistReducer = (state: WishlistState, action: any): WishlistState => {
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