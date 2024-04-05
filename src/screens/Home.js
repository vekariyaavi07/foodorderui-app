/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const initialCurrentLocation = {
    streetName: 'Kuching',
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const category = [
    {
      id: 1,
      name: 'Rice',
      image: require('../images/rice.png'),
    },
    {
      id: 2,
      name: 'Noodles',
      image: require('../images/noodles.png'),
    },
    {
      id: 3,
      name: 'Hot Dogs',
      image: require('../images/hot-dog.png'),
    },
    {
      id: 4,
      name: 'Salads',
      image: require('../images/salad.png'),
    },
    {
      id: 5,
      name: 'Burgers',
      image: require('../images/hamburger.png'),
    },
    {
      id: 6,
      name: 'Pizza',
      image: require('../images/pizza.png'),
    },
    {
      id: 7,
      name: 'Snacks',
      image: require('../images/snacks.png'),
    },
    {
      id: 8,
      name: 'Sushi',
      image: require('../images/salad.png'),
    },
    {
      id: 9,
      name: 'Desserts',
      image: require('../images/dessert.png'),
    },
    {
      id: 10,
      name: 'Drinks',
      image: require('../images/soda.png'),
    },
  ];

  // price rating
  const affordable = 1;

  const expensive = 2;

  const restaurantData = [
    {
      id: 1,
      name: 'ByProgrammers Burger',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo:
        'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
      duration: '30 - 45 min',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        // avatar:

        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo:
            'https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg',
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo:
            'https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg',
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo:
            'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg',
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: 'ByProgrammers Pizza',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo:
        'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      duration: '15 - 20 min',
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo:
            'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo:
            'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg',
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo:
            'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg',
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo:
            'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'ByProgrammers Hotdogs',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo:
        'https://images.pexels.com/photos/4113455/pexels-photo-4113455.jpeg',
      duration: '20 - 25 min',
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo:
            'https://images.pexels.com/photos/357576/pexels-photo-357576.jpeg',
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'ByProgrammers Sushi',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo:
        'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
      duration: '10 - 15 min',
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo:
            'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'ByProgrammers Cuisine',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo:
        'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
      duration: '15 - 20 min',
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo:
            'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo:
            'https://images.pexels.com/photos/9772442/pexels-photo-9772442.jpeg',
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo:
            'https://images.pexels.com/photos/9772442/pexels-photo-9772442.jpeg',
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo:
            'https://images.pexels.com/photos/9772442/pexels-photo-9772442.jpeg',
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'ByProgrammers Dessets',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      duration: '35 - 40 min',
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo:
            'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo:
            'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo:
            'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg',
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 7,
      name: 'ByProgrammers Drinks',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo:
        'https://images.pexels.com/photos/1459338/pexels-photo-1459338.jpeg',
      duration: '35 - 40 min',
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar:
          'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Mango Juice',
          photo:
            'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg',
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'Watermelon Juice',
          photo:
            'https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg',
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
      ],
    },
  ];
  const [categories, setCategories] = useState(category);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );
  function onSelectCategory(category) {
    //filter Restaurants

    setRestaurants(
      restaurantData.filter(item => item.categories.includes(category.id)),
    );
    setSelectedCategory(category);
  }
  function getCategoryNameByid(id) {
    let categoryName = categories.filter(item => item.id == id);
    if (categoryName.length > 0) {
      return categoryName[0].name;
    } else {
      return null;
    }
  }

  function renderHeader() {
    return (
      <View style={styles.viewContainer1}>
        <TouchableOpacity activeOpacity={0.6} style={styles.imgContainer1}>
          <Image
            source={require('../images/profile.png')}
            resizeMode="contain"
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.viewContainer2}>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{initialCurrentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.imgContainer2}>
          <Image
            source={require('../images/search.png')}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,

              tintColor: '#eb5a0c',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={[
            styles.viewContainer3,
            {
              backgroundColor:
                selectedCategory?.id === item.id ? '#eb5a0c' : 'white',
            },
          ]}
          onPress={() => onSelectCategory(item)}>
          <View style={styles.imgContainer3}>
            <Image style={{width: 30, height: 30}} source={item.image} />
          </View>
          <Text
            style={{
              marginTop: 10,
              color: selectedCategory?.id === item.id ? 'white' : 'black',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Main</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>categories</Text>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          style={{marginBottom: 10}}
          onPress={() =>
            navigation.navigate('Restaurant', {item, currentLocation})
          }>
          <View>
            <Image
              style={{width: '100%', height: 200, borderRadius: 20}}
              resizeMode="cover"
              source={{uri: item.photo}}
            />
            <View style={styles.txtContainer1}>
              <Text style={styles.txtDuration}>{item.duration}</Text>
            </View>
          </View>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Image
              style={styles.imgStar}
              source={require('../images/star.png')}
            />
            <Text style={{fontSize: 15}}>{item.rating}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              {item.categories.map(categoryId => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                    key={categoryId}>
                    <Text style={{fontSize: 15}}>
                      {getCategoryNameByid(categoryId)}
                    </Text>
                  </View>
                );
              })}
              {[1, 2, 3].map(priceRating => (
                <Text
                  key={priceRating}
                  style={[
                    styles.txtPrice,
                    {
                      color:
                        priceRating === item.priceRating ? '#eb5a0c' : 'black',
                    },
                  ]}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={restaurants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer1: {
    flexDirection: 'row',
    height: 50,
  },
  imgContainer1: {
    width: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 25,
    height: 25,
    tintColor: '#eb5a0c',
  },
  viewContainer2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#eb5a0c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 5,
  },
  txt: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  imgContainer2: {
    width: 50,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer3: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer1: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: 'black',
    elevation: 4,
  },
  txtDuration: {
    width: 100,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
  },
  txtName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  imgStar: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10,
    tintColor: '#eb5a0c',
  },
  txtPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
  },
  viewContainer3: {
    padding: 10,
    paddingBottom: 35,
    borderRadius: 37,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
