import React from 'react';
import {View,Button, Text} from 'react-native';

function Member({navigation}) {


  return (
    <View>
      <Text> Member Page</Text>
      <Button title="Go to Member Detail" onPress={()=>navigation.navigate("MemberDetailScreen")}/>
    </View>
  );
}

export default Member;
