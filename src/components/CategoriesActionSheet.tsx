import React, {useRef} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import ActionSheet from 'react-native-actions-sheet';
import {FONTS, SIZES,} from '../constants'

const CategoriesActionSheet = ({handleCloseCategory, actionSheetRef, items}) => {


  return (
    <ActionSheet
    initialOffsetFromBottom={1}
    ref={actionSheetRef}
    statusBarTranslucent
    bounceOnOpen={true}
    drawUnderStatusBar={true}
    bounciness={10}
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
  )
}

export default CategoriesActionSheet

const styles = StyleSheet.create({
  scrollview2:{
    paddingHorizontal:10
  },
})
