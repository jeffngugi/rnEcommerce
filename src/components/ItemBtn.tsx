import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import {COLORS, FONTS, SIZES} from '../constants'

const ItemBtn = () => {
    return (
        <TouchableOpacity
                    style={styles.itemBtn}
        >
                    <Text style={styles.btnTxt}>All</Text>
            </TouchableOpacity>
    )
}

export default ItemBtn

const styles = StyleSheet.create({
    itemBtn:{
        backgroundColor:COLORS.yellow,
        paddingHorizontal:SIZES.base,
        paddingVertical:SIZES.base/2,
        borderRadius:SIZES.base,
        alignItems:'center',
        justifyContent:'center',
        marginRight:SIZES.base
    },
    btnTxt:{
        color:COLORS.dark,
        ...FONTS.h3
    },
})
