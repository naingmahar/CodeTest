import React from 'react';
import {Text, View} from 'native-base';
import {ProductCategory} from '../../lib/Model/ProductCategory.interface';
import {Image, TouchableOpacity} from 'react-native';
import {Color} from '../../res/Color';
import {ProductList, Product} from '../../lib/Model/Product.interface';
import {CustomIcon} from '../Icon';
import {Images} from '../../res/image';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

const OutOfStock = ({show}: {show: boolean}) => {
  if (!show) return <></>;
  return (
    <View style={styles.out_of_stock_container}>
      <View style={styles.out_of_stock_text_container}>
        <Text style={styles.out_of_stock}>out of stock</Text>
      </View>
    </View>
  );
};
const Discount = ({percent}: {percent: number | string}) => {
  if (percent <= 0) return <></>;
  return (
    <View style={styles.promo_container}>
      <LinearGradient
        style={styles.promo_text_container}
        colors={[Color.primary, '#79330c']}
        angle={20}
        useAngle>
        <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
          -{percent}%
        </Text>
      </LinearGradient>
    </View>
  );
};
export const ProductItem = ({
  cb,
  props,
}: {
  props: Product;
  cb: (id: number, name: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <OutOfStock show={props.status !== 'in_stock'} />
      <TouchableOpacity
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => cb(props.product_id, props.name)}>
        <Discount percent={props.percentage} />
        <Image
          style={styles.image}
          source={{
            uri: props.product_image || Images.noImage,
          }}
        />
        <View style={styles.lb_container}>
          <Text numberOfLines={3} style={{color: 'gray', fontSize: 13}}>
            {props.name}
          </Text>
        </View>

        {props.percentage > 0 && (
          <View style={styles.lb_container}>
            <Text style={styles.line_price}>{props.list_price}Ks</Text>
          </View>
        )}

        <View style={styles.price_container}>
          <Text style={{fontWeight: 'bold'}}>
            {props.list_price - (props.list_price * props.percentage) / 100}Ks
          </Text>

          <CustomIcon name="basket" color={Color.primary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
