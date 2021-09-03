import {StyleSheet} from 'react-native';
import {Colors, Typography, Dimensions} from '../../style/index';
const trackArtDims = {
  width: 240,
  height: 260,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    width: Dimensions.WIDTH,
  },
  trackArtContainer: {
    marginTop: '10%',
    marginBottom: '1%',
    width: trackArtDims.width,
    height: trackArtDims.height,
    borderBottomRightRadius: trackArtDims.width / 2,
    borderBottomLeftRadius: trackArtDims.width / 2,
    backgroundColor: Colors.BACKGROUND,
    elevation: 8,
    paddingVertical: 6,
  },
  trackArt: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  trackTitleContainer: {
    width: Dimensions.WIDTH * 0.6,
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: '900',
  },
  addOptions: {
    position: 'absolute',
    bottom: '6%',
    right: '6%',
  },
  addButton: {
    backgroundColor: Colors.WHITE,
    width: Dimensions.addSize,
    height: Dimensions.addSize,
    borderRadius: Dimensions.addSize / 2,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  trackForm:{
    position: 'absolute',
    bottom: 0,
  }
});

export default styles;
