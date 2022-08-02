import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Featured/RestaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../Featured/BasketSlice';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

export default function BasketScreen() {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
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
        <View style={styles.profile}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50, margin: 8 }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg',
            }}
          ></Image>
          <Text style={{ flex: 1, paddingLeft: 5 }}>Delivery in 50-70 min</Text>
          <TouchableOpacity>
            <Text style={{ color: '#00ccbb' }}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {Object.entries(groupItemInBasket).map(([key, items]) => (
            <View key={key} style={styles.productContainer}>
              <Text style={{ color: '#00ccbb' }}>{items.length} x</Text>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 50,
                  marginHorizontal: 10,
                }}
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text style={styles.productTitle}>{items[0]?.name}</Text>
              <Text style={{ color: 'grey', paddingRight: 10 }}>
                <Currency quantity={items[0]?.price} currency="USD" />
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: '#00ccbb' }}
                  onPress={() => {
                    dispatch(removeFromBasket({ id: key }));
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={{ backgroundColor: '#fff', paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
            }}
          >
            <Text style={{ color: 'grey' }}>Subtitle</Text>
            <Text style={{ color: 'grey' }}>
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
              borderBottomWidth: 0.9,
              borderColor: 'grey',
            }}
          >
            <Text style={{ color: 'grey' }}>Delivery Fee</Text>
            <Text style={{ color: 'grey' }}>
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Order Total</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingScreen')}
            style={{
              backgroundColor: '#00ccbb',
              padding: 15,
              marginHorizontal: 15,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
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
    top: 18,
    right: 15,
    color: '#00ccbb',
  },
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  titleHeader: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 20,
    paddingRight: 13,
  },
  productContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderColor: 'grey',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingVertical: 7,
  },
});
