import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import ItemBtn from '../components/ItemBtn'
import DropDownPicker from 'react-native-dropdown-picker';
import ProductCard from '../components/ProductCard'
import {COLORS, SIZES, FONTS, constants, icons, images} from '../constants'

const Items = () => {
    constants.subcategories
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ])
    return (
        <SafeAreaView
            style={styles.container}
        >
            <HomeHeader />
            <View
                style={styles.bodyContainer}
            >
            <ScrollView
                horizontal
            >
            
             <ItemBtn />
             <ItemBtn />
             <ItemBtn />
             <ItemBtn />
             <ItemBtn />
            </ScrollView>
            <View style={styles.sortHeader}>
                <Text style={styles.availableItems}>166 items</Text>
                <View style={styles.sortBy}>
                    <Text style={styles.sortByTxt}>Sort By</Text>
                    <Text>Featured</Text>
                    {/* <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    /> */}
                </View>
            </View>
            <View style={styles.body}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Items

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background,
        flex:1,
    },
    bodyContainer:{
        paddingHorizontal:SIZES.font,
    },
    sortHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:SIZES.font,
        alignItems:'center'
    },
    availableItems:{
        ...FONTS.h3,
        color:COLORS.dark,
        fontWeight:'800'
    },
    sortBy:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    sortByTxt:{
        ...FONTS.h3,
        fontWeight:'bold'
    },
    body:{
        marginVertical:SIZES.base,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})
