import React, {useEffect, useState} from 'react';
import {View, Text, Toast} from 'native-base';
import {styles} from './style';
import {FlatList, Image} from 'react-native';
import {getProductsByCategory} from '../../lib/API/api';
import {Product} from '../../lib/Model/Product.interface';
import {CustomIcon} from '../../componets/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Images} from '../../res/image';
import {CartContext, CartItemProps} from '../../context/cart.context';
import {RootStackParamList} from '../../navigation/AppStack';
import {StackScreenProps} from '@react-navigation/stack';

const CartItem = (props: CartItemProps) => {
  const [count, setCount] = useState(1);
  const updateCount = (count: number) => {
    setCount(count);
  };
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: props.product_image || Images.noImage}}
        style={{width: 70, height: 70}}
      />
      <View style={{flex: 1, marginLeft: 5}}>
        <View style={styles.cardTitleContainer}>
          <Text style={{fontSize: 13, color: 'gray'}}>{props.name}</Text>
          <CustomIcon name="delete" />
        </View>
        <View style={styles.cardBottomContainer}>
          <Text style={{fontWeight: 'bold'}}>{props.list_price}Ks</Text>
          <View style={styles.itemCountContainer}>
            <TouchableOpacity onPress={() => setCount(count - 1)}>
              <Text>
                <CustomIcon name="minus" size={20} />
              </Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Text>
                <CustomIcon name="plus" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export const ShoppingCart = (
  props: StackScreenProps<RootStackParamList, 'Main'>,
) => {
  const [products, setProduct] = useState<CartItemProps[]>([]);
  const [cartState, setCartState] = React.useContext(CartContext);
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setProduct(cartState.items);
    });
    let tempTotal = 0;
    products.map((data) => {
      tempTotal += data.list_price;
    });
    setTotal(tempTotal);
    return unsubscribe;
  }, [cartState.items, props.navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{flex: 1}}
          data={products}
          renderItem={({index, item}) => <CartItem {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.infoContainer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: 'bold'}}>Total</Text>
          <Text style={{fontWeight: 'bold'}}>{total}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => props.navigation.navigate('congrat')}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
