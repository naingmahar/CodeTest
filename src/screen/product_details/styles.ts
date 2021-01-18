import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../res/Color';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
  },
  galleryContainer: {
    backgroundColor: Color.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {flex: 1, width: '50%', height: width / 2, resizeMode: 'center'},
  infoContainer: {
    borderRadius: 5,
    backgroundColor: Color.background,
    margin: 20,
    padding: 10,
  },
  infoTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line_price: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  promotionContainer: {
    flex: 1,
    backgroundColor: Color.background,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
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
