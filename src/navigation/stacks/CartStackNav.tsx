import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNav} from './MainTabNav';
import {
  HomeScreenOption,
  ProductScreenOption,
  ShoppingScreenOption,
} from '../option/home.navoption';
import {Products} from '../../screen/products';
import {ProductDetails} from '../../screen/product_details';
import {CategoriesScreen, Categories} from '../../screen/categories';
import {ShoppingCart} from '../../screen/shoppingCart';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  Products: {
    id: number;
    name: string;
  };
  Details: {
    id: number;
    name: string;
  };
};

export function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ShoppingCart}
        options={ShoppingScreenOption}
      />
    </Stack.Navigator>
  );
}
