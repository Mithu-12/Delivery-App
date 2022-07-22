import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Simple from './Screen/Simple';
import Home from './Screen/Home';
import { useFonts } from 'expo-font';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
}


const Stack = createNativeStackNavigator();
export default function App() {
  let [fontLoaded] = useFonts({
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf')
  })
  // c
  if(!fontLoaded){
    return null
  }
  else{
    return (
      <NavigationContainer theme={AppTheme}>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          {/* <Stack.Screen name="Simple" component={Simple} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}