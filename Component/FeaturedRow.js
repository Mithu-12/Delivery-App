import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
             dishes[]->,
             type->{
                name
             }
            }
          }[0]
        `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{ color: 'grey' }}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 1 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={1}
            imageUrl={restaurant.image}
            title={restaurant.name}
            short_description={restaurant.short_description}
            long={restaurant.long}
            lat={restaurant.lat}
            dishes={restaurant.dishes}
            address={restaurant.address}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
          />
        ))}
      </ScrollView>
    </View>
  );
}
