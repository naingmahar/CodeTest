import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getProductsByCategory} from '../../lib/API/api';
import {ProductList, Product} from '../../lib/Model/Product.interface';
import {ProductItem} from '../../componets/ProductItem';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/AppStack';

export const Products = (
  props: StackScreenProps<HomeStackParamList, 'Products'>,
) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    const nav = props.navigation.addListener('focus', () => {
      props.navigation.setParams({name: props.route.params.name});
    });
    getProductsByCategory(props.route.params.id).then((data) => {
      setProducts(data.data.product_list);
    });
  }, []);

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({index, item}) => (
          <ProductItem
            props={item}
            cb={(id, name) => props.navigation.navigate('Details', {id, name})}
          />
        )}
        keyExtractor={(item) => item.product_id.toString()}
      />
    </View>
  );
};
