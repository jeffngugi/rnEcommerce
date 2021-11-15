import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import {Starting} from './src/screens'

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Starting />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer:{
    flex:1
  }
})
