import {PermissionsAndroid, ToastAndroid} from 'react-native';
let RNFS = require('react-native-fs');
export const loadFromStorage = async () => {
  try {
    const [readPermissionGranted, writePermissionGranted] = await Promise.all([
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ),
      await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ),
    ]);
    if (!readPermissionGranted) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Audiomack saver App read permission',
          message:
            'Cool Photo App needs access to your your storage ' +
            'so you can view songs.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        ToastAndroid.showWithGravity(
          'Allow read/write permissions',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    }
    if (!writePermissionGranted) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Audiomack saver App write permission',
          message:
            'Cool Photo App needs access to your your storage ' +
            'so you can save songs.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    }
    // if (readPermissionGranted && writePermissionGranted)
    // ToastAndroid.showWithGravity(
    //   'Read/write permissions granted',
    //   ToastAndroid.SHORT,
    //   ToastAndroid.BOTTOM,
    // );
    const dirResult = await RNFS.readDir(
      RNFS.ExternalStorageDirectoryPath + '/Xender/audio',
    ); // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

    // stat the first file
    const statResult = await Promise.all([
      RNFS.stat(dirResult[randomIndex].path),
      dirResult[randomIndex].path,
    ]);

    if (statResult[0].isFile()) {
      // if we have a file, read it
      return statResult[0].originalFilepath;
      // return RNFS.readFile(statResult[1], 'utf8');
    }
    return null;
  } catch (error) {
    console.warn(error);
  }
};

export const loadMultipleFromStorage = async (page) => {
  try {
    const [readPermissionGranted, writePermissionGranted] = await Promise.all([
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ),
      await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ),
    ]);
    if (!readPermissionGranted || !writePermissionGranted) {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] !==
          PermissionsAndroid.RESULTS.GRANTED ||
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] !==
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        ToastAndroid.showWithGravity(
          'Allow read/write permissions',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        return;
      } else {
        const readDir = await readAction();
        return readDir;
      }
    } else {
      const readDir = await readAction();
      return readDir;
    }
  } catch (error) {
    return null;
  }
};

const readAction = async () => {
  const dirResult = await RNFS.readDir(
    RNFS.ExternalStorageDirectoryPath +
      '/Android/data/com.audiomack/files/Audiomack',
  ); // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

  // stat the first file
  const temp = dirResult.filter(
    (dir) => dir.isFile() && dir.name != '.nomedia',
  );
  const totalPages = Math.ceil(temp.length / 10);
  if (temp)
    return {
      songs: temp,
      totalPages: totalPages,
    };
  return null;
};
