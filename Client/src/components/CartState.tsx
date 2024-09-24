import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
}

interface AddItemAction {
    type: 'ADD_ITEM';
    payload: CartItem;
}

interface RemoveItemAction {
    type: 'REMOVE_ITEM';
    payload: number; // id of the item to remove
}

interface UpdateItemAction {
    type: 'UPDATE_ITEM';
    payload: { id: number; quantity: number };
}

type CartAction = AddItemAction | RemoveItemAction | UpdateItemAction;

interface CartContextProps {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ),
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Load initial state from localStorage, or use an empty array
    const initialState = {
        items: JSON.parse(localStorage.getItem('toCart') || '[]')
    };

    // Initialize the cart state with reducer
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Synchronize cart items with localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('toCart', JSON.stringify(state.items));
    }, [state.items]);

    return (
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
