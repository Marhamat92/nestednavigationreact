import React from 'react';
import {View, Text,Button} from 'react-native';

function Profile({navigation}) {
  return (
    <View>
      <Text> Profile Page</Text>
      <Button title="Go to Profile Edit" onPress={()=>navigation.navigate("ProfileEditScreen")}/>
    </View>
  );
}

export default Profile;
