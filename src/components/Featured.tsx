import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SIZES, COLORS, FONTS, constants } from '../constants'
import ProductCard from './ProductCard'

const Featured = () => {

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.headerTxt}>Featured</Text>
           <View style={styles.featuredContainer}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
           </View>
        </View>
    )
}

export default Featured

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:SIZES.font,
    },
    headerTxt:{
        color:COLORS.dark,
        ...FONTS.h22,
        fontWeight:'900',
        marginBottom:SIZES.base/2
    },
    featuredContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})
