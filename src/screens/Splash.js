import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import {Animated} from 'react-native';

const Splash = ({navigation}) => {
  const av = new Animated.Value(0);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);
  av.addListener(() => {
    return;
  });

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../assets/splash.json')}
          autoPlay
          loop={false}
        />
      </View>

      <Animatable.Text animation="fadeInUpBig" style={styles.txt}>
        Food Order App
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    backgroundColor: 'orange',
  },
  lottieContainer: {
    height: '45%',

    aspectRatio: 1,
  },
  lottie: {
    flex: 1,
  },
  txt: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },
});
