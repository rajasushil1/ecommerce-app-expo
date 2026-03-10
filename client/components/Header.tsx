import React from "react";
import { useRouter } from "expo-router";
import { HeaderProps } from "@/constants/types";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { Image } from "expo-image";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {
  const router = useRouter();
  const {itemCount} = {itemCount: 6}
return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
        {/* left side */}
        <View className="flex-row items-center flex-1">
        {showBack && (
            <TouchableOpacity onPress={() => router.back()} className="mr-3">
                <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
            </TouchableOpacity>
        )}
        {showMenu && (
            <TouchableOpacity className="mr-3">
                <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
            </TouchableOpacity>
        )}
        {showLogo ? (
            <View className="flex-1">
                <Image source={require("@/assets/images/logo.png")} style= {{ width: "90%", height: 24 }}  contentFit="contain" />
            </View>
        ) : title  &&  (
            <Text className="text-xl font-bold text-primary flex-1 mr-8">{title}</Text>
        )}
        {(!title && !showSearch) && 
            <View className="flex-1" />
        }
        </View>
        {/* right side */}
        <View className="flex-row items-center gap-4">
        {showSearch && (
            <TouchableOpacity>
                <Ionicons name="search-outline" size={24} color={COLORS.primary} />
            </TouchableOpacity>
        )}
        {showCart && (
                <TouchableOpacity onPress={() => router.push('/(tabs)/cart')}>
                <View className="relative">
            <Ionicons name="bag-outline" size={24} color={COLORS.primary} />

            {itemCount > 0 && (  
        <View 
          className={`
            absolute 
            -top-1.5 -right-1.5
            bg-accent 
            rounded-full 
            min-w-[18px] h-[18px]  
            flex items-center justify-center
            border-2 border-white   
          `}
        >
          <Text 
            className="
              text-white 
              text-[10px]          
              font-bold 
              leading-none         
              px-1                 
            "
          >
            {itemCount}
          </Text>
        </View>
      )}
    </View>
  </TouchableOpacity>
)}
    </View>
  </View>
);
}
