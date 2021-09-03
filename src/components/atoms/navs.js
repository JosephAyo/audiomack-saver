import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors, Typography, Dimensions} from '../../style/index';
import styles from './style';

export const PrimaryTitle = () => {
  return (
    <View style={styles.PrimaryTitle}>
      <MaterialCommunityIcons
        name="content-save-move"
        color={Colors.WHITE}
        size={25}
      />
      <Text
        style={{
          color: Colors.WHITE,
          fontWeight: Typography.FONT_WEIGHT_BOLD,
          fontSize: 20,
        }}>
        Audiomack Saver
      </Text>
    </View>
  );
};

export const BackButton = ({onPress}) => {
  return (
    <View style={styles.BackButtonContainer}>
      <TouchableOpacity onPress={() => onPress()} activeOpacity={0.8}>
        <View style={styles.BackButton}>
          <Ionicons
            name="md-chevron-back-outline"
            color={Colors.PRIMARY}
            size={Dimensions.backButtonSize}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
