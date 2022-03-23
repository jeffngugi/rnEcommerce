import React, {useRef} from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import {FONTS, SIZES, COLORS, constants, icons, images} from '../constants'
import Carousel,{Pagination} from 'react-native-snap-carousel'
import ActionSheet from 'react-native-actions-sheet';
import {  AirbnbRating } from 'react-native-ratings';
import Review from '../components/Review'
import AddToCartSheet from '../components/AddToCartSheet'
import LinearGradient from 'react-native-linear-gradient';
import RelatedProductCard from '../components/RelatedProductCard'
import {useNavigation} from '@react-navigation/native'

const related = [
    {
        id:1,
        title:"jeff",
        image:images.item1
    },
    {
        id:2,
        title:"tv set",
        image:images.item2
    },
    {
        id:3,
        title:"Radio",
        image:images.item3
    },
    {
        id:4,
        title:"Fridge",
        image:images.item4
    },
    {
        id:5,
        title:"radio",
        image:images.item5
    }
]

const ColorButton = ()=>(
    <TouchableOpacity
                    style={styles.colorBtn}
    >
        <Image source={images.item1} style={styles.colorIcon}/>
    </TouchableOpacity>
)

const Product = () => {

    const navigation = useNavigation()
    // React hooks
    const addToCartRef = useRef<ActionSheet>(null);

    // Methods defination
    // Take us to the back screen
    const handleBack = ()=>{
        console.log('handle get back')
        navigation.goBack()
    }

    //Add item to the cart and close the action sheet
    const handleAddToCart =()=>{
        console.log('Handle add to cart')
        addToCartRef.current?.hide();
    }

    // opens the add to cart bottom sheet
    const handleOpenAddToCart = ()=>{
        console.log('opens add to cart modal')
        addToCartRef.current?.show();
    }

    const handleAddFavorite = ()=>{
        console.log('handle add to favourite')
    }

    const handleseeReviews = ()=>{
        console.log('This will open all reviews. Make it action sheet')
    }

    // const renderRelated =

    return (
        <SafeAreaView
            style={styles.container}
        >
        <ScrollView>
        <View style={styles.body}>
            {/* Product container starts here */}
            <View style={styles.productContainer}>
                <Image source={images.product1} style={styles.mainImg} resizeMode='contain'/>
            <View style={{paddingHorizontal:SIZES.radius}}>
            <View style={styles.starsCont}>
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
                    <Text style={{...FONTS.h5}}>8 Reviews</Text>
                </View>
                <Text style={{color:COLORS.green, fontWeight:'bold'}}>In stock  </Text>
            </View>
            <Text style={styles.title}>Astylish Women Open Front Long Sleeve Chunky Knit Cardigan</Text>
            <Text style={styles.amount}>$89.99</Text>
            <View>
                <Text style={{color:COLORS.darkGray, ...FONTS.h5}}>Colors</Text>
                <View style={styles.colors}>
                    <ColorButton />
                    <ColorButton />
                    <ColorButton />
                    
                </View>
            </View>
            </View>
            </View>

            {/* Product details container starts here */}
            <View style={styles.detailContainer}>
                <Text style={styles.detailTitle}>Product details</Text>
                <Text style={styles.details}>Women's Casual V-Neck Pullover Sweeter Long Sleeved Top with High Low Hemline is going to be the newest staple in wardrobe! Living up to .. </Text>
                <TouchableOpacity>
                    <Image source={icons.down} style={styles.moreDetails}/>
                </TouchableOpacity>
            </View>
            {/* Review container starts here */}
            <View style={styles.reviewContainer}>
                <View style={styles.reviewHead}>
                    <Text style={styles.reviewHeadtxt}>Reviews</Text>
                    <TouchableOpacity
                        style={styles.reviewHeadBtn}
                        onPress={()=>handleseeReviews()}
                    >
                        <Text style={styles.reviewHeadBtnTxt}>See All</Text>
                    </TouchableOpacity>
                </View>
                
                <Review />
                <TouchableOpacity
                    style={styles.review_fade}
                >
                <LinearGradient
                style={styles.review_fade}
                colors={['transparent', '#FFFFFF80']}
                />
                </TouchableOpacity>
            </View>

            {/* Related container starts here */}
            <View style={styles.related_container}>
                <Text style={styles.related_title}>Product related to this item</Text>
                <FlatList
                    data={related}
                    renderItem={({item})=>(
                        <RelatedProductCard item={item}/>
                    )}
                    keyExtractor={item => item.title}
                    horizontal
                />
            </View>
            
        </View>
        </ScrollView>

        {/* Fixed bottom container */}
        <View
            style={styles.bottomContainer}
        >
            <TouchableOpacity
                style={styles.back}
                onPress={()=>handleBack()}
            >
                 <Image source={icons.back} style={styles.backIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addToCart}
                onPress={()=>handleOpenAddToCart()}
            >
               <Text style={styles.addToCartTxt}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>handleAddFavorite()}
                style={styles.favourite}
            >
                    <Image source={icons.heart} style={styles.favIcon} resizeMode='stretch'/>
                </TouchableOpacity>
        </View>

        {/* Add to cart action sheet */}
        <AddToCartSheet handleAddToCart={()=>handleAddToCart()} addToCartRef={addToCartRef}/>

        </SafeAreaView>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background,
        flex:1
    },
    body:{
        flex:1
    },    
    productContainer:{
        backgroundColor:COLORS.white,
        borderBottomLeftRadius:SIZES.radius,
        borderBottomRightRadius:SIZES.base,
        paddingBottom:SIZES.font,
        elevation:1
    },
    mainImg:{
        width:SIZES.width,
        height:SIZES.width
    },

    bottomContainer:{
        backgroundColor:COLORS.white,
        height:65,
        borderTopRightRadius:SIZES.padding,
        borderTopLeftRadius:SIZES.padding,
        padding:SIZES.base,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:SIZES.padding,
        elevation:4
    },
    back:{
        height:45,
        justifyContent:'center',
        paddingHorizontal:5,
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
    starsCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:SIZES.base/2
    },
    rating:{
        marginHorizontal:0,
        flexDirection:'row',
    },
    title:{
        ...FONTS.h3,
        textAlign:'left'
    },
    amount:{
        ...FONTS.h22,
        fontWeight:'bold',
    },
    colors:{
        flexDirection:'row'
    },
    colorBtn:{
        borderRadius:5,
        borderColor:COLORS.orange,
        borderWidth:2,
        marginRight:6
    },
    colorIcon:{
        width:40,
        height:40,
        borderRadius:3
    },
    detailContainer:{
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.font,
        marginVertical:8,
        elevation:1,
        borderRadius:8
    },
    detailTitle:{
        color:COLORS.dark,
        fontWeight:'bold',
        ...FONTS.h3,
        marginVertical:2
    },
    details:{
        color:COLORS.darkGray2,
        ...FONTS.body55,
    },
    moreDetails:{
        alignSelf:'center',
        width:14,
        height:14,
        marginVertical:4
    },
    reviewContainer:{
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.font,
        marginVertical:8,
        paddingBottom:SIZES.base,
        elevation:1,
        borderRadius:8
    },
    reviewHead:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:3
    },
    reviewHeadtxt:{
        color:COLORS.dark,
        fontWeight:'bold',
        ...FONTS.h3,
        marginVertical:2
    },
    reviewHeadBtn:{
        paddingHorizontal:4,
        marginRight:4
    },
    reviewHeadBtnTxt:{
        color:COLORS.gray,
        ...FONTS.h4
    },
    review_fade:{
        width:SIZES.width,
        height:90,
        position:'absolute',
        bottom:0
    },
    related_container:{
        marginVertical:SIZES.padding,
        paddingLeft:SIZES.font
    },
    related_title:{
        fontWeight:'bold',
        ...FONTS.h3,
        color:COLORS.dark,
        marginBottom:6
    }

})
