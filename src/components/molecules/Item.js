import React from 'react';
import {BoxShadow} from 'react-native-shadow';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {PlayIcon, StopIcon} from '../../assets/logos/index';
import {Shadows} from '../../style/index';

const Item = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => props.onPress(props.data.item.name, props.data.item.path)}>
      <LinearGradient colors={['#FFFFFF', '#f3f3f3', '#c2bab8ba']}>
        <View style={styles.item}>
          <View
            style={[
              styles.itemVerticalLyCentered,
              styles.itemAvatar,
              styles.songImage,
            ]}>
            <Image
              source={require('../../assets/images/pexels-yuri-manei-1.png')}
              style={styles.itemImage}
            />
          </View>
          <View style={[styles.itemVerticalLyCentered, styles.songTitle]}>
            <Text
              style={styles.songTitleText}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {props.data.item.name}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              props.playPress(props.data.item.name, props.data.item.path)
            }>
            <View
              style={[
                styles.itemVerticalLyCentered,
                styles.itemAvatar,
                styles.playIcon,
              ]}>
              <BoxShadow setting={Shadows.homePlayButton}>
                {props.isPlaying ? <StopIcon /> : <PlayIcon />}
              </BoxShadow>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.playingView}>
          {props.isPlaying && (
            <>
              <Image source={require('../../assets/images/sound.png')} />
              <Image source={require('../../assets/images/sound.png')} />
            </>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Item;
