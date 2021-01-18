import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Categories, CategoriesScreen} from '../screen/categories';
import {Products} from '../screen/products';
import {ProductDetails} from '../screen/product_details';
import {CongratModal} from '../screen/Modal/congrat';
import {
  HomeScreenOption,
  ProductScreenOption,
  ShoppingScreenOption,
} from './option/home.navoption';
import {ShoppingCart} from '../screen/shoppingCart';
import {BottomTabsNav} from './stacks/MainTabNav';

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

export type RootStackParamList = {
  Main: undefined;
  congrat: undefined;
};

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabsNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={ProductScreenOption}
      />
    </Stack.Navigator>
  );
}

export function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="congrat"
        component={CongratModal}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
      />
    </RootStack.Navigator>
  );
}
