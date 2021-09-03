import {StyleSheet} from 'react-native';
import {Colors, Typography, Dimensions} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    width: Dimensions.WIDTH,
    backgroundColor: Colors.BACKGROUND,
    ...Typography.FONT_REGULAR,
    elevation: 12,
    height: 340,
    paddingBottom: '18%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dismissButton: {
    height: 15,
    backgroundColor: Colors.ALERT,
  },
  dismissText: {
    fontSize: 10,
  },
  formContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  formView: {
    width: '80%',
    height: '80%',
    justifyContent: 'space-around',
  },
  inputView: {
    // backgroundColor: Colors.ALERT,
  },
  inputLabel: {
    color: Colors.TEXT_B,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    marginTop: 10,
    height: 60,
    paddingLeft: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  proceedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 60,
    width: '80%',
    paddingLeft: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  proceedText: {
    color: Colors.WHITE,
  },
});

export default styles;
