import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../Featured/BasketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) {
    return null;
  }
  return (
    <View
      style={{ position: 'absolute', bottom: 10, width: '100%', zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('BasketScreen')}
        style={{
          backgroundColor: '#00ccbb',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 10,
          borderRadius: 8,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: '#01a296',
            color: '#fff',
            padding: 7,
            fontWeight: 'bold',
          }}
        >
          {items.length}
        </Text>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>
          View Basket
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
