import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Categories} from '../../screen/categories';
import {Color} from '../../res/Color';
import {Text} from 'native-base';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: 'white',
        },
        style: {backgroundColor: Color.primary},
      }}>
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Categories
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Brands"
        component={Categories}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Brands
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Promotions"
        component={Categories}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Promotions
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
