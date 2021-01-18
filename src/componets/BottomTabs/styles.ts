import {StyleSheet} from 'react-native';
import {Color} from '../../res/Color';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    backgroundColor: Color.background,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  subContiner: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  active: {
    backgroundColor: Color.primary,
    borderRadius: 3,
  },
});
