import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import ActionSheet from 'react-native-actions-sheet';
import {COLORS, FONTS, icons, images, SIZES,} from '../constants'

const AddToCartSheet = ({handleAddToCart, addToCartRef}) => {

    const [cartCount, setCartCount] = useState(1)
    

    const addToCart =()=>{
        console.log('logic to add to cart')
        handleAddToCart()
        setCartCount(1)
    }
  return (
    <ActionSheet
    initialOffsetFromBottom={1}
    ref={addToCartRef}
    statusBarTranslucent
    bounceOnOpen={false}
    drawUnderStatusBar={true}
    bounciness={3}
    gestureEnabled={true}
    defaultOverlayOpacity={0.3}
    containerStyle={{
        padding:SIZES.radius,
        overflow:'hidden',
        paddingBottom:0
    }}
    >
    
    <View
      style={{
        height:SIZES.height*0.37,
      }}>
     <View
        style={styles.header}
     >
         <View style={styles.imgCont}>
            <Image source={images.product1} style={styles.itemImg}/>
         </View>    
         
         <View style={styles.headerTitle}>
            <Text style={{...FONTS.h4, fontWeight:'500', color:COLORS.dark}}>Astylish Women Open Front Long Sleeve Chunky Knit Cardigan</Text>
            <Text style={{...FONTS.h3, fontWeight:'bold', color:COLORS.dark}}>$89.99</Text>
         </View>
         
        
         <View
            style={styles.counter}
         >
             <TouchableOpacity
                onPress={()=>setCartCount(cartCount+1)}
             >
                <Image source={icons.plus} style={styles.minusIcon} />
             </TouchableOpacity>
                 <Text>{cartCount}</Text>
             <TouchableOpacity
                disabled={cartCount <2 ? true:false}
                onPress={()=>setCartCount(cartCount-1)}
             >
                 <Image source={icons.minus} style={styles.minusIcon} />
             </TouchableOpacity>
         </View>
         
     </View>

     <View
            style={styles.bottomContainer}
        >
            <TouchableOpacity
                style={styles.back}
                onPress={()=>console.log('close modal')}
            >
                 <Image source={icons.back} style={styles.backIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addToCart}
                onPress={()=>addToCart()}
            >
               <Text style={styles.addToCartTxt}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>console.log('add to favourite')}
                style={styles.favourite}
            >
                    <Image source={icons.heart} style={styles.favIcon} resizeMode='stretch'/>
                </TouchableOpacity>
        </View>
      
    </View>
  </ActionSheet>
  )
}

export default AddToCartSheet

const styles = StyleSheet.create({
  itemImg:{
      width:70,
      height:70,
      borderRadius:SIZES.font
  },
  imgCont:{

  },
  header:{
    flexDirection:'row',
  },
  headerTitle:{
    marginHorizontal:SIZES.base/2,
    flex:1
  },
  counter:{
      width:50,
      alignItems:'center',
  },
  minusIcon:{
    tintColor:COLORS.darkGray
  },
  bottomContainer:{
    backgroundColor:COLORS.white,
    height:65,
    borderTopRightRadius:SIZES.padding,
    borderTopLeftRadius:SIZES.padding,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:SIZES.padding,
    position:'absolute',
    bottom:0,
    width:'100%'
    
},
back:{
    height:45,
    justifyContent:'center',
    paddingHorizontal:5,
},
favIcon:{
    width:30,
    height:30,
    tintColor:COLORS.dark
},
backIcon:{
    width:30,
    height:30,
    tintColor:COLORS.dark
},
addToCart:{
    backgroundColor:COLORS.yellow,
    paddingHorizontal:SIZES.font*2,
    justifyContent:'center',
    borderRadius:SIZES.radius,
    height:48
},
addToCartTxt:{
    color:COLORS.white,
    ...FONTS.h3,
    fontWeight:'bold'
},
favourite:{
    height:45,
    justifyContent:'center',
    paddingHorizontal:5,
},

})
