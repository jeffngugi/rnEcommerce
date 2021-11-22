import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Cart, Catalogue, Profile, Favorite} from '../screens'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Catalogue" component={Catalogue} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  )
}

export default HomeTabs

const styles = StyleSheet.create({})
