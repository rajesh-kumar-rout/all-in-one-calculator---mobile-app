import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

export default function Random() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [random, setRandom] = useState(0)

    useEffect(()=>{
        setRandom(Math.floor(Math.random() * (max - min + 1) + min))
    }, [min, max])

    return (
        <ScrollView className="p-5">
            <View className="mb-6 gap-1">
                <Text className="text-base font-poppins">Min Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={min} onChangeText={setMin}/>
            </View>

            <View className="gap-1">
                <Text className="text-base font-poppins">Max Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={max} onChangeText={setMax}/>
            </View>

            <View className="gap-1">
                <Text className="text-base font-poppins">Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" editable={false} value={random}/>
            </View>
        </ScrollView>
    )
}