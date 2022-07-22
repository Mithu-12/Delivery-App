import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function RestaurantCard({
  id,
  imageUrl,
  title,
  short_description,
  lat,
  long,
  dishes,
  address,
  rating,
  style,
  genre,
}) {
  return (
    <TouchableOpacity style={{ paddingBottom: 20, marginRight: 20 }}>
      <View>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ width: 220, height: 170, borderRadius: 10 }}
        />
        <View>
          <Text
            style={[
              { fontSize: 16, fontWeight: "bold", paddingVertical: 7 },
              style,
            ]}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="star" size={16} color="green" opacity={0.3} />
            <Text style={{ color: "grey", fontSize: 12, paddingLeft: 5 }}>
              <Text style={{ color: "green" }}>{rating}</Text> {genre}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="location" size={20} color="grey" />
            <Text style={{ color: "grey" }}>Nearby {address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
