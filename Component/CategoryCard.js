import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCard({title, imageUrl}) {
  return (
    <TouchableOpacity>
    <View style={{margin: 10}}>
    <Image style={{width: 120, height: 120, position: 'relative'}}
      source={{
        uri: imageUrl
      }}
    />
        {/* <Image source={{
          url: urlFor(imageUrl).url
        }}></Image> */}
        <Text style={{fontSize: 14, marginTop: -45, position: 'relative', padding: 15, color: '#fff', fontWeight: 'bold'}}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}