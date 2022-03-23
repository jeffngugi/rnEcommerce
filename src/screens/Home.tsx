import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView,} from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import HomeHeader from '../components/HomeHeader'
import HomeCatalogue from '../components/HomeCatalogue'
import Banner from '../components/Banner'
import Featured from '../components/Featured'

const Home = () => {
    return (
        <SafeAreaView style={styles.homecontainer}>
            <HomeHeader />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
            <Banner />
            <HomeCatalogue />
            <Featured />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    homecontainer:{
        flex:1,
        backgroundColor:COLORS.lightGray1
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
