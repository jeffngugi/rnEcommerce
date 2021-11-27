import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { COLORS, icons, images, SIZES } from '../constants'
import {  AirbnbRating } from 'react-native-ratings';

const ProductCard = () => {
    return (
        <View 
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.imgContainer}
                onPress={()=>console.log('take me to single item')}
            >
                <Image style={styles.cardImage} source={images.product1}/>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.favourite}
                    onPress={()=>console.log('handlefavourite')}
                >
                    <Image source={icons.heart} style={styles.favIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>console.log('take me to single item')}
            >
            <View style={styles.rating}>
               <AirbnbRating
                    showRating={false}
                    reviewSize={5}
                    count={5}
                    size={8}
                    defaultRating={10/2}
                    starContainerStyle={{
                        borderColor:'white',
                        opacity:2
                    }}
                    ratingContainerStyle={{
                        opacity:5
                    }}
                />
            </View>
            
                <Text style={styles.title}>Saodimallsu Womens Turtleneck Oversized...</Text>
                <Text style={styles.amount}>Ksh.1000</Text>

            </TouchableOpacity>
            
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:"48%",
        marginBottom:SIZES.radius,
        borderTopRightRadius:SIZES.radius,
        borderTopLeftRadius:SIZES.radius
    },
    imgContainer:{

    },
    cardImage:{
        width:'100%',
        height:160,
        borderRadius:SIZES.radius
    },
    rating:{
        marginHorizontal:0,
        flexDirection:'row',
    },
    title:{
        color:COLORS.black
    },
    amount:{
        color:COLORS.dark,
        fontWeight:'900'
    },
    favourite:{
        height:36,
        width:36,
        backgroundColor:COLORS.white,
        borderRadius:20,
        position:'absolute',
        right:6,
        bottom:45,
        padding:SIZES.base,
        elevation:2
    },
    favIcon:{
        resizeMode:'contain',
        width:'100%',
        height:"100%",
        alignSelf:'center'
    }
})
