import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import { COLORS, icons, SIZES, FONTS } from '../constants'

const HomeHeader = () => {
    const handleSearch = ()=>{
        console.log('This will search all products')
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <View style={styles.header}>
                    <TouchableOpacity>  
                        <Image source={icons.menu} style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>MyShop</Text>
                    <TouchableOpacity>
                        <Image source={icons.bell} style={styles.headerIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder='What are you looking for?'/>
                    <TouchableOpacity
                        onPress={handleSearch}
                        style={styles.searchButton}
                    >
                        <Image source={icons.search} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        marginBottom:-10
    },
    headerContainer:{
        backgroundColor:COLORS.primary,
        height:110,
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.font,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerIcon:{
        width:24,
        height:24,
        tintColor:COLORS.white
    },
    headerTitle:{
        color:COLORS.white,
        alignSelf:'center',
        ...FONTS.h2,
        fontWeight:'bold'
    },
    searchContainer:{   
        marginHorizontal:SIZES.font,
        top:-20,
        flexDirection:'row',
    },
    searchButton:{
        alignItems:'center',
        left:10,
        position:'absolute',
        bottom:15
    },
    searchIcon:{
        height:24,
        width:24,
        tintColor:COLORS.black,
        marginHorizontal:8
    },
    searchInput:{
        flex:1,
        height:55,
        color:COLORS.darkGray2,
        borderWidth:0.5,
        borderRadius:SIZES.font*2,
        backgroundColor:COLORS.white2,
        borderColor:COLORS.gray2,
        paddingLeft:55,
        ...FONTS.h3,
    },
})
