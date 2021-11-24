import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'
import Modal from 'react-native-modal'

const PhoneInput = ({}) => {
    const [countryModal, setCountryModal] = useState<boolean>(false)

    const handleSetCountry = ()=>{
        setCountryModal(false)
    }

    return (
        <View>
        <View
            style={styles.container}
        >
            <TextInput style={styles.inputPhone} placeholder='717031210'/>
                
                <TouchableOpacity style={styles.country} onPress={()=>setCountryModal(true)}>
                    <Image source={images.flag} style={styles.flagIcon}/>
                    <Image source={icons.down} style={styles.down} />
                    <Text style={styles.countryCode}>+254</Text>
                </TouchableOpacity>

        </View>
        <Modal
          backdropOpacity={0.5}
          isVisible={countryModal}
          onBackdropPress={() => setCountryModal(false)}
          onBackButtonPress={() => setCountryModal(false)}
          style={styles.contentView}
        >
          <View style={{
              backgroundColor: COLORS.white,
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:17
          }}>
              <View style={{
                  width:SIZES.width/1.09,
                  elevation:4,
                  padding:SIZES.base,
              }}>
                  <TouchableOpacity
                    style={{flexDirection:'row', alignItems:'center', marginHorizontal:SIZES.padding }}
                    onPress={()=>handleSetCountry()}
                  >
                      <Image source={images.flag} style={{width:28, height:22}}/>
                      <Text style={{marginHorizontal:SIZES.base}}>Kenya</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </Modal>
        </View>
    )
}

export default PhoneInput

const styles = StyleSheet.create({
    container:{
        marginVertical:SIZES.base,
        flexDirection:'row',
    },
    inputPhone:{
        flex:1,
        height:55,
        color:COLORS.darkGray2,
        borderWidth:1,
        borderRadius:SIZES.radius,
        paddingLeft:116,
        ...FONTS.h2
    },
    country:{
    flexDirection:'row',
    alignItems:'center',
    left:10,
    position:'absolute',
    bottom:15
    },
    
    flagIcon:{
        width:32,
        height:20
    },
    down:{
        height:15,
        width:15,
        tintColor:'black',
        marginHorizontal:4
    },
    countryCode:{
        color:COLORS.black,
        ...FONTS.h2,
    },
    contentView:{
        
    }
})
