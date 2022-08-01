import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import sanityClient from '../sanity';
import Category from '../Component/Category';
import FeaturedRow from '../Component/FeaturedRow';

// import Text from '../Component/Text/Text';
export default function Home() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "featured"]`).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 6,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('../assets/image/1632420651769.jpeg')}
            ></Image>
          </View>
          <View>
            <Text>Delivery Now!</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', marginRight: 8 }}>
                Current Location
              </Text>
              <Octicons name="chevron-down" size={24} color="black" />
            </View>
          </View>
        </View>
        <Ionicons name="ios-person-outline" size={24} color="black" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dfdfdf',
            paddingVertical: 10,
            marginHorizontal: 10,
            padding: 10,
            width: 300,
          }}
        >
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            keyboardType="default"
            style={{ marginHorizontal: 10 }}
            placeholder="Restaurants and Cuisines"
            type="text"
          />
        </View>
        <MaterialCommunityIcons name="search-web" size={28} color="black" />
      </View>
      <ScrollView style={{ marginBottom: 120, paddingBottom: 60 }}>
        <Category />

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
