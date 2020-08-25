import * as React from 'react';
import { Image, SectionList, Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';


export default function TicTacToe() {
  return (
    <View>
      <Text>Main Game</Text>
      <View >
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  )
 
}

 const styles = StyleSheet.create({
   gameGrid: {

   }
 })