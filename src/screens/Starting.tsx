import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {COLORS, FONTS, icons, images, SIZES} from '../constants'
import PrimaryGradient from '../utils/PrimaryGradient'

const Starting = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={{width:'100%', height:'100%'}}>
                    <Image source={images.start} style={styles.image} resizeMode='cover' />
                    <View style={styles.overlay}/>
                </View>
                <View style={styles.yellowBar } />
            </View>                
                <View  style={styles.startedContainer}>
                   <PrimaryGradient style={styles.startedContainer}>
                    <View style={{flexDirection:'row', alignSelf:'center', marginVertical:SIZES.padding+2}}>
                        <Text style={styles.my}>My</Text>
                        <Text style={styles.shop}>Shop</Text>
                    </View>
                    <View style={{marginHorizontal:SIZES.base}}>
                    <Text style={styles.intro}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                   
                    <TouchableOpacity 
                        onPress={()=>console.log('get to the login screen')}
                        style={styles.btn}
                    >
                        
                        <Text style={styles.btnTxt}>Get Started</Text>
                    </TouchableOpacity>
                    </PrimaryGradient>
                </View>
        </SafeAreaView>
    )
}

export default Starting

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white2
    },
    imageContainer:{
        flex:4,
        backgroundColor:'black'
    },
    image:{
        height:'100%',
        width:'100%'
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A034B75'
    },
    yellowBar:{
        backgroundColor:'#E7B94480',
        height:SIZES.height*(1/8),
        width:SIZES.width*(2/3),
        alignSelf:'flex-end',
        position:'absolute',
        bottom:0,
        borderTopLeftRadius:SIZES.width
        
    },
    startedContainer:{
        flex:2,
        borderTopLeftRadius:SIZES.padding,
        borderTopRightRadius:SIZES.padding,
        top:-SIZES.padding,
        marginBottom:-SIZES.padding,
    },
    btn:{
        backgroundColor:COLORS.yellow,
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:SIZES.base*2,
        paddingVertical:SIZES.base/2,
        borderRadius:SIZES.base,
        marginVertical:SIZES.padding
    },
    btnTxt:{
        fontSize:SIZES.h2,
        color:COLORS.white,
        marginVertical:SIZES.base/2,
        fontWeight:'bold'
    },
    my:{
        color:COLORS.white,
        fontSize:SIZES.h1,
        fontWeight:'bold'
    },
    shop:{
        color:COLORS.yellow,
        fontSize:SIZES.h1,
        fontWeight:'bold'
    },
    intro:{
        alignSelf:'center',
        marginVertical:SIZES.base,
        textAlign:'center',
        ...FONTS.body3,
        margin:SIZES.base,
        color:COLORS.white2
    }
})
