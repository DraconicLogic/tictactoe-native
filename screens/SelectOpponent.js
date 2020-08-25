import * as React from 'react';
import { Image, SectionList, Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';


export default function SelectOpponent() {

  React.useEffect(() => {
    // Search for bluetooth signal here and save all available opponents into state
  })

  const [opponents, setOpponents] = React.useState([])
  return (
    <View>
    {/* Render opponents here */}
      <Text>
        Select Opponent
      </Text>
    </View>
  )
 
}