import React, {useRef}  from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, constants, FONTS} from '../constants'
import HomeHeader from '../components/HomeHeader'
import CatalogueCard from '../components/CatalogueCard'
import CategoriesActionSheet from '../components/CategoriesActionSheet'
import ActionSheet from 'react-native-actions-sheet';


const Catalogue = () => {   
    const actionSheetRef = useRef<ActionSheet>(null);

    const handleOpenCategory = ()=>{
        console.log('this will open action sheet')
        actionSheetRef.current?.show();
    }

    const handleCloseCategory = ()=>{
        actionSheetRef.current?.hide()
    }

    return (
        <SafeAreaView style={styles.container}>
          
            <HomeHeader />
              <>
               <FlatList
                style={styles.scrollView}
                data={constants.catalogue}
                renderItem={({item}) => <CatalogueCard key={item.name} item={item} handleOpenCategory={()=>handleOpenCategory()}/>}
                showsVerticalScrollIndicator={false}
             />
            <CategoriesActionSheet actionSheetRef={actionSheetRef} handleCloseCategory={handleCloseCategory} items={constants.subcategories}/>
            </>
        

        </SafeAreaView>
    )
}

export default Catalogue

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.background,
        flex:1,
    },
    scrollView:{
        marginHorizontal:SIZES.font
    },
      scrollview: {
        width: '100%',
        padding: 12,
      },
      scrollview2:{
        paddingHorizontal:10
      },
      safeareview: {
        justifyContent: 'center',
        flex: 1,
      },
      btnTitle: {
        color: 'white',
        fontWeight: 'bold',
      },
})
