import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useEffect, useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function AgeDifference() {
    const [firstDOB, setFirstDOB] = useState("")
    const [secondDOB, setSecondDOB] = useState("")
    const [difference, setDifference] = useState("")

    useEffect(()=>{
        if(firstDOB === "" || secondDOB === "") {
            return setDifference("")
        }

        const _firstDOB = new Date(firstDOB.getTime())
        const _secondDOB = new Date(secondDOB.getTime())

        _firstDOB.setMonth(_firstDOB.getMonth() + 1)
        _secondDOB.setMonth(_secondDOB.getMonth() + 1)

        if (_firstDOB.getDate() < _secondDOB.getDate()) {
            _firstDOB.setMonth(_firstDOB.getMonth() - 1)
            _firstDOB.setDate(_firstDOB.getDate() + 30)
        }

        if (_firstDOB.getMonth() < _secondDOB.getMonth()) {
            _firstDOB.setFullYear(_firstDOB.getFullYear() - 1)
            _firstDOB.setMonth(_firstDOB.getMonth() + 12)
        }

        let year = Math.abs(_firstDOB.getFullYear() - _secondDOB.getFullYear())
        let month = Math.abs(_firstDOB.getMonth() - _secondDOB.getMonth())
        let date = Math.abs(_firstDOB.getDate() - _secondDOB.getDate())

        setDifference(`${year} Years ${month} Months ${date} Days`)
    }, [firstDOB, secondDOB])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">DOB of 1st person</Text>
                <TouchableOpacity onPress={() => {
                    DateTimePickerAndroid.open({
                        value: new Date(),
                        onChange: (e, s) => setFirstDOB(s),
                        mode: 'date',
                        is24Hour: true,
                    });
                }}>
                    <TextInput value={firstDOB ? `${firstDOB.getDate()}-${firstDOB.getMonth() + 1}-${firstDOB.getFullYear()}` : null} className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} />
                </TouchableOpacity>
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">DOB of 2nd person</Text>
                <TouchableOpacity onPress={() => {
                    DateTimePickerAndroid.open({
                        value: new Date(),
                        onChange: (e, s) => setSecondDOB(s),
                        mode: 'date',
                        is24Hour: true,
                    });
                }}>
                    <TextInput value={secondDOB ? `${secondDOB.getDate()}-${secondDOB.getMonth() + 1}-${secondDOB.getFullYear()}` : null} className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} />
                </TouchableOpacity>
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Difference</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={difference}/>
            </View>
        </ScrollView>
    )
}
