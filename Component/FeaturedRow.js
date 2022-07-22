import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

export default function FeaturedRow({id, title, description, featuredCategory}) {
    const [restaurants, setRestaurants] = useState([])
    useEffect(()=>{
        sanityClient.fetch(`
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
        `,{id}
        ).then(data=>{
            setRestaurants(data?.restaurants)
        })
    },[])
    console.log('card+++++++++-----++-----', restaurants)
  return (

    <View style={{ marginHorizontal: 10,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold',}}>{title}</Text>
      <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{color: 'grey'}}>{description}</Text>
       <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
            style={{paddingTop: 20}}
        >
        {restaurants.map(restaurant =>{
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

        })}
            {/* <RestaurantCard
                id={1}
                imageUrl='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.207637135.1657797186'
                title='Unique Food'
                short_description='Unique food for you'
                long={12}
                lat={0.20}
                dishes={[]}
                address='419 E 72nd'
                rating={4.4}
                genre='japanese'
            />
            <RestaurantCard
                id={1}
                imageUrl='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.207637135.1657797186'
                title='Unique Food'
                short_description='Unique food for you'
                long={12}
                lat={0.20}
                dishes={[]}
                address='419 E 72nd'
                rating={4.4}
                genre='japanese'
            />
            <RestaurantCard
                id={1}
                imageUrl='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.207637135.1657797186'
                title='Unique Food'
                short_description='Unique food for you'
                long={12}
                lat={0.20}
                dishes={[]}
                address='419 E 72nd'
                rating={4.4}
                genre='japanese'
            /> */}
        </ScrollView>
    </View>
  )
}