import React, {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Color} from '../../res/Color';

export type IconsNamesProps =
  | 'setting'
  | 'navicon'
  | 'home'
  | 'profile'
  | 'close'
  | 'message'
  | 'cart'
  | 'back'
  | 'basket'
  | 'like'
  | 'delete'
  | 'minus'
  | 'plus'
  | 'account'
  | 'right'
  | 'search';

type ItemsProps = {
  name: IconsNamesProps;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const deafult = {
  color: Color.icon,
  size: 25,
};

const IconMapper = (icon: IconsNamesProps = 'home') => {
  const iconDirectionary = {
    setting: {name: 'settings', type: MaterialIcon},
    navicon: {name: 'navicon', type: FontAwesomeIcon},
    close: {name: 'close', type: MaterialIcon},
    home: {name: 'home', type: MaterialIcon},
    profile: {name: 'user-o', type: FontAwesomeIcon},
    account: {name: 'user-o', type: FontAwesomeIcon},
    search: {name: 'search', type: MaterialIcon},
    message: {name: 'chat-processing', type: MaterialCommunityIcons},
    cart: {name: 'shopping-basket', type: FontAwesomeIcon},
    back: {name: 'arrow-back', type: MaterialIcon},
    basket: {name: 'shopping-basket', type: MaterialIcon},
    like: {name: 'heart-o', type: FontAwesomeIcon},
    delete: {name: 'delete', type: AntDesignIcon},
    minus: {name: 'minus', type: MaterialCommunityIcons},
    plus: {name: 'plus', type: MaterialCommunityIcons},
    right: {name: 'check-circle', type: FontAwesomeIcon},
  };

  if (!iconDirectionary[icon])
    console.error(
      `Create iconDirectionary object for IconName "${icon}" at components/Icon/index.tsx.`,
    );

  return iconDirectionary[icon];
};

export const CustomIcon: React.FC<PropsWithChildren<ItemsProps>> = (
  props: ItemsProps,
) => {
  const Icon = IconMapper(props.name);
  return (
    <Icon.type
      name={Icon.name}
      size={props.size || deafult.size}
      color={props.color || deafult.color}
      style={props.style}
    />
  );
};
