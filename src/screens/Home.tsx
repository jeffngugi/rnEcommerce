import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import HomeHeader from '../components/HomeHeader'

const Home = () => {
    return (
        <SafeAreaView style={styles.homecontainer}>
            <HomeHeader />
            <Text>Jeff ngugi</Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    homecontainer:{
        flex:1,
        backgroundColor:'red'
    },
    headerContainer:{
        backgroundColor:COLORS.primary,
        height:110,
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.font,
        marginBottom:110
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
        bottom:-45
    },
    searchInput:{
        borderRadius:SIZES.radius,
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'red'
    }
})
