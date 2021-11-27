import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../constants'

const Banner = () => {
    return (
        <View style={styles.container}>
            <Text>Home Banner</Text>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:'red',
        marginHorizontal:SIZES.font,
        borderRadius:SIZES.radius
    }
})
