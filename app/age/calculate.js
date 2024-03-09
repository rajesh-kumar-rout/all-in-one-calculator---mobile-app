import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';

export default function AgeCalculate() {

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Current Date</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Date of birth</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Age</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value="44 Years 4 Months 44 Days" />
            </View>
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Next Birthday</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value="4 Months 44 Days" />
            </View>
        </ScrollView>
    )
}
