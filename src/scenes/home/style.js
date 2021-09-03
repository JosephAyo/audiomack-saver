import {StyleSheet} from 'react-native';
import {Colors, Typography, Dimensions} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  listPageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: Dimensions.HEIGHT * 0.05,
    width: Dimensions.WIDTH,
  },
  pageListNavigator: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    height: '100%',
  },
  pageProgress: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    height: '100%',
  },
});

export default styles;
