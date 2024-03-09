import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Factorization() {

    return (
        <ScrollView className="p-5">
            <View className="mb-6 gap-1">
                <Text className="text-base font-poppins">Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>

            <View className="gap-1">
                <Text className="text-base font-poppins">Factors</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
            </View>
        </ScrollView>
    )
}