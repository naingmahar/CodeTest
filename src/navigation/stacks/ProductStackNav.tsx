import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNav} from './MainTabNav';
import {HomeScreenOption, ProductScreenOption} from '../option/home.navoption';
import {Products} from '../../screen/products';
import {ProductDetails} from '../../screen/product_details';
import {CategoriesScreen, Categories} from '../../screen/categories';

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

export function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Categories}
        options={HomeScreenOption}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={ProductScreenOption}
        // options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
