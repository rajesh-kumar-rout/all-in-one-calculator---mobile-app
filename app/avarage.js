import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Avarage() {
    const [numbers, setNumbers] = useState([0])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Numbers</Text>
                <View className="gap-1">
                    {numbers.map((number, index) => (
                        <View className="flex-row items-center gap-1" key={index}>
                            <TextInput
                                className="border border-gray-300 rounded p-3 text-base font-poppins flex-1"
                                inputMode="numeric"
                                value={number}
                            />
                            {index === 0 ? (
                                <Ionicons name="add-outline" size={22} onPress={() => setNumbers([...numbers, 0])} />
                            ) : (
                                <Ionicons name="close-outline" size={22} onPress={() => setNumbers(numbers.filter((_, i) => i !== index))} />
                            )}
                        </View>
                    ))}
                </View>
            </View>

            <Text className="text-base mb-1 font-poppins">Avarage</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" />
        </ScrollView>
    )
}