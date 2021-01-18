import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../res/Color';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  modalContainer: {
    minWidth: '85%',
    minHeight: 285,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 30,
    marginHorizontal: 20,
  },
  btnMainContainer: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  btnContainer: {
    borderRadius: 20,
    backgroundColor: Color.primary,
    padding: 15,
    alignItems: 'center',
  },
});
