import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Alert,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import styles from './style';

import keygen from 'keygenerator';
import Item from '../../components/molecules/Item';
import Sound from 'react-native-sound';
import {getDirectoryFiles} from '../../functions/index';
import {NextIcon, PreviousIcon} from '../../assets/logos';

const Home = ({navigation}) => {
  const [state, setState] = React.useState({
    isPlaying: false,
    playing: null,
    sound: null,
  });
  const [data, setData] = React.useState({
    songs: null,
    allSongs: null,
  });
  const [pageState, setPageState] = React.useState({
    page: 1,
    totalPages: 1,
  });
  const [loadState, setLoadState] = React.useState({
    isLoading: true,
    isFirstTime: true,
  });
  const isFocused = useIsFocused();
  React.useEffect(() => {
    async function triggerLoad() {
      try {
        const start = 10 * (pageState.page - 1);
        const stop = 10 * pageState.page - 1;
        if (loadState.isLoading) {
          if (loadState.isFirstTime) {
            const {
              songs,
              totalPages,
            } = await getDirectoryFiles.loadMultipleFromStorage(pageState.page);
            if (songs) {
              setData({
                ...songs,
                songs: songs.slice(start, stop),
                allSongs: songs,
              });
              setPageState({...pageState, totalPages: totalPages});
              setLoadState({...loadState, isFirstTime: false});
            }
          } else {
            setData({...data, songs: data.allSongs.slice(start, stop)});
          }
        }
      } catch (error) {
        // console.warn(error);
      }
    }
    triggerLoad();
    setLoadState({...loadState, isLoading: false});
  }, [pageState.page, loadState.isLoading]);
  React.useEffect(() => {
    if (state.isPlaying) {
      triggerPlay();
    } else {
      stopAndRelease();
    }
  }, [state.isPlaying]);
  React.useEffect(() => {
    if (!isFocused) stopAndRelease();
  }, [isFocused]);
  const setPage = (isForward) => {
    setLoadState({...loadState, isLoading: true});
    console.log('isLoading', loadState.isLoading);
    const direction = isForward ? pageState.page + 1 : pageState.page - 1;
    const directionCondition = isForward
      ? pageState.page + 1 <= pageState.totalPages
      : pageState.page - 1 > 0;
    if (directionCondition) {
      setPageState({...pageState, page: direction});
    } else {
      setLoadState({...loadState, isLoading: false});
      ToastAndroid.showWithGravity(
        'No new items to show',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  const playControl = (title, url) => {
    if (title === state.playing && state.isPlaying) {
      setState({...state, isPlaying: false});
    } else {
      if (state.sound && title !== state.playing && state.isPlaying) {
        setState({...state, isPlaying: false});
        loadNewSound(title, url);
      } else {
        loadNewSound(title, url);
      }
    }
  };
  const loadNewSound = (title, url) => {
    const sound = new Sound(url, null, (error) => {
      if (error) {
        Alert.alert('Notice', 'audio file error. (Error code : 1)');
      } else {
        setState({...state, playing: title, sound: sound, isPlaying: true});
      }
    });
  };
  const triggerPlay = () => {
    if (state.sound) {
      state.sound.play((success) => playComplete(success));
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
      setState({...state, playing: null, sound: null});
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.songs}
        keyExtractor={() => keygen._()}
        renderItem={(item) => (
          <Item
            data={item}
            isPlaying={state.playing === item.item.name && state.isPlaying}
            playPress={(title, url) => playControl(title, url)}
            onPress={(title, url) =>
              navigation.navigate('Play', {
                title,
                url,
              })
            }
          />
        )}
      />
      <View style={styles.listPageContainer}>
        <View style={styles.pageListNavigator}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setPage(false)}>
            <PreviousIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.pageProgress}>
          <Text>
            {loadState.isLoading
              ? '...'
              : pageState.page + '/' + pageState.totalPages}
          </Text>
        </View>
        <View style={styles.pageListNavigator}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setPage(true)}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
