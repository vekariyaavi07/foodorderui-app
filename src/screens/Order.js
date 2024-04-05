import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const Order = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../assets/order.json')}
          autoPlay
          loop={false}
        />
      </View>
      <Animatable.Text animation="swing" style={styles.txt}>
        Your Order Successfully Placed
      </Animatable.Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 100,
  },
  lottieContainer: {
    height: '60%',
    aspectRatio: 1,
  },
  txt: {
    fontSize: 20,
    fontWeight: '600',
  },
  lottie: {
    flex: 1,
  },
});
