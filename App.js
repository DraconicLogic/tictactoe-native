import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import HomeScreen from './screens/HomeScreen'
import SelectProfile from './screens/SelectProfile'
import SelectOpponent from './screens/SelectOpponent'
import TicTacToe from './screens/TicTacToe'

import playerData from './playerData.json'

const Stack = createStackNavigator();

export const stateContext = React.createContext()

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  const [newPlayerData, setNewPlayerData] = React.useState({})
  const [player, selectPlayer] = React.useState({})

  React.useEffect(() => {
    setNewPlayerData(playerData)
  },[])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <stateContext.Provider value={{newPlayerData, setNewPlayerData, player, selectPlayer}}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={SelectProfile} />
            <Stack.Screen name="Opponent" component={SelectOpponent} />
            <Stack.Screen name="Tictactoe" component={TicTacToe} />
          </Stack.Navigator>
        </stateContext.Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
