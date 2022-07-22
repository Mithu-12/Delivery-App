import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


export default function Category() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard
      imageUrl='https://image.shutterstock.com/image-photo/cheesecake-blueberries-almond-raisins-sliced-260nw-1110314810.jpg'
      title='testing'/>
      <CategoryCard
      imageUrl='https://image.shutterstock.com/image-photo/cheesecake-blueberries-almond-raisins-sliced-260nw-1110314810.jpg'
      title='testing'/>
      <CategoryCard
      imageUrl='https://image.shutterstock.com/image-photo/cheesecake-blueberries-almond-raisins-sliced-260nw-1110314810.jpg'
      title='testing'/>
      <CategoryCard
      imageUrl='https://image.shutterstock.com/image-photo/cheesecake-blueberries-almond-raisins-sliced-260nw-1110314810.jpg'
      title='testing'/>
    </ScrollView>
  )
}