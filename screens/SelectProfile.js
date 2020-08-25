import * as React from 'react';
import { FlatList, Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {stateContext} from '../App.js'
import { MonoText } from '../components/StyledText';


export default function SelectProfile({navigation}) {
  const { newPlayerData, setNewPlayerData, player, selectPlayer } = React.useContext(stateContext)

  const handleSelect = (event) => {

    console.log('handleSelect: ', event.target.innerHTML)
    const { innerHTML } = event.target
    const selected = newPlayerData[innerHTML]
    selectPlayer(selected)

  }
  
  return ( 
    <View>
      <Text>
        Select Profile
      </Text>
      <FlatList
        data={Object.values(newPlayerData)}
        renderItem={({item}) => {
          return (
            
          
                <Text onPress={handleSelect}
                  style={
                    item.player === player.player ?
                    styles.selected :
                    null
                  }
                >
                  {item.player}
                </Text>

              
            
          )
        }}
        keyExtractor={(item) => item.player}
      >
      

      </FlatList>
      
      <Button 
        title="Next"
        onPress={() => navigation.navigate("Opponent")}
      />
    </View>
  ) 
}

const styles = StyleSheet.create({
  selected: {
    color: 'crimson'
  }
})