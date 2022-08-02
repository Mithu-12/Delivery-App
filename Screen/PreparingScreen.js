import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function PreparingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 4000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#694d99',
      }}
    >
      <Animatable.Image
        source={require('../assets/image/delivery1.gif')}
        animation="slideInUp"
        iterationCount={1}
        direction="alternate"
        style={{ width: '100%', height: '40%' }}
      />
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        direction="alternate"
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 15,
          marginBottom: 35,
          color: '#ffffff',
        }}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={70} indeterminate={true} color="white" />
    </SafeAreaView>
  );
}
