import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TopTabs} from '../../navigation/stacks/HomeTopTabNav';
import {CategoryGroup} from '../../componets/CategoryGroup';
import {BottomTabs} from '../../componets/BottomTabs/BottomTabs';
import {getCategories} from '../../lib/API/api';
import {ProductCategory} from '../../lib/Model/ProductCategory.interface';
import {Container} from 'native-base';
import {CustomIcon} from '../../componets/Icon';
import {Color} from '../../res/Color';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';

export const CategoriesScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TopTabs />
      <TouchableOpacity style={styles.floatingButtom}>
        <CustomIcon name="message" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export const Categories = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    getCategories().then((categoriesRes) => {
      setCategories(categoriesRes.data);
    });
  }, []);

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList
        data={categories}
        renderItem={({index, item}) => (
          <CategoryGroup
            props={item}
            cb={(id, name) => navigation.navigate('Products', {id, name})}
          />
        )}
        keyExtractor={(item) => item.category_id.toString()}
      />
    </View>
  );
};
