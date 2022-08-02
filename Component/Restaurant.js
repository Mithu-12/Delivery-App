import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import DishRow from './DishRow';
import BasketIcon from './BasketIcon';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setRestaurant } from '../Featured/RestaurantSlice';

export default function Restaurant({ navigation }) {
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imageUrl,
      title,
      short_description,
      lat,
      long,
      dishes,
      address,
      rating,
      style,
      genre,
    },
  } = useRoute();
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imageUrl,
        title,
        short_description,
        lat,
        long,
        dishes,
        address,
        rating,
        style,
        genre,
      })
    );
  }, [dispatch]);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View style={{ position: 'relative' }}>
          <Image
            source={{
              uri: urlFor(imageUrl).url(),
            }}
            style={{ width: '100%', height: 220 }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: 29,
              left: 15,
              backgroundColor: 'grey',
              padding: 10,
              borderRadius: 25,
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
              }}
            >
              <Entypo name="star" size={20} color="black" />
              <Text style={{ color: 'grey', fontSize: 14, paddingLeft: 5 }}>
                <Text style={{ color: 'green' }}>{rating}</Text> {genre}
              </Text>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}
              >
                <EvilIcons name="location" size={20} color="grey" />
                <Text style={{ color: 'grey' }}>Nearby {address}</Text>
              </View>
            </View>
            <Text>{short_description}</Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              borderTopWidth: 0.4,
              borderBottomWidth: 0.5,
              borderColor: 'grey',
            }}
          >
            <AntDesign name="questioncircleo" size={22} color="grey" />
            <Text style={{ flex: 1, paddingLeft: 12, fontWeight: 'bold' }}>
              Have a food allergy
            </Text>
            <Octicons name="chevron-right" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 100 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              padding: 10,
              backgroundColor: '#F1F1F1',
            }}
          >
            Menu
          </Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish?.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
