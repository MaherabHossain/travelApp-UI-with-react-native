import React, { useState } from "react";
// import { ImageBackground, StyleSheet, Text, View,Image, TextInput, FlatList, TouchableOpacity, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostDetails from './PostDetails'
import Home from './Home'
const Stack = createStackNavigator();

const HomeStack = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
