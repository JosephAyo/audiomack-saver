import {WIDTH, addSize, optionIconSize, HEIGHT} from './dimensions';
export const controls = {
  width: WIDTH * 0.5,
  height: 40,
  color: '#bdb8b8',
  border: 30,
  radius: 20,
  opacity: 0.25,
  x: 3,
  y: 0,
  style: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally,
    marginTop: '5%',
  },
};
export const addButton = {
  width: addSize,
  height: addSize,
  color: '#bdb8b8',
  border: 40,
  radius: addSize / 2,
  opacity: 0.3,
  x: 3,
  y: 0,
  style: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally,
    marginLeft: 'auto',
  },
};
export const homePlayButton = {
  width: 35,
  height: 35,
  color: '#bdb8b8',
  border: 10,
  radius: 35 / 2,
  opacity: 0.3,
  x: 3,
  y: 0,
  style: {
    // flex: 1,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally,
  },
};
export const optionIcon = {
  width: optionIconSize,
  height: optionIconSize,
  color: '#bdb8b8',
  border: 20,
  radius: optionIconSize / 2,
  opacity: 0.3,
  x: 3,
  y: 0,
  style: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally,
  },
};
export const optionTextContainer = {
  width: WIDTH * 0.35,
  height: HEIGHT * 0.05,
  color: '#bdb8b8',
  border: 15,
  radius: 10,
  opacity: 0.3,
  x: 3,
  y: 0,
  style: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally,
  },
};
