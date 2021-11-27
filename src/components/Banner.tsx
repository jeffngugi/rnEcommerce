import React, {useRef} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, images, SIZES, constants } from '../constants'
import Carousel from 'react-native-snap-carousel'

const Banner = () => {
    const carouselRef = useRef(null)

    const _renderItem = (item)=>(
        <View>
            <View style={styles.imgContainer}>
                <Image source={images.banner1} style={styles.bannerImg} />
            </View>
            <View style={styles.bannerOverlay}>
                <TouchableOpacity
                    onPress={()=>console.log('banner touched')}
                >
                <Text style={styles.bannerTxt}>{item.name}</Text>
                <Text style={styles.seeMore}>See More</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
    return (
        <View style={styles.container}>
            <Carousel
                    ref={carouselRef}
                    data={constants.bannerData}
                    renderItem={({ item, index })=>_renderItem(item)}
                    sliderWidth={SIZES.width-(SIZES.font*2)}
                    itemWidth={SIZES.width-(SIZES.font*2)}
                    layout={'default'}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={3000}
                    enableMomentum={false}
                /> 
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        height:80,
        marginHorizontal:SIZES.font,
        borderRadius:SIZES.radius
    },
    bannerImg:{
        width:'100%', 
        height:'100%',
        borderRadius:SIZES.radius
    },
    imgContainer:{
        borderRadius:SIZES.radius
    },
    bannerOverlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A034B60',
        borderRadius:SIZES.radius,
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:SIZES.base
    },
    seeMore:{
        color:COLORS.yellow,
        fontWeight:'900',
        ...FONTS.h4
    },
    bannerTxt:{
        color:COLORS.white,
        fontWeight:'900',
        ...FONTS.h2
    }
})
