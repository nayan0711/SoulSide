import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  rectangle: {
    width: 420,
    height: 305,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  },
  image1: {
    width: 60,
    height: 5,
    position: 'absolute',
    top: 8,
    left: 175,
  },

  image2: {
    width: 80,
    height: 82,
    position: 'absolute',
    top: 25,
    left: 167,
  },
});