import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {BoxShadow} from 'react-native-shadow';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  ToastAndroid,
} from 'react-native';
import styles from './style';
import {AddButton} from '../../assets/logos/index';
import Sound from 'react-native-sound';
import TrackControls from '../../components/molecules/TrackControls';
import Interactions from '../../components/molecules/Interactions';
import TrackForm from '../../components/organisms/TrackForm';
import {BackButton} from '../../components/atoms/navs';
import {Shadows} from '../../style/index';
import {save} from '../../functions/saveSong';

const PlayerHome = ({navigation, route}) => {
  const {title, url} = route.params;
  const [state, setState] = React.useState({
    isPlaying: false,
    playing: null,
    playTime: 0,
    sound: null,
    showAddOptions: false,
    newVisit: true,
    duration: 0,
  });
  const [timeState, setTimeState] = React.useState({
    playTime: 0,
  });
  const [formState, setFormState] = React.useState({
    isVisible: false,
  });
  const isFocused = useIsFocused();
  let interval;
  React.useEffect(() => {
    interval = setTimeout(() => {
      if (state.sound && state.isPlaying) setPlayTimeState();
    }, 1000);
  });
  React.useEffect(() => {
    if (state.isPlaying) {
      triggerPlay();
    } else {
      triggerPause();
    }
  }, [state.isPlaying]);
  React.useEffect(() => {
    if (interval) clearInterval(interval);
    if (!isFocused) stopAndRelease();
  }, [isFocused]);

  const playControl = (title, url) => {
    if (state.isPlaying) {
      setState({...state, isPlaying: false});
    } else {
      if (state.sound && state.playing) {
        setState({...state, isPlaying: true});
      } else {
        loadNewSound(title, url);
      }
    }
  };
  const loadNewSound = (title, url) => {
    const sound = new Sound(url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        Alert.alert('Notice', 'audio file error. (Error code : 1)');
      } else {
        setState({
          ...state,
          playing: title,
          sound: sound,
          isPlaying: true,
          duration: sound.getDuration() > 0 ? sound.getDuration() : 'N/A',
        });
      }
    });
  };
  const triggerPlay = async () => {
    if (state.sound) {
      state.sound.play((success) => playComplete(success));
    }
  };
  const triggerPause = () => {
    if (state.sound) {
      state.sound.pause((success) => console.log('sound paused'));
    }
  };
  const setPlayTimeState = () => {
    if (state.sound) {
      state.sound.getCurrentTime((seconds) => {
        setTimeState({...timeState, playTime: seconds});
      });
    }
  };
  const playComplete = (success) => {
    if (state.sound) {
      if (success) {
      } else {
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
    } else {
    }
    setState({...state, playing: null, isPlaying: false});
  };
  const stopAndRelease = () => {
    if (state.sound) {
      state.sound.stop(() => console.log('stopped'));
      state.sound.release();
    }
  };
  const menuOpenClose = () => {
    setState({
      ...state,
      showAddOptions: !state.showAddOptions,
      newVisit: false,
    });
  };
  const seek = (isForward) => {
    if (state.sound) {
      if (isForward && state.sound.getDuration() > 0) {
        state.sound.setCurrentTime(timeState.playTime + 10);
      } else if (!isForward && state.sound.getDuration() > 0) {
        state.sound.setCurrentTime(timeState.playTime - 10);
      } else {
        Alert.alert('Error', 'Unable to seek in this track');
      }
    }
  };
  const initiateSave = () => {
    setFormState({...formState, isVisible: true});
  };
  const saveSong = async (artiste, userTitle) => {
    const artisteName = artiste.length > 0 ? artiste : null;
    const titleName = userTitle.length > 0 ? userTitle : null;
    const result = await save(url, title, artisteName, titleName);
    if (result) {
      ToastAndroid.showWithGravity(
        'Song saved to Download 💾🤗',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      ToastAndroid.showWithGravity(
        'Song not saved 💾❌',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
    setFormState({...formState, isVisible: false});
  };
  const sliderSeek = (value) => {
    if (state.sound) {
      state.sound.setCurrentTime(value);
      setTimeState({...timeState, playTime: value});
    }
  };
  const startSeek = () => {
    if (state.sound) setState({...state, isPlaying: false});
  };
  const stopSeek = () => {
    if (state.sound) setState({...state, isPlaying: true});
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={() => navigation.navigate('Home')} />
      <View style={styles.trackArtContainer}>
        <Image
          source={require('../../assets/images/pexels-david-florin-1.png')}
          style={styles.trackArt}
        />
      </View>
      <View style={styles.trackTitleContainer}>
        <Text style={styles.trackTitle} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TrackControls
        isPlaying={state.isPlaying}
        onPress={() => playControl(title, url)}
        duration={state.duration}
        currentTime={timeState.playTime}
        seekForward={() => seek(true)}
        seekBack={() => seek(false)}
        onSlidingComplete={() => stopSeek()}
        onSlidingStart={() => startSeek()}
        onValueChange={(value) => sliderSeek(value)}
      />
      <View style={styles.addOptions}>
        {state.showAddOptions ? (
          <Interactions
            animation="rubberBand"
            saveSong={() => initiateSave()}
          />
        ) : (
          !state.newVisit && <Interactions animation="bounceOutDown" />
        )}
        <BoxShadow setting={Shadows.addButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addButton}
            onPress={() => menuOpenClose()}>
            <AddButton />
          </TouchableOpacity>
        </BoxShadow>
      </View>
      {formState.isVisible && (
        <View style={styles.trackForm}>
          <TrackForm
            dismiss={() => setFormState({...formState, isVisible: false})}
            saveSong={(artiste, title) => saveSong(artiste, title)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlayerHome;
