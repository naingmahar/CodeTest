import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
} from 'native-base';
import {ProductCategory} from '../../lib/Model/ProductCategory.interface';
import {Image} from 'react-native';
import {Color} from '../../res/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CategoryItem = ({
  props,
  cb,
}: {
  props: ProductCategory;
  cb: (id: number, name: string) => void;
}) => {
  return (
    <View
      style={{
        width: '30%',
        backgroundColor: Color.background,
        borderRadius: 10,
        padding: 10,
        margin: '1.5%',
      }}>
      <TouchableOpacity
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
        onPress={() => cb(props.category_id, props.category_name)}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: props.category_image,
          }}
        />
        <Text
          numberOfLines={2}
          style={{fontSize: 13, fontWeight: 'bold', color: '#808080'}}>
          {props.category_name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
