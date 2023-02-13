import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
        
    return (
        <SafeAreaView className="bg-white pt-5">
            <View>
            {/* Header */}
            <View className="flex-row items-center space-x-2 pb-3 mx-4">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className="w-7 h-7 rounded-full p-4 bg-gray-400"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl space-x-2">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                    
                </View>
                 {/* search */}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
                        <MagnifyingGlassIcon color="gray" size={20} />
                        <TextInput
                            placeholder='Resturant and cuisines'
                            keyboardType='default'
                        />
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCBB" />
                </View>
            </View>
            {/* body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* categories */}
                <Categories />

                {/* featured */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"
                />

                {/* Tasty Discounts */}
                <FeaturedRow
                    id="1234"
                    title="Tasty Discount"
                    description="Everyone's been enjoy this juicy discount!"
                />

                {/* Offers near you */}
                <FeaturedRow
                    id="12345"
                    title="Offers near you"
                    description="Why not support your local resturant tonight!"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
