import {PermissionsAndroid, ToastAndroid} from 'react-native';
let RNFS = require('react-native-fs');
export const save = async (filePath, fileName, artisteName, titleName) => {
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
      console.log('granted', granted);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] !==
          PermissionsAndroid.RESULTS.GRANTED &&
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
        const isSaved = await saveAction(
          filePath,
          fileName,
          artisteName,
          titleName,
        );
        return isSaved;
      }
    } else {
      const isSaved = await saveAction(
        filePath,
        fileName,
        artisteName,
        titleName,
      );
      return isSaved;
    }
  } catch (error) {
    return null;
  }
};

const saveAction = async (filePath, fileName, artisteName, titleName) => {
  let newFileName;
  if (artisteName && titleName) {
    newFileName = `${titleName} || ${artisteName}`;
  } else if (artisteName) {
    newFileName = `${fileName} || ${artisteName}`;
  } else if (titleName) {
    newFileName = `${fileName} || ${titleName}`;
  } else {
    newFileName = fileName.replace(/\.(?:wav|m4a|mp3|flac|mp4|wma|aac)$/i, '');
  }
  newFileName = newFileName + '.mp3';
  const newPath =
    RNFS.ExternalStorageDirectoryPath + '/Download/' + newFileName;
  const dirResult = await RNFS.copyFile(
    filePath,
    RNFS.ExternalStorageDirectoryPath + '/Download/' + newFileName,
  );
  return true;
};
