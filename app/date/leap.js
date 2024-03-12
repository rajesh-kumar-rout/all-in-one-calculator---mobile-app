import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function DateLeap() {
    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Date</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Answer</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value="2344 is not a leap year"/>
            </View>
        </ScrollView>
    )
}