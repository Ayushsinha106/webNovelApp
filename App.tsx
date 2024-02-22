/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import ScrollWithFixedView from './ScrollWithFixedView';
import { ParallaxDemo } from './ParallaxDemo';
import ChapterRead from './ChapterRead';
import ModalText from './ModalText';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack =createNativeStackNavigator();
function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}  options={{
          title: 'WebNovel',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Detail" component={ScrollWithFixedView} options={{
          title: 'Novel Detail',
          headerStyle: {
            backgroundColor: '#111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen
  name="chapter"
  component={ChapterRead}
  options={({ route }) => ({
    title: route.params?.chapterTitle || 'Default Title',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:14
    },
  })}
/>

        {/* <Stack.Screen name="Chapter" component={ChapterRead} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor: "white"
  },
  font: {
    fontSize:20,
    color: "white",
    backgroundColor:"white"
  }
});

export default App;
