import React, {useRef}  from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, constants, FONTS} from '../constants'
import HomeHeader from '../components/HomeHeader'
import CatalogueCard from '../components/CatalogueCard'
import CategoriesActionSheet from '../components/CategoriesActionSheet'
import ActionSheet from 'react-native-actions-sheet';

const items = [
    {

        id:1,
        name:'All'
    },
    {
        id:2,
        name:'Shoes'
    },
    {
        id:3,
        name:'Jewelry'
    },
    {
        id:4,
        name:'Watches'
    },
    {
        id:5,
        name:'Handbags'
    },
    {
        id:6,
        name:'Access'
    },
    {
        id:7,
        name:"Men's Fashion"
    },
    {
        id:8,
        name:'Womens Fashion'
    },
    

  ];

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
            
               <FlatList
                style={styles.scrollView}
                data={constants.catalogue}
                renderItem={({item}) => <CatalogueCard key={item.name} item={item} handleOpenCategory={()=>handleOpenCategory()}/>}
                showsVerticalScrollIndicator={false}
             />

        <ActionSheet
          initialOffsetFromBottom={1}
          ref={actionSheetRef}
          statusBarTranslucent
          bounceOnOpen={true}
          drawUnderStatusBar={true}
          bounciness={4}
          gestureEnabled={true}
          defaultOverlayOpacity={0.3}>
          <View
            style={{
              paddingHorizontal: 12,
              height:SIZES.height*0.33
            }}>
            <Text style={{
                    alignSelf:'center',
                    fontWeight:'bold',
                    ...FONTS.h22
              }}>
                        Women's Fashion</Text>

            <ScrollView
              nestedScrollEnabled
              onMomentumScrollEnd={() => {
                actionSheetRef.current?.handleChildScrollEnd();
              }}
              style={styles.scrollview2}>
             

              <View>
                {items.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleCloseCategory()}
                    >
                    <View style={{
                        marginVertical:4
                    }}>
                        <Text>{item.name}</Text>
                    </View>

                  </TouchableOpacity>
                ))}
              </View>

              {/*  Add a Small Footer at Bottom */}
            </ScrollView>
          </View>
        </ActionSheet>

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
