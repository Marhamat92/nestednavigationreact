import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Member from './pages/member/Member'
import MemberDetail from './pages/member/MemberDetail'
import MemberUpdate from './pages/member/MemberUpdate'
import Profile from './pages/profile/Profile'
import ProfileEdit from "./pages/profile/ProfileEdit"


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator(); // to use it,we need to add it to the place of Tab.Navigator


const MemberStack = ()  => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator> 
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  );
}


function Router() {


  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Profile' >
       <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router