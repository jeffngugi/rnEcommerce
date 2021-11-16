import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import RootNavigation from './src/navigation/RootNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer> 
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer:{
    flex:1
  }
})
