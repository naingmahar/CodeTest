import React, {useContext} from 'react';
import {RootStackScreen, MainStack} from './src/navigation/AppStack';
import {CartProvider, CartContext} from './src/context/cart.context';
import {Text} from 'native-base';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
