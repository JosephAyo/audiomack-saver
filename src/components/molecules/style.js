import {StyleSheet} from 'react-native';
import {Colors, Typography, Dimensions} from '../../style/index';
const avatarSize = 80;
const directionControlsSize = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    width: Dimensions.WIDTH,
    color: Colors.PRIMARY,
    ...Typography.FONT_REGULAR,
  },
  item: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Dimensions.HEIGHT * 0.15,
    width: '100%',
  },
  itemAvatar: {
    marginHorizontal: 5,
  },
  songImage: {
    flex: 1,
  },
  songTitle: {
    flex: 3,
    paddingLeft: 10,
  },
  songTitleText: {
    color: Colors.BLACK,
    fontSize: 17,
    fontWeight: '600',
  },
  itemImage: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
  },
  playIcon: {
    flex: 1,
    marginRight: 10,
  },
  itemVerticalLyCentered: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  playingView: {
    width: '30%',
    position: 'absolute',
    right: '2%',
    bottom: '8%',
    flexDirection: 'row',
  },
  trackControlsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    width: Dimensions.WIDTH * 0.9,
    height: Dimensions.HEIGHT * 0.22,
  },
  sliderContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  slider: {
    width: '100%',
    height: 20,
    borderRadius: 30,
  },
  progressContainer: {
    width: '90%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progress: {
    color: Colors.TEXT_A,
    fontSize: 12,
    fontWeight: 'bold',
  },
  controlsContainer: {
    width: Dimensions.WIDTH * 0.55,
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  directionControls: {
    position: 'relative',
    backgroundColor: Colors.WHITE,
    width: directionControlsSize,
    height: directionControlsSize,
    borderRadius: directionControlsSize / 2,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  interactionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.WIDTH * 0.5,
  },
  interactionsOption: {
    width: '100%',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginBottom: '3%',
    justifyContent: 'space-around', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  optionTextContainer: {
    position: 'relative',
    backgroundColor: Colors.WHITE,
    height: Dimensions.HEIGHT * 0.05,
    width: '100%',
    justifyContent: 'center', //Centered vertically
    padding: '3%',
    borderRadius: 10,
  },
  optionText: {
    color: Colors.BLACK,
    fontSize: 15,
  },
  optionIcon: {
    position: 'relative',
    backgroundColor: Colors.WHITE,
    width: Dimensions.optionIconSize,
    height: Dimensions.optionIconSize,
    borderRadius: Dimensions.optionIconSize / 2,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default styles;
