import {StyleSheet} from 'react-native';
import {Color} from '../../res/Color';

export const styles = StyleSheet.create({
  floatingButtom: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 50,
    backgroundColor: Color.primary,
    borderRadius: 100,
  },
});
