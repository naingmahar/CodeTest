import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoriesScreen} from '../../screen/categories';
import {ShoppingCart} from '../../screen/shoppingCart';
import {CustomIcon} from '../../componets/Icon';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Color} from '../../res/Color';
import {Text} from 'native-base';
import {CartContext} from '../../context/cart.context';
import {ProductStack} from './ProductStackNav';
import {CartStack} from './CartStackNav';
const Tab = createBottomTabNavigator();

const CartBadge = () => {
  const [cartState, reducer] = React.useContext(CartContext);

  return (
    <View style={styles.badgeContainer}>
      <Text style={{color: 'white', fontSize: 11}}>{cartState.count}</Text>
    </View>
  );
};
export function BottomTabsNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any = String(route.name).toLowerCase();
          return (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? color : 'white'},
              ]}>
              {iconName === 'cart' && <CartBadge />}
              <CustomIcon
                name={iconName}
                size={20}
                color={focused ? 'white' : Color.icon}
              />
            </View>
          );
        },

        tabBarLabel: ({}) => {
          return (
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>
              {route.name}
            </Text>
          );
        },

        tabBarVisible: route.name !== 'Details',

        tabBarButton: ({onPress, children, style}) => {
          return (
            <View style={style}>
              <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.primary,
        style: {
          backgroundColor: Color.background,
          height: 60,
          padding: 5,
        },
      }}>
      <Tab.Screen name="Home" component={ProductStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Account" component={ShoppingCart} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 5,
    width: 36,
    alignItems: 'center',
  },
  badgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 17,
    position: 'absolute',
    top: 0,
    right: 0,
    height: 17,
    backgroundColor: Color.primary,
    borderRadius: 100,
    zIndex: 1,
  },
});
