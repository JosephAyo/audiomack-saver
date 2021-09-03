import React from 'react';
import {BoxShadow} from 'react-native-shadow';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {HeartIcon, ShareIcon} from '../../assets/logos';
import {Shadows} from '../../style/index';
import * as Animatable from 'react-native-animatable';

const Interactions = (props) => {
  return (
    <Animatable.View
      animation={props.animation}
      //   duration={2000}
      style={styles.interactionsContainer}>
      <TouchableOpacity
        style={styles.interactionsOption}
        activeOpacity={0.8}
        onPress={() => props.saveSong()}>
        <BoxShadow setting={Shadows.optionTextContainer}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Save to phone</Text>
          </View>
        </BoxShadow>
        <BoxShadow setting={Shadows.optionIcon}>
          <View style={styles.optionIcon}>
            <HeartIcon />
          </View>
        </BoxShadow>
      </TouchableOpacity>
      <TouchableOpacity style={styles.interactionsOption} activeOpacity={0.8}>
        <BoxShadow setting={Shadows.optionTextContainer}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Share</Text>
          </View>
        </BoxShadow>
        <BoxShadow setting={Shadows.optionIcon}>
          <View style={styles.optionIcon}>
            <ShareIcon />
          </View>
        </BoxShadow>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Interactions;
