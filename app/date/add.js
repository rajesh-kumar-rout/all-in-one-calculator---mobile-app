import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function DateAdd() {
    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Date</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Year</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Month</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Day</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Final Date</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>
        </ScrollView>
    )
}