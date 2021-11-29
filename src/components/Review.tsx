import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLORS, FONTS, icons } from '../constants'
import {  AirbnbRating } from 'react-native-ratings';


const Review = () => {
    const handleAddReview = ()=>{
        console.log('Funtion to open input and add comment')
    }

    const handleLikeReview = ()=>{
        console.log('function to like a comment review here')
    }
    return (
        <View>
            <Text style={styles.reviewer}>Geofffrey Ngugi</Text>
            <View style={styles.dateContainer}>
            <View style={styles.rating}>
                <AirbnbRating
                        showRating={false}
                        reviewColor='white'
                        reviewSize={6}
                        count={5}
                        size={8}
                        defaultRating={3}
                        selectedColor={COLORS.orange}
                        starContainerStyle={{
                            borderColor:'white',
                        }}
                        ratingContainerStyle={{
                            opacity:5
                        }}
                    />
                </View>
                <Text style={styles.date}>Nov 29,2021</Text>
            </View>
            <Text style={styles.review}>
            I got these for my bf, and the size it's perfect because I bought it's bigger than his normal one as per the other customers reviews. He loves them!
            </Text>
            <Text style={styles.helpful}>120 peaple found this helpful</Text>
            <View style={styles.addCommentContainer}>
                <TouchableOpacity
                    onPress={()=>handleAddReview()}
                    // style={styles.add_comment}
                >
                    <Text>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>handleLikeReview()}
                    style={styles.like_review}
                >
                    <Text>Helpful</Text>
                    <Image source={icons.thumb} style={styles.like_icon}/>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
   
   reviewer:{
    color:COLORS.dark,
    fontWeight:'bold',
    ...FONTS.h4,
   },
   dateContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:2
   },
   date:{
     color:COLORS.gray,
     ...FONTS.body5
   },
   rating:{
    marginHorizontal:0,
    flexDirection:'row',
    },
    review:{
        color:COLORS.darkGray2,
        ...FONTS.body55,
        marginVertical:4
    },
    helpful:{
        fontSize:11,
        color:COLORS.gray,
        marginBottom:4
    },
    addCommentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:4
    },
    add_comment:{
        fontWeight:'bold',
        ...FONTS.h5
    },
    like_review:{
        flexDirection:'row',
        alignItems:'center'
    },
    like_icon:{
        width:20, 
        height:20
    }
})
