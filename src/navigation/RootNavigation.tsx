import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Starting, Login, Verification} from '../screens'

const Stack = createStackNavigator()


const RootNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Starting" component={Starting}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Verification' component={Verification} />

      </Stack.Navigator>
    )
}

export default RootNavigation
