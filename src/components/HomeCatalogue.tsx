import React, {useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ListRenderItem} from 'react-native'
import { COLORS, FONTS, icons, SIZES, constants} from '../constants'
import ActionSheet from 'react-native-actions-sheet';
import CategoriesActionSheet from './CategoriesActionSheet'
import { useNavigation } from '@react-navigation/native';

  interface Item{
    id: number;
    name: string;
    image: any;
  }
  
const catalogues:Array<Item> = constants.catalogue

const HomeCatalogue = () => {
    const actionSheetRef = useRef<ActionSheet>(null);
    const navigation = useNavigation()
    
    const handleOpenCategory = ()=>{
        actionSheetRef.current?.show();
    }

    const handleCloseCategory = ()=>{
        actionSheetRef.current?.hide()
    }

    const renderItem:ListRenderItem<any> = ({item}) =>(
            <TouchableOpacity
                style={styles.singleCat}
                onPress={handleOpenCategory}
            >
                <Image source={item.image} style={styles.catImage}/>
                <View style={styles.catOverley}>
                    <Text style={styles.cartTxt}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
             )
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headTxt}>Catalogue</Text>
                <TouchableOpacity
                     style={styles.more}
                    onPress={() => navigation.navigate('HomeNav' as never, { screen: 'Catalogue' } as never)}
                >
                    <Text style={styles.moreTxt}>See More</Text>
                    <Image source={icons.more} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList 
                    data={catalogues}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                    horizontal
                />
            </View>
            <CategoriesActionSheet actionSheetRef={actionSheetRef} handleCloseCategory={handleCloseCategory} items={constants.subcategories}/>
        </View>
    )
}

export default HomeCatalogue

const styles = StyleSheet.create({
    container:{
        marginHorizontal:SIZES.font,
        marginVertical:SIZES.base
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:SIZES.base/2
    },
    headTxt:{
        color:COLORS.dark,
        ...FONTS.h22,
        fontWeight:'900'
    },
    more:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8
    },
    moreTxt:{
        color:COLORS.gray,
        alignSelf:'center'

    },
    moreIcon:{
        height:10,
        width:10,
        tintColor:COLORS.gray,
        alignSelf:'center'
    },
    flatlistContainer:{

    },
    catImage:{
        height:88,
        width:88,
        borderRadius:SIZES.radius
    },
    singleCat:{
        marginRight:SIZES.base,
        height:88,
        width:88,
        borderRadius:SIZES.padding
    },
    catOverley:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2A034B65',
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center'
    },
    cartTxt:{
        color:COLORS.white,
        ...FONTS.h3,
        fontWeight:'900'
    }
})
