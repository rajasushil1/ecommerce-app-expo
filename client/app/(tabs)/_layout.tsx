import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
           backgroundColor: "#fff",
           borderTopWidth: 1,
           borderTopColor: "#F0F0F0",
           paddingTop: 10,
           paddingBottom: 10,
           paddingHorizontal: 20,
           height: 70,
           position: "absolute",
           bottom: 0,
        },
        }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
      ) }} />
      <Tabs.Screen name="cart" options={{ title: "Cart", tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
      ) }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites", tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={focused ? "heart" : "heart-outline"} size={size} color={color} />
      ) }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
      ) }} />
    </Tabs>
  )
}