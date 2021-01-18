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
import {CategoryItem} from '../CategoryItem';
import {Color} from '../../res/Color';

export const CategoryGroup = ({
  props,
  cb,
}: {
  props: ProductCategory;
  cb: (id: number, name: string) => void;
}) => {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <View
        style={{
          width: '100%',
          padding: 10,
          backgroundColor: Color.background,
          alignItems: 'center',
        }}>
        <Text numberOfLines={1} style={{fontWeight: '700'}}>
          {props.category_name}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {props.sub_category.map((subCategory, index) => (
          <CategoryItem props={subCategory} key={index} cb={cb} />
        ))}
      </View>
    </View>
  );
};
