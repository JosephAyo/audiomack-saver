import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
const TrackForm = ({dismiss, saveSong}) => {
  const [artiste, setArtiste] = React.useState('');
  const [title, setTitle] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.dismissButton}>
        <TouchableOpacity onPress={() => dismiss()}>
          <Text style={styles.dismissText}>dismiss</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formView}>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Track title</Text>
            <TextInput
              placeholder="Track title"
              style={styles.textInput}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Artiste name</Text>
            <TextInput
              placeholder="Artiste name"
              style={styles.textInput}
              onChangeText={(text) => setArtiste(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => saveSong(artiste, title)}
          style={styles.proceedButton}>
          <Text style={styles.proceedText}>
            Add song{artiste.length < 1 && title.length < 1 ? ' anyway?' : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrackForm;
