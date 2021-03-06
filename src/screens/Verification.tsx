import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants'
import PrimaryGradient from '../utils/PrimaryGradient'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Login = ({navigation}: {navigation: any}) => {

    const handleConfirmOtp = ()=>{
        // function to send otp here
        // then navigate to otp screen
        navigation.navigate('HomeNav')
    }

    const handleResend = () =>{
        console.log('Resend otp code here')
    }
    
    return (
        <SafeAreaView
            style={styles.container}
        >
            <PrimaryGradient style={styles.header}>
                <Text style={styles.headerTxt}>Verification</Text>
                <Text style={styles.headerTxt}>Code</Text>
            </PrimaryGradient>
            <View style={styles.body}>
                <Text style={styles.description}>Please enter the code sent to</Text>
                <View style={styles.phoneContainer}>
                    <Text style={styles.phone}>+380991234567</Text>
                    <TouchableOpacity 
                        style={styles.changebtn}
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={styles.changePhne}>Change Phone Number</Text>
                    </TouchableOpacity>
                </View>

                {/* text input here */}
                <View style={{marginVertical:SIZES.padding*2}}>
                    <OTPInputView 
                        pinCount={4}
                        style={{
                            width:'100%',
                            height:50
                        }}
                        codeInputFieldStyle={{
                            width:65,
                            height:65,
                            backgroundColor:COLORS.lightGray2,
                            borderBottomColor:COLORS.green,
                            borderWidth:0,
                            borderBottomWidth:3,
                            color:COLORS.black,
                            ...FONTS.h3
                        }}
                        onCodeFilled={()=>{
                            console.log('jeff ngugi')
                        }}
                    />
                </View>

                <TouchableOpacity
                    onPress={handleConfirmOtp}
                    style={styles.sendBtn}
                >
                    <Text style={styles.sendBtnTxt}>Confirm Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.skipBtn}
                    onPress={handleResend}
                >
                    <Text style={styles.skipTxt}>Resend Code</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        borderBottomRightRadius:SIZES.width*2,
        justifyContent:"center",
        paddingHorizontal:SIZES.font,
        height:SIZES.height/4
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
        ...FONTS.h3,
        fontWeight:'bold'
    },
    phoneContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:4
    },
    phone:{
        color:COLORS.black,
        ...FONTS.h3
    },
    changebtn:{

    },
    changePhne:{
        textDecorationLine:'underline',
        ...FONTS.h3
    }
})
