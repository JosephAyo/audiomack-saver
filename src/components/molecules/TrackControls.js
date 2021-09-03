import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {BoxShadow} from 'react-native-shadow';
import {Colors, Shadows} from '../../style';
import styles from './style';
import {
  BackwardIcon,
  BigPauseIcon,
  BigPlayIcon,
  ForwardIcon,
} from '../../assets/logos';
const TrackControls = (props) => {
  const getAudioTimeString = (seconds) => {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt((seconds % (60 * 60)) / 60);
    const s = parseInt(seconds % 60);
    return (
      (h < 10 ? '0' + h : h) +
      ':' +
      (m < 10 ? '0' + m : m) +
      ':' + 
      (s < 10 ? '0' + s : s)
    );
    // return seconds;
  };
  const durationString =
    props.duration === 'N/A' ? 'N/A' : getAudioTimeString(props.duration);
  const currentTimeString = getAudioTimeString(props.currentTime);
  const triggerChange = (value) => {
    props.onValueChange(value);
    return value;
  };
  return (
    <View style={styles.trackControlsContainer}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={props.duration === 'N/A' ? 1 : props.duration}
          minimumTrackTintColor={Colors.PRIMARY}
          maximumTrackTintColor="#000000"
          thumbTintColor={Colors.PRIMARY}
          value={props.currentTime}
          onSlidingComplete={() => props.onSlidingComplete()}
          onSlidingStart={() => props.onSlidingStart()}
          onValueChange={(value) => triggerChange(value)}
        />
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progress}>{currentTimeString}</Text>
        <Text style={styles.progress}>{durationString}</Text>
      </View>
      <BoxShadow setting={Shadows.controls}>
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={() => props.seekBack()}>
            <View style={styles.directionControls}>
              <BackwardIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.onPress()}>
            {props.isPlaying ? <BigPauseIcon /> : <BigPlayIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.seekForward()}>
            <View style={styles.directionControls}>
              <ForwardIcon />
            </View>
          </TouchableOpacity>
        </View>
      </BoxShadow>
    </View>
  );
};

export default TrackControls;
