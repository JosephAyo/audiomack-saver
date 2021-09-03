import {StyleSheet} from 'react-native';
import {Colors, Typography, Dimensions} from '../../style/index';

const styles = StyleSheet.create({
  PrimaryTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  BackButtonContainer: {
    width: Dimensions.WIDTH,
    position: 'absolute',
    left: '2%',
    top: '4%',
  },
  BackButton: {
    backgroundColor: Colors.WHITE,
    width: Dimensions.backButtonSize,
    height: Dimensions.backButtonSize,
    borderRadius: Dimensions.backButtonSize / 2,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    elevation: 10,
  },
});

export default styles;
