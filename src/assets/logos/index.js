import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {Colors} from '../../style/index';

export const PlayIcon = () => {
  const size = 35;
  return (
    <MaterialIcons
      name="play-arrow"
      color={Colors.PRIMARY}
      size={size}
      style={{
        backgroundColor: Colors.WHITE,
        borderRadius: size / 2,
        width: size,
      }}
    />
  );
};

export const BigPlayIcon = () => {
  const size = 60;
  return (
    <MaterialIcons
      name="play-arrow"
      color={Colors.WHITE}
      size={size}
      style={{
        backgroundColor: Colors.PRIMARY,
        borderRadius: size / 2,
        width: size,
      }}
    />
  );
};

export const StopIcon = () => {
  const size = 35;
  return (
    <MaterialCommunityIcons
      name="stop-circle"
      color={Colors.PRIMARY}
      size={size}
      style={{
        backgroundColor: Colors.WHITE,
        borderRadius: size / 2,
        width: size,
      }}
    />
  );
};

export const PauseIcon = () => {
  const size = 35;
  return (
    <AntDesign
      name="pausecircle"
      color={Colors.PRIMARY}
      size={size}
      style={{
        backgroundColor: Colors.WHITE,
        borderRadius: size / 2,
        width: size,
        marginLeft: 'auto',
        marginRight: 10,
      }}
    />
  );
};

export const NextIcon = () => {
  const size = 40;
  return (
    <Entypo name="arrow-right" color={Colors.WHITE} size={size} />
  );
};

export const PreviousIcon = () => {
  const size = 40;
  return (
    <Entypo name="arrow-left" color={Colors.WHITE} size={size} />
  );
};

export const BigPauseIcon = () => {
  const size = 60;
  return (
    <AntDesign
      name="pausecircle"
      color={Colors.PRIMARY}
      size={size}
      style={{
        backgroundColor: Colors.WHITE,
        borderRadius: size / 2,
        width: size,
      }}
    />
  );
};

export const AddButton = () => {
  const size = 50;
  return (
    <MaterialCommunityIcons
      name="playlist-plus"
      color={Colors.PRIMARY}
      size={size}
    />
  );
};

export const ForwardIcon = () => {
  const size = 20;
  return (
    <Entypo name="controller-fast-forward" color={Colors.PRIMARY} size={size} />
  );
};

export const BackwardIcon = () => {
  const size = 20;
  return (
    <Entypo
      name="controller-fast-backward"
      color={Colors.PRIMARY}
      size={size}
    />
  );
};

export const ShareIcon = () => {
  const size = 30;
  return <Entypo name="share" color={Colors.PRIMARY} size={size} />;
};

export const HeartIcon = () => {
  const size = 30;
  return (
    <MaterialCommunityIcons name="heart" color={Colors.PRIMARY} size={size} />
  );
};
