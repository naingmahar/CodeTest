import React from 'react';
import {Color} from '../../res/Color';
import {CustomIcon} from '../../componets/Icon';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Images} from '../../res/image';
import {View} from 'native-base';

export const HomeScreenOption = () => ({
  headerStyle: {
    backgroundColor: Color.background,
  },
  headerTitle: () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: Images.logo}} style={{width: 120, height: 50}} />
    </View>
  ),
  headerRight: () => <CustomIcon name="search" style={{margin: 10}} />,
  headerLeft: () => (
    <CustomIcon name="navicon" style={{margin: 10}} size={20} />
  ),
});

export const ProductScreenOption = (props: any) => ({
  headerStyle: {
    backgroundColor: Color.background,
  },
  headerTitle: () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>
        {' '}
        {props.route.params.name}
      </Text>
    </View>
  ),
  headerRight: () => <CustomIcon name="search" style={{margin: 10}} />,
  headerLeft: () => (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <CustomIcon name="back" style={{margin: 10}} size={20} />
    </TouchableOpacity>
  ),
});

export const ShoppingScreenOption = (props: any) => ({
  headerStyle: {
    backgroundColor: Color.background,
  },
  headerTitle: () => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}> Shopping Cart</Text>
    </View>
  ),
  headerRight: () => <CustomIcon name="search" style={{margin: 10}} />,
  headerLeft: () => (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <CustomIcon name="back" style={{margin: 10}} size={20} />
    </TouchableOpacity>
  ),
});
