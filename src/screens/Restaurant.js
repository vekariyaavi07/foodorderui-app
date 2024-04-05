/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const DeviceWidth = Dimensions.get('screen').width;

const Restaurant = ({navigation, route}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, [route.params]);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(item => item.menuId == menuId);

    if (action == '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }
  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }
  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);
    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);
    return total.toFixed(2);
  }

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../images/back.png')}
            resizeMode="contain"
            style={styles.imgBack}
          />
        </TouchableOpacity>

        {/* {Restaurant name section} */}
        <View style={styles.viewContainer}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtRes}>{restaurant?.name}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.imgContainer2}>
          <Image
            style={styles.imgList}
            source={require('../images/list.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / 410).toFixed(0));
        }}>
        {restaurant?.menu.map((item, index) => (
          <View key={index} style={styles.viewContainer4}>
            <View style={{height: 250}}>
              <Image
                style={styles.photo}
                resizeMode="cover"
                source={{uri: item.photo}}
              />
              {/* {Quantity} */}
              <View style={styles.viewContainer2}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.txtContainer2}
                  onPress={() => editOrder('-', item.menuId, item.price)}>
                  <Text style={styles.txtDelete}>-</Text>
                </TouchableOpacity>
                <View style={styles.txtContainer3}>
                  <Text>{getOrderQty(item.menuId)}</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.txtAdd}
                  onPress={() => editOrder('+', item.menuId, item.price)}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* {Name & Description} */}
            <View style={styles.txtContainer4}>
              <Text style={styles.txtName}>
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            {/* {Calories} */}
            <View style={styles.imgContainer3}>
              <Image
                style={styles.imgFire}
                source={require('../images/fire.png')}
              />
              <Text style={{fontWeight: 'bold'}}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
  function renderDots() {
    return (
      <View style={{height: 24}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {restaurant?.menu.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: currentIndex == index ? 30 : 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: currentIndex == index ? '#eb5a0c' : 'black',
                  marginHorizontal: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  function renderOrder() {
    return (
      <View>
        {renderDots()}
        <View style={styles.viewContainer3}>
          <View style={styles.txtContainer5}>
            <Text style={styles.item}>
              {getBasketItemCount()} items in cart
            </Text>
            <Text style={styles.order}>$ {sumOrder()}</Text>
          </View>
          <View style={styles.viewContainer6}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.imgPin}
                resizeMode="contain"
                source={require('../images/pin.png')}
              />
              <Text style={styles.location}>Location</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.imgCard}
                source={require('../images/card.png')}
              />
              <Text style={styles.txtNumber}>8888</Text>
            </View>
          </View>
          {/* OrderButton */}
          <View style={styles.viewContainer7}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.txtContainer6}
              onPress={() =>
                navigation.navigate('Order', {
                  restaurant: restaurant,
                  currentLocation: currentLocation,
                })
              }>
              <Text style={styles.txtOrder}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    width: 50,
    padding: 10,

    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContainer: {
    height: 40,
    marginTop: 4,

    borderRadius: 25,
    paddingHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb5a0c',
  },
  imgContainer2: {
    width: 50,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  viewContainer2: {
    position: 'absolute',
    bottom: -10,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  txtContainer2: {
    width: 50,
    height: 35,
    marginLeft: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  txtDelete: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  txtContainer3: {
    width: 50,
    height: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAdd: {
    width: 50,
    height: 35,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  txtContainer4: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  txtName: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgContainer3: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imgFire: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  viewContainer3: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  txtContainer5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  imgBack: {
    width: 25,
    height: 25,
    tintColor: '#eb5a0c',
  },
  txtRes: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  imgList: {
    width: 25,
    height: 25,
    tintColor: '#eb5a0c',
  },
  viewContainer4: {
    alignItems: 'center',
    marginTop: 20,
  },
  photo: {
    width: DeviceWidth / 1,
    height: 250,
  },
  desc: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewContainer5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  item: {
    fontSize: 15,
    color: '#eb5a0c',
    fontWeight: 'bold',
  },
  order: {
    fontSize: 15,
    color: '#eb5a0c',
    fontWeight: 'bold',
  },
  viewContainer6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imgPin: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  location: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imgCard: {
    width: 20,
    height: 20,
  },
  txtNumber: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  viewContainer7: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer6: {
    width: 350,
    height: 50,
    backgroundColor: '#eb5a0c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  txtOrder: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
