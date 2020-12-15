import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


import BiosScreen from "./src/screen/BiosScreen";
import BioDetails from "./src/screen/BioDetails";
import SingleScreen from "./src/components/SingleScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
        }}>
       

       <Stack.Screen
       options={{
        header:() =>null
      }}
          name='BiosScreen'
           component={BiosScreen}
       />

       <Stack.Screen
        options={{
          header:() =>null
        }}
            name='BioDetails'
             component={BioDetails}
       />




      </Stack.Navigator>
    </NavigationContainer>

    // <View>
    //   <BiosScreen/>
    //   {/* <BioDetails/> */}
    //   {/* <SingleScreen/> */}

    // </View>
  );
}

// const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
// });
