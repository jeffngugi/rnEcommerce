import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, constants} from '../constants'
import HomeHeader from '../components/HomeHeader'
import CatalogueCard from '../components/CatalogueCard'


const Catalogue = () => {   

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader />
               <FlatList
                style={styles.scrollView}
                data={constants.catalogue}
                renderItem={({item}) => <CatalogueCard key={item.name} item={item}/>}
                showsVerticalScrollIndicator={false}
      />
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
    }
})
