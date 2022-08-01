import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../sanity';

export default function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  });
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imageUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
