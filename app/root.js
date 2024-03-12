import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';

export default function Root() {
    const [number, setNumber] = useState(0)
    const [root, setRoot] = useState(0)

    useEffect(()=>{
        setRoot(Math.sqrt(number))
    }, [number])

    return (
        <ScrollView className="p-5">
            <View className="mb-6 gap-1">
                <Text className="text-base font-poppins">Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={number} onChangeText={setNumber} />
            </View>

            <View className="gap-1">
                <Text className="text-base font-poppins">Root</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" editable={false} value={root}/>
            </View>
        </ScrollView>
    )
}