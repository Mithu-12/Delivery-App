import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../Featured/BasketSlice';

export default function DishRow({ id, image, description, name, price }) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, description, image, price, name }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return null;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={{
          borderWidth: 1,
          borderColor: '#F1F1F1',
          padding: 10,
          marginBottom: 15,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginHorizontal: 8, flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ color: 'grey' }}>{description}</Text>
            <Text style={{ color: 'grey' }}>
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 100,
                height: 90,
                borderWidth: 1,
                borderColor: '#f3f3f4',
              }}
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={{ marginLeft: 10, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <AntDesign
                name="minuscircle"
                size={24}
                color={items.length > 0 ? '#00CCBB' : 'grey'}
              />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 10 }}>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" size={24} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
