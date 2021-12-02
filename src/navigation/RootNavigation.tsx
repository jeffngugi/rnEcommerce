import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Starting, Login, Verification,  Product, Items} from '../screens'
import HomeTabs from './HomeTabs'

const Stack = createStackNavigator()


const RootNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Starting" component={Items}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='HomeNav' component={HomeTabs} />

      </Stack.Navigator>
    )
}

export default RootNavigation

