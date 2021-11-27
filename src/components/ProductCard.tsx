import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { COLORS, images, SIZES } from '../constants'
import { Rating, AirbnbRating } from 'react-native-ratings';

const ProductCard = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.imgContainer}
            >
                <Image style={styles.cardImage} source={images.product1}/>
            </TouchableOpacity>
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
            <TouchableOpacity>
                <Text style={styles.title}>Saodimallsu Womens Turtleneck Oversized...</Text>
                <Text style={styles.amount}>Ksh.1000</Text>

            </TouchableOpacity>
            
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:163,
        marginBottom:SIZES.radius,
        borderTopRightRadius:SIZES.radius,
        borderTopLeftRadius:SIZES.radius
    },
    imgContainer:{

    },
    cardImage:{
        width:163,
        height:163,
        borderRadius:SIZES.radius
    },
    rating:{
        marginHorizontal:0,
        flexDirection:'row',
    },
    title:{
        color:COLORS.dark
    },
    amount:{
        color:COLORS.black,
        fontWeight:'900'
    }
})
