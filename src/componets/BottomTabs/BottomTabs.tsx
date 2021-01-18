import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CustomIcon, IconsNamesProps} from '../Icon';
import {styles} from './styles';
import {color} from 'react-native-reanimated';
import {Color} from '../../res/Color';

export enum BTabNavName {
  HOME = 'home',
  CART = 'cart',
  ACCOUNT = 'account',
}

type props = {
  cb: (name: BTabNavName) => void;
  iconName: IconsNamesProps;
  label: BTabNavName;
  active: boolean;
  noti?: number;
};

const NavItem = (props: props) => {
  return (
    <View style={styles.subContiner}>
      <TouchableOpacity onPress={() => props.cb(props.label)}>
        <View style={[styles.iconContainer, props.active ? styles.active : {}]}>
          <CustomIcon
            name={props.iconName}
            color={props.active ? Color.activeNavIcon : Color.icon}
          />
          {props.noti !== undefined && (
            <View
              style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                position: 'absolute',
                top: 3,
                right: 0,
                height: 20,
                backgroundColor: Color.primary,
                borderRadius: 100,
              }}>
              <Text style={{color: 'white'}}>2</Text>
            </View>
          )}
        </View>
        <Text style={{textAlign: 'center'}}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};
export const BottomTabs = () => {
  const [active, setActive] = React.useState<BTabNavName>(BTabNavName.HOME);

  return (
    <View style={styles.container}>
      <NavItem
        cb={setActive}
        active={active === BTabNavName.HOME}
        label={BTabNavName.HOME}
        iconName={'home'}
      />
      <NavItem
        cb={setActive}
        active={active === BTabNavName.CART}
        label={BTabNavName.CART}
        noti={2}
        iconName={'cart'}
      />
      <NavItem
        cb={setActive}
        active={active === BTabNavName.ACCOUNT}
        label={BTabNavName.ACCOUNT}
        iconName={'profile'}
      />
    </View>
  );
};
