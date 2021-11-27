import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native'
import { COLORS, FONTS, icons, SIZES, constants} from '../constants'


  interface ICatalogue{
    id: number;
    name: string;
    image: any;
  }


const HomeCatalogue = () => {
    const renderItem = ({item}) =>(
            <TouchableOpacity
                style={styles.singleCat}
            >
                <Image source={item.image} style={styles.catImage}/>
                <View style={styles.catOverley}>
                    <Text style={styles.cartTxt}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
             )
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headTxt}>Catalogue</Text>
                <TouchableOpacity
                     style={styles.more}
                     onPress={()=>console.log('pressed single catalogue')}
                >
                    <Text style={styles.moreTxt}>See More</Text>
                    <Image source={icons.more} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList 
                    data={constants.catalogue}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                    horizontal
                />
            </View>
        </View>
    )
}

export default HomeCatalogue

const styles = StyleSheet.create({
    container:{
        marginHorizontal:SIZES.font,
        marginVertical:SIZES.base
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:SIZES.base/2
    },
    headTxt:{
        color:COLORS.dark,
        ...FONTS.h22,
        fontWeight:'900'
    },
    more:{
        flexDirection:'row',
        alignItems:'center'
    },
    moreTxt:{
        color:COLORS.gray,
        alignSelf:'center'

    },
    moreIcon:{
        height:10,
        width:10,
        tintColor:COLORS.gray,
        alignSelf:'center'
    },
    flatlistContainer:{

    },
    catImage:{
        height:88,
        width:88,
        borderRadius:SIZES.radius
    },
    singleCat:{
        marginRight:SIZES.base,
        height:88,
        width:88,
        borderRadius:SIZES.padding
    },
    catOverley:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A034B65',
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center'
    },
    cartTxt:{
        color:COLORS.white,
        ...FONTS.h3,
        fontWeight:'900'
    }
})
