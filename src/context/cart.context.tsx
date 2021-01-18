import React, {useState, ReactNode, useReducer} from 'react';
import {Product} from '../lib/Model/Product.interface';

export type CartItemProps = {
  id: number | string;
  name: string;
  list_price: number;
  percentage: number;
  product_image: string;
  status: string;
};
export interface ICart {
  count?: number;
  items: CartItemProps[];
}

export type ICartAction = {
  type: 'ADD_ITEM';
  product: CartItemProps;
};

const reducer = (state: ICart, action: ICartAction) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      state.items = [...state.items, ...[action.product]];
      state.count = (state.count || 0) + 1;
      return state;
    }
    default:
      return state;
  }
};

const initialState: ICart = {items: [], count: 0};
const initialContext: [ICart, React.Dispatch<ICartAction>] = [
  initialState,
  () => {},
];

export const CartContext = React.createContext(initialContext);

export function CartProvider({children}: {children: ReactNode}) {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={[state, setState]}>
      {children}
    </CartContext.Provider>
  );
}
