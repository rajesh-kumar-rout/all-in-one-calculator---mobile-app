import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { useEffect, useState } from 'react';

export default function AgeCalculate() {
    const [currentDate, setCurrentDate] = useState("")
    const [DOB, setDOB] = useState("")
    const [currentField, setCurrentField] = useState("")
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [age, setAge] = useState("")
    const [nextBirthday, setNextBirthday] = useState("")
    const [pickedDate, setPickedDate] = useState("")

    useEffect(() => {
        if (currentDate == "" || DOB === "") {
            setNextBirthday("")
            return setAge("")
        }

        const _currentDate = new Date(currentDate.getTime())
        const _DOB = new Date(DOB.getTime())

        _currentDate.setMonth(_currentDate.getMonth() + 1)
        _DOB.setMonth(_DOB.getMonth() + 1)

        if (_currentDate.getDate() < _DOB.getDate()) {
            _currentDate.setMonth(_currentDate.getMonth() - 1)
            _currentDate.setDate(_currentDate.getDate() + 30)
        }

        if (_currentDate.getMonth() < _DOB.getMonth()) {
            _currentDate.setFullYear(_currentDate.getFullYear() - 1)
            _currentDate.setMonth(_currentDate.getMonth() + 12)
        }

        let year = _currentDate.getFullYear() - _DOB.getFullYear()
        let month = _currentDate.getMonth() - _DOB.getMonth()
        let date = _currentDate.getDate() - _DOB.getDate()

        setAge(`${year} Years ${month} Months ${date} Days`)

        _DOB.setFullYear(_currentDate.getFullYear())

        if (_currentDate.getMonth() > _DOB.getMonth() || (_currentDate.getMonth() === _DOB.getMonth() && _currentDate.getDate() > _DOB.getDate())) {
            _DOB.setFullYear(_DOB.setFullYear() + 1)
        }

        year = _DOB.getFullYear() - _currentDate.getFullYear()
        month = _DOB.getMonth() - _currentDate.getMonth()
        date = _DOB.getDate() - _currentDate.getDate()

        setNextBirthday(`${year} Years ${month} Months ${date} Days`)
    }, [currentDate, DOB])

    // useEffect(()=>{
    //     currentField === "currentDate" ? setCurrentDate(pickedDate) : setDOB(pickedDate)
    //     setShowDatePicker(false)
    // }, [pickedDate])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Current Date</Text>

                <TouchableOpacity onPress={() => {
                    DateTimePickerAndroid.open({
                        value: new Date(),
                        onChange: (e, s) => setCurrentDate(s),
                        mode: 'date',
                        is24Hour: true,
                    });
                }}>
                    <TextInput value={currentDate ? `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}` : null} className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} />
                </TouchableOpacity>
            </View>


            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Date of birth</Text>
                <TouchableOpacity onPress={() => {
                    DateTimePickerAndroid.open({
                        value: new Date(),
                        onChange: (e, s) => setDOB(s),
                        mode: 'date',
                        is24Hour: true,
                    });
                }}>
                    <TextInput value={DOB ? `${DOB.getDate()}-${DOB.getMonth() + 1}-${DOB.getFullYear()}` : null} className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} />
                </TouchableOpacity>
            </View>
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Age</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={age} />
            </View>
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Next Birthday</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={nextBirthday} />
            </View>
        </ScrollView>
    )
}
