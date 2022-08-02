import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../Featured/RestaurantSlice';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#00ccbb', flex: 1 }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Entypo name="cross" size={28} color="#ffffff" />
          </TouchableOpacity>
          <Text style={{ color: '#ffffff', fontSize: 20 }}>order help</Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                Estimated Arrival
              </Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 5 }}>
                45-50 Minutes
              </Text>
            </View>
            <Image
              style={{ width: 100, height: 90 }}
              source={require('../assets/image/delivery4.gif')}
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text style={{ color: 'grey', paddingTop: 8 }}>
            Your order at{' '}
            <Text style={{ color: '#00ccbb', fontWeight: 'bold' }}>
              {restaurant.title}
            </Text>{' '}
            is being progress
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ flex: 1, marginTop: -50, zIndex: -1 }}
        mapType="mutedStandard"
      ></MapView>
    </View>
  );
}
