import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../res/Color';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    margin: 20,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: Color.background,
  },
  btnContainer: {
    borderRadius: 20,
    backgroundColor: Color.primary,
    padding: 15,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Color.background,
    padding: 10,
    marginVertical: 5,
  },
  cardTitleContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCountContainer: {
    height: 30,
    width: 80,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 15,
  },
});
