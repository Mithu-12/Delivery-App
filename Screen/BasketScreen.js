import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Featured/RestaurantSlice';
import { selectBasketItems } from '../Featured/BasketSlice';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

export default function BasketScreen() {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [groupItemInBasket, setGroupItemInBasket] = useState([]);

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemInBasket(groupItems);
  }, [items]);
  console.log('groupItems=--------', groupItemInBasket);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleHeader}>
          <Text style={styles.header}>Basket</Text>
          <Text style={styles.title}>{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        >
          <Entypo name="circle-with-cross" size={34} color="#00ccbb" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
    color: '#00ccbb',
  },
  container: {
    backgroundColor: 'grey',
  },
  titleHeader: {
    backgroundColor: '#fff',
    shadowOffset: { width: -12, height: 14 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
