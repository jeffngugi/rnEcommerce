import React from 'react'
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity, GestureResponderEvent} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Cart, Catalogue, Profile, Favorite} from '../screens'
import { COLORS, SIZES, icons, FONTS } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

const Tab = createBottomTabNavigator()

interface ITabProps {
  children?:any;
  onPress: (event: GestureResponderEvent) => void
}

const TabBarCustomButton =({children, onPress}:ITabProps)=>{
  return(
      <TouchableOpacity
          style={{
              top:-30,
              justifyContent:'center',
              alignItems:'center',
              ...styles.shadow
          }}
          onPress={onPress}
      >
          <LinearGradient 
              colors={[COLORS.primary, COLORS.primary2]}
              style={{
                  width:80,
                  height:60,
                  borderTopLeftRadius:30,
                  borderBottomLeftRadius:30
              }}
          >
              {children}
          </LinearGradient>
      </TouchableOpacity>
  )
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor: 'green',
      tabBarShowLabel: false,
      headerShown:false,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 78,
        backgroundColor: COLORS.white,
        borderTopLeftRadius:SIZES.radius*2,
        borderTopRightRadius:SIZES.radius*2,
        borderTopWidth:0
      }
    }}
>
      <Tab.Screen
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon:({focused })=> (
              <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Image 
                      source={icons.home}
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25,
                          tintColor:focused?COLORS.primary2: COLORS.gray
                      }}
                  />
                  <Text style={{
                      color:focused?COLORS.primary2:COLORS.gray,
                      ...FONTS.body5
                  }}>Home</Text>
              </View>
          )
      }}
      />
      <Tab.Screen 
        name="Catalogue" 
        component={Catalogue}
        options={{
          tabBarIcon:({focused })=> (
              <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Image 
                      source={icons.catalogue}
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25,
                          tintColor:focused?COLORS.primary2: COLORS.gray
                      }}
                  />
                  <Text style={{
                      color:focused?COLORS.primary2:COLORS.gray,
                      ...FONTS.body5
                  }}>Catalogue</Text>
              </View>
          )
      }}
        />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon:({focused })=> (
              <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Image 
                      source={focused?icons.heartfilled:icons.heart}
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25,
                          tintColor:focused?COLORS.primary2: COLORS.gray
                      }}
                  />
                  <Text style={{
                      color:focused?COLORS.primary2:COLORS.gray,
                      ...FONTS.body5
                  }}>Favorite</Text>
              </View>
          )
      }} 
        />
      <Tab.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{
          tabBarIcon:({focused })=> (
              <View style={{alignItems:'center', justifyContent:'center'}}>
                  <Image 
                      source={focused?icons.userfilled:icons.user}
                      resizeMode='contain'
                      style={{
                          width:25,
                          height:25,
                          tintColor:focused?COLORS.primary2: COLORS.gray
                      }}
                  />
                  <Text style={{
                      color:focused?COLORS.primary2:COLORS.gray,
                      ...FONTS.body5
                  }}>Profile</Text>
              </View>
          )
      }}
        />
      
         <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={icons.cart}
                            resizeMode='contain'
                            style={{
                                width:20,
                                height:20,
                                tintColor:COLORS.white
                            }}
                        />
                    ),
                    tabBarButton:(props) =>(
                      <TabBarCustomButton {...props}/>
                    )
                }}
            />
    </Tab.Navigator>
  )
}

export default HomeTabs

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
}
})
