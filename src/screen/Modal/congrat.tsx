import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CustomIcon} from '../../componets/Icon';
import {styles} from './style';
import {Color} from '../../res/Color';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/AppStack';
export const CongratModal = (
  props: StackScreenProps<RootStackParamList, 'congrat'>,
) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <CustomIcon name="right" size={40} color={Color.primary} />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
            Congrats
          </Text>
          <Text style={{fontSize: 13}}>
            Your order ID-xxxxxx was placed successfully!
          </Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>
            Stay tuned because you items will be shipped shortly.
          </Text>
        </View>

        <View style={styles.btnMainContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => props.navigation.goBack()}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
              Continus Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
