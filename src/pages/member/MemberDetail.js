import React from 'react'
import { View,Text,Button } from 'react-native'

function MemberDetail({navigation}) {
  return (
    <View>
       <Text> Member Detail Page</Text>
       <Button title="Go to Member Update" onPress={()=>navigation.navigate("MemberUpdateScreen")}/>
       </View>
  )
}

export default MemberDetail