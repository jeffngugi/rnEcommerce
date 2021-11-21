import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants'
import PrimaryGradient from '../utils/PrimaryGradient'


const Login = ({navigation}: {navigation: any}) => {

    const handleSendOtp = ()=>{
        // function to send otp here
        // then navigate to otp screen
        navigation.navigate('Verification')
    }


    const handleSkip = ()=>{
        console.log('Handle skip, navigate user to hme page')
    }
    return (
        <View
            style={styles.container}
        >
            <PrimaryGradient style={styles.header}>
                <Text style={styles.headerTxt}>What Is Your Phone</Text>
                <Text style={styles.headerTxt}>Number ?</Text>
            </PrimaryGradient>
            <View style={styles.body}>
                <Text style={styles.description}>Please enter your phone number to verify your account</Text>

                {/* text input here */}
                <TextInput
                    keyboardType='phone-pad'
                />

                <TouchableOpacity
                    onPress={handleSendOtp}
                    style={styles.sendBtn}
                >
                    <Text style={styles.sendBtnTxt}>Send Verification Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.skipBtn}
                    onPress={handleSkip}
                >
                    <Text style={styles.skipTxt}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:2
    },
    header:{
        backgroundColor:'red',
        flex:1,
        borderBottomRightRadius:SIZES.width*2,
        justifyContent:"center",
        paddingHorizontal:SIZES.font
    },
    body:{
        flex:3,
        paddingHorizontal:SIZES.font,
        paddingTop:SIZES.padding
        },
    headerTxt:{
        color:COLORS.white,
        ...FONTS.h1
    },
    description:{
        color:COLORS.darkGray2,
        ...FONTS.body3
    },
    sendBtn:{
        backgroundColor:COLORS.yellow,
        alignItems:'center',
        paddingHorizontal:SIZES.padding*2,
        paddingVertical:SIZES.font,
        borderRadius:SIZES.base,
        marginVertical:SIZES.font
    },
    sendBtnTxt:{
        color:'white',
        ...FONTS.h3,
        fontWeight:'bold'
    },
    skipBtn:{
        alignSelf:'center',
        paddingHorizontal:SIZES.padding*2,
        paddingVertical:SIZES.base,
        borderRadius:SIZES.base
    },
    skipTxt:{
        color:COLORS.darkGray2,
        ...FONTS.h3
    }
})
