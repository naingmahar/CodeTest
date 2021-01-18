import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Image, Alert, Dimensions, Button} from 'react-native';
import {styles} from './styles';
import {ProductDetail} from '../../lib/Model/ProductDetail.interface';
import {CustomIcon} from '../../componets/Icon';
import {Color} from '../../res/Color';
import {getProductDetailsById} from '../../lib/API/api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/AppStack';
import {CartContext} from '../../context/cart.context';
import {NavigationContext} from '@react-navigation/native';

export const ProductDetails = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, 'Details'>) => {
  const [props, setProps] = useState<ProductDetail>();

  const [cartState, cartReducer] = useContext(CartContext);

  useEffect(() => {
    getProductDetailsById(route.params.id)
      .then((data) => {
        setProps(data.data[0]);
      })
      .catch((error) => {
        console.warn(error.message || error);
      });
  }, []);

  if (!props) return <View></View>;
  return (
    <View style={styles.container}>
      <View style={styles.galleryContainer}>
        <Image
          source={{uri: props.url_link}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTitleContainer}>
          <View style={{flex: 1, marginRight: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.name}</Text>
          </View>
          <View>
            <CustomIcon name="like" color={Color.primary} />
          </View>
        </View>
        <View style={styles.infoPriceContainer}>
          <Text style={styles.line_price}>{props.list_price}Ks</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {props.list_price - (props.list_price * props.percentage) / 100}Ks
          </Text>
          <Text
            style={{
              backgroundColor: Color.primary,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            -{props.percentage}%
          </Text>
        </View>
      </View>
      <View style={styles.promotionContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Promotion</Text>
      </View>

      <View style={styles.btnMainContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            cartReducer({
              type: 'ADD_ITEM',
              product: {
                id: props.id,
                name: props.name,
                list_price:
                  props.list_price -
                  (props.list_price * props.percentage) / 100,
                percentage: props.percentage,
                product_image: props.url_link,
                status: props.status,
              },
            });
            navigation.goBack();
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
