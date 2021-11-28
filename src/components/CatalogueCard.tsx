import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../constants'

const CatalogueCard = ({item, handleOpenCategory}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>handleOpenCategory()}
        >
            <Text style={styles.txt}>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
    )
}

export default CatalogueCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:70,
        backgroundColor:COLORS.white,
        elevation:3,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:SIZES.radius
        
    },
    image:{
        height:"100%",
        width:'25%',
        borderTopRightRadius:8,
        borderBottomRightRadius:8
    },
    txt:{
        marginLeft:SIZES.base,
        fontWeight:'bold',
        ...FONTS.h3,
        color:COLORS.dark
    }
})
